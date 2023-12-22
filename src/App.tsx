import './assets/css/App.css';
import './assets/css/layout.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import {} from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import {
  ChakraProvider,
  // extendTheme
} from '@chakra-ui/react';
import initialTheme from './theme/theme'; //  { themeGreen }
import { useEffect, useState } from 'react';
// Chakra imports

export default function Main() {

  const [userLogged, setUserLogged] = useState(
    JSON.parse(localStorage.getItem("userLoginStatus"))
  );

  // eslint-disable-next-line
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  return (
    <ChakraProvider theme={currentTheme}>
      <div>
        <Routes>
          <Route path="auth/*" element={<AuthLayout />} />
          <Route path="admin/*" element={ <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} /> } />
          <Route path="/" element={<Navigate to="/auth" replace />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}
