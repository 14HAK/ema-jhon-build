import { useContext } from 'react';
import { MyAuthContext } from '../../Context/Context';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(MyAuthContext);

  if (currentUser) {
    return children;
  }
  //when user login you show checkout page otherwise kick login page
  return <Navigate to={'/login'} replace></Navigate>;
};

export default PrivateRoute;
