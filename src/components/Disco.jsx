import { FaBandcamp } from "react-icons/fa";
const Disco = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="py-10 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-center">
          Si aún no lo has comprado pero quieres apoyar nuestro proyecto <br />{" "}
          puedes comprar el álbum aquí
        </h2>
        <p className="font-bold text-sm">{`If you haven't bought it yet, but you want to
        support our project you can buy the album here`}</p>
        <div className="py-5">
          <a href="https://palodeagua.bandcamp.com/" className="text-celeste">
            <FaBandcamp size={40}/>
          </a>
        </div>
      </div>
      <div className="text-sm text-center font-semibold -mt-10">
        Axel Gottschalk: 7 cuerdas, Guitarra eléctrica, Ronrroco, Bajo, Flauta,
        Voz. <br />
        Manu Cid: Flauta, Saxo Soprano, Voz. <br />
        Simón Mostafá/Juan Espinosa: Percusiones. <br />
        Matías Beltrán: Cuerda de tambores. <br />
        Perla Villalba: Bajo. <br />
        Guicho: Mandolina <br />
        Marti Etcheverrito: Saxo Alto y voz. <br />
        Fede Rodriguez: Voz <br />
        Pablo Scafati: Acordeón <br />
        Ben Harris: Trompeta <br />
        Composiciones de Axel Gottschalk excepto: Un Pueblo que canta y Retirada
        del Palo de Agua (Simòn Mostafá/Axel Gottschalk) En la Orilla (Tema
        original de Hugo Fumero) <br />© Grabado en Estudios Cuxtitali. 2020 -
        2022 en San Cristóbal de las Casas, Chiapas, México. <br />
        Fotografías por: Emuná producciones / Mezclado y Masterizado por: Juan
        Espinosa.
      </div>
    </div>
  );
};

export default Disco;
