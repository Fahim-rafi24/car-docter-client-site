// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='inter flex min-h-[100vh] flex-col'>

      {/* header Section Area */}
      <Header></Header>
      
      
      {/* deynamic Route Area */}
      <div className='flex-grow'>
      <Outlet></Outlet>
      </div>
      
      
      {/* Footer Section Area */}
      <Footer></Footer>
    </div>
  )
}
export default App