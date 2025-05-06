"use server";

import prisma from "@/lib/prisma";
//import { randomBytes } from "crypto";

export async function checkAndAddUser(email: string, name: string) {
    if (!email) return;
    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (!existingUser && name) {
            await prisma.user.create({
                data: {
                    email,
                    name,
                },
            });
            console.error("Erreur lors de la vérification de l'utilisateur : ");
        } else {
            console.error("Utilisateur déja présent dans la base de données");
        }
    } catch (error) {
        console.error(
            "Erreur lors de la vérification de l'utilisateur : ",
            error
        );
    }
}