import { CumulioDashboardComponent } from "@cumul.io/react-cumulio-dashboard";
import { useRef } from "react";

export const CumulioWrapper = ({ dashboardKey, dashboardToken }) => {
  const ref = useRef(null);
  return (
    <CumulioDashboardComponent
      ref={ref}
      authKey={dashboardKey}
      authToken={dashboardToken}
      slug={`${process.env.REACT_APP_CUMUL_DASHBOARD_SLUG}`}
      switchScreenModeOnResize={false}
      loaderSpinnerColor="rgb(0, 81, 126)"
      loaderSpinnerBackground="rgb(236 248 255)"
      itemsRendered={(e) => console.log("itemsRendered", e)}
    ></CumulioDashboardComponent>
  );
};
