import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchSSO } from "../function-invocations/fetchSSO";
import { CumulioWrapper } from "../components/CumulWrapper";
import { Navigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";

const BrandAnalytics = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const [keyToken, setKeyToken] = useState(null);

  const getDashboardCredentials = async () => {
    try {
      let accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      });
      let pair = await fetchSSO(accessToken);
      setKeyToken(pair);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getDashboardCredentials();
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <>
      <NavBar />
      <div style={{ width: "100vw" }}>
        {keyToken !== null && (
          <CumulioWrapper
            dashboardKey={keyToken.key}
            dashboardToken={keyToken.token}
          />
        )}
      </div>
    </>
  ) : (
    <Navigate to="/" replace={true} />
  );
};

export default BrandAnalytics;
