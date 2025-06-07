import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import FilterSection from '../components/FilterSection'
import JobCard from '../components/JobCard'
// import { jobsData } from '../data/jobsData'
import JobForm from '../components/JobForm'
import axios from 'axios'
import { useEffect } from 'react'
import Loading from '../components/Loading'

const JobListPage = () => {

const [isOpen, setIsOpen] = useState(false)
const [jobs,setJobs] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [searchQuery,setSeachQuery] = useState("")
  const [jobTypeSearch,setJobTypeSearch] = useState("")
  const [jobMode, setJobMode] = useState("")


  const[formData,setFormData] = useState({
    jobLogo: '', 
    jobTitle: '',
    experience: '',
    type: '',
    salary: '',
    jobDescription: "",
    date:"",
    minSalary:"",
    maxSalary:""
  })


const handleData = (key, value) => {
  setFormData(prev => ({
    ...prev,
    [key]: value
  }));
};


const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.jobTitle.trim().length < 5) {
    alert("Job Title must be at least 5 characters long.");
    return;
  }

   if (formData.jobLogo.trim().length < 5) {
    alert("Company Name must be at least 5 characters long.");
    return;
  }


  if (formData.jobDescription.trim().length<5 || !/[a-zA-Z]/.test(formData.jobDescription)) {
    alert("Job Description must contain aleast 5 characters.");
    return;
  }


  axios.post("https://job-portal-admin-nn96.onrender.com/new", formData)
    .then(() => {
      console.log("Job created successfully!");
      handleClose();
      
      return axios.get("https://job-portal-admin-nn96.onrender.com/jobs");
    })
    .then((res) => {
      setJobs(res.data);
    })
    .catch((err) => {
      console.error("Error creating job:", err);
    });
};



const handleOpen =()=>{
  setIsOpen(true)
}
const handleClose = ()=>{
  setIsOpen(false)
}


const search = (e)=>{
  setSeachQuery(e.target.value)
}

const handleLocationSearch = (e) => {
  setJobTypeSearch(e.target.value);
};
const handleJobTypeSearch  = (e) => {
  setJobMode(e.target.value);
};



useEffect(()=>{
  setIsLoading(true)
  axios.get("https://job-portal-admin-nn96.onrender.com/jobs")
  .then(res=>{
    setJobs(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
  .finally(()=>{
    setIsLoading(false)
  })

},[])

const filteredJobs = jobs.filter((jobItem)=>
  jobItem.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) && 
  jobItem.type.toLowerCase().includes(jobTypeSearch.toLowerCase()) &&
  jobItem.experience.toLowerCase().includes(jobMode.toLowerCase())


)

if(isLoading){
  return <Loading/>
}

  return (
    <div>
    {isOpen && (
  <div className="fixed inset-0 z-50 flex justify-center items-start sm:items-center bg-black/40 overflow-y-auto p-4">
  <div className="bg-white p-6 rounded-xl max-w-2xl w-full">
      <JobForm closeForm={handleClose} handleData={handleData} handleSubmit={handleSubmit}   />
    </div>
  </div>
)}
      
        <Navbar openForm = {handleOpen}/>
        <FilterSection search={search} handleJobTypeSearch={handleJobTypeSearch} handleLocationSearch={handleLocationSearch } />
        <div className={filteredJobs.length==0 ? `flex justify-center items-center mt-20`:`max-w-[85rem] mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4`}>
          {
            filteredJobs.length===0 ? <h1 className='font-semibold text-center text-3xl animate-pulse'>No Jobs Found...</h1>

            : filteredJobs.map((item,index)=>(
              <JobCard key={index} 
              logo={item.jobLogo}
              title={item.jobTitle}
              exprience={item.experience}
              type={item.type}
              salary={item.salary}
              desc={item.jobDescription}
              desc1={item.jobDescription1}
              date={item.date}
              minSalary={item.minSalary}
              maxSalary={item.maxSalary}
               />
            ))
          }

        </div>
        
       
        
    </div>
  )
}

export default JobListPage