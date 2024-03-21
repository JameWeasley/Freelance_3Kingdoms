import React from 'react'

export default function weapon() {

  const showWeapon = () => {
   const wpn =  document.getElementById('show')
    wpn.style.display = 'block'
  }

  return (
    <>

      <div className="container">
        <div className="menu-list" style={{ display: 'flex', justifyContent: 'center', margin: '5rem 0' }}>
          <div className="menu-list-detail">
            <div className="menu-select" style={{ textAlign: 'center' }}>
              <select style={{ textAlign: 'center', width: '100%', border: 'none', outline: 'none', borderRadius: '5px', padding: '5px' }} >
                <option name="ไอเทม">ไอเทม</option>
                <option name="มอนส์เตอร์">มอนส์เตอร์</option>
                <option name="ร้านค้า">ร้านค้า</option>
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

        <div className="weapon-detail" id='show' style={{position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%'}}>
          <div className="wep-head">
            <h3>รายละเอียด</h3>
            <h5>กระบี่</h5>
          </div>
        </div>

      </div>

    </>
  )
}
