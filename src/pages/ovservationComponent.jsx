import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ObserveResource } from "../functions/resource";
import { margeQuentityAndValue } from "../functions/util";
import { LoadingComponent } from "./loadingComponent";

export function OvservationComponent({ client, insertErrorMessage }) {
  const [ovservation, setOvservation] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* get ready the library by using oauth2.ready(); */
    setLoading(true);
    const query = {
      code: {
        $or: ["http://loinc.org|8310-5", "http://loinc.org|8302-2"],
      },
    };
    client?.patient
      .request("Observation", query)
      .then((each) => {
        setOvservation(each);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        insertErrorMessage(err);
      });
  }, []);

  return (
    <div className="OvservationComponent">
      <LoadingComponent loading={loading} />
      <nav className="navbar navbar-light">
        <a className="navbar-brand">Observation </a>
        {/* <div className="btn btn-primary my-2 my-sm-0">Edit</div> */}
      </nav>
      <div className="body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Resource ID</th>
              <th scope="col">Category</th>
              <th scope="col">Code</th>
              <th scope="col">Value/Quantity</th>
              <th scope="col">Effective (Date/Time)</th>
              <th scope="col">Last Update</th>
            </tr>
          </thead>
          <tbody>
            {(ovservation.entry || []).map((each, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td><Link to={`observation/${each.resource?.id}`}>{each.resource?.id || "--"}</Link></td>
                <td>
                  {(each.resource?.category || [])
                    .map((each, ii) => each.text || "--")
                    .join(", ") || "--"}
                </td>
                <td>{each.resource?.code?.text || "--"}</td>
                <td>
                  {each.resource?.valueQuantity?.value
                    ? margeQuentityAndValue(
                      each.resource?.valueQuantity?.unit,
                      each.resource?.valueQuantity?.value
                    )
                    : "--"}
                </td>
                <td>
                  {new Date(each.resource?.effectiveDateTime).toLocaleString()}
                </td>
                <td>
                  {new Date(each.resource?.meta?.lastUpdated).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export const OvservationViewComponent = ({ client, insertErrorMessage, oid, ovservation, setOvservation }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* get ready the library by using oauth2.ready(); */
    setLoading(true);
    console.log(oid)
    client
      .request(`Observation/${oid}`)
      .then((each) => {
        setOvservation(each);
        console.log({ each })
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        insertErrorMessage(err);
      });
  }, []);


  return (
    <div className="PatientComponent">
      <LoadingComponent loading={loading} />
      <nav className="navbar navbar-light">
        <a className="navbar-brand">observation Details </a>
        <div className="box">
          <div
            onClick={() => { }}
            className="btn btn-primary btn-sm my-sm-0"
          >
            Edit
          </div>
        </div>
      </nav>
      {!loading ? (
        <div className="body">
          <h6>Basic Details</h6>
          <div className="card card-body">
            <div className="field">
              <div className="l">Ovservation Id</div>
              <div className="v">{ovservation.id}</div>
            </div>
            <div className="field">
              <div className="l">Effective Date/Time</div>
              <div className="v">{new Date(ovservation.effectiveDateTime).toLocaleString()}</div>
            </div>
            <div className="field">
              <div className="l">Last Updated</div>
              <div className="v">{new Date(ovservation.meta.lastUpdated).toLocaleString()}</div>
            </div>
            <div className="field">
              <div className="l">Status</div>
              <div className="v">{ovservation.status}</div>
            </div>
          </div>

          <br />

          <h6>Value/Quantity Details</h6>
          <div className="card card-body">
            <div className="field">
              <div className="l">Code</div>
              <div className="v">{ovservation.valueQuantity.code}</div>
            </div>
            <div className="field">
              <div className="l">System</div>
              <div className="v">{ovservation.valueQuantity.system}</div>
            </div>
            <div className="field">
              <div className="l">Unit</div>
              <div className="v">{ovservation.valueQuantity.unit}</div>
            </div>
            <div className="field">
              <div className="l">Value</div>
              <div className="v">{ovservation.valueQuantity.value}</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}


export const OvservationUploadsComponent = ({ client, insertErrorMessage, ovservation, setOvservation }) => {

  const [loading, setLoading] = useState(true);

  const inputFile = useRef(null)

  useEffect(() => {
    /* get ready the library by using oauth2.ready(); */
    setLoading(!true);
  }, []);



  const fileUpload = async (mimeType, base64) => {
    console.log({ mimeType, base64 })
    const user = await client?.user?.read();
    const body = {
      resourceType: "DocumentReference",
      identifier: {
        system: "http://example.com/document-ids",
        value: "123-heart-rate-monitor-image",
      },
      status: "current",
      docStatus: "final",
      type: ovservation?.code,
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
            contentType: mimeType,
            data: base64,
            title: ovservation?.code?.text,
            creation: new Date().toISOString(),
          },
        },
      ],
      context: {
        sourcePatientInfo: {
          reference: `Patient/${client?.patient?.id}`,
        },
        related: [
          {
            type: "derived-from",
            target: {
              reference: `Observation/${ovservation.id}`,
              display: ovservation?.code?.text,
            },
          },
        ],
      },
      // relatesTo: [
      //   {
      //     code: "appends",
      //     target: {
      //       "reference": `Observation/${ovservation.id}`
      //     }
      //   }
      // ]
    };
    console.log(body)
    // return
    client
      ?.create(body)
      .then((each) => {
        console.log(each);
      })
      .catch((err) => {
        insertErrorMessage(err);
      });
  }


  const onFileSelectChange = (event) => {
    if (!event.target.files?.length) return
    {
      const file = event.target.files[0]
      console.log(file)
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        fileUpload(file.type, reader.result);
      };
    }
  }


  return (
    <div className="OvservationComponent">
      <LoadingComponent loading={loading} />
      <nav className="navbar navbar-light">
        <a className="navbar-brand">Document Resource</a>
        <input type='file' onChange={onFileSelectChange} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" ref={inputFile} style={{ display: 'none' }} />
        <div onClick={() => inputFile.current.click()} className="btn btn-primary btn-sm my-2 my-sm-0">Add Document</div>
      </nav>
      {!loading ? (
        <div className="body">
        </div>
      ) : (
        ""
      )}
    </div>
  );
}