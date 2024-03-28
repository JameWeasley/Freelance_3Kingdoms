import React, { useState, useEffect } from "react";
import Navbar from '../shared/nav'

export default function admin() {

  const [category, setCategory] = useState("item");
  const [categoryItem, setcategoryItem] = useState("all");
  const [categoryItemHTML, setcategoryItemHTML] = useState("");
  const [itemHTML, setitemHTML] = useState("");
  const [newsHTML, setnewsHTML] = useState("");

  useEffect(() => {
    const text = [];
    if (category === "item") {
      text.push(
        <>
          <div className="item-blog">
            <div className="img-blog">
              <img src="i1.bmp" alt="" />
            </div>
            <p>กระบี่ตรง</p>
            <button className="btn btn-dark" onClick={showWeapon}>
              แก้ไข
            </button>
            <button className="btn btn-danger">
              ลบ
            </button>
          </div>
        </>
      );
    } else if (category === "monster") {
      text.push(
        <>
          <div className="item-blog">
            <div className="img-blog">
              <img src="i1.bmp" alt="" />
            </div>
            <p>มอนเตอร์</p>
            <button className="btn btn-dark" onClick={showWeapon}>
              แก้ไข
            </button>
            <button className="btn btn-danger">
              ลบ
            </button>
          </div>
        </>
      );
    } else if (category === "store") {
      text.push(
        <>
          <div className="item-blog">
            <div className="img-blog">
              <img src="i1.bmp" alt="" />
            </div>
            <p>ร้านค้า</p>
            <button className="btn btn-dark" onClick={showWeapon}>
              แก้ไข
            </button>
            <button className="btn btn-danger">
              ลบ
            </button>
          </div>
        </>
      );
    } else if (category === "news") {
      text.push(
        <>
          <div className="container">
            <div className="new-info" style={{ width: '500px' }}>
              <input type="text" style={{ width: '100%', border: 'none', outline: 'none', padding: '10px' }} />
              <button className="btn btn-dark" style={{ width: '100% ', marginTop: '20px' }}>เพิ่มประกาศ</button>
            </div>
          </div>
        </>
      )
    }

    setitemHTML(text);
  }, [category]);

  useEffect(() => {
    const text = [];
    text.push(
      <>
        <span
          data-name="all"
          className={categoryItem === "all" ? "activemenu" : ""}
          onClick={clickCategory}
        >
          ทั้งหมด
        </span>
        <span
          data-name="weapon"
          className={categoryItem === "weapon" ? "activemenu" : ""}
          onClick={clickCategory}
        >
          อาวุธ
        </span>
      </>
    );

    setcategoryItemHTML(text);
  }, [categoryItem]);

  const showWeapon = () => {
    const wpn = document.getElementById("show");
    const bg = document.getElementById("root");
    const dtItem = document.querySelector("detail-item")
    bg.style.background = "rgba(0, 0, 0, 0.7)";
    wpn.style.display = "block";
    bg.style.transition = "0.3s";
  };

  const close = () => {
    const cl = document.querySelector(".weapon-detail");
    const bg = document.getElementById("root");
    cl.style.display = "none";
    bg.style.background = "";
  };

  let currentIndex = 0; // เริ่มต้นที่ index 0 (menu-list-info)

  const changeList = (e) => {
    setCategory(e.currentTarget.value);
  };

  const clickCategory = (e) => {
    setcategoryItem(e.currentTarget.dataset.name);
  };

  return (
    <>

      <Navbar />
      <div className="container" style={{ minHeight: '900px' }}>
        <div
          className="menu-list"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5rem 0",
          }}
        >
          <div className="menu-list-detail">
            <div className="menu-select" style={{ textAlign: "center" }}>
              <select
                onChange={changeList}
                style={{
                  textAlign: "center",
                  width: "100%",
                  border: "none",
                  outline: "none",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                <option value="news">ประกาศ</option>
                <option value="item">ไอเทม</option>
                <option value="monster">มอนส์เตอร์</option>
                <option value="store">ร้านค้า</option>
                <option value="give">ให้ไอเทมผู้เล่น</option>
              </select>
            </div>

            <div className="menu-search" style={{ marginTop: "1rem" }}>
              <input
                type="search"
                placeholder="ค้นหา"
                style={{
                  height: "50px",
                  border: "none",
                  outline: "none",
                  borderRadius: "5px",
                  padding: "0 10px",
                }}
              />
            </div>
            {category === "item" ? (
              <div
                className="menu-list-info"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                  gap: "7px",
                }}
              >
                <h3>หมวดหมู่</h3>
                {categoryItemHTML}
              </div>
            ) : (
              ""
            )}

            {category === "monster" ? (
              <div
                className="menu-list-monster"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
              >
                <span>ระดับ 1 - 50</span>
                <span>ระดับ 51 - 100</span>
                <span>ระดับ 101 - 150</span>
                <span>ระดับ 151 - 200</span>
                <span>ระดับ 201 - 250</span>
                <span>ระดับ 251 - 300</span>
              </div>
            ) : (
              ""
            )}

            {category === "store" ? (
              <div className="menu-list-store">
                <button className="btn btn-dark w-100 mt-4">ค้นหา</button>
              </div>
            ) : (
              ""
            )}
          </div>

          <div
            className="item-list"
            style={{
              marginLeft: "3rem",
              marginRight: "3rem",
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridGap: "20px",
            }}
          >
            {itemHTML}




          </div>
        </div>


        <div className="pagination" style={{ justifyContent: 'center', marginLeft: '20%' }}>
          <ul style={{ display: 'flex' }}>
            <li><a href="">Prev</a></li>
            <li><a href="" className="active-pagination">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
            <li><a href="">Next</a></li>
          </ul>
        </div>

        <div className="weapon-detail" id="show">
          <div className="bg-popup"></div>
          <div className="weapon-page">
            <div className="wep-head">
              <h3>รายละเอียด กระบี่</h3>
            </div>
            <div className="detail-item">
              <p>เลเวล : </p>
              <p>พลังกาย : </p>
              <p>พลังโจมตี : </p>
              <p>ความเร็วโจมตี : </p>
              <p>โจมตีแทง : </p>
              <p>ปัญญา : </p>
              <p>กาย : </p>
              <p>คุม : </p>
              <p>ค่าประสบการณ์ : </p>
              <p>พลังสกิล : </p>
            </div>
            <button className="btn btn-dark" onClick={close} style={{ float: 'inline-end' }}>
              ปิด
            </button>
          </div>


        </div>
      </div>
    </>
  );
}
