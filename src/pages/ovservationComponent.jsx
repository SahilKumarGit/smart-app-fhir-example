import { useEffect, useState } from "react";
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
        $or: [
          'http://loinc.org|8310-5',
          'http://loinc.org|8302-2',
        ]
      }
    }
    client?.patient.request('Observation', query).then(each => {
      setOvservation(each)
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      insertErrorMessage(err)
    });
  }, []);

  return <div className="OvservationComponent">
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
          {
            (ovservation.entry || []).map((each, i) => <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{each.resource?.id || '--'}</td>
              <td>{(each.resource?.category || []).map((each, ii) => each.text || '--').join(', ') || '--'}</td>
              <td>{margeQuentityAndValue(each.resource?.code?.text) || '--'}</td>
              <td>{each.resource?.valueQuantity?.value ? margeQuentityAndValue(each.resource?.valueQuantity?.unit, each.resource?.valueQuantity?.value) : '--'}</td>
              <td>{new Date(each.resource?.effectiveDateTime).toLocaleString()}</td>
              <td>{new Date(each.resource?.meta?.lastUpdated).toLocaleString()}</td>
            </tr>)
          }

        </tbody>
      </table>
    </div>
  </div>;
}
