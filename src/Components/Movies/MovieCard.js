import React  from 'react'
import './movieCard.css'
import { Card , ListGroup } from 'react-bootstrap'
import ReactStars from 'react-stars'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movie}) => {

  const navigate = useNavigate();



  const textColor ={color : 'white'}




  return (

  <>
<Card onClick={() => navigate(`/description/${movie.id}`)} className='contt' style={{ width: '21rem', margin : '20px'}}>
      <Card.Img variant="top" src={movie.posterUrl} height={450}/>
      <Card.Body>
        <Card.Title style={textColor}>{movie.title}</Card.Title>

      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={textColor}>Rate: {movie.rate}/5 </ListGroup.Item>
        <ListGroup.Item>
          <ReactStars
        count={5}
        edit={false}
        value={movie.rate}
        size={24}
        color2={'#ffd700'} />
   </ListGroup.Item>
      </ListGroup>

    </Card>


  </>

)
}

export default MovieCard
