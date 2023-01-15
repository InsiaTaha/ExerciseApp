import "./Navbar.css";
import UserData from "./UserData";
import { BrowserRouter , Route, Routes,Link, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../Images/profile.png'



export default function Header() {
    return (
        <BrowserRouter>
         <div className="Nav">
            
         <div className="navbar">
            <div className="HeaderTitle">
         <h2> Exercise Tracker</h2>
         </div>
              <ul className="nav-links">
             
              <li>
                  <Link to="/">Tracker</Link>
                </li>
                   <li>
                   <Link to="/UserData">User </Link>
                 </li>
            
              </ul>
        </div>

            <Routes>
            <Route index element={<TrackerCardComp/>} />
            <Route path="/UserData" element={<UserData/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    )}


const TrackerCardComp=()=>{
    return (
        <div className="ContainerHead">
        <Container className="container">
          <Row md={4}>
            <CardLayout/>
          </Row>
        </Container>
        </div>
      );
  
}


const CardLayout=()=>{
    return(
      
    <>
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant) => (
     
        <Col className="col">
<Card>
<Card.Img variant="top" src={profile}/>
<Card.Body>
  <Card.Title>{variant} Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
<Card.Body>
  <Card.Link href="#">Card Link</Card.Link>
  <Card.Link href="#">Another Link</Card.Link>
</Card.Body>
</Card> </Col>

      ))}
    </>
   
    )

}