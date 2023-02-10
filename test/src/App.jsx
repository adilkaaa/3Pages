import './App.css'
import { Axios } from 'axios'
import {Route,Routes, BrowserRouter as Router} from 'react-router-dom'
import { Home } from '../pages/Home'
import { ToDo } from '../pages/ToDo'
import { Header } from '../components/Header'
import { SignUp } from '../pages/SignUp'
function App() {
 
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/to-do' element={<ToDo/>}/>
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
     

    </div>
  )
}

export default App
