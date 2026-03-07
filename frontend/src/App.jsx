import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <div className='bg-main-bg text-gray-300 min-w-screen min-h-screen '>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;