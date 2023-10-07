import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav,NavDropdown, Row, Col} from 'react-bootstrap';
import {a,b} from './data.js';
import { useState } from 'react';
import Item from './item';
import data from './data';
import Detail from './routes/Detail'
import About from './routes/About'
import {Routes, Route, Link ,Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';



function App() {
  
  let [shoe, setShoe ] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Nav className = "me-auto">
            <Nav.Link onClick={()=>{ navigate(-1) }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about')}}></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
     

      <Routes>
        <Route path="/" element = {
          <>
            <div className='main-bg'></div>

            <div className="container">
              <div className="row">
                {
                  shoe.map((itm, idx)=>{
                    return( 
                      <Item idx={idx+1} name={itm.title} info={itm.content}>gd</Item>
                    )
                  })
                }
              </div>
            </div>
          </>
        }></Route>
        <Route path="/detail" element={ 
          <Detail></Detail>
        } />
        <Route path="/about" element={<About></About>} >
          <Route path="member" element={<div>멤버들</div>}></Route>
          <Route path="location" element={<div>위치</div>}></Route>
        </Route>
        <Route path='*' element={<div> 아무것도 없음</div>}></Route>
      </Routes>


      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2" className="d-grid gap-2">
            <Button variant='primary' size='lg' onClick={()=>{
              navigate('/')
            }}>홈</Button>
          </Col>
          <Col xs lg="2" className="d-grid gap-2">
            <Button variant='primary' size='lg' onClick={()=>{
              navigate('/about')
            }}>어바웃</Button>
          </Col>
          <Col xs lg="2" className="d-grid gap-2">
            <Button variant='primary' size='lg' onClick={()=>{
              navigate('/detail')
            }}>상세페이지</Button>
          </Col>
        </Row>
      </Container>

    </div>
  );
}





export default App;
