import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root.jsx'
import Discussion from '../pages/Discussion.jsx'

export const discussionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/discussion',
  component: () => <Discussion />,
});