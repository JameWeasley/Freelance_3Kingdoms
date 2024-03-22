import React from 'react'

export default function weapon() {

  const showWeapon = () => {
    const wpn = document.getElementById('show')
    wpn.style.display = 'block'
  }

  const close = () => {
    const cl = document.querySelector('.weapon-detail')
    cl.style.display = "none"

  }

  let currentIndex = 0; // เริ่มต้นที่ index 0 (menu-list-info)

  const changeList = () => {
    const components = document.querySelectorAll('.menu-list-info, .menu-list-monster, .menu-list-store');
    components[currentIndex].style.display = 'none'; // ซ่อน element ปัจจุบัน

    currentIndex++; // เพิ่ม index ให้ไปยังตัวถัดไป
    if (currentIndex >= components.length) { // ถ้าเกินจำนวน elements ทั้งหมดให้กลับไปที่ index 0
      currentIndex = 0;
    }

    components[currentIndex].style.display = 'flex'; // แสดง element ใหม่
  }

  return (
    <>

      <div className="container">
        <div className="menu-list" style={{ display: 'flex', justifyContent: 'center', margin: '5rem 0' }}>
          <div className="menu-list-detail">
            <div className="menu-select" style={{ textAlign: 'center' }}>
              <select onChange={changeList} style={{ textAlign: 'center', width: '100%', border: 'none', outline: 'none', borderRadius: '5px', padding: '5px' }} >
                <option value="ไอเทม">ไอเทม</option>
                <option value="มอนส์เตอร์">มอนส์เตอร์</option>
                <option value="ร้านค้า">ร้านค้า</option>
              </select>
            </div>

            <div className="menu-search" style={{ marginTop: '1rem' }}>
              <input type="search" placeholder='ค้นหา' style={{ height: '50px', border: 'none', outline: 'none', borderRadius: '5px', padding: '0 10px' }} />
            </div>

            <div className="menu-list-info" style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', }}>
              <h3>หมวดหมู่</h3>
              <span>ทั้งหมด</span>
              <span>อาวุธ</span>
              <span>ทั้งหมด</span>
              <span>ทั้งหมด</span>
              <span>ทั้งหมด</span>
              <span>ทั้งหมด</span>
              <span>ทั้งหมด</span>
              <span>ทั้งหมด อุปกรณ์เสริม</span>
              <span>ทั้งหมด</span>
              <span>ทั้งหมด</span>
              <span>ทั้งหมด</span>
              <span>ทั้งหมด</span>
              <span>ทั้งหมด</span>
              <span>ทั้งหมด</span>
            </div>

            <div className="menu-list-monster" style={{ display: 'none', flexDirection: 'column', marginTop: '1rem', }}>
              <span>ระดับ 1 - 50</span>
              <span>ระดับ 51 - 100</span>
              <span>ระดับ 101 - 150</span>
              <span>ระดับ 151 - 200</span>
              <span>ระดับ 201 - 250</span>
              <span>ระดับ 251 - 300</span>
            </div>

            <div className="menu-list-store" style={{ display: 'none' }}>
              <input type="search" />
            </div>
          </div>



          <div className="item-list" style={{ marginLeft: '5rem', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridGap: '20px' }}>
            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button className='btn btn-dark' onClick={showWeapon}>รายละเอียด</button>


            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>

            <div className="item-blog">
              <div className="img-blog">
                <img src="i1.bmp" alt="" />
              </div>
              <p>กระบี่ตรง</p>
              <button>รายละเอียด</button>
            </div>
          </div>
        </div>

        <div className="weapon-detail" id='show' style={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}>
          <div className="wep-head">
            <h3>รายละเอียด</h3>
            <h5>กระบี่</h5>



          </div>
          <button className='btn btn-dark' onClick={close}>ปิด</button>
        </div>

      </div>

    </>
  )
}
