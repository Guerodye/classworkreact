/**
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
*/


function DashboardPage(props) {
  return (
    <div>
        
        <div className="space-x-96 mb-20">
      <button className=" ml-36 w-72 p-6 rounded border-2 border-black ">
          <p>Find co-tenants</p>
          <p>Shared house, individual room</p>
      </button>
        <button className=" w-72 border-2 border-black p-6 rounded ">
            <p>Find roomate</p>
            <p>Shared bedroom</p>
        </button>
        </div>


        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between mb-10">
            <div className="border-2 border-black  bg-white shadow flex w-full">
                <input
                    type="text"
                    placeholder="city, state, zip code"
                    className="w-full rounded-tl-full rounded-bl-full py-2 px-4"/>
                <button className="bg-black text-white  hover:bg-red-300 py-2 px-4">
                    <p className="font-semibold text-base uppercase">Search</p>
                </button>
            </div>
        </div>

        <div className="ml-96">
            <img
                 src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1"/>
        </div>

        <section className="container px-6 py-4 mx-auto ">
            <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2">

                <div
                    className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
                    <img alt="mountain" className="w-45 rounded-md border-2 border-gray-300"
                         src="/images/house2.jpg"/>
                    <div id="body" className="flex flex-col ml-5">
                        <h4 id="name" className="text-xl font-semibold mb-2">Beautiful home in Hyde Park, with possibility of sharing bedrooms</h4>
                        <p id="job" className="text-gray-800 mt-2"> $800/month per room</p>
                        <p id="job" className="text-gray-800 mt-2"> 2 bedroom | 1 1/2 bath</p>
                        <p id="job" className="text-gray-800 mt-2"> 950 Hyde Park, Hyde Park, 02301</p>
                        <p id="job" className="text-gray-800 mt-2"> The house is equipped with an old-fashioned kitchen and 1 1/2 bathrooms, it also has a snug living room, two bedrooms, a modest dining area....</p>

                        <div className="flex mt-5">
                            <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300"
                                 src="https://img.icons8.com/color/200/000000/instagram-new--v1.png"/>
                            <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300 ml-3"
                                 src="https://img.icons8.com/fluency/48/000000/gmail-new.png"/>
                            <p className="ml-3">Marie Joie</p>
                        </div>
                    </div>
                </div>


                <div
                    className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
                    <img alt="mountain" className="w-45 rounded-md border-2 border-gray-300"
                         src="/images/house2.jpg"/>
                    <div id="body" className="flex flex-col ml-5">
                        <h4 id="name" className="text-xl font-semibold mb-2">Beautiful home in Hyde Park, with possibility of sharing bedrooms</h4>
                        <p id="job" className="text-gray-800 mt-2"> $800/month per room</p>
                        <p id="job" className="text-gray-800 mt-2"> 2 bedroom | 1 1/2 bath</p>
                        <p id="job" className="text-gray-800 mt-2"> 950 Hyde Park, Hyde Park, 02301</p>
                        <p id="job" className="text-gray-800 mt-2"> The house is equipped with an old-fashioned kitchen and 1 1/2 bathrooms, it also has a snug living room, two bedrooms, a modest dining area....</p>

                        <div className="flex mt-5">
                            <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300"
                                 src="https://img.icons8.com/color/200/000000/instagram-new--v1.png"/>
                            <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300 ml-3"
                                 src="https://img.icons8.com/fluency/48/000000/gmail-new.png"/>
                            <p className="ml-3">Marie Joie</p>
                        </div>
                    </div>
                </div>

                <div
                    className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
                    <img alt="mountain" className="w-45 rounded-md border-2 border-gray-300"
                         src="/images/house2.jpg"/>
                    <div id="body" className="flex flex-col ml-5">
                        <h4 id="name" className="text-xl font-semibold mb-2">Beautiful home in Hyde Park, with possibility of sharing bedrooms</h4>
                        <p id="job" className="text-gray-800 mt-2"> $800/month per room</p>
                        <p id="job" className="text-gray-800 mt-2"> 2 bedroom | 1 1/2 bath</p>
                        <p id="job" className="text-gray-800 mt-2"> 950 Hyde Park, Hyde Park, 02301</p>
                        <p id="job" className="text-gray-800 mt-2"> The house is equipped with an old-fashioned kitchen and 1 1/2 bathrooms, it also has a snug living room, two bedrooms, a modest dining area....</p>

                        <div className="flex mt-5">
                            <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300"
                                 src="https://img.icons8.com/color/200/000000/instagram-new--v1.png"/>
                            <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300 ml-3"
                                 src="https://img.icons8.com/fluency/48/000000/gmail-new.png"/>
                            <p className="ml-3">Marie Joie</p>
                        </div>
                    </div>
                </div>

                <div
                    className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
                    <img alt="mountain" className="w-45 rounded-md border-2 border-gray-300"
                         src="/images/house2.jpg"/>
                    <div id="body" className="flex flex-col ml-5">
                        <h4 id="name" className="text-xl font-semibold mb-2">Beautiful home in Hyde Park, with possibility of sharing bedrooms</h4>
                        <p id="job" className="text-gray-800 mt-2"> $800/month per room</p>
                        <p id="job" className="text-gray-800 mt-2"> 2 bedroom | 1 1/2 bath</p>
                        <p id="job" className="text-gray-800 mt-2"> 950 Hyde Park, Hyde Park, 02301</p>
                        <p id="job" className="text-gray-800 mt-2"> The house is equipped with an old-fashioned kitchen and 1 1/2 bathrooms, it also has a snug living room, two bedrooms, a modest dining area....</p>

                        <div className="flex mt-5">
                            <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300"
                                 src="https://img.icons8.com/color/200/000000/instagram-new--v1.png"/>
                            <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300 ml-3"
                                 src="https://img.icons8.com/fluency/48/000000/gmail-new.png"/>
                            <p className="ml-3">Marie Joie</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

                
</div>
  );
}
export default DashboardPage;
