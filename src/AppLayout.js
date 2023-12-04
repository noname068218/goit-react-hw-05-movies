import { NavLink, Outlet } from 'react-router-dom';
import { GlobalStyle } from 'Global';
// import { useState } from 'react';
// import { Loader } from 'components/Animations/LoadingSpiner';

export const AppLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movie</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      <GlobalStyle />
    </div>
  );
};
// const [isLoading, setisLoading] = useState(false);
// {
//   isLoading && <Loader />;
// }
