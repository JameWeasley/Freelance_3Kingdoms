import React from 'react'

export default function nav() {
  return (
    <>
        <nav>
            <div className="container">
                <div className="nav-con">
                    <div className="logo">
                        <img src="/public/logo.png" width="250" alt="" />
                    </div>

                    <ul className="menu" style={{whiteSpace: 'nowrap'}}>
                        <li><a href="/">หน้าแรก</a></li>
                        <li><a href="/item">ข้อมูล</a></li>
                        <li><a href="/register">เข้าสู่ระบบ</a></li>
                        <li><a href="/payment">เติมเงิน</a></li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    </>
  )
}
