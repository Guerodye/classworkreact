const ProfileTenant = () => {
    return (
        <div className="border w-1/2 border-black px-28 pt-6 pb-6">

            <h1 className="font-bold text-lg text-center mb-4">Tenant Profile</h1>
            <div className="space-y-6 ">
                <div className="flex space-x-10 ">
                    <div>
                        <label >
                            <p className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Full Name</p>
                        </label>
                        <input type="text" className="border-2 border-black"/>
                    </div>

                </div>
                <div>
                    <label >
                        <p className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Location</p>
                    </label>
                    <input type="text" className="border-2 border-black"/>
                </div>
                <div  className="flex space-x-10">
                    <div><label >
                        <p className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Number of rooms: </p>
                    </label>
                    <input type="text" className=" w-10 border-2 border-black"/>
                        </div>
                    <div><label >
                        <p className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Number of tenants per room: </p>
                    </label>
                    <input type="text" className=" w-10 border-2 border-black"/>
                        </div>
                </div>
                <div>
                    <label >
                        <p className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Rental fees/room</p>
                    </label>
                    <input type="text" className="border-2 border-black"/>
                </div>

                <div>
                    <label >
                        <p>Col</p>
                    </label>
                    <input type="text" className="border-2 border-black"/>
                </div>
                <div className="border-black hover:border-black hover:bg-gray">
                    <textarea className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1" name="text" cols="60" rows="5" >Tell us about the place</textarea>
                </div>
            </div>


            <div className="grid grid-cols-1 mt-5 mx-7">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Pictures of the rental property here</label>
                <div className='flex items-center justify-center w-full'>
                    <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-black group'>
                        <div className='flex flex-col items-center justify-center pt-7'>
                            <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            <p className='lowercase text-sm text-gray-400 group-hover:text-gray-500 pt-1 tracking-wider'>Select a photo</p>
                        </div>
                        <input type='file' class="hidden" />
                    </label>
                </div>
            </div>

            <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                <button className='w-auto bg-black hover:bg-grey-500  shadow-xl font-medium text-white px-4 py-2'>Post Offer</button>
            </div>



        </div>
    );
};

export default ProfileTenant;