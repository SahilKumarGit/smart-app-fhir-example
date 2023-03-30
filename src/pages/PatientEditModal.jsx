import { useEffect, useState } from "react";
import { ObserveResource, PatentResource } from "../functions/resource";
import { margeQuentityAndValue } from "../functions/util";
import { LoadingComponent } from "./loadingComponent";

export function PatientEditModal({ client, insertErrorMessage, onClose }) {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  const patientManager = () => {
    setPatient(JSON.parse(JSON.stringify(patient)))
  }

  const saveChanges = () => {
    setLoading(true)
    client.update(patient).then(_resp => { onClose() }).catch(insertErrorMessage)
  }

  useEffect(() => {
    /* get ready the library by using oauth2.ready(); */
    {
      //Get Patient details first
      setLoading(!true);
      client?.patient.read().then(each => {
        setPatient(each)
        setLoading(false);
      }).catch(err => {
        setLoading(false);
        insertErrorMessage(err)
      });
    }

  }, []);

  return <div className="PatientEditModal">
    <div className="containerRoot">
      <LoadingComponent loading={loading} />
      <div className="containerBox">
        <nav className="navbar navbar-light">
          <a className="navbar-brand">Edit Patient</a>
          <div className="gb">
            <div onClick={onClose} className="btn btn-light my-2 mr-2 my-sm-0">Cancle</div>
            <div onClick={saveChanges} className="btn btn-primary my-2 my-sm-0">Save Changes</div>
          </div>
        </nav>
        {patient ? <div className="body">

          <h6 className="mb-2 mt-4">Basic Info.</h6>
          {
            (patient.name || []).map((each, i) => <div key={i} className="card card-body mb-2">
              <button onClick={() => { patient.name.splice(i, 1); patientManager() }} className="rBtn btn btn-danger btn-sm">Remove</button>
              <div className="row">
                <div className="col-sm-2">
                  <div className="form-group">
                    <label>Use As.</label>
                    <select value={each.use} onChange={(event) => { each.use = event.target?.value; patientManager() }} className="form-control" >
                      <option>usual</option>
                      <option>official</option>
                      <option>temp</option>
                      <option>nickname</option>
                      <option>anonymous</option>
                      <option>old</option>
                      <option>maiden</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" value={each.given?.join(' ')} onChange={(event) => { each.given = event.target?.value?.split(' '); patientManager() }} />
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="form-group">
                    <label>Family Name</label>
                    <input type="text" className="form-control" value={each.family} onChange={(event) => { each.family = event.target?.value; patientManager() }} />
                  </div>
                </div>
              </div>
            </div>)
          }

          <button onClick={() => { patient.name = [...patient.name, {}]; patientManager() }} className="w-100 mb-2 btn btn-light btn-sm">Add More Names</button>


          <h6 className="mb-2 mt-4">Other Info.</h6>
          <div className="card card-body">
            <div className="row">
              <div className="col-sm-4">
                <div className="form-group">
                  <label>Gender</label>
                  <select className="form-control" value={patient.gender} onChange={(event) => { patient.gender = event.target?.value; patientManager() }} >
                    <option>male</option>
                    <option>female</option>
                    <option>other</option>
                    <option>unknown</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>Date of birth</label>
                  <input type="date" className="form-control" value={patient.birthDate} onChange={(event) => { patient.birthDate = event.target?.value; patientManager() }} />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>Status</label>
                  <select className="form-control" value={patient.active} onChange={(event) => { patient.active = event.target?.value; patientManager() }} >
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                </div>
              </div>
            </div>
          </div>



          <h6 className="mb-2 mt-4">Contact Info.</h6>
          {
            (patient.telecom || []).map((each, i) => <div key={i} className="card mb-2 card-body">
              <button onClick={() => { patient.telecom.splice(i, 1); patientManager() }} className="rBtn btn btn-danger btn-sm">Remove</button>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>Use As.</label>
                    <select className="form-control" value={each.use} onChange={(event) => { each.use = event.target?.value; patientManager() }} >
                      <option>home</option>
                      <option>work</option>
                      <option>temp</option>
                      <option>old</option>
                      <option>mobile</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>System</label>
                    <select className="form-control" value={each.system} onChange={(event) => { each.system = event.target?.value; patientManager() }}>
                      <option>phone</option>
                      <option>fax</option>
                      <option>email</option>
                      <option>pager</option>
                      <option>url</option>
                      <option>sms</option>
                      <option>other</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Value</label>
                    <input type="text" className="form-control" value={each.value} onChange={(event) => { each.value = event.target?.value; patientManager() }} />
                  </div>
                </div>
              </div>
            </div>)
          }

          <button onClick={() => { patient.telecom = [...patient.telecom, {}]; patientManager() }} className="w-100 mb-2 btn btn-light btn-sm">Add More Contacts</button>





          <h6 className="mb-2 mt-4">Address Info.</h6>
          {
            (patient.address || []).map((each, i) => <div key={i} className="card mb-2 card-body">
              <button onClick={() => { patient.address.splice(i, 1); patientManager() }} className="rBtn btn btn-danger btn-sm">Remove</button>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Use As.</label>
                    <select className="form-control" value={each.use} onChange={(event) => { each.use = event.target?.value; patientManager() }}>
                      <option>home</option>
                      <option>work</option>
                      <option>temp</option>
                      <option>old</option>
                      <option>mobile</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Type</label>
                    <select className="form-control" value={each.type} onChange={(event) => { each.type = event.target?.value; patientManager() }}>
                      <option>postal</option>
                      <option>physical</option>
                      <option>both</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Lines (Coma seperated.)</label>
                    <input type="text" className="form-control" value={each.line?.join(',')} onChange={(event) => { each.line = event.target?.value?.split(','); patientManager() }} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Postal Code	</label>
                    <input type="text" className="form-control" value={each.postalCode} onChange={(event) => { each.postalCode = event.target?.value; patientManager() }} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" value={each.city} onChange={(event) => { each.city = event.target?.value; patientManager() }} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>District</label>
                    <input type="text" className="form-control" value={each.district} onChange={(event) => { each.district = event.target?.value; patientManager() }} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control" value={each.state} onChange={(event) => { each.state = event.target?.value; patientManager() }} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Country</label>
                    <input type="text" className="form-control" value={each.country} onChange={(event) => { each.country = event.target?.value; patientManager() }} />
                  </div>
                </div>
              </div>
            </div>)
          }

          <button onClick={() => { patient.address = [...patient.address, {}]; patientManager() }} className="w-100 mb-2 btn btn-light btn-sm">Add More Address</button>



        </div> : ''}

      </div>
    </div>

  </div>;
}
