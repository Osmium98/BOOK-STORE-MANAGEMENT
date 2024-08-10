import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";


export function DeleteBook(){
    const [loading,setLoading] = useState(false)
    const navigate =useNavigate();
    const {id} = useParams();

    const handleDeleteBook =()=>{
        setLoading(true);
        setTimeout(()=>{
            axios.delete(`http://localhost:5555/books/${id}`)
        .then(()=>{
            setLoading(false);
            navigate('/')
        })
        .catch((error)=>{
            setLoading(false);
            alert("An error happened.Please check console")
            console.log(error)
        })
        },1000)
        
    }


    return(
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Delete Book</h1>
            {loading?<Spinner />:''}
            <div className="flex flex-col items-center border-2 border-gray-200-400 rounded-xl w-[400px] p-8 mx-auto">
                <h3 className="">Are you Sure .You want to delete this book?</h3>
                {/* <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteBook}
                disabled={loading}>
                    {loading ? "Deleting..." : "Yes,Delete it"}
                    
                </button> */}
                <button type="button" class=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full "
                onClick={handleDeleteBook}
                disabled={loading}
                >
                    {loading ? "Deleting..." : "Yes,Delete it"}

                </button>

            </div>

        </div>
    )
}