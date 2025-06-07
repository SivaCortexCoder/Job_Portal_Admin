import React from 'react'
import { HiOutlineSearch,HiOutlineLocationMarker,HiOutlineUser } from 'react-icons/hi'

const FilterSection = ({search,handleJobTypeSearch,handleLocationSearch}) => {
  return (
    <div className='flex flex-col  gap-5 justify-between lg:flex-row lg:items-center text-lg text-[#686868] font-medium bg-white
      px-10 py-6 space-x-6 w-full filter-shadow'>

        <div className='flex items-center space-x-2   flex-1 border border-gray-300 p-2 rounded-lg lg:border-none '>
            <span className='text-2xl'><HiOutlineSearch /></span>
            <input
             type="text" name="jobtitle" id=""
             onChange={search}
              placeholder='Search By Job Title, Role'
              className='outline-none w-full pl-5 placeholder-[#686868]' />
        </div>

    <div className="hidden lg:block h-13 w-[2px]  bg-gray-200" />

        <div className='flex items-center space-x-2 flex-1 border border-gray-300  rounded-lg p-2 lg:border-none '>
            <span className='text-2xl'><HiOutlineLocationMarker/></span>
            <select className="outline-none pl-5 w-full placeholder-[#686868]" onChange={handleLocationSearch}>
                <option>Preferred Location</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Hyderabad</option>
        </select>
        </div>

    <div className="hidden lg:block h-13 w-[2px] bg-gray-200" />

        <div className='flex items-center space-x-2 flex-1 border border-gray-300  rounded-lg p-2 lg:border-none'>
            <span className='text-2xl'><HiOutlineUser/></span>
            <select className="outline-none pl-5 w-full placeholder-[#686868]" onChange={handleJobTypeSearch}>
                <option>Job type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Contract</option>
            </select>
        </div>

    <div className="hidden lg:block h-13 w-[2px] bg-gray-200 " />

        <div className='flex-1 flex flex-col justify-between gap-1 text-black '>
            <div className=' flex justify-between flex-wrap'>
                <span>Salary Per Month</span>
                <span>₹50k - ₹80k</span>
            </div>
            <div>
                <input type="range" name="" id=""  className="w-full h-1 bg-gray-300 rounded-lg accent-black outline-none" />
            </div>
            
        </div>
    </div>
  )
}

export default FilterSection