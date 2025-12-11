import Masculino from "../../../src/assets/img/fotoPerfil.jpeg";
import CvCollado from "../../../public/pdf/CV_GustavoCollado.pdf";
export default function Hero({ id }) {
  return (
    <main
      id={id}
      className="bg-gradient-to-r from-[#0a1a2f] to-[#1e3a8a] flex justify-around items-center p-6"
    >
      <div className="max-w-md">
        <h1 className="font-bold text-white text-3xl mb-2">
          Hola, soy Gustavo Collado Peralta
        </h1>
        <h2 className="text-gray-600 mb-2">
          Desarrollador web jr - Ing. en Sistemas Computacionales
        </h2>
        <p className="text-gray-500 mb-4">
          Construyo interfaces modernas y sistemas web usando React y Laravel
        </p>
        <div className="flex gap-4">
          {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Ver proyectos
          </button> */}

          <a
            href={CvCollado}
            download
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Descargar CV
          </a>
        </div>
      </div>
      <div>
        <img
          src={Masculino}
          alt="Foto profesional de Gustavo Collado"
          className="w-48 h-48 rounded-full shadow-xl border-4 border-white object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </main>
  );
}
