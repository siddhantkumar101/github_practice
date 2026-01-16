import React from 'react'
import { useAuth } from '../context/AuthContext'
import {useState} from 'react'

function Profile() {
    const {user,logout}=useAuth();
    if(!user)return ;

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          My Profile
        </h2>
        <p className="text-sm text-center text-gray-500 mt-1">
          Account information
        </p>

        {/* Avatar */}
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-indigo-500 flex items-center justify-center text-white text-3xl font-bold">
            U
          </div>
        </div>

        {/* User Info */}
        <div className="mt-6 space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="mt-1 px-4 py-2 border rounded-lg bg-gray-50 text-gray-800">
              {user.username}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1 px-4 py-2 border rounded-lg bg-gray-50 text-gray-800">
              user@email.com
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <div className="mt-1 px-4 py-2 border rounded-lg bg-gray-50 text-gray-800">
              Student
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 space-y-3">
          <button className="w-full py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
            Edit Profile
          </button>

          <button className="w-full py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
          onClick={logout}>
            Logout
          </button>
        </div>

      </div>
    </div>
    </>
    
  )
}

export default Profile