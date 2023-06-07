import Description from "./Description";
import img1 from "../assets/WEB1.jpg";
import img2 from "../assets/WEB2.jpg";
import img3 from "../assets/WEB3.jpg";
import img5 from "../assets/WEB5.jpg";
import { useEffect, useState } from "react";
import { BsChatRightText } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaMusic } from "react-icons/fa";
import Disco from "./Disco";
import Home from "./Home";

const Hero = () => {
  const images = [img1, img2, img3, img5];
  const [isActive, setIsActive] = useState("home");
  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setBackgroundImage(images[index]);
    }, 5000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  const handleSetActive = (e, value) => {
    e.preventDefault();
    setIsActive(value);
  };

  return (
    <section
      className="h-screen w-full flex flex-col gap-20 background-image "
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id="background"
    >
      <div className="flex flex-col items-center w-full mt-40">
        <div className="flex flex-row justify-center items-center gap-5 pt-10">
          <div
            className="p-4 rounded-full flex flex-col items-center justify-center"
            style={
              isActive === "home"
                ? {
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                  }
                : {}
            }
          >
            <BiHomeAlt2 size={30} onClick={(e) => handleSetActive(e, "home")} />
          </div>
          <div
            className="p-4 rounded-full flex flex-col items-center justify-center"
            style={
              isActive === "disco"
                ? {
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                  }
                : {}
            }
          >
            <FaMusic size={30} onClick={(e) => handleSetActive(e, "disco")} />
          </div>

          <div
            className="p-4 rounded-full flex flex-col items-center justify-center"
            style={
              isActive === "description"
                ? {
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                  }
                : {}
            }
          >
            <BsChatRightText
              size={30}
              onClick={(e) => handleSetActive(e, "description")}
            />
          </div>
        </div>
        <div
          className="p-10 xl:w-6/12 rounded-lg"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
        >
          {isActive === "home" ? (
            <Home />
          ) : isActive === "disco" ? (
            <Disco />
          ) : (
            <Description />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
