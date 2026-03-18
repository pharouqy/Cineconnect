import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root.jsx'

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <h1>🎬 Bienvenue sur CineConnect</h1>,
})