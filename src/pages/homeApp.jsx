import { useEffect, useState } from "react";
import { getData } from "../functions/shart-app";

export function HomePage({}) {
  const [Resp, setResp] = useState();
  useEffect(() => {
    getData()
      .then((resp) => {
        console.log({ resp });
        setResp(resp);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);
  return (
    <div>
      Result:
      <pre>{JSON.stringify(Resp)}</pre>
    </div>
  );
}
