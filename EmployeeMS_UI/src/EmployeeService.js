import axios from 'axios';

const REST_API_URL = 'http://localhost:8080/api/employee/allEmployees';
const REST_API_SAVE = 'http://localhost:8080/api/employee/save';
const REST_API_BYID =  'http://localhost:8080/api/employee';
const REST_API_UPdateEmployee=  'http://localhost:8080/api/employee/update';
const REST_API_DELETE =  'http://localhost:8080/api/employee/delete';
export const ListEmployees  = () => axios.get(REST_API_URL);
export const createEmployees = (employee) => axios.post(REST_API_SAVE, employee);
export const updateEmployeesById = (employeeId) => axios.get(REST_API_BYID + '/'+ employeeId)
export const UpdateEmployee = (id,employee) => axios.put(REST_API_UPdateEmployee + '/' + id, employee)
export const deleteEmployees = (id) => axios.delete(REST_API_DELETE + '/' +id);