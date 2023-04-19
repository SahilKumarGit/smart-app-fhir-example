import { useParams } from "react-router-dom";
import { oauth2 } from "fhirclient";
import { useEffect, useState } from "react";
import { LoadingComponent } from "./loadingComponent";
import { OvservationUploadsComponent, OvservationViewComponent } from "./ovservationComponent";
import { FileUploadConformationModal } from "./fileUploadConformationModal";

export function ObservationApp({ }) {
    const [errorMessage, setErrorMessage] = useState([]);
    const [ovservation, setOvservation] = useState();
    const [client, setClient] = useState();
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const { oid } = useParams();

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
                <OvservationViewComponent
                    oid={oid}
                    setShowModal={setShowModal}
                    client={client}
                    insertErrorMessage={insertErrorMessage}
                    ovservation={ovservation}
                    setOvservation={setOvservation}
                />
            </div>

            {/* Patient details shows in this container */}
            <div className="observasionDetails">
                {ovservation ? <OvservationUploadsComponent
                    client={client}
                    setShowModal={setShowModal}
                    insertErrorMessage={insertErrorMessage}
                    ovservation={ovservation}
                    setOvservation={setOvservation}
                /> : 'Loading...'}
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
                <FileUploadConformationModal
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
