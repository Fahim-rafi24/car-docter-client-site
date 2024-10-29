// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useContext, useEffect } from 'react'
import { UserContext } from './UserAuthContext/UserAuthContext'




function App() {

  // useContext
  const { currentUser } = useContext(UserContext);
  // first time render
  useEffect(() => {
    const unsubcribe = () => {
      currentUser()
    }
    unsubcribe()
  }, [])


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