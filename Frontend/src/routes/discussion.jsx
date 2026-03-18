import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root.jsx'

export const discussionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/discussion',
  component: () => <h1>💬 Discussions</h1>,
});