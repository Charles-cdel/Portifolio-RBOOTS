import { useState,useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../../assets/img/header-img.svg'

function Main (){
    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text , setText] = useState('');
    const [delta, setDelta] = useState (300 - Math.random() * 100);
    const period = 2000;

    useEffect (()=> {
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () => {clearInterval (ticker)}
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length -1)
         : fullText.substring(0, text.length +1);

        setText (updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);

        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portifolio
                        </span>
                        <h1>{`Hi I'm webdecoded `}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, possimus, eum sint temporibus dignissimos debitis voluptatem ipsa error ipsum harum quia cum aut, itaque distinctio vitae similique soluta reprehenderit? In.</p>
                        <button onClick={()=> console.log("connect")}>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Main