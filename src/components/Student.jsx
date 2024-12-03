// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { supabase } from './supabaseClient'
// import { useNavigate } from 'react-router-dom'

// export default function Student() {
//     const [studentdata,setStudentData]=useState([])
//     const [user, setUser] = useState();
//     const navigate=useNavigate()
  

//     const googleAuth = async () => {
       
//                 const { data, error } = await supabase.auth.signInWithOAuth({
//                     provider: 'google',
//                     options: {
//                         queryParams: {
//                             access_type: 'offline',
//                             prompt: 'consent',
//                         },
//                     },
//                 })
//             }
//             const handleUser = async () => {
//                         const user = await supabase.auth.getUser();
//                         console.log(user,"user123")
//                         if(user?.data?.user){
//                           setUser(user.data.user);
//                           navigate("/")
                
                
//                         }
                        
                      
                       
//                     }
//                     const LogOut = () => {
//                         supabase.auth.signOut()
//                         setUser(null)
//                     }
//                     useEffect(() => {
//                         handleUser();
//                     }, [])        





//     // console.log(studentdata,"dataaaaaa.....")
//     console.log(supabase,"suppp")


//     useEffect(()=>{
//         getStudentData()

//     },[])


//    async function getStudentData(){
//     try{
//         const {data,error}=await supabase
//         .from('Student')
//         .select('*')
//         if(error) throw error
//         if(data!=null){
//             setStudentData(data)
//             console.log(data,"dataaaaaa.....")
//         }

//     }catch(err){
//         alert(err.message)
//     }

//     }

//     async function deleteStudent(id){
//         try{
//             const {data,error}=await supabase
//             .from("Student")
//             .delete()
//             .eq("id",id)
//             if(error) throw error;
//             window.location.reload()

//         }catch(err){
//             alert(err.message)
//         }

//     }







    



//   return (
//     <>
//     <div className='bg-blue-500 text-white'>
//         {
//            user?(
//             <button onClick={LogOut}>Logout</button>            ):(
//             <button onClick={googleAuth}>SignIn</button>
//             )
//           }
//         </div>


//     <div className='flex flex-col justify-center items-center'>
//         <h3 className='text-2xl font-semibold'>Student Deatils</h3>
//         <Link to="/create"><button className='bg-black text-white py-2 px-3 rounded-lg'>Add +</button></Link>


// <div class="relative overflow-x-auto">
//     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//                 <th scope="col" class="px-6 py-3">
//                     Student Name
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Roll NUmber
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Action
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             {studentdata.map((item)=>{
//                   return <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
               
//                    <td class="px-6 py-4">
//                        {item.name}
//                    </td>
//                    <td class="px-6 py-4">
//                        {item.rollno}
//                    </td>
//                    <td class="px-6 py-4">
//                        <div className='flex'>
//                     <Link to={`/update/${item.id}`}> <button className='bg-green-500 py-2 px-3 rounded-lg mr-5 text-white'>Edit</button></Link> 
//                         <button className='bg-red-500 py-2 px-3 rounded-lg text-white' onClick={()=>deleteStudent(item.id)}>Delete</button>
//                        </div>
//                    </td>
//                </tr>

//             })}
         
     
          
        
//         </tbody>
//     </table>
// </div>


//     </div>
//     </>
//   )
  
// }









import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from './supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Student() {
    const [studentdata, setStudentData] = useState([])
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const googleAuth = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                },
            },
        })
        if (error) {
            console.error(error)
        }
    }

// const getAuth=async()=>{
//     let { data, error } = await supabase.auth.signUp({
//         email: 'nimmanasathish31@gmail.com',
//         password: 'Satish@1234'
//       })
//     }


   

    const handleUser = async () => {
        const { data, error } = await supabase.auth.getUser()
        if (error) {
            console.error(error)
        } else if (data?.user) {
            setUser(data.user)
            navigate("/")
        }
    }

    const LogOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
            console.error(error)
        } else {
            setUser(null)
        }
    }

    useEffect(() => {
        handleUser()
    }, [])

    useEffect(() => {
        getStudentData()
    }, [])

    const getStudentData = async () => {
        try {
            const { data, error } = await supabase
                .from('Student')
                .select('*')
            if (error) throw error
            if (data) {
                setStudentData(data)
            }
        } catch (err) {
            alert(err.message)
        }
    }

    const deleteStudent = async (id) => {
        try {
            const { data, error } = await supabase
                .from("Student")
                .delete()
                .eq("id", id)
            if (error) throw error
            setStudentData(studentdata.filter(item => item.id !== id))
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <>
            <div className='bg-blue-500 text-white'>
                {
                    user ? (
                        <button onClick={LogOut}>Logout</button>
                    ) : (
                        <button onClick={googleAuth}>SignIn</button>
                    )
                }
            </div>
            {user && (

            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-2xl font-semibold'>Student Details</h3>
                <Link to="/create"><button className='bg-black text-white py-2 px-3 rounded-lg'>Add +</button></Link>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Student Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Roll Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentdata.map((item) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                                    <td className="px-6 py-4">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.rollno}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex'>
                                            <Link to={`/update/${item.id}`}>
                                                <button className='bg-green-500 py-2 px-3 rounded-lg mr-5 text-white'>Edit</button>
                                            </Link>
                                            <button className='bg-red-500 py-2 px-3 rounded-lg text-white' onClick={() => deleteStudent(item.id)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            )}
        </>
    )
}

