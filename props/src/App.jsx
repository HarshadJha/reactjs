import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobData  = [{
    "brandLogo": "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/4b5b2295-f462-5f66-80aa-da4e5a6f7409/01a84265-e09c-5682-92ce-681c89a1afe2.jpg",
    "company": "Google",
    "datePosted": "5 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": 45,
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/2ba0b8f1-ec59-5cc9-9a20-a4e5511a34ec/10f1907b-2567-564d-b1ad-0ade96af1083.jpg",
    "company": "Amazon",
    "datePosted": "2 weeks ago",
    "post": "Frontend Developer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": 40,
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/microsoft.com",
    "company": "Microsoft",
    "datePosted": "10 days ago",
    "post": "Backend Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 60,
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/meta.com",
    "company": "Meta",
    "datePosted": "1 week ago",
    "post": "React Developer",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": 35,
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/netflix.com",
    "company": "Netflix",
    "datePosted": "3 weeks ago",
    "post": "Full Stack Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 70,
    "location": "Remote"
  },
  {
    "brandLogo": "https://logo.clearbit.com/apple.com",
    "company": "Apple",
    "datePosted": "4 days ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": 65,
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/uber.com",
    "company": "Uber",
    "datePosted": "6 days ago",
    "post": "Data Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 55,
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/airbnb.com",
    "company": "Airbnb",
    "datePosted": "2 days ago",
    "post": "UI Engineer",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": 38,
    "location": "Remote"
  },
  {
    "brandLogo": "https://logo.clearbit.com/adobe.com",
    "company": "Adobe",
    "datePosted": "8 days ago",
    "post": "Software Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": 50,
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/salesforce.com",
    "company": "Salesforce",
    "datePosted": "12 days ago",
    "post": "Cloud Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 58,
    "location": "Bangalore, India"
  }
]
  return (
    <div className='parent'>
     {jobData.map(function(elem , idx){
      return <div key={idx}> 
       <Card key={idx} company={elem.company} post={elem.post} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
     </div>
     })}
    </div>
  )
}

export default App

