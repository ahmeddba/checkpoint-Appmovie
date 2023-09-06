import React, { useEffect , useState } from 'react'
import {  Card , Button} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const MovieDescription = ({movies}) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [chosenMovie , setChosenMovie] = useState({});


useEffect(() => {
  const movie = movies.find((movie) => movie.id === Number(id));
setChosenMovie(movie);
}, [movies , id]
);

  return (
    <>
    <h1 style={{color : 'white' , marginBottom : '20px'}}>Movies Description</h1>
<div style={{display : 'flex' , flexDirection: 'row' , alignItems : 'center' , justifyContent : 'space-around'}}>


    <Card style={{ width: '18rem'  }}>
      <Card.Body>
        <Card.Title>{chosenMovie.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
        <Card.Text>
         {chosenMovie.description}
        </Card.Text>
        <Button type='button' onClick={() => navigate(-1)} >Back to list</Button>

      </Card.Body>
    </Card>
    <iframe src={chosenMovie.trailer}
            height="400"
            width="600">

    </iframe>

</div>
</>
  )
}

export default MovieDescription
