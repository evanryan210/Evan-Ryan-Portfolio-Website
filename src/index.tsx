import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from "./ErrorPage";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./ProjectPages/TestProjectPage";
import * as styles from './styles'
import { NavBar } from './NavBar';
import { MainSection } from './MainSection';
import { Resume } from './Resume';
import { Projects } from './Projects';
import { Footer } from './Footer';
import { ContactForm } from './ContactForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: (<div className={styles.App}>
      <NavBar />{/* ContactForm is in NavBar */}
      <MainSection id='#' />
      {/* <Resume id='resume'/>
      <Projects id='projects'/> */}
      <Footer />
    </div>),
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: (
      <div>
        <NavBar />
        <Projects />
        <Footer />
      </div>
    ),
  },
  {
    path: '/resume',
    element: (
      <div className={styles.App}>
        <NavBar />
        <Resume />
        <Footer />
      </div>
    ),
  },
 {
  path: '/contactform',
  element: (
    <div className={styles.App}>
    <NavBar />
    <ContactForm />
    </div>
  )
}
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    {/* BrowserRouter not working with new React Router lol */}
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}

    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
