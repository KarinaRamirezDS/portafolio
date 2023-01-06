import React from 'react';
import torresDeHanoi from '../assets/portfolio/TorresDeHanoi.png';
import romanos from '../assets/portfolio/romanos.png';
import usersCrud from '../assets/portfolio/weather.png';
import pokemon from '../assets/portfolio/Pokemon.png';
import ricky from '../assets/portfolio/rickyandmorty.png';
import memorama from '../assets/portfolio/memoramas.PNG'
const Proyectos = () => {
  const portfolios = [
    {
      id: 1,
      src: torresDeHanoi,
      demo: 'https://boisterous-seahorse-74fc04.netlify.app/',
      codigo: 'https://github.com/KarinaRamirezDS/TorresDeHanoi'
    },
    {
      id: 2,
      src: romanos,
      demo: 'https://roman-numeralsxx.netlify.app/',
      codigo: 'https://github.com/KarinaRamirezDS/numerosromanos'
    },
    {
      id: 3,
      src: memorama,
      demo: 'https://portafoliokarinars.netlify.app/',
      codigo: 'https://github.com/KarinaRamirezDS/Memorama'
    },
    {
      id: 4,
      src: pokemon,
      demo: 'https://keen-jepsen-42556f.netlify.app/',
      codigo: 'https://github.com/KarinaRamirezDS/Pokemon-pokedex'
    },
    {
      id: 5,
      src: usersCrud,
      demo: 'https://peaceful-northcutt-71933f.netlify.app/',
      codigo: 'https://github.com/KarinaRamirezDS/api-clima'
    },
    {
      id: 6,
      src: ricky,
      demo: 'https://optimistic-benz-cc5ed6.netlify.app/',
      codigo: 'https://github.com/KarinaRamirezDS/Api-Rycky-Morty'
    }
  ];

  return (
    <div
      name="proyectos"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Proyectos
          </p>
          <p className="py-6">Estos son algunos proyectos que he realizado.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, codigo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>Website</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={codigo}>Código</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
