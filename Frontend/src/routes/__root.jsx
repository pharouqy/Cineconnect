import { createRootRoute } from "@tanstack/react-router";
import Layout from "../components/Layouts";
import NotFoundPage from "../pages/NotFoundPage";

export const rootRoute = createRootRoute({
  component: () => <Layout />,
  notFoundComponent: () => <NotFoundPage />,
});
