import React from "react";
import { Admin, Resource, Naviga } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostList from "./PostList";
import { Switch, Route, Redirect } from "react-router-dom";

function dashad() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource name="posts" list={PostList}></Resource>
    </Admin>
  );
}

export default dashad;
