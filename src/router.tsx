import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import Members from './components/Members';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'chat/:categoryId/:chatroomName',
        element: <ChatRoom />,
      },
      {
        path: 'members',
        element: <Members />,
      },
    ],
  },
]);
