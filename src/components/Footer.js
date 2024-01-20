import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 &nbsp;
        <a className='text-reset fw-bold' href='https://savankoradia.com'>
          Savan Koradia
        </a>
      </div>
    </MDBFooter>
  );
}