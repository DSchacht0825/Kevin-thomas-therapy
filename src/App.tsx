import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileMenu from './MobileMenu';
import Home from './pages/Home';
import Approach from './pages/Approach';
import Expectations from './pages/Expectations';
import FAQs from './pages/FAQs';

// Layout component that wraps all pages
function Layout() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f3f0' }}>
      <MobileMenu />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

// Create router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "approach", element: <Approach /> },
      { path: "expectations", element: <Expectations /> },
      { path: "faqs", element: <FAQs /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;