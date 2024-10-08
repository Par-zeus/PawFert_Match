import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); 
    const [error, setError] = useState('');
    const navigate = useNavigate();

  
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate successful login with any credentials
        if (username && password) { // Check if fields are not empty
            // Set user as logged in
            setIsLoggedIn(true);

            // Show an alert message
            alert('User logged in successfully');

            // Redirect to homepage
            navigate('/');
        } else {
            // Show error message if fields are empty
            setError('Please enter both username and password');
        }
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen overflow-hidden bg-gray-100">
            <div className="absolute inset-0 bg-footprints bg-blur"></div>

            <div className="w-8/12 max-w-md bg-white p-8 rounded-lg shadow-lg backdrop-blur-md bg-opacity-60">
                <h2 className="text-center text-2xl mb-4 font-bold text-gray-800">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Role Dropdown */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600" htmlFor="role">
                            Role
                        </label>
                        <select
                            id="role"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {/* Username Input */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md">
                            {error}
                        </div>
                    )}

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md mt-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>

                    {/* Register Link */}
                    <div className="text-center mt-3 text-[14px]">
                        <span className="text-gray-400">Don't have an account? </span>
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register here
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;