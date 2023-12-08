import { Outlet } from 'react-router-dom';

import { GlobalStyle } from 'Global';
import { Suspense } from 'react';
import {
  Container,
  SliderMenu,
  SliderMenuItem,
  Header,
  StyledLink,
} from 'Styles/AppStyle';

export const AppLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <SliderMenu>
            <SliderMenuItem>
              <StyledLink to="/">Home</StyledLink>
            </SliderMenuItem>
            <SliderMenuItem>
              <StyledLink to="/movies">Movie</StyledLink>
            </SliderMenuItem>
          </SliderMenu>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
    </Container>
  );
};
