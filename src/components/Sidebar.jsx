import React from "react";
import "../styles/sidebar.css";
import { RiSettingsLine } from "react-icons/ri";
import { FaProductHunt } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { PiHandCoinsFill } from "react-icons/pi";


export const Sidebar = () => {
  return (
    <div className="main">
    <h1 className="white head" style={{ display: "flex", alignItems: "center",marginLeft:"10px",fontWeight:"bold"}}>
            <RiSettingsLine style={{ marginRight: "8px" }} />
            Dashboard
          </h1>
      {/* <h1>Dashboard</h1> */}
      <ul className="sidebar-menu">
        <li>
          <h1 className="white" style={{ display: "flex", alignItems: "center",marginLeft:"10px" }}>
            <RiSettingsLine style={{ marginRight: "8px" }} />
            Dashboard
          </h1>
        </li>
        <li>
          <h1 className="white" style={{ display: "flex", alignItems: "center",marginLeft:"10px" }}>
            <FaProductHunt style={{ marginRight: "8px" }} />
            Product
          </h1>
        </li>
        <li>
          <h1 className="white" style={{ display: "flex", alignItems: "center",marginLeft:"10px" }}>
            <BsPeopleFill style={{ marginRight: "8px" }} />
            Customers
          </h1>
        </li>
        <li>
          <h1 className="white" style={{ display: "flex", alignItems: "center",marginLeft:"10px" }}>
            <FaMoneyCheckDollar style={{ marginRight: "8px" }} />
            Income
          </h1>
        </li>
        <li>
          <h1 className="white" style={{ display: "flex", alignItems: "center",marginLeft:"10px" }}>
            <PiHandCoinsFill style={{ marginRight: "8px" }} />
            Promote
          </h1>
        </li>
        <li>
          <h1 className="white" style={{ display: "flex", alignItems: "center",marginLeft:"10px" }}>
            <RiCustomerService2Fill style={{ marginRight: "8px" }} />
            Help
          </h1>
        </li>
      </ul>
    </div>
  );
};
