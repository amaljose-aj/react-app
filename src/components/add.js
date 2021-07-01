import React,{useState} from 'react'

export default function Add() {
      
       const [name,setValue]=useState("")
       const [mail,setMail]=useState("")
       const [number,setNumber]=useState("")
       const [homeaddress,setHomeaddress]=useState("")
       const [officeaddress,setOfficeaddress]=useState("")
       

       const handleSubmit = (e)=>{
        e.preventDefault();
        
        const stud={name,mail,number,officeaddress,homeaddress}
        localStorage.setItem(number,JSON.stringify(stud))
       }
    return (
        <div className="container">
            


            <form onSubmit={handleSubmit}>
               <div className = 'form-group'>
                   <label >Name:</label>
                   <input  type="text" name="names" value={name} onChange={(e) => setValue(e.target.value) }  className='form-control' placeholder="Name" required/>
               </div>
               
               
               <div className = 'form-group'>
               <label >Email:</label>
                   <input  type="text" name="email" value={mail} onChange={(e) => setMail(e.target.value) }  className='form-control' placeholder="Email" required/>
               </div>
               <div className = 'form-group'>
               <label >Phone Number:</label>
                   <input  type="number" name="phone" value={number}  onChange={(e) => setNumber(e.target.value) }  className='form-control' placeholder="Phone Number" required/>
               </div>
               <div className = 'form-group'>
               <label >Home Address:</label>
                   <input  type="text" name="homeaddress" value={homeaddress}    onChange={(e) => setHomeaddress(e.target.value) }  className='form-control' placeholder="Home Address" required/>
               </div>
               <div className = 'form-group'>
               <label >Office Address:</label>
                   <input  type="text" name="officeaddress" value={officeaddress}  onChange={(e) => setOfficeaddress(e.target.value) } className='form-control' placeholder="Office Address" required/>
               </div>
               <input  type="submit" className="btn btn-lg btn-info" />


            </form>


        </div>
    )
}
