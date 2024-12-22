import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import WelcomeMessage from '../components/WelcomeMessage';
import CategoryChat from '../components/CategoryChat';
import MembersList from '../components/MembersList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <WelcomeMessage />,
      },
      {
        path: '/category/:categoryId',
        element: <CategoryChat />,
      },
      {
        path: '/members',
        element: <MembersList />,
      },
    ],
  },
]);