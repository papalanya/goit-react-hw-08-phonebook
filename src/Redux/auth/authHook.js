import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser, selectIsRefreshing } from './selectors';

export const UseAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
