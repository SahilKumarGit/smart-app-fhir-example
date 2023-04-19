import { useEffect, useState } from "react";
import { CapFirstChar } from "../functions/util";
import { LoadingComponent } from "./loadingComponent";

export function PatientComponent({ client, insertErrorMessage, setShowModal }) {
  const [patient, setPatient] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* get ready the library by using oauth2.ready(); */
    setLoading(true);
    client?.patient
      .read()
      .then((each) => {
        setPatient(each);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        insertErrorMessage(err);
      });
  }, []);

  // Upload File Here
  const uploadFile = async () => {
    const user = await client?.user?.read();
    console.log({ user });
    const body = {
      resourceType: "DocumentReference",
      id: "example",
      identifier: {
        system: "http://example.com/document-ids",
        value: "123-heart-rate-monitor-image",
      },
      status: "current",
      docStatus: "final",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "11507-0",
            display: "Heart rate monitor image",
          },
        ],
        text: "Heart rate monitor image",
      },
      subject: {
        reference: `Patient/${client?.patient?.id}`,
      },
      date: new Date().toISOString(),
      author: [
        {
          reference: `${user.resourceType}/${user.id}`,
          display: `${user.name[0]?.suffix?.join(" ") || ""} ${user.name[0]?.given?.join(" ") || ""} ${user.name[0]?.family || ""}`,
        },
      ],
      // custodian: {
      //   reference: "Organization/example",
      //   display: "ABC Hospital",
      // },
      content: [
        {
          attachment: {
            contentType: "image/png",
            data: "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=",
            title: "Heart Rate Monitor Image",
            creation: new Date().toISOString(),
          },
        },
      ],
      context: {
        sourcePatientInfo: {
          reference: `Patient/${client?.patient?.id}`,
        },
        // related: [
        //   {
        //     type: "derived-from",
        //     target: {
        //       reference: "Observation/example",
        //       display: "Heart Rate Observation",
        //     },
        //   },
        // ],
      },
    };
    // console.log(body)
    // return;

    client
      ?.create(body)
      .then((each) => {
        console.log(each);
      })
      .catch((err) => {
        insertErrorMessage(err);
      });
  };

  const getDocumentsReferance = () => {
    console.log("ID:", client?.patient?.id);
    const query = {
      patient: client?.patient?.id || 0,
    };

    client?.patient
      .request("DocumentReference", query)
      .then((each) => {
        console.log(each);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        insertErrorMessage(err);
      });
  };

  return (
    <div className="PatientComponent">
      <LoadingComponent loading={loading} />
      <nav className="navbar navbar-light">
        <a className="navbar-brand">Patient Details </a>
        <div className="box">
          <div
            onClick={() => getDocumentsReferance()}
            className="btn btn-primary btn-sm mr-2 my-sm-0"
          >
            Documents
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="btn btn-primary btn-sm my-sm-0"
          >
            Edit
          </div>
        </div>
      </nav>
      {!loading ? (
        <div className="body">
          <div className="status">
            Status:{" "}
            {patient.active ? (
              <span className="badge badge-success">Active</span>
            ) : (
              <span className="badge badge-danger">Inactive</span>
            )}
          </div>
          <br />
          <h6>Patent Name</h6>
          {(patient.name || []).map((each, i) => (
            <div key={i} className="card mb-2">
              {each.use ? (
                <div className="card-header">{CapFirstChar(each.use)} Name</div>
              ) : (
                ""
              )}
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    {each.given.length ? (
                      <div className="field">
                        <div className="l">First Name</div>
                        <div className="v">{each.given.join(" ")}</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-6">
                    {each.family ? (
                      <div className="field">
                        <div className="l">Family Name</div>
                        <div className="v">{each.family}</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

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

                {(patient.telecom || []).map((each, i) => (
                  <div key={i} className="col-12">
                    <div className="field">
                      <div className="l">
                        {each.system} {each.use ? `(${each.use})` : ""}
                      </div>
                      <div className="v">{each.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <br />
          <h6>Address</h6>

          {(patient.address || []).map((each, i) => (
            <div key={i} className="card mb-2">
              {each.use ? (
                <div className="card-header">
                  {CapFirstChar(each.use)} Address
                </div>
              ) : (
                ""
              )}

              <div className="card-body">
                <div className="row">
                  {(each.line || []).map((line, i) => (
                    <div key={i} className="col-12">
                      <div className="field">
                        <div className="l">Line {i + 1}</div>
                        <div className="v">{line}</div>
                      </div>
                    </div>
                  ))}

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
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
