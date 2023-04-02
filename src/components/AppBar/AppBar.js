import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UseAuth } from 'Redux/auth/authHook';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = UseAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
