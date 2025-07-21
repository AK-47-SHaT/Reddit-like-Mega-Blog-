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
  console.log("🔄 Checking current user...");
  authService.getCurrentUser()
  .then((userData) => {
    if (userData) {
      console.log("✅ Logged in as:", userData);
      dispatch(login({userData}));
    } else {
      console.log("🚫 No user session!");
      dispatch(logout());
    }
  })
  .catch((err) => {
    console.error("❌ getCurrentUser error:", err);
  })
  .finally(() => {
    setLoading(false);
  });
}, []);

 

  return  !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
