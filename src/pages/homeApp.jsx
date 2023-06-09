import { oauth2 } from "fhirclient";
import { useEffect, useState } from "react";
import { ObserveResource, PatentResource } from "../functions/resource";
import {
  getPatient,
  getObservation,
  UpdatePatentDetails,
} from "../functions/shart-app";
import { LoadingComponent } from "./loadingComponent";
import { OvservationComponent } from "./ovservationComponent";
import { PatientComponent } from "./patientComponent";
import { PatientEditModal } from "./PatientEditModal";

export function HomePage({}) {
  const [errorMessage, setErrorMessage] = useState([]);
  const [client, setClient] = useState();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const insertErrorMessage = (error) => {
    console.log("Error:", error);
    const temp = [...errorMessage];
    temp.push(error.message || "Unknown Error!");
    setErrorMessage(temp);
  };

  useEffect(() => {
    /* get ready the library by using oauth2.ready(); */
    oauth2
      .ready()
      .then((client) => {
        setClient(client);
        console.log(client)
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        insertErrorMessage(err);
      });
  }, []);

  if (!client && !loading)
    return (
      <div className="center">
        We have identified certain issues pertaining to FHIR access. Kindly
        review the console for further details.
      </div>
    );
  if (loading) return <LoadingComponent loading={loading} />;

  return (
    <div className="HomeContainer">
      {/* Patient details shows in this container */}
      <div className="patientDetails">
        <PatientComponent
          setShowModal={setShowModal}
          client={client}
          insertErrorMessage={insertErrorMessage}
        />
      </div>

      {/* Patient details shows in this container */}
      <div className="observasionDetails">
        <OvservationComponent
          client={client}
          insertErrorMessage={insertErrorMessage}
        />
      </div>

      {/* Error messages shows here -- */}
      <div className="errMessagesBox">
        {errorMessage.map((each, i) => (
          <div
            key={i}
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
        ))}
      </div>
      {showModal ? (
        <PatientEditModal
          client={client}
          insertErrorMessage={insertErrorMessage}
          onClose={() => {
            setShowModal(false);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}
