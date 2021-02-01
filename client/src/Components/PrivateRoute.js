import { useSelector, useDispatch } from "react-redux";
import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

export function PrivateRoute({ children, ...rest }) {
  const user = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
