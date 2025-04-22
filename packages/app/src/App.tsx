import { Route, Routes } from 'react-router-dom';
import { apis } from './apis';
import { Root } from './components/Root';

import {
  AlertDisplay,
} from '@backstage/core-components';
import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';

const app = createApp({
  apis,
});

const routes = (
  <FlatRoutes>
    <Routes>
      <Route path="/" element={<Root />} />
    </Routes>
  </FlatRoutes>
);

export default app.createRoot(
  <>
    <AlertDisplay />
    <AppRouter>
      <Root>{routes}</Root>
    </AppRouter>
  </>,
);
