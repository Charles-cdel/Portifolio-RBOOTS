import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";


function Main (){
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portifolio
                        </span>
                        <h1>{`Hi I'm webdecoded`}<span>web developer</span></h1>
                        <button onClick={()=> console.log("connect")}>Let's connect</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}