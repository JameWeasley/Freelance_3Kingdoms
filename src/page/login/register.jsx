import React from 'react'
import Navbar from '../shared/nav'

export default function register() {
  return (
    <>

      <Navbar/>
      <div className="container">
        <div className="register-blog" style={{ border: '1px solid transparent', borderRadius: '20px', background: 'rgb(0 0 0 / 34%)', width: '450px', height: 'max-content', position: 'relative', margin: '10% auto', padding: '1rem' }}>
          <div className="img-regis" style={{ textAlign: 'center' }}>
            <img src="logo.png" width="300" alt="" style={{ borderBottom: '2px solid #fffbf5' }} />
          </div>
          <div className="register-head">
            <div className="regis-detail" style={{ marginTop: '2rem' }}>
              <label htmlFor="">ชื่อ</label>
              <input type="text" placeholder='ชื่่อผู้ใช้' />
            </div>

            <div className="regis-detail" style={{ marginTop: '2rem' }}>
              <label htmlFor="">รหัสผ่าน</label>
              <input type="password" placeholder='ขั้นต่ำ 8 ตัวอักษร' />
            </div>

            <div className="regis-detail" style={{ marginTop: '2rem' }}>
              <label htmlFor="">ยืนยันรหัสผ่าน</label>
              <input type="password" placeholder='ยืนยันรหัสผ่าน' />
            </div>

            <div className="regis-btn" style={{alignItems: 'center', textAlign: "center", padding: '1rem 0 0 0'}}>
              <button>สมัครสมาชิก</button>
            </div>

            <div className="login-btn" style={{alignItems: 'center', textAlign: "center", padding: '1rem 0 0 0'}}>
              <button>เข้าสู่ระบบ</button>
            </div>


          </div>
        </div>
      </div>

    </>
  )
}
