import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbare from "../components/navbare.jsx";

export const rootRoute = createRootRoute({
  component: () => (
    <Navbare>
      <Outlet />
    </Navbare>
  ),
});
