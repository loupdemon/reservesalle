import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/404"]);

export default clerkMiddleware(async (auth, request) => {
    // Si l'utilisateur n'est pas authentifié et tente d'accéder à une route protégée, on le redirige vers /sign-in
    if (!isPublicRoute(request)) {
        try {
            await auth.protect();
        } catch {
          // Vérifie l'URL actuelle et évite la boucle de redirection
            const requestedPath = request.nextUrl.pathname.toLowerCase();

            // Si l'utilisateur est déjà sur la page de sign-up ou sign-in, pas besoin de rediriger
            if (requestedPath.includes("/sign-up") || requestedPath.includes("/sign-in")) {
                return NextResponse.next(); // Laisse l'utilisateur sur la page actuelle
            }

            // Redirige vers la page d'inscription si l'URL inclut "signup"
            if (requestedPath.includes("/sign-up")) {
                return NextResponse.redirect(new URL("/sign-up", request.url));
            }

            // Sinon redirige vers la page de connexion
            return NextResponse.redirect(new URL("/sign-in", request.url));
        }
    }
    
    // Vérification des routes inexistantes, mais seulement si l'utilisateur est connecté
    const validRoutes = ["/dashboard", "/budgets", "/transactions", "/404","/sign-in(.*)", "/sign-up(.*)", "/manage/.*"];
    if (!validRoutes.some(route => new RegExp(`^${route}$`).test(request.nextUrl.pathname))) {
        return NextResponse.rewrite(new URL("/404", request.url));
    }
    return NextResponse.next();
});

export const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        "/(api|trpc)(.*)",
    ],
};
