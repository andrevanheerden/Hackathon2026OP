import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-indigo-600">React App</h1>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Welcome to React</h2>
            <p className="text-gray-600 mb-6">
              Your React application is ready to use with all frameworks and dependencies installed.
            </p>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Counter Demo</h3>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
              >
                count is {count}
              </button>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Installed Frameworks & Tools:</h3>
              <ul className="grid grid-cols-2 gap-4 text-gray-700">
                <li>✓ React & React DOM</li>
                <li>✓ React Router</li>
                <li>✓ Vite</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ Axios</li>
                <li>✓ Zustand (State Management)</li>
                <li>✓ ESLint</li>
                <li>✓ Prettier</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
