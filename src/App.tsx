import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ServerList from './components/ServerList';

export default function App() {
  return (
    <div className="flex h-screen bg-[#313338]">
      <ServerList />
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 flex">
          <Outlet />
        </main>
      </div>
    </div>
  );
}