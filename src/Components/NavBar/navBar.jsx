import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import Logo from '../../assets/img/logo.svg';

function Navigation() {
    const [activeLink, setactiveLink] = useState('home');//atualição do valor link
    const [scrolled ,seScrolled] = useState(false);//mudança do estado false

    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);//Limpeza do evento

    },[])/* verifica se a posição do scroll vertical da página (window.scrollY) 
    é maior que 50. Se for, a função atualiza o estado scrolled para true, 
    indicando que o usuário rolou a página. Caso contrário, o estado é definido como false.*/

    const onUpdateActiveLink = (value)=>{
        setactiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src = {''} alt ="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" 
            className={activeLink ==='home'? 'active navbar-link' : 'navbar-link'} 
            onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" 
            className={activeLink ==='skills'? 'active navbar-link' : 'navbar-link'} 
            onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" 
            className={activeLink ==='projects'? 'active navbar-link' : 'navbar-link'} 
            onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
         </Nav>
         <span className='navbar-text'>
            <div className='social-icons'>
                <a href="#"> <img src={''} alt=''/> </a>
                <a href="#"> <img src={''} alt=''/> </a>
                <a href="#"> <img src={''} alt=''/> </a>

            </div>
            <button className='ccd'onClick={()=>console.log('connect')}>
                <span>Let´s Connetc</span>
            </button>
         </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;