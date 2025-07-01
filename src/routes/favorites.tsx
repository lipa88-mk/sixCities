import { createFileRoute } from "@tanstack/react-router";
import FavoritesScreen from "../pages/favorites-screen/favorites-screen";

export const Route = createFileRoute("/favorites")({
  component: FavoritesScreen,
});
