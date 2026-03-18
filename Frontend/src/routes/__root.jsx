import { createRootRoute } from "@tanstack/react-router";
import Layout from "../components/Layout";
import NotFoundPage from "../pages/NotFoundPage";

export const rootRoute = createRootRoute({
  component: () => <Layout />,
  notFoundComponent: () => <NotFoundPage />,
});
