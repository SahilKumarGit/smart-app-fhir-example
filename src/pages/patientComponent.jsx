import { useEffect, useState } from "react";
import { PatentResource } from "../functions/resource";
import { CapFirstChar } from "../functions/util";
import { LoadingComponent } from "./loadingComponent";

export function PatientComponent({ client, insertErrorMessage, setShowModal }) {
  const [patient, setPatient] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* get ready the library by using oauth2.ready(); */
    setLoading(true);
    client?.patient.read().then(each => {
      setPatient(each)
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      insertErrorMessage(err)
    });
  }, []);

  return <div className="PatientComponent">
    <LoadingComponent loading={loading} />
    <nav className="navbar navbar-light">
      <a className="navbar-brand">Patient Details </a>
      <div onClick={() => setShowModal(true)} className="btn btn-primary my-2 my-sm-0">Edit</div>
    </nav>
    {!loading ?
      <div className="body">
        <div className="status">
          Status: {patient.active ? <span className="badge badge-success">Active</span> : <span className="badge badge-danger">Inactive</span>}
        </div>
        <br />
        <h6>Patent Name</h6>
        {(patient.name || []).map((each, i) => <div key={i} className="card mb-2">
          {each.use ? <div className="card-header">{CapFirstChar(each.use)} Name</div> : ''}
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                {
                  each.given.length ?
                    <div className="field">
                      <div className="l">First Name</div>
                      <div className="v">{each.given.join(' ')}</div>
                    </div>
                    : ''
                }

              </div>
              <div className="col-6">
                {
                  each.family ?
                    <div className="field">
                      <div className="l">Family Name</div>
                      <div className="v">{each.family}</div>
                    </div>
                    : ''
                }
              </div>
            </div>

          </div>
        </div>)}


        <br />
        <h6>Other Info.</h6>
        <div className="card mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="field">
                  <div className="l">Gender</div>
                  <div className="v">{CapFirstChar(patient.gender)}</div>
                </div>
              </div>
              <div className="col-6">
                <div className="field">
                  <div className="l">Birth Date</div>
                  <div className="v">{patient.birthDate}</div>
                </div>
              </div>

              {
                (patient.telecom || []).map((each, i) => <div key={i} className="col-12">
                  <div className="field">
                    <div className="l">{each.system} {each.use ? `(${each.use})` : ''}</div>
                    <div className="v">{each.value}</div>
                  </div>
                </div>)
              }

            </div>
          </div>
        </div>


        <br />
        <h6>Address</h6>

        {
          (patient.address || []).map((each, i) => <div key={i} className="card mb-2">
            {each.use ? <div className="card-header">{CapFirstChar(each.use)} Address</div> : ''}

            <div className="card-body">

              <div className="row">
                {
                  (each.line || []).map((line, i) => <div key={i} className="col-12">
                    <div className="field">
                      <div className="l">Line {i + 1}</div>
                      <div className="v">{line}</div>
                    </div>
                  </div>)
                }

                <div className="col-6">
                  <div className="field">
                    <div className="l">City</div>
                    <div className="v">{each.city}</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="field">
                    <div className="l">Postal Code</div>
                    <div className="v">{each.postalCode}</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="field">
                    <div className="l">State</div>
                    <div className="v">{each.state}</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="field">
                    <div className="l">Country</div>
                    <div className="v">{each.country}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>)
        }



      </div> : ''}
  </div>;
}
