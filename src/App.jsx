import { useState } from 'react'

import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <form
          onsubmit={handleSubmit}
          className="w-[420px]"
        >
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <p className="text-gray-600 mb-4"></p>

          {/* Google Button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <span className="text-gray-600 font-bold">Google</span>
            Signin with Google
          </button>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            </label>
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            </label>
          </div>

          <div className="flex items-center justify-between">

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Signin
          </button>

          </div>
        </form>
      </div>
    </>
  )
}

export default App
