import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/operations';
import { UseAuth } from 'Redux/auth/authHook';

import { Wrapper, UserName, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = UseAuth();

  return (
    <Wrapper>
      <UserName> 🙍‍♂️ {user.name}</UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        ⇨
      </Button>
    </Wrapper>
  );
};
