
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import { useEffect } from 'react';

export default function UpdateStudent() {
    const [data,setData]=useState({
        name:"",
        rollno:""
    })
    const {name,rollno}=data;
    const {id}=useParams()
    const naviagte=useNavigate()


    const getStudentData=async()=>{
        try{
            const {data,error}=await supabase
            .from("Student")
            .select("*")
            .eq("id",id)
            .single()
            if(error) throw error;
            setData({name:data.name,rollno:data.rollno})

        }catch(err){
            alert(err.message)
        }

    }
  

    useEffect(()=>{
        getStudentData()
    },[id])

    const onChnageHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    const onSubmitHandler=async(e)=>{
        e.preventDefault()
        try{
            const{data,error}=await supabase
            .from('Student')
            .update({
                name:name,
                rollno:rollno
            })
            .eq("id",id)
            if(error) throw error
            naviagte("/")
        }catch(err){
            alert(err.message)
        }

    }

  
  
  return (
    <div className='flex flex-col justify-center items-center'>
        <h3 className='text-2xl font-semibold'>Updated student form..</h3>


<form class="max-w-sm mx-auto" onSubmit={onSubmitHandler} autoComplete='off'>
  <div class="mb-5">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required  name="name" value={name} onChange={onChnageHandler}/>
  </div>
  <div class="mb-5">
    <label for="rollno" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Rollno</label>
    <input type="number" id="rollno" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required name="rollno" value={rollno} onChange={onChnageHandler}/>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
  )
}
