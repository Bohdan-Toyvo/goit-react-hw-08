import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import AppBar from '../AppBar/AppBar';

import css from './Layout.module.css';

export default function Layout() {
  return (
    <div className={css.container}>
      <AppBar />
      <main className={css.mainContent}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
