import React from 'react'
import { FaFacebook, FaYoutube } from "react-icons/fa";

export default function footer() {
  return (
    <>
      <footer style={{ padding: '2rem', marginTop: '5rem' }}>
        <div className="container">
          <div className="top-detail" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <img src="logo.png" width="350px" alt="" />

            <div className="body-footer">

              <div className="face-icon" style={{ display: 'flex', fontSize: '24px', alignItems: 'center' }}>
                <FaFacebook />
                <p>ช่องทางการติดต่อ</p>
              </div>

              <div className="youtube-icon" style={{ display: 'flex', fontSize: '24px', alignItems: 'center' }}>
                <FaYoutube />
                <p>ช่องทางการติดตาม</p>
              </div>

            </div>

            <div className="bottom-footer" style={{ fontSize: '24px' }}>
              ขอบคุณลูกค้าทุกท่านที่ใช้บริการ
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
