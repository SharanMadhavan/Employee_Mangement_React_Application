import React, { useEffect, useState } from 'react'
import { deleteEmployees, ListEmployees } from '../EmployeeService';
import { Link, useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
   const [employees,setEmployees] = useState([]);
   const navigator = useNavigate();
   useEffect(()=>{
       getAllEmployees();
   },[])

   function getAllEmployees(){
     ListEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch((error)=>{
            console.error(error);
        })
   }

   function NavigateToAddEmployee(){
            navigator("/add-employee");
   }
   function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
   }
   function deleteEmployee(deleteid){

    deleteEmployees(deleteid).then(response=>{
        console.log(response)
        document.getElementById('success').value = response.data;
        getAllEmployees();
    }).catch((error)=>{
        console.error(error);
        document.getElementById('success').value = 'deleted failed';
    })

    
   }

  return (
    <div className='container'>
        <h2 className='text-center'>List Employees</h2> 
            <h3 id='success'></h3>
      <button type="button" className="btn btn-primary mb-3" onClick={NavigateToAddEmployee}>AddEmployee</button>
        <table border="1px" width="35px"  cellPadding="20px" className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>firstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Company</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(emp =>
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.firstName}</td>
                         <td>{emp.lastName}</td>
                          <td>{emp.email}</td>
                           <td>{emp.salary}</td>
                           <td>{emp.company_name}</td>
                           <td><button className='btn btn-info' onClick={() => updateEmployee(emp.id) }>update</button>&nbsp;&nbsp;<button className='btn btn-danger' onClick={() => deleteEmployee(emp.id)} >Delete</button></td>

                    </tr>)
                }
           </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent