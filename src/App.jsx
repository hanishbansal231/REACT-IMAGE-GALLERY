
import { Link } from 'react-router-dom'
import './App.css'
import CustomRouter from './routers/CustomRouter'

function App() {
  return (
   <div>
   <Link to={'/'}>
   <h1 className='mainHeading'>Image Gallery</h1>
   </Link>
    <CustomRouter />
   </div>
  )
}

export default App
