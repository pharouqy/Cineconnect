import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root.jsx'
import Accueil from '../pages/Accueil.jsx'

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Accueil />,
});