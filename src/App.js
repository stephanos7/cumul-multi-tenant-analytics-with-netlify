import React from "react";
import "./App.css";
import { Routing } from "./Routing";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={`${window.location.origin}/brand-analytics`}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      scope="read:current_user"
    >
      <Routing />
    </Auth0Provider>
  );
}

export default App;
