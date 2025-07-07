import React from 'react'
import ListEmployeeComponent from './ListEmployeeComponent'
import { Link } from 'react-router-dom'

export const HeaderComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
          <Link className="navbar-brand" to="header">Home</Link>
          <Link className="navbar-brand" to="/add-employee">AddEmployee</Link>
          <Link to="list" className="navbar-brand" >ListEmployees</Link>
          <Link className="navbar-brand" to="help">Help</Link>
      </nav>
    </div>
  )
}
