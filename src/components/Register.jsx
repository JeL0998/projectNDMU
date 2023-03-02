import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
    <Navbar />
    <div className="flex flex-col items-center mt-5">
    <div className="w-full lg:w-4/5 xl:w-3/5">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <hr className="max-w-4xl mx-auto py-8" />
        <h2 className="text-3xl font-bold mb-8">Personal Information</h2>
        {/* Last name, first name, middle name, extension */}
        <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/4 px-2">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input type="text" id="last-name" name="last_name" className="form-input w-full py-1 px-3 mb-3  bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:bg-transparent" style={{ textTransform: "capitalize" }} required />
            </div>
            <div className="w-full md:w-1/4 px-2">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input type="text" id="first-name" name="first_name" className="form-input w-full py-1 px-3 mb-3  bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:bg-transparent" style={{ textTransform: "capitalize" }} required />
            </div>
            <div className="w-full md:w-1/4 px-2">
            <label htmlFor="middle-name" className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
            <input type="text" id="middle-name" name="middle_name" className="form-input w-full py-1 px-3 mb-3  bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:bg-transparent" style={{ textTransform: "capitalize" }} required />
            </div>
            <div className="w-full md:w-1/4 px-2">
            <label htmlFor="extension" className="block text-sm font-medium text-gray-700 mb-1">Extension</label>
            <input type="text" id="extension" name="extension" className="form-input w-full py-1 px-3  bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:bg-transparent" />
            </div>
        </div>
        <div className="flex justify-between items-center mt-8">
        <button type="submit" className="btn btn-primary text-white font-semibold py-2 px-4 rounded drop-shadow-md hover:shadow-lg">Save</button>
        <Link to="/">
          <button type="button" className="btn text-white font-semibold py-2 px-4 rounded drop-shadow-md">Back</button>
        </Link>
        </div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Register