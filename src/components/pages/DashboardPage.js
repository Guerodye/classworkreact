/**
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
*/


function DashboardPage(props) {
  return (
    <div>
        
        <div className="space-x-10">
      <button className="bg-blue-500 p-6 rounded text-white ">
          <p>Find co-tenants</p>
          <p>Shared house, individual room</p>
      </button>
        <button className="bg-blue-500 p-6 rounded ">
            <p>Find roomate</p>
            <p>Shared bedroom</p>
        </button>
        </div>


        <input type="text" name="job-title" id="job-title" className="border-2 rounded w-72  mt-20 "/>
            <input type="button" id="search-button" className=" rounded w-32 -ml-1 bg-gray-800 mt-1 mb-1ya " value="Search"/>




                
    </div>
  );
}
export default DashboardPage;
