// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='inter'>
      <Header></Header>
      
      {/* deynamic Route Area */}
      <Outlet></Outlet>
    </div>
  )
}
export default App