import React, { useState } from 'react'
import { createEmployees, UpdateEmployee } from '../EmployeeService';
import { useNavigate ,useParams} from 'react-router-dom';
import { updateEmployeesById } from '../EmployeeService';
import { useEffect } from 'react';
const AddEmployeeComponent = () => {

     const [firstName,setFirstName]  = useState('');
     const[lastName,setLastName] = useState('');
     const[email,setEmail] = useState('');
     const[company_name,setCompanyName] = useState('');
     const[salary,setSalary] = useState('');

     // return to listing page
     const navigator = useNavigate();

     // Page Title use param
     const {id} = useParams();

      // TO GET DETAILS BY EMP ID

   useEffect(() => {
        if(id){
        updateEmployeesById(id).then(response => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setSalary(response.data.salary);
            setCompanyName(response.data.company_name);
        }).catch((error) => {
            console.error(error);
        })
    }
   })

    //validations state
      const [error,setError] =  useState({
            firstName:'',
            lastName:'',
            email:'',
            company_name:'',
            salary:''
        })

        // form validations 
  function validateForm(){
     let valid = true;

     const errorCopy = {...error};
     if(firstName.trim()){
        errorCopy.firstName=''
     }
     else{
        errorCopy.firstName = 'First Name is required';
        valid = false;
     }
     if(lastName.trim()){
        errorCopy.lastName=''
     }
     else{
        errorCopy.lastName='Last Name is required';
        valid=false;
     }
     if(email.trim()){
        errorCopy.lastName=''
     }
     else{
        errorCopy.email='Email is required';
        valid=false;
     }
      if( company_name && company_name.trim()){
        errorCopy.company_name=''
     }
     else{
        errorCopy.company_name='Company Name is required';
        valid=false;
     }
      if(salary){
        errorCopy.salary=''
     }
     else{
        errorCopy.salary='Salary is required';
        valid=false;
     }

     setError(errorCopy);

     return valid;
  }

    //saveFunction
     function SaveorUpdateEmployee(e){
         e.preventDefault();
        
       
        const employee = {
            firstName,lastName,email,company_name,salary
        }
        if(!id){
        createEmployees(employee).then((response)=>{
            console.log(response.data)
        },[])
        console.log(employee)
        }
        else{
            UpdateEmployee(id,employee).then((response)=>{
                console.log(response.data);
            },[]).catch((error)=>{
                console.error(error);
            })
        }
        navigator('/list')
    
     }

     function PageTitle(){
            if(id){
                return   <h2 className='text-center'>Update Employee</h2>
            }
            else{
                return  <h2 className='text-center'>Add Employee</h2>
            }
     }
  return (

          <div className='container'>
            <br></br>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        PageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label className='form-label'>First Name:</label>
                                <input type='text' id='firstName' placeholder='Enter First Name' name='firstName' 
                                         className={`form-control ${error.firstName?'is-invalid':''}`}
                                        value={firstName}
                                             onChange={(event)=>{setFirstName(event.target.value)}}
                                           >
                                        </input>
                                        {error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}
                            </div>
                              <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input type='text' id='lastName' placeholder='Enter Last Name' name='lastName' 
                                         className={`form-control ${error.lastName?'is-invalid':''}`}
                                        value={lastName}
                                             onChange={(event)=>{setLastName(event.target.value)}}
                                           >
                                        </input>
                                        {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
                            </div>
                              <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input type='text' id='email' placeholder='Enter email' name='email' 
                                         className={`form-control ${error.email ? 'is-invalid':''}`}
                                        value={email}
                                             onChange={(event)=>{setEmail(event.target.value)}}
                                           >
                                        </input>
                                        {error.email && <div className='invalid-feedback'>{error.email}</div>}
                            </div>
                              <div className='form-group mb-2'>
                                <label className='form-label'>Company Name:</label>
                                <input type='text' id='company_name' placeholder='Enter Company' name='company_name' 
                                         className={`form-control ${error.company_name ? 'is-invalid':''}`}
                                        value={company_name}
                                             onChange={(event)=>{setCompanyName(event.target.value)}}
                                           />
                                        
                                        {error.company_name && <div className='invalid-feedback'>{error.company_name}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Salary:</label>
                                <input type='text' placeholder='Enter Salary' id='salary'name='salary'
                                  className={`form-control ${error.salary ? 'is-invalid':''}`}
                                    value={salary}
                                    onChange={(event)=>{setSalary(event.target.value)}}
                                 />
                                 {error.salary && <div className='invalid-feedback'>{error.salary}</div>}
                            </div>
                            <button className='btn btn-success' onClick={SaveorUpdateEmployee}>Submit</button>
                            <br></br>
                        </form>
                    </div>
                </div>
            </div>
          </div>
 
    
  )
}

export default AddEmployeeComponent