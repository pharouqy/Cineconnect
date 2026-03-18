import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root.jsx'
import Films from '../pages/Films.jsx'

export const filmsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/films',
  component: () => <Films />,
});