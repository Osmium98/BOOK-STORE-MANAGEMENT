import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function CreateBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSaveBook = () => {
        setLoading(true);
        setTimeout(() => {
            console.log("Saving book...");
            const data = { title, author, publishYear };


            axios.post("http://localhost:5555/books", data)
                .then(() => {
                    console.log("Book saved successfully");
                    setLoading(false);
                    navigate("/");
                })
                .catch((error) => {
                    setLoading(false);
                    alert("Error Occured, Check the console")
                    console.error('An error occurred:', error.response ? error.response.data : error.message);
                });

        }, 1000)

    };


    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Create Book</h1>
            {loading ? <Spinner /> : ''}
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label htmlFor="" className="text-xl mr-4 text-gray-500">Title</label>
                    <input type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label htmlFor="" className="text-xl mr-4 text-gray-500">Author</label>
                    <input type="text"
                        value={author}
                        onChange={(e) => {
                            setAuthor(e.target.value)
                        }}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label htmlFor="" className="text-xl mr-4 text-gray-500">Publish Year</label>
                    <input type="number"
                        value={publishYear}
                        onChange={(e) => {
                            setPublishYear(e.target.value)
                        }}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <button
                    className={`p-2 m-8 ${loading ? 'bg-gray-300' : 'bg-sky-300'}`}
                    onClick={handleSaveBook}
                    disabled={loading}
                >
                    {loading ? "Saving..." : "Save"}
                </button>
            </div>
        </div>
    )

}