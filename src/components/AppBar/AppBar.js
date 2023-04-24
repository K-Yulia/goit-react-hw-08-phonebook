import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from '..//../hooks/useAuth';
import { Header } from './AppBar.styled';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '..//Loader/Loader';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
