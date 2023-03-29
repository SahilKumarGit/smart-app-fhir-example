import { useEffect } from "react";
import { oauth2 } from "fhirclient";
import { LoadingComponent } from "./loadingComponent";
export function LaunchApp({}) {
  useEffect(() => {
    oauth2.authorize({
      client_id: "9212915c-4893-4034-81b9-755588af8f3b",
      scope: "launch user/*.* openid profile",
    });
  }, []);
  return <LoadingComponent loading={true}/>;
}
