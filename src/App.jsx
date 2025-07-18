import './App.css'
import React , {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Header,Footer } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  
 const [loading, setLoading] = useState(true)
 const dispatch = useDispatch()

 useEffect(() => {
   authService.getCurrentUser()
   .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }
   })
   .finally(()=>setLoading(false))
 
   
 }, [])
 

  return (
    <>
    <Header/>
    <main>
      
    </main>
    <Outlet/>
    <div className='bg-amber-300'>HOI</div>
     A blog with appwrite
     <Footer/>
    </>
  )
}

export default App
