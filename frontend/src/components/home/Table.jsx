//flowbite

import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs"; 

export function Table({books}) {
    return (


        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Author
                        </th>
                        <th scope="col" className="px-6 py-3">
                            PublishYear
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Operation
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                    <tr key={book._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th> */}


                        <td className="px-6 py-4">
                            {index + 1}
                        </td>
                        <td className="px-6 py-4">
                            {book.title}
                        </td>
                        <td className="px-6 py-4">
                            {book.author}
                        </td>
                        <td className="px-6 py-4">
                            {book.publishYear}
                        </td>
                        <td className="flex justify px-6 py-4 ">
                            <div className="flex justify-center gap-x-8 ">
                                <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle className="text-2xl text-green-800" />
                                </Link>
                                <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className="text-2xl text-red-600" />
                                </Link>
                            </div>
                            
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}


