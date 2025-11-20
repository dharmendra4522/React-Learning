import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

const Dashboard = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <div className="bg-white shadow p-6 rounded-xl">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to the Dashboard
        </h2>
        <p className='text-xl'>Welcome, {user.name}</p>
        <p className="text-gray-700">
          This is the dashboard page. You can manage your account here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
