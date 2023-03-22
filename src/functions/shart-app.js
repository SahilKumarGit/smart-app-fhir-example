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