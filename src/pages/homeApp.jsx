import { oauth2 } from "fhirclient";
import { useEffect, useState } from "react";
import { ObserveResource, PatentResource } from "../functions/resource";
import {
  getPatient,
  getObservation,
  UpdatePatentDetails,
} from "../functions/shart-app";
import { LoadingComponent } from "./loadingComponent";
import { PatientComponent } from "./patientComponent";

export function HomePage({ }) {
  const [errorMessage, setErrorMessage] = useState([]);
  const [client, setClient] = useState();
  const [loading, setLoading] = useState(true);


  const insertErrorMessage = (error) => {
    console.log("Error:", error);
    const temp = [...errorMessage];
    temp.push(error.message || "Unknown Error!");
    setErrorMessage(temp);
  };

  useEffect(() => {
    /* get ready the library by using oauth2.ready(); */
    oauth2.ready().then(client => {
      setClient(client)
      setLoading(false)
    }).catch(err => {
      setLoading(false)
      insertErrorMessage(err);
    });
  }, []);

  if (!client && !loading) return <div className="center">We have identified certain issues pertaining to FHIR access. Kindly review the console for further details.</div>
  if (loading) return <LoadingComponent loading={loading} />

  return (
    <div className="HomeContainer">
      {/* Patient details shows in this container */}
      <div className="patientDetails">
        <PatientComponent
          client={client}
          insertErrorMessage={insertErrorMessage}
        />
      </div>

      {/* Patient details shows in this container */}
      <div className="observasionDetails"></div>

      {/* Error messages shows here -- */}
      <div className="errMessagesBox">
        {errorMessage.map((each) => (
          <>
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>Alert!</strong> {each}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
