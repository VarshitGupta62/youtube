import { useState } from "react";
import React  from 'react'
import { Link } from "react-router-dom";

function YourChannel({userdata}) {

  const [time, setTime] = useState({ hours: '', minutes: '', seconds: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (/^\d{0,2}$/.test(value) && value >= 0 && value <= 59) {
      setTime({ ...time, [name]: value });
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  // console.log(formatDate);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  console.log(userdata);
  return (
    <>
    <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4  ">
     <div className="mb-4 col-span-full xl:mb-2"> 
       {/*-------------------content---------------------  */}
        <div className='mb-4' >YourChannel</div>
        <hr />
        <div class="mt-4 flex items-center gap-5">
            <img class="w-28 h-28 rounded-full" src={userdata.avatar} alt="not found"/>
            <div class="font-bold dark:text-black">
                <div className='text-lg' >{(userdata.name || "Admin").toUpperCase()}</div>
                <div class="text-sm mb-3 text-gray-500  ">Joined in {formatDate(userdata.createdAt)}</div>
                <Link to={"/customize_channel"}>
                <button type="button" className=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-2.5 py-2.5 me-2 ">Customize channel</button>
                </Link>
            </div>
        </div>
        <hr className='mt-4' />
        <div className='text-center' >
        <button  onClick={handleToggleModal}  type="button" class=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 mt-4">Create</button>
        </div>

        
      {isModalOpen && (
        <div id="crud-modal" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow  ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  ">
              <h3 className="text-lg font-semibold text-gray-900  ">
                Create New Video
              </h3>
              <button 
                type="button" 
                onClick={handleToggleModal} 
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900  ">Title</label>
                  <input 
                    type="text" 
                    name="title" 
                    id="name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                    placeholder="Type product name" 
                    required 
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900  ">Thumbnaile</label>
                  <input 
                    type="file" 
                    name="thumbnaile" 
                    id="thumbnaile" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                    placeholder="Type product name" 
                    required 
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900  ">Video</label>
                  <input 
                    type="file" 
                    name="thumbnaile" 
                    id="thumbnaile" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                    placeholder="Type product name" 
                    required 
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900">Duration (hh:mm:ss)</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      name="hours"
                      id="hours"
                      value={time.hours}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/3 p-2.5"
                      placeholder="hh"
                      min="0"
                      max="23"
                      required
                    />
                    <input
                      type="number"
                      name="minutes"
                      id="minutes"
                      value={time.minutes}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/3 p-2.5"
                      placeholder="mm"
                      min="0"
                      max="59"
                      required
                    />
                    <input
                      type="number"
                      name="seconds"
                      id="seconds"
                      value={time.seconds}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/3 p-2.5"
                      placeholder="ss"
                      min="0"
                      max="59"
                      required
                    />
                  </div>
                </div>
                
                <div className="col-span-2">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900  ">Description</label>
                  <textarea 
                    id="description" 
                    rows="4" 
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " 
                    placeholder="Write Video description here"
                  ></textarea>                    
                </div>
              </div>
              <button 
                type="submit" 
                className="text-white inline-flex items-center bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                </svg>
                Add new Video
              </button>
            </form>
          </div>
        </div>)}
       {/*-------------------content---------------------  */}
    </div>
    </div>
    </>
  )
}

export default YourChannel