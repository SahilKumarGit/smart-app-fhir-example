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
        const query = {
            code: {
                $or: [
                    'http://loinc.org|8310-5',
                    'http://loinc.org|8302-2',
                ]
            }
        }
        const response = await client.patient.request('Observation', query).then(response => response.data.entry.map(entry => entry.resource))
        console.log({ response });
        return response
    } catch (error) {
        console.log({ error })
        throw Error(error)
    }
}
