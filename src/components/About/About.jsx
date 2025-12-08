import Masculino from "../../../src/assets/img/fotoPerfil.jpeg";
export default function About() {
  return (
    <div className="flex justify-around items-center gap-8 p-6">
      <div>
        <img
          className="w-[200px] rounded-lg shadow-xl border-4 border-black object-cover transition-transform duration-300 hover:scale-105"
          src={Masculino}
          alt="Foto de Gustavo"
        />
      </div>
      <div className="max-w-md">
        <p className="text-center text-gray-600 leading-relaxed font-medium">
          Ingeniero en Sistemas Computacionales, apasionado por el desarrollo
          web. Me caracterizo por ser proactivo y trabajar con precisión,
          creando soluciones modernas y eficientes que combinan tecnología y
          diseño para ofrecer experiencias digitales de calidad.
        </p>
      </div>
    </div>
  );
}
