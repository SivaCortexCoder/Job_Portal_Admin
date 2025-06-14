import React from 'react'
import forward from '../assets/images/fast-forward.png'
import forward1 from '../assets/images/fast-forward1.png'

const JobForm = ({closeForm,handleData,handleSubmit}) => {
  return (
    <div className='bg-white rounded-xl p-4'>
      <div className='flex justify-between items-center mb-4'>
        <div></div>
        <h1 className='font-semibold text-2xl'>Create Job Opening</h1>
        <p onClick={closeForm} className='font-bold text-xl cursor-pointer hover:text-gray-600'>×</p>
      </div>

      <form className='space-y-4' onSubmit={handleSubmit}>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label htmlFor="jobTitle" className='block font-bold mb-1'>Job Title</label>
            <input 
            onChange={(e)=>handleData(e.target.name,e.target.value)}
              className='border-2 border-gray-200 placeholder:text-[#BCBCBC] placeholder:font-medium placeholder:text-sm rounded-lg px-4  py-3 w-full font-semibold ' 
              type="text" 
              id='jobTitle' 
              name='jobTitle'
              placeholder='Full Stack Developer' 
              required
            />
          </div>
          <div>
            <label htmlFor="CompanyName" className='block font-bold mb-1'>Company Name / Logo Url</label>
            <input 
              className='border-2 border-gray-200 placeholder:text-[#BCBCBC] placeholder:font-medium placeholder:text-sm rounded-lg px-4  py-3 w-full font-semibold ' 
              type="text" 
              name='jobLogo'
              onChange={(e)=>handleData(e.target.name,e.target.value)}
              id='CompanyName' 
              placeholder='Amazon, Microsoft, Swiggy' 
              required
            />
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label htmlFor="jobLocation" className='block font-bold mb-1'>Location</label>
            <select 
            onChange={(e)=>handleData(e.target.name,e.target.value)}
              id="jobLocation" 
              name='type'
              required
              className='border-2 border-gray-200  rounded-lg px-4  py-3 w-full font-semibold'
            >
              <option value="" className='text-[#BCBCBC]'>Choose Preferred Location</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>
          <div>
            <label htmlFor="jobType" className='block font-bold mb-1'>Job Type</label>
            <select 
            onChange={(e)=>handleData(e.target.name,e.target.value)}
              id="jobType" 
              name='experience'
              required
              className='border-2 border-gray-200 placeholder:text-[#BCBCBC] placeholder:font-medium placeholder:text-sm rounded-lg px-4  py-3 w-full font-semibold '
            >
              <option value=''>Select Type</option>
              <option value="Full-Time">Full-time</option>
              <option value="Part-Time" >Part-time</option>
              <option value="Internship" >Internship</option>
              <option value="Contract" >Contract</option>
            </select>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label htmlFor="salary" className='block font-bold mb-1'>Salary Range</label>
            <div className='flex gap-2'>
              <input 
              onChange={(e)=>handleData(e.target.name,e.target.value)}
                type="text" 
                required
                name='minSalary'
                placeholder='⇅ ₹0' 
                className='border-2 border-gray-200 placeholder:text-[#BCBCBC] placeholder:font-medium placeholder:text-sm rounded-lg px-4  py-3 w-full font-semibold' 
              />
              <input 
               onChange={(e)=>handleData(e.target.name,e.target.value)}
                type="text" 
      
                name='maxSalary'
                placeholder='⇅ ₹12,00,000' 
                className='border-2 border-gray-200 placeholder:text-[#BCBCBC] placeholder:font-medium placeholder:text-sm rounded-lg px-4  py-3 w-full font-semibold' 
              />
            </div>
          </div>
          <div>
            <label htmlFor="deadline" className='block font-bold mb-1'>Application Deadline</label>
            <input 
              type="date" 
              name='date'
              id='deadline' 
              onChange={(e) => handleData(e.target.name, e.target.value)}
              required
              className='border-2 border-gray-200 placeholder:text-[#BCBCBC] placeholder:font-medium placeholder:text-sm rounded-lg px-4  py-3 w-full font-semibold' 
            />
          </div>
        </div>

        <div>
          <label htmlFor="jobDescription" className='block font-bold mb-1'>Job Description</label>
          <textarea 
          onChange={(e)=>handleData(e.target.name,e.target.value)}
            className='border-2 border-gray-200 placeholder:text-[#BCBCBC] placeholder:font-medium placeholder:text-sm rounded-lg px-4  py-3 w-full resize-none font-semibold'
            id="jobDescription" 
            required
            rows="3" 
            name='jobDescription'
            placeholder='Brief description of the role and requirements'
          />
        </div>
        
        <div className='flex justify-between gap-3 pt-2'>
          <button 
            type="button"
            className='font-medium flex items-center gap-2 rounded-lg px-2 py-2 cursor-pointer border-2 border-black hover:bg-gray-50 transition-colors'
          >
            Save Draft <img src={forward} className='w-3 rotate-90' alt="" />
          </button>
          <button 
            type="submit"
            className='font-medium flex items-center gap-2 bg-[#00aaff] cursor-pointer rounded-lg px-2 py-2 text-white hover:bg-[#0099ee] transition-colors'
          >
            Publish <img src={forward1} className='w-3' alt="" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default JobForm