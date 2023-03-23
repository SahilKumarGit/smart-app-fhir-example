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
        await oauth2.ready().then(smart => {
            {
                smart.patient.api.search({
                    type: 'Observation',
                    query: {
                        code: {
                            $or: [
                                'http://loinc.org|8310-5',
                                'http://loinc.org|8302-2',
                            ]
                        }
                    }
                }).then(response => {
                    const { entry } = response;
                    const observationList = entry.map(item => item.resource);
                    console.log(observationList);
                }).catch(error => {
                    console.error(error);
                });
            }

            {

                smart.patient.search({
                    type: 'Observation',
                    query: {
                        code: {
                            $or: [
                                'http://loinc.org|8310-5',
                                'http://loinc.org|8302-2',
                            ]
                        }
                    }
                }).then(response => {
                    const { entry } = response;
                    const observationList = entry.map(item => item.resource);
                    console.log(observationList);
                }).catch(error => {
                    console.error(error);
                });
            }
        });
    } catch (error) {
        console.log({ error })
    }
}
