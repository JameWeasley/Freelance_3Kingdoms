import React, { useState } from 'react'

export default function bodyDetail() {

  const activeImage = (e) => {
    document.querySelectorAll('.hover-pl li').forEach((element) => {
      if (element.classList.contains('active')) {
        element.classList.remove('active')
      }
    })
    e.currentTarget.classList.add('active')
  }


  return (
    <>

      <div className="container">
        <div className="img-head" style={{ margin: '4rem 0 4rem 0', display: 'flex', justifyContent: 'center', }}>
          <img src="camp_cha_01_01.png" width="800px" alt="" style={{ objectFit: 'contain' }} />

          <div className="img-body" style={{ marginTop: '200px', position: 'relative' }}>
            <img src="camp_paper.png" width="450" alt="" />
            <div className="text-update" style={{ position: 'absolute' }}>
              <p type="text" style={{width: '70%', height: '50px', padding: '1rem', fontSize: '20px', border: 'none', background: 'transparent', outline: '' }}>อัพเดท ข้อมูลข่าวสารเกม 2021</p>
              <p type="text" style={{width: '70%', height: '50px', padding: '1rem', fontSize: '20px', border: 'none', background: 'transparent', outline: '' }}>อัพเดท ข้อมูลข่าวสารเกม 2022</p>
              <p type="text" style={{width: '70%', height: '50px', padding: '1rem', fontSize: '20px', border: 'none', background: 'transparent', outline: '' }}>อัพเดท ข้อมูลข่าวสารเกม 2023</p>
              <p type="text" style={{width: '70%', height: '50px', padding: '1rem', fontSize: '20px', border: 'none', background: 'transparent', outline: '' }}>อัพเดท ข้อมูลข่าวสารเกม 2024</p>
              <p type="text" style={{width: '70%', height: '50px', padding: '1rem', fontSize: '20px', border: 'none', background: 'transparent', outline: '', whiteSpace: 'nowrap' }}>อัพเดท ข้อมูลข่าวสารเกม !!! ล่าสุด</p>
            </div>
          </div>
        </div>

        <div className="player" style={{ width: '80%', margin: '0 auto' }}>
          <ul className="play-info" style={{ display: 'flex', listStyle: 'none', justifyContent: 'center' }}>
            <div className="hover-pl">
              <li onClick={activeImage}><img src="play.png" alt="" /></li>
            </div>

            <div className="hover-pl">
              <li onClick={activeImage}><img src="play.png" alt="" /></li>
            </div>

            <div className="hover-pl">
              <li onClick={activeImage}><img src="play.png" alt="" /></li>
            </div>

            <div className="hover-pl">
              <li onClick={activeImage}><img src="play.png" alt="" /></li>
            </div>

            <div className="hover-pl">
              <li onClick={activeImage}><img src="play.png" alt="" /></li>
            </div>

            <div className="hover-pl">
              <li onClick={activeImage}><img src="play.png" alt="" /></li>
            </div>

          </ul>
        </div>
      </div>











      <div className="container">
        <div className="body-detail">
          <div className="img-gif">
            <img src="../public/banner_1705566459.jpg" width="100%" height="100%" alt="" />
          </div>

          <div className="text-detail">
            <div className="header-text">
              <h2>หัวข้อ</h2>
              <h2>รายการ</h2>
              <h2>ข้อมูล</h2>
              <h2 style={{ border: 'none' }}>อัพเดท</h2>
            </div>

            <div className="text-info">
              <p>รายละเอียด การอัพเดทการเพิ่มข้อมูลให้ผู้เล่นสนุกยิ่งขึ้น 2024/03/18</p>
              <p>รายละเอียด การอัพเดทการเพิ่มข้อมูลให้ผู้เล่นสนุกยิ่งขึ้น 2024/03/18</p>
              <p>รายละเอียด การอัพเดทการเพิ่มข้อมูลให้ผู้เล่นสนุกยิ่งขึ้น 2024/03/18</p>
              <p>รายละเอียด การอัพเดทการเพิ่มข้อมูลให้ผู้เล่นสนุกยิ่งขึ้น 2024/03/18</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
