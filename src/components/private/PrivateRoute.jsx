import { useContext } from 'react';
import { MyAuthContext } from '../../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../loading/Loading';

const PrivateRoute = ({ children }) => {
  const { currentUser, isLoading } = useContext(MyAuthContext);
  //first need location on react router don
  const location = useLocation();
  // console.log(location);
  console.log(isLoading);
  if (isLoading) {
    return <Loading></Loading>;
  }

  if (currentUser) {
    return children;
  }
  //when user login you show checkout page otherwise kick login page
  // then set the state on this
  // then use it login page
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
