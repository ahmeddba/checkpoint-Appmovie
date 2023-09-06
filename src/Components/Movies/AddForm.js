import React , {useState} from 'react'
import { Modal, Button , Form} from 'react-bootstrap'
import Reactstars from 'react-stars'

const AddForm = ({showw , handleShow , handleClose , add}) => {

    const [title , setTitle] = useState('');
    const [description , setDesc] = useState('');
  //const [trailer , setTrailer] = useState('');
    const [posterUrl , setPoster] = useState('');
    const [rate , setRate] = useState(0);
  //const [id , setId] = useState(0);


const handleTitle = (e) => {
    setTitle(e.target.value);
}
const handleDesc = (e) => {
    setDesc(e.target.value);
    console.log(description)
}
const handlePoster = (e) => {
    setPoster(e.target.value);
}
const handleRate = (e) => {
    setRate(e);
}

const handleSubmit = () => {
    add({title , description , posterUrl
       , rate});
    handleClose();
    setRate(0);
}

  return (

    <div>
<Modal show={showw} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add film</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
      <Form.Group className="mb-3"  controlId="formBasicEmail">
        <Form.Label>film Title</Form.Label>
        <Form.Control onChange={(e) => handleTitle(e)} type="text" id='title' placeholder="film Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>film Description</Form.Label>
        <Form.Control onChange={(e) => handleDesc(e)} type="text" id='desc' placeholder="film Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>poster Link</Form.Label>
        <Form.Control onChange={(e) => handlePoster(e)} type="text" id='poster' placeholder="Trailer Link" />
      </Form.Group>

      <div style={{display : 'flex' , justifyContent : 'center'}}>

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Select Rate</Form.Label>
        <Reactstars count={5} onChange={(e) => handleRate(e)}  value={rate} size={35} half={false}/>
        {/* <Form.Control type="file" id='poster' multiple /> */}
      </Form.Group>


      </div>

      <Button variant="primary" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {
                handleClose();
                setRate(0);
            }}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>

    </div>
  )
}

export default AddForm
