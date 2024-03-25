import React from 'react'

export default function nav() {

    const hamMenu = () => {
        const menu = document.getElementById('hamburger-menu');
        const computedStyle = window.getComputedStyle(menu);
    
        if (computedStyle.display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    }

  return (
    <>
        <nav>
            <div className="container">
                <div className="nav-con">
                    <div className="logo">
                        <img src="/public/logo.png" width="250" alt="" />
                    </div>

                    <ul className="menu" style={{whiteSpace: 'nowrap', paddingLeft: '0'}}>
                        <li><a href="/">หน้าแรก</a></li>
                        <li><a href="/item">ข้อมูล</a></li>
                        <li><a href="/register">เข้าสู่ระบบ</a></li>
                        <li><a href="/payment">เติมเงิน</a></li>
                        <li><a href="/admin">แอดมิน</a></li>
                    </ul>
                    
                </div>

                <button className="ham-menu hide-pc" onClick={hamMenu}>
                    <div className="border-ham-1"></div>
                    <div className="border-ham-2"></div>
                    <div className="border-ham-3"></div>
                </button>

                <ul className="menu-burger" id="hamburger-menu" style={{whiteSpace: 'nowrap', paddingLeft: '0', textAlign: 'center', background: '#333', height: '30vh', padding: '2rem'}}>
                        <li><a href="/">หน้าแรก</a></li>
                        <li><a href="/item">ข้อมูล</a></li>
                        <li><a href="/register">เข้าสู่ระบบ</a></li>
                        <li><a href="/payment">เติมเงิน</a></li>
                        <li><a href="/admin">แอดมิน</a></li>
                    </ul>

            </div>
        </nav>
    </>
  )
}
