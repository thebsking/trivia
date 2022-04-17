import { Button, Container } from '@mui/material';
import React from 'react';

function TopBar() {
  return(
    <div className='content'>
      <div>
        <h1>Alan's Trivia Database</h1>
      </div>
      <Container id="menu-buttons">
        <Button href='/search' variant='contained' className='nav-btn'>Search Database</Button>
        <Button href='/add' variant='contained' className='nav-btn'>Add Question to DB</Button>
        <Button href='generate' variant='contained' disabled className='nav-btn'>Generate Game</Button>
      </Container>
      <hr />
    </div>

  )
}

export default TopBar;