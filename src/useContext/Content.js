import React, { useContext } from "react";
import { AppsContext } from "./context";

export default function Content() {
  const { apps } = useContext(AppsContext);

  return (
    <div>
      <h1>Description</h1>
      <p>{apps.description}</p>
    </div>
  );
}