import './App.css';

import Navigation from './Components/NavBar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Components/Skills/Skills';
import Main from './Components/Banner/Banner';
import Projects from './Components/Projects/Projects';
function App() {
  

  return (
    <>
      <Navigation/>
      <Main/>
      <Skills/>
      <Projects/>
    </>
  )
}

export default App
