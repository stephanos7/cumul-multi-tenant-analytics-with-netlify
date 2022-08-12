import { CumulioDashboardComponent, CumulioDashboard } from '@cumul.io/react-cumulio-dashboard';
import { useRef } from "react";

export const CumulioWrapper = ({ dashboardKey, dashboardToken }) => {
  const ref = useRef(null);
  return (
    <CumulioDashboardComponent
      ref={ref}
      authKey={dashboardKey}
      authToken={dashboardToken}
      dashboardId="5e909dd4-83d1-4e9f-9683-09f84f3afe01"
      switchScreenModeOnResize={false}
      loaderSpinnerColor="rgb(0, 81, 126)"
      loaderSpinnerBackground="rgb(236 248 255)"
      itemsRendered={(e) => console.log("itemsRendered", e)}
    ></CumulioDashboardComponent>
  );
};
