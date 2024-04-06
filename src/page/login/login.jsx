import { useState , useEffect } from 'react'
import Footer from '../shared/footer'
import { useBetween } from 'use-between';
import login from '../shared/state/login'
import axios from 'axios';
import urlpath from '../shared/state/urlpath'
import changeurl from '../shared/state/urlpath'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default function register() {
    const Location = useNavigate()
    const [ username , setUsername ] = useBetween(login)

    useEffect(() => {
        if (username) {
            Location("/")
        }
    }, [username])

    const loginActive = async () => {
        const username = document.querySelector("#login_username_input").value
        const password = document.querySelector("#login_password_input").value
        if (username && password) {
            const respone = await axios.post(`${urlpath()}/api/login` , {
                account: username,
                password: password
            })

            if (respone.status === 200) {
                if (respone.data) {
                    setUsername(respone.data?.username)
                }else {
                    Swal.fire({
                        title: "System",
                        text: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
                        icon: "error"
                    });
                }
            }
        }
    }

    const changeurl = () => {
        Location("/register")
    }
   

    return (
        <>
            <div className="container">
                <div className="register-blog" style={{ border: '1px solid transparent', borderRadius: '20px', background: 'rgb(0 0 0 / 34%)', width: '450px', height: 'max-content', position: 'relative', margin: '10% auto', padding: '1rem' }}>
                    <div className="img-regis" style={{ textAlign: 'center' }}>
                        <img src="logo.png" width="300" alt="" style={{ borderBottom: '2px solid #fffbf5' }} />
                    </div>
                    <div className="register-head">
                        <div className="regis-detail" style={{ marginTop: '2rem' }}>
                            <label htmlFor="">ชื่อ</label>
                            <input type="text" placeholder='ชื่่อผู้ใช้' id='login_username_input' />
                        </div>

                        <div className="regis-detail" style={{ marginTop: '2rem' }}>
                            <label htmlFor="">รหัสผ่าน</label>
                            <input type="password" placeholder='ขั้นต่ำ 8 ตัวอักษร' id='login_password_input' />
                        </div>

                        <div className="regis-btn" style={{ alignItems: 'center', textAlign: "center", padding: '1rem 0 0 0' }}>
                            <button onClick={loginActive}>เข้าสู่ระบบ</button>
                        </div>

                        <div className="login-btn" style={{ alignItems: 'center', textAlign: "center", padding: '1rem 0 0 0' }}>
                            <button onClick={changeurl}>สมัครสมาชิก</button>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}
