import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Student from './Student'
import CreateStudent from './CreateStudent'
import UpdateStudent from './UpdateStudent'

function LandingPage() {
  return (
    <div>

<BrowserRouter>
     <Routes>
   <Route path="/" element={<Student/>} />
  <Route path="/create" element={<CreateStudent/>} />
  <Route path="/update/:id" element={<UpdateStudent/>} />
 </Routes>
</BrowserRouter>
    </div>
  )
}

export default LandingPage
