import logo from "../assets/LOGO-Azul1.png";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="w-full h-28 bg-black text-celeste flex flex-row justify-around fixed items-center z-50">
      <a href="/">
        <img src={logo} alt="logo" className="h-20" />
      </a>
      <div className="flex flex-row xl:w-2/12 justify-between gap-4">
        <a href="https://www.instagram.com/palodeaguamusica/">
          <BsInstagram size={30} />
        </a>
        <a href="https://www.youtube.com/@palodeaguamusica">
          <BsYoutube size={30} />
        </a>
        <a href="https://www.facebook.com/PaloDeAguaMusica">
          <BsFacebook size={30} />
        </a>
        <a href="mailto:axel.gottschalk@gmail.com"
        className="lg:text-2xl font-bold	">Contacto</a>
      </div>
    </div>
  );
};

export default Navbar;
