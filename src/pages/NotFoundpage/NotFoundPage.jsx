import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFoundPage.style.css';

const NotFoundPage = () => {
  return (
    <div>
      <Container>
        <div class='not-found-page'>
          <div className='error-code'>404</div>
          <div className='error-message'>Page Not Found</div>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
