import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllStudentsPage from './pages/AllStudentsPage'
import StudentDetailsPage from './pages/StudentDetailsPage'
import NewStudent from './pages/NewStudent'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<h1> HomePage </h1>}/>
        <Route path="/students" element={<AllStudentsPage/>}/>
        <Route path="/students/new" element={<NewStudent />}/>
        <Route path="/students/:studentId" element={<StudentDetailsPage/>}/>
        <Route path="*" element={<h1> 404 page </h1>}/>
      </Routes>
    </>
  )
}

export default App
