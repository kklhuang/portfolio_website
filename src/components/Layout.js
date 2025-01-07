import Home from './Home';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import Hobbies from './Hobbies';

function Layout() {

  return (
    <div className="layout">
      <Home showCarat={true} />
      <Experiences />
      <Projects />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default Layout;
