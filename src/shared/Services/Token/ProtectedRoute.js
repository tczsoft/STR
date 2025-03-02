import {useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../store/useAuth';
import { getuserdetails } from './token';

const isTokenExpired = (decoded) => {
  if (!decoded) return true;

  try {
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  } catch (error) {
    console.error("Invalid token:", error);
    return true;
  }
};

const ProtectedRoute = ({children, allowedRoles }) => {

  const navigate = useNavigate()
  const { isLoggedIn } = useAuth();
  const userRole = getuserdetails() ? getuserdetails().Role : false;

  useEffect(() => {
    if (!isLoggedIn || !allowedRoles?.includes(userRole) || isTokenExpired(getuserdetails())) {
      navigate('/login');
    }
  }, [isLoggedIn, allowedRoles, userRole, navigate]);
  return children;
  
};

export default ProtectedRoute;