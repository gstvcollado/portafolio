import LinkedinIcon from "../icon/Linkedin";
import GitHubIcon from "../icon/GitHub";
import PhoneIcon from "../icon/Phone";
import EmailIcon from "../icon/Email";
export default function Contact({ id }) {
  return (
    <div
      id={id}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-4 text-center"
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Contacto</h2>

      {/* Nombre */}
      <p className="text-gray-700 font-medium text-lg mb-2">
        Gustavo Collado Peralta
      </p>

      {/* Correo */}
      <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
        <EmailIcon className="text-blue-500" />
        <a href="mailto:gstvcollado@gmail.com" className="hover:text-blue-600">
          gstvcollado@gmail.com
        </a>
      </div>

      {/* Teléfono */}
      <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
        <PhoneIcon className="text-green-500" />
        <span>914-138-6931</span>
      </div>

      {/* Redes */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://www.linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 text-2xl"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black text-2xl"
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}
