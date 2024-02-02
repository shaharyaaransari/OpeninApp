import React from 'react';
import companylogo from "../assets/company.png";
import Category from "../assets/Category.png";
import Chart from "../assets/Chart.png";
import Setting from "../assets/Setting.png";
import Notification from "../assets/Notification.png";
import Ticket from "../assets/Ticket.png";
import Calender from "../assets/Calendar.png";
import Document from "../assets/Document.png";
import DashHeader from './Navbar';

export const Sidebar = () => {
  return (
      <div style={{display:'flex', alignItems:'start',justifyContent:"space-between"}}>
<div className="flex flex-col w-56 bg-white overflow-hidden  h-screen" style={{width:'250px',fontSize:"20px"}}>
      <div className="flex items-center justify-center h-20">
        <img src={companylogo} alt="company-logo" className="w-28 h-10 absolute top-8 left-12" />
      </div>
      <ul className="flex flex-col py-4">
        <li className="flex flex-col p-3">
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
            <span className="text-lg font-lg flex items-center">
              <img src={Category} alt="category" className="w-8 h-8 absolute top-2.5 left-1" />
              Dashboard
            </span>
          </a>
        </li>
        <li className="flex flex-col p-3 ">
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
            <img src={Chart} alt="category" className="w-8 h-8 absolute top-2.5 left-2 " />
            <span className="text-lg font-medium">Upload</span>
          </a>
        </li>
        <li className="flex flex-col p-3">
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
            <img src={Ticket} alt="category" className="w-8 h-8 absolute top-2.5 left-2 " />
            <span className="text-lg font-medium">Invoice</span>
          </a>
        </li>
        <li className="flex flex-col p-3">
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
            <img src={Document} alt="category" className="w-8 h-8 absolute top-2.5 left-2" />
            <span className="text-lg font-medium">Schedule</span>
          </a>
        </li>
        <li className="flex flex-col p-3">
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
            <img src={Calender} alt="category" className="w-8 h-8 absolute top-2.5 left-2 " />
            <span className="text-lg font-medium">Calendar</span>
          </a>
        </li>
        <li className="flex flex-col p-3">
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
            <img src={Notification} alt="category" className="w-8 h-8 absolute top-2.5 left-2 " />
            <span className="text-lg font-medium">Notification</span>
          </a>
        </li>

        <li className="flex flex-col p-3">
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
            <img src={Setting} alt="category" className="w-8 h-8 absolute top-2.5 left-2 " />
            <span className="text-lg font-medium ">Setting</span>
          </a>
        </li>
      </ul>
    </div>
<DashHeader />
      </div>
    
  );
}
