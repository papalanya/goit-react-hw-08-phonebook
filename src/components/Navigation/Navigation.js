import { UseAuth } from 'Redux/auth/authHook';

import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = UseAuth();

  return (
    <nav>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      <StyledLink to="/">Log in</StyledLink>
    </nav>
  );
};
