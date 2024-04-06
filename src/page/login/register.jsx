import { useEffect } from 'react'
// import Navbar from '../shared/nav'
import { useBetween } from 'use-between';
import login from '../shared/state/login'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import urlpath from '../shared/state/urlpath'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default function register() {
  const Location = useNavigate()
  const [ username , setUsername ] = useBetween(login)

  useEffect(() => {
    if (username) {
        Location("/")
    }
}, [username])

  const changeurl = () => {
    Location("/login")
  }

  const RegisterBtn = async () => {
    const username = document.querySelector("#reg_username_input").value
    const password = document.querySelector("#reg_password_input").value
    const confirm_password = document.querySelector("#reg_confirm_password_input").value

    const respone = await axios.post(`${urlpath()}/api/register` , {
      account: username,
      password: password,
      confirm_password: confirm_password
    })

    if (respone.status === 200) {
      if (respone.data) {
        setUsername(username)

      } else {
        Swal.fire({
          title: "System",
          text: "มีชื่อผู้ใช้นี้แล้ว",
          icon: "error"
      });
      }
    }
  }
  
  return (
    <>

      {/* <Navbar/> */}
      <div className="container">
        <div className="register-blog" style={{ border: '1px solid transparent', borderRadius: '20px', background: 'rgb(0 0 0 / 34%)', width: '450px', height: 'max-content', position: 'relative', margin: '10% auto', padding: '1rem' }}>
          <div className="img-regis" style={{ textAlign: 'center' }}>
            <img src="logo.png" width="300" alt="" style={{ borderBottom: '2px solid #fffbf5' }} />
          </div>
          <div className="register-head">
            <div className="regis-detail" style={{ marginTop: '2rem' }}>
              <label htmlFor="">ชื่อ</label>
              <input type="text" placeholder='ชื่่อผู้ใช้' id='reg_username_input' />
            </div>

            <div className="regis-detail" style={{ marginTop: '2rem' }}>
              <label htmlFor="">รหัสผ่าน</label>
              <input type="password" placeholder='ขั้นต่ำ 8 ตัวอักษร' id='reg_password_input' />
            </div>

            <div className="regis-detail" style={{ marginTop: '2rem' }}>
              <label htmlFor="">ยืนยันรหัสผ่าน</label>
              <input type="password" placeholder='ยืนยันรหัสผ่าน' id='reg_confirm_password_input' />
            </div>

            <div className="regis-btn" style={{alignItems: 'center', textAlign: "center", padding: '1rem 0 0 0'}}>
              <button onClick={RegisterBtn}>สมัครสมาชิก</button>
            </div>

            <div className="login-btn" style={{alignItems: 'center', textAlign: "center", padding: '1rem 0 0 0'}}>
              <button onClick={changeurl}>เข้าสู่ระบบ</button>
            </div>


          </div>
        </div>
      </div>

    </>
  )
}
