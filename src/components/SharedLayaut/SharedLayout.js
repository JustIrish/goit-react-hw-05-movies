import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, StyledLink, Wrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
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
