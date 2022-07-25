import Contact from './components.js/Contact';
import Cover from './components.js/Cover';
import Experience from './components.js/Experience';

import Home from './components.js/Home';
import NavBar from './components.js/NavBar';
import Proyectos from './components.js/Proyectos';
import SocialLinks from './components.js/SocialLinks';

function App() {
  return (
    <div>
      <Cover />
      <NavBar />
      <Home />
      <SocialLinks />
      <Proyectos />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
