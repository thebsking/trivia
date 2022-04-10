import { Button, Container } from '@mui/material';
import React from 'react';

function Home() {
  return(
    <div className='content'>
      <div>
        <h1>Alan's Trivia Database</h1>
      </div>
      <Container >
        <Button variant='contained'>Search Database</Button>
        <Button variant='contained'>Add Question to DB</Button>
        <Button variant='contained' disabled>Generate Game</Button>
      </Container>
    </div>

  )
}

export default Home;