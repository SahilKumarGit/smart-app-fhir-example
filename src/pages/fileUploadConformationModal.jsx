import { useEffect, useState } from "react";
import { ObserveResource, PatentResource } from "../functions/resource";
import { margeQuentityAndValue } from "../functions/util";
import { LoadingComponent } from "./loadingComponent";

export function FileUploadConformationModal({ client, insertErrorMessage, onClose }) {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  const patientManager = () => {
    setPatient(JSON.parse(JSON.stringify(patient)))
  }

  const saveDocument = () => {
    setLoading(true)
    client.update(patient).then(_resp => { onClose() }).catch(insertErrorMessage)
  }

  useEffect(() => {
    setLoading(!true)
  }, []);

  return <div className="PatientEditModal">
    <div className="containerRoot">
      <LoadingComponent loading={loading} />
      <div className="containerBox">
        <nav className="navbar navbar-light">
          <a className="navbar-brand">Conform Document?</a>
          <div className="gb">
            <div onClick={onClose} className="btn btn-light my-2 mr-2 my-sm-0">Cancle</div>
            <div onClick={saveDocument} className="btn btn-primary my-2 my-sm-0">Yes, Conform</div>
          </div>
        </nav>
        {patient ? <div className="body">

        </div> : ''}

      </div>
    </div>

  </div>;
}
