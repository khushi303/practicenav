import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [navsec, setnavsec] = useState("");
  return (
    <div>
      <Container className='py-4'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='ff-poppins fs-40 fw-600 text-black'>Page Logo</div>
          <ul className=''>
            <Link className='ff-poppins fs-25 fw-400 me-4 text-black' to='/About'>About</Link>
            <Link className='ff-poppins fs-25 fw-400 me-4 text-black' to='/Contact'>Contact</Link>
            <Link to='/Faq' className='ff-poppins fs-25 fw-400 me-4 text-black'>Faq</Link>
            <Link to='/Help' className='ff-poppins fs-25 fw-400 text-black'>Help</Link>
          </ul>
          <button onClick={() => setnavsec(!navsec)}>click</button>
        </div>
      </Container>
    </div>
  )
}

export default Header