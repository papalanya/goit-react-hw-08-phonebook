import { Navigate } from 'react-router-dom';
import { UseAuth } from 'Redux/auth/authHook';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = UseAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
