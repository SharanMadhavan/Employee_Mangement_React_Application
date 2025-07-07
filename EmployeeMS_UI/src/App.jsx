import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AddEmployeeComponent from './components/AddEmployeeComponent'

function App() {

  return (
    <>
  <BrowserRouter>
    <HeaderComponent />
    <Routes>
      {/* //http://localhost:3000/list */}
      <Route path='/list' element = {<ListEmployeeComponent />}></Route>
      <Route path='/header' element={<HeaderComponent/>}> </Route>
      <Route path='add-employee' element={<AddEmployeeComponent/>}></Route>
      <Route path='/edit-employee/:id' element={<AddEmployeeComponent/>}></Route>
      <Route path='/delete-employee/:deleteid' element={<AddEmployeeComponent />}></Route>
    </Routes>
   <FooterComponent />
   </BrowserRouter>
      </>
  )
}

export default App
