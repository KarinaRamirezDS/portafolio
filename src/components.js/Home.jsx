import React from 'react';
import Foto from '../assets/karina.png';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-black 
    via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col
       items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-7xl font-bold 
          text-white "
          >
            Acerca de mi
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            Hola mi nombre es Karina Ramírez, soy una persona muy alegre
            interesada en el desarrollo Web actualmente he egresado de Academlo,
            me agrada más el área de Front-End. Mis pasatiempos favoritos es ver
            series, y salir a pasear con mis mascotas por cierto me encantan los
            animales también me gusta mucho la naturaleza.
            <br></br>
            Espero te guste mi portafolio, gracias por consultarlo.
          </p>

          <div>
            <Link
              to="proyectos"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500
            to-blue-800 cursor-pointer"
            >
              Proyectos
              <span className=" m-1 group-hover:rotate-90 duration-300">
                <BsArrowRightCircle size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={Foto} alt="persona" />
        </div>
      </div>
    </div>
  );
};

export default Home;
