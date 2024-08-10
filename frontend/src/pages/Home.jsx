import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs"; // Import BsInfoCircle
import Spinner from "../components/Spinner";
import BooksTable from "../components/home/BooksTable";
import { BooksCard } from "../components/home/BooksCard";
import { Table } from "../components/home/Table";

export function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);

            try {
                const response = await axios.get("http://localhost:5555/books");
                setBooks(response.data.data);
            } catch (error) {
                console.error("Error fetching books:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="p-4">
            <div className="flex justify-center items-center gap-x-4">
                {/* <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => { setShowType('table') }}
                >
                    Table
                </button> */}
                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-sky-300 rounded-lg border border-gray-200 hover:bg-blue-500 hover:text-Black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => { setShowType('table') }}>Table</button>
                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-sky-300 rounded-lg border border-gray-200 hover:bg-blue-500 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 " onClick={() => { setShowType('card') }}>Card</button>
                
                
                {/* <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => { setShowType('card') }}
                >
                    Card
                </button> */}

            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Book List</h1>
                <Link to="/books/create">
                    <MdOutlineAddBox className="text-sky-800 text-4xl" />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (showType === 'table' ?
                (<Table books={books} />) : (<BooksCard books={books} />)

            )}
        </div>
    );
}
