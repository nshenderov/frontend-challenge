import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import { AllCats, FavoriteCats, MainLayout } from '@/components';
import '@/styles/main.scss';

const root = document.getElementById('root');

createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<AllCats />} />
          <Route path="favorite-cats" element={<FavoriteCats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
