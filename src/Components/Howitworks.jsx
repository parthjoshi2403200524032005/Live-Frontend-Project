import React from 'react';
import youtube_icon from './youtube_icon.png';
import appointment from './appointment.png';
import treatment from './treatment.png';

export default function Howitworks() {
  return (
    <>
      <style>
        {`
          .container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 22vh;
            border-radius: 12px;
            border: 1px solid #f1f1f1;
            width: 25vw;
            height: 50vh;
            box-shadow: rgb(214, 214, 214) 1px 2px 2px 0px;
          }

          .textt{
              font-weight: 600;
              letter-spacing: 1.2px;
              margin: 20px 0px;
              color:#262626
          }
          .card img {
            margin-bottom: 0.8rem;
          }
          .card h2 {
            font-size: 1.4rem;
          }
          .card .para {
            color: #262626;
            font-size: 20px;
            // max-width: 20vw;
            padding : 21px;
            max-height: 25vh;
            text-align: center;
          }
          @media (max-width: 1200px) {
            .card {
              width: 30vw;
            }
          }
          @media (max-width: 992px) {
            .card {
              width: 40vw;
            }
          }
          @media (max-width: 768px) {
            .card {
              width: 60vw;
              margin-bottom:60px
            }
          }
          @media (max-width: 576px) {
            .card {
              width: 80vw;
            }
          }
        `}
      </style>
      <div className="col-12 text-center my-10">
        <h1 className="fw-bold" style={{ marginBottom: '56px', marginTop: '10vh' }}>How It Works</h1>
      </div>

      <div className="container">
        <div className="card">
          <img src={youtube_icon} style={{ width: '79px', height: '59px' }} alt="" />
          <h2 className="textt">Watch Expert Videos</h2>
          <div className="para">
            <p>Find valuable health advice from our trusted doctors.</p>
          </div>
        </div>
        <div className="card">
          <img src={appointment} style={{ width: '71px', height: '55px'}} alt="" />
          <h2 className="textt">Book an Appointment</h2>
          <div className="para">
            <p>Schedule a consultation with the doctor of your choice.</p>
          </div>
        </div>
        <div className="card">
          <img src={treatment} style={{width: '71px', height: '55px'}} alt="" />
          <h2 className="textt">Get Treatment</h2>
          <div className="para">
            <p>Receive personalized care and treatment.</p>
          </div>
        </div>
      </div>
    </>
  );
}
