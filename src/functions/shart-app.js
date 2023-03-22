import { oauth2 } from "fhirclient";
export async function getData() {
    try {
        console.log("Loading...")
        const client = await oauth2.ready().then(async client => {
            const patient = await client.patient.read()
            console.log({ patient })
            return client
        })
        console.log({ client })
    } catch (error) {
        console.log({ error })
    }
}

export async function getObservation() {
    try {
        console.log("Loading...")
        const client = await oauth2.ready();
        const obv = client.patient.api.fetchAll({
            type: 'Observation',
            query: {
                code: {
                    $or: [
                        'http://loinc.org|8310-5',
                        'http://loinc.org|8302-2',
                    ]
                }
            }
        })
        const obvResp = await Promise.all([obv]);
        console.log({ obvResp })
    } catch (error) {
        console.log({ error })
    }
}
