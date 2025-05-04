import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
            .then((response) => {
                console.log("saved ", response);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            name: "",
            phone: "",
            email: "",
        });
    };

    const navigate = useNavigate();

    return (
        <div className="relative  bg-[#6000ff] h-screen flex items-center justify-center ">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-md"></div>
            <div className='relative max-w-xl mx-auto bg-slate-800 my-20 rounded-lg shadow-lg py-6 px-8 text-white'>
                <div className='text-3xl tracking-wider font-bold text-center py-4'>
                    <p>Add 🧑🏼‍💻 New Employee</p>
                </div>

                <div className='space-y-4'>
                    <input
                        type='text'
                        name='name'
                        value={employee.name}
                        onChange={handleChange}
                        className='w-full p-3 rounded-md text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none'
                        placeholder='Name'
                    />

                    <input
                        type='number'
                        name='phone'
                        value={employee.phone}
                        onChange={handleChange}
                        className='w-full p-3 rounded-md text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none'
                        placeholder='Phone'
                    />

                    <input
                        type='email'
                        name='email'
                        value={employee.email}
                        onChange={handleChange}
                        className='w-full p-3 rounded-md text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none'
                        placeholder='Email'
                    />
                </div>

                <div className='flex justify-center space-x-4 mt-6'>
                    <button
                        onClick={saveEmployee}
                        className='bg-green-500 hover:bg-green-700 py-2 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md'>
                        Save
                    </button>
                    <button
                        onClick={reset}
                        className='bg-blue-500 hover:bg-blue-700 py-2 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md'>
                        Clear
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className='bg-red-500 hover:bg-red-700 py-2 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md'>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;
