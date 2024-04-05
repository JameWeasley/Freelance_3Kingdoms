import React from 'react'
import Navbar from '../shared/nav'
import Footer from '../shared/footer'

export default function payment() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="pay-head">
          <div className="img-paylogo" s>
            <img src="logo.png" width="500px" alt="" />
          </div>
        </div>

        <div className="pay-body" style={{ width: '100%', margin: '0 auto', border: 'none', borderRadius: '10px', padding: '10px', background: 'linear-gradient(rgb(0 0 0 / 36%), rgba(237, 237, 237, 0.51))' }}>
          <h3 style={{ borderBottom: '1px solid #fff' }}>เติมเงิน</h3>
          <h3 style={{ textAlign: 'center', padding: '1rem' }} >1 บามมีค่า 100 point</h3>

          <div className="img-payment" style={{ textAlign: 'center' }} >
            <img src="qr.jpg" width="450px" alt="" />
          </div>

          <div className="pay-bottom mt-4 text-center">
            <input type="file" name="" id="" />
          </div>


          <div className="btn-confirm mt-4 text-center pb-3">
            <button className='btn btn-success' style={{ width: '300px' }}>ยืนยันการเติมเงิน</button>
          </div>

        </div>

        <div className="social-fixed">
        <ul className="menu-social">
          <li>
            <a href="#"><img src="kingdom-1.jpg" alt="" width="100" /></a>
          </li>
          <li>
            <a href="#"><img src="kingdom-1.jpg" alt="" width="100" /></a>
          </li>
          <li>
            <a href="#"><img src="kingdom-1.jpg" alt="" width="100" /></a>
          </li>
          <li>
            <div className="back-totop text-center" style={{border: '1px solid #333', background: '#333'}}>
              <a href="#">
                <h5>TOP</h5>
              </a>
            </div>
          </li>
        </ul>
      </div>


      </div>
      <Footer />
    </>
  )
}
