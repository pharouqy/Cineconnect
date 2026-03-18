import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root.jsx'

export const filmsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/films',
  component: () => <h1>🎥 Liste des Films</h1>,
});