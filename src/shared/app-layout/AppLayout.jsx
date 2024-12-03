import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';

function AppLayout() {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
