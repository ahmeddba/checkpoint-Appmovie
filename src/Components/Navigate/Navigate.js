import React , {useState} from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Navigate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddForm from '../Movies/AddForm'

const Navigate = ({setInputSearch , setRateSearch, moviesList , setMoviesList , add}) => {

const [showw, setShoww] = useState(false);

const handleClose = () => setShoww(false);
const handleShow = () => setShoww(true);

const reset = () => {
setInputSearch('');
  document.getElementById('s').value = '';
  setRateSearch(0);
}

 return (
<div  className='navi'>

<Navbar className='nav' data-bs-theme="dark">
        <Container className='cont'>
            <div>
          <Navbar.Brand className='h' href="#home">Movies App</Navbar.Brand>
          </div>
          <div>

            <Nav className="me-auto">

            <input className='search' id='s' type="text" placeholder="Search.." name="search" onChange={(e) => setInputSearch(e.target.value)}/>
            <button style={{backgroundColor: 'transparent' , border: 'none' , marginRight:"8px"}}><FontAwesomeIcon icon="fa-solid fa-xmark" style={{color: "white"}} /></button>
            </Nav>
            </div>
            <div>
          <Nav className="me-auto">
            <Nav.Link type='button' onClick={reset} href="#home">Show All</Nav.Link>
            <Nav.Link href="#features" onClick={handleShow}>Add new film</Nav.Link>
<AddForm add={add} showw={showw} handleShow={handleShow} handleClose={handleClose} movieList={moviesList} setMoviesList={setMoviesList} />
          </Nav>
          </div>
        </Container>
      </Navbar>


</div>
    )
}

export default Navigate
