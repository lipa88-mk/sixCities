import React from "react";
import { createFileRoute, Navigate } from "@tanstack/react-router";
import { cities } from "../const";

export const Route = createFileRoute("/")({
  component: () => {
    return <Navigate to={'/cities/$name'} params={{name: cities[0].toLowerCase()}}/>;
  },
});
