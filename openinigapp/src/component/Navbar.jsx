import { useEffect, useState } from "react";
import "./Dashboard.css";
import notification from '../assets/notifications.png'
const Navbar = () => {
  const [photo,setPhoto] = useState("")
  const pic = localStorage.getItem('photo')
    
     useEffect(()=>{
      if(pic){
        setPhoto(pic)
        }
     },[])
  
  return (
    <div className="dash__header__bar">
      <h2 className="dahsboard">Upload CSV</h2>

      <div className="header__right">
        

        <button className="bell__icon">
          <i className="ri-notification-2-line"> <img src={notification} alt="notification"/></i>
        </button>

        <div className="profile__icon">
      
        <img src={photo} alt="userimage" />

          <ul
            className="profile__dropdown"
          >
           
            <li>
              <button >Log Out</button>
            </li>
          </ul>
        </div>
        <button
          className="menu__toggle"
          onClick={() => {
            document
              .querySelector(".sidebar__container")
              .classList.toggle("active");
          }}
        >
          <i className="ri-menu-4-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
