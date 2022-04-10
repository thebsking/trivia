import { Button, Container } from '@mui/material';
import React from 'react';

function TopBar() {
  return(
    <div className='content'>
      <div>
        <h1>Alan's Trivia Database</h1>
      </div>
      <Container id="menu-buttons">
        <Button variant='contained'>Search Database</Button>
        <Button variant='contained'>Add Question to DB</Button>
        <Button variant='contained' disabled>Generate Game</Button>
      </Container>
    </div>

  )
}

export default TopBar;