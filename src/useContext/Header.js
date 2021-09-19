import React, { useContext } from "react";
import { AppsContext } from "./context";

export default function Header() {
  const { apps } = useContext(AppsContext);

  return (
    <div>
      <div>
        <b>{`Login sebagai ${apps.username}`}</b>
      </div>
      <hr />
    </div>
  );
}
