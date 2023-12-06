import { Outlet } from 'react-router-dom';

import { GlobalStyle } from 'Global';
import { Suspense } from 'react';
import {
  Container,
  SliderMenu,
  SliderMenuItem,
  Header,
  StyledLink,
} from 'AppStyle';

// import { useState } from 'react';
// import { Loader } from 'components/Animations/LoadingSpiner';

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
// const [isLoading, setisLoading] = useState(false);
// {
//   isLoading && <Loader />;
// }
