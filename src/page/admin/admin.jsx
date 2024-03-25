import React from 'react'
import Navbar from '../shared/nav'
import Footer from '../shared/footer'

export default function admin() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="admin-blog">
          <div className="admin-menu">
            <h2>จัดการประกาศ</h2>
            <table className="table" style={{ textAlign: 'center', margin: '3rem 0', width: '100%' }}>

              <thead>
                <tr>
                  <th>เพิ่มประกาศ</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th><input type="text" style={{ width: '100%', border: 'none', padding: '.5rem' }} /></th>
                  <th>
                    <button className='btn btn-success'>เพิ่มประกาศ</button>
                  </th>
                  <th>
                    <button className='btn btn-warning'>แก้ไข</button>
                    <button className='btn btn-danger'>ลบ</button>
                  </th>
                </tr>
              </tbody>
            </table>

            <h2>จัดการอาวุธ</h2>
            <table className="table" style={{ textAlign: 'center', margin: '3rem 0', width: '100%' }}>
              <thead>
                <tr>
                  <th>ชื่ออาวุธ</th>
                  <th>รายละเอียด</th>
                  <th><button className='btn btn-success'>เพิ่มอาวุธ</button></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>
                    <input type="search" />
                    <button className='btn btn-dark' style={{marginLeft: '20px'}}>ค้นหาอาวุธ</button>
                  </th>
                  <th><button className='btn btn-dark'>รายละเอียดอาวุธ</button></th>
                  <th>
                    <button className='btn btn-warning'>แก้ไข</button>
                    <button className='btn btn-danger'>ลบ</button>
                  </th>
                </tr>
              </tbody>
            </table>


            <h2>จัดการร้านค้า</h2>
            <table className="table" style={{ textAlign: 'center', margin: '3rem 0', width: '100%' }}>
              <thead>
                <tr>
                  <th>ชื่อร้านค้า</th>
                  <th>รายละเอียด</th>
                  <th><button className='btn btn-success'>เพิ่มร้านค้า</button></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>
                    <input type="search" />
                    <button className='btn btn-dark' style={{marginLeft: '20px'}}>ค้นหาร้านค้า</button>
                  </th>
                  <th><button className='btn btn-dark'>รายละเอียดร้านค้า</button></th>
                  <th>
                    <button className='btn btn-warning'>แก้ไข</button>
                    <button className='btn btn-danger'>ลบ</button>
                  </th>
                </tr>
              </tbody>
            </table>

            <h2>ให้ของผู้เล่น</h2>
            <table className="table" style={{ textAlign: 'center', margin: '3rem 0', width: '100%' }}>
              <thead>
                <tr>
                  <th>ไอเทม</th>
                  <th>ชื่อผู้เล่น</th>
                  <th>จำนวน</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>
                    <input type="search" />
                    <button className='btn btn-dark' style={{marginLeft: '20px'}}>ค้นหาไอเทม</button>
                  </th>
                  <th>
                    Jame
                  </th>
                  <th><input type="number" /></th>
                  <th>
                    <button className='btn btn-success'>เพิ่ม</button>
                    <button className='btn btn-danger'>ยกเลิก</button>
                  </th>
                </tr>

                <tr>
                  <th>
                    <input type="search" />
                    <button className='btn btn-dark' style={{marginLeft: '20px'}}>ค้นหาไอเทม</button>
                  </th>
                  <th>
                    Jarn
                  </th>
                  <th><input type="number" /></th>
                  <th>
                    <button className='btn btn-success'>เพิ่ม</button>
                    <button className='btn btn-danger'>ยกเลิก</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav> */}
      </div>

      <Footer />
    </>
  )
}
