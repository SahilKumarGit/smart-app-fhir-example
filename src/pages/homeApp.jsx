import { useEffect, useState } from "react";
import {
  getData,
  getObservation,
  UpdatePatentDetails,
} from "../functions/shart-app";

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

    getObservation()
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
      <button
        onClick={() => {
          UpdatePatentDetails()
            .then((resp) => {
              console.log({ resp });
              setResp(resp);
            })
            .catch((err) => {
              console.log({ err });
            });
        }}
      >
        Update
      </button>
      Result:
      <pre>{JSON.stringify(Resp)}</pre>
    </div>
  );
}
