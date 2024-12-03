
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Student from './components/Student';
import CreateStudent from './components/CreateStudent';
import UpdateStudent from './components/UpdateStudent';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student/>} />
        <Route path="/create" element={<CreateStudent/>} />
        <Route path="/update/:id" element={<UpdateStudent/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



// import React, { useEffect, useState } from 'react';
// import { supabase } from './components/supabaseClient';




// function AuthGoogle() {
//     const [user, setUser] = useState();
//     console.log(user,"hello....")

    
//     const googleAuth = async () => {
//         const { data, error } = await supabase.auth.signInWithOAuth({
//             provider: 'google',
//             options: {
//                 queryParams: {
//                     access_type: 'offline',
//                     prompt: 'consent',
//                 },
//             },
//         })
//     }
//     const handleUser = async () => {
//         const user = await supabase.auth.getUser();
//         console.log(user,"user123")
//         if(user?.data?.user){
//           setUser(user.data.user);
//           navigate("/")


//         }
        
      
       
//     }
//     const LogOut = () => {
//         supabase.auth.signOut()
//         setUser(null)
//     }
//     useEffect(() => {
//         handleUser();
//     }, [])
//     return (
     
//         <div className='bg-blue-500 text-white'>
//           {
//             user?(
//               <button onClick={LogOut}>Logout</button>
//             ):(
//               <button onClick={googleAuth}>SignIn</button>
//             )
//           }
//         </div>
        
//     )
// }
// export default AuthGoogle;






