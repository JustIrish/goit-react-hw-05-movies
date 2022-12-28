import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Container, Header, StyledLink, Wrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Toaster />
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Wrapper>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </Container>
  );
};
