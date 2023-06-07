const Home = () => {
  return (
    <div className="flex flex-col justify-center items-end">
      <h1 className="font-bold text-5xl pb-10">Palo de Agua</h1>
      <div className="flex flex-col justify-center items-end text-end w-10/12">
        <h2 className="text-xl font-medium pt-5 pb-1">
          Si aún no lo has comprado pero quieres apoyar nuestro proyecto puedes
          comprar el álbum aquí
        </h2>
        <p className="font-semibold text-sm">{`If you haven't bought it yet, but you want to
        support our project you can buy the album here`}</p>
      </div>
      <div className="flex flex-row my-5 gap-5">
        <a
          className="bg-sky-700 hover:bg-sky-500 text-white font-bold px-4 py-2 rounded-xl"
          href="https://palodeagua.bandcamp.com/"
        >
          Descargar
        </a>
        <a
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold px-4 py-2 rounded-xl"
          href="https://palodeagua.bandcamp.com/"
        >
          Comprar
        </a>
      </div>
    </div>
  );
};

export default Home;

//Si compraste nuestro album aquí puedes descargarlo
//If you bought our album download it
