import { CalendarCheck } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <section 
        className="w-full"
        style={{
          backgroundColor: "#ffff",
          backgroundImage: `
         url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23377cfb' fill-opacity='0.27' fill-rule='evenodd'/%3E%3C/svg%3E")
        `
        }}
        >
        <div className="relative hero-content text-center mx-4 lg:mx-[15%] py-20">
         <div className="max-w-lg">
            <h1 className="text-3xl md:text-7xl flex justify-center items-center">
              <div className="bg-secondary p-1 mr-1 rounded-md text-white">
                <CalendarCheck className="w-8 h-8 md:w-16 md:h-16 mx-auto" />
              </div>
              <span>HAS<span>alle</span></span>
            </h1>
            <h2 className="py-4 md:py-6 text-xl md:text-3xl font-semibold">
              Gérer la reservation  de vos <span className="text-secondary">salles de réunions</span> en toute simplicité
            </h2>
            <ul className="steps steps-vertical lg:steps-horizontal">
              <li className="step step-secondary"><div className="badge">Créez un compte</div></li>
              <li className="step step-secondary"><div className="badge">Réservez votre salle</div></li>
              <li className="step step-secondary"><div className="badge">Gérez votre réservation</div></li>
            </ul>

            <div className="flex md:flex-row justify-center items-center mt-6">
              <button className="btn btn-secondary mt-6">Commencer</button>
              <button className="btn btn-outline btn-secondary mt-6 ml-4">S'inscrire</button>
            </div>
          </div> 
        </div>
      </section>

      <div className="flex justify-center items-center">
        <div className="p-5 md:p-0">
          <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 lg:rounded-2xl lg:p-4 shadow-2xl w-full ms:w-[1200px] md:h-[990px]">
            <Image
              src="/img.png"
              alt="aperçu de l'application"
              width={1600}
              height={500}
              quality={100}
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10 object-cover filter contra saturate-100 w-full h-full"
              /*style={{
                width: "100%",
                height: "auto",
              }}*/
            />
          </div>
      </div>
    </div>

    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <h1 className="text-3xl md:text-7xl flex justify-center items-center">
        <div className="bg-secondary p-1 mr-1 rounded-md text-white">
          <CalendarCheck className="w-8 h-8 md:w-16 md:h-16 mx-auto" />
          </div>
        <span>HAS<span>alle</span></span>
      </h1>
      <div>
        <p>Copyright © 2025 - Tout droit réservés HAS </p>
        <p>Développé par <a href="www.aghilas.fr" className="text-secondary">Aghilas AZZOUG</a></p>
        <p>Réalisé avec 💙</p>
      </div>
      </footer>
    </div>
  );
}
