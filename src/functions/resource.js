export const ObserveResource = {
    "resourceType": "Bundle",
    "id": "e591f912-5ba1-49bb-9fc9-784148a5958b",
    "meta": {
        "lastUpdated": "2023-03-29T08:46:52.901+00:00"
    },
    "type": "searchset",
    "total": 43,
    "link": [
        {
            "relation": "self",
            "url": "https://api.logicahealth.org/xs/data/Observation?patient=smart-9995679"
        }
    ],
    "entry": [
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1086-heartrate",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1086-heartrate",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-04-18: heart_rate = 60.0 {beats}/min</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1086-heartrate"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8867-4",
                            "display": "heart_rate"
                        }
                    ],
                    "text": "heart_rate"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2007-04-18",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 60,
                    "unit": "{beats}/min",
                    "system": "http://unitsofmeasure.org",
                    "code": "{beats}/min"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1102-weight",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1102-weight",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: weight = 92.2 kg</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1102-weight"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "3141-9",
                            "display": "weight"
                        }
                    ],
                    "text": "weight"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 92.2,
                    "unit": "kg",
                    "system": "http://unitsofmeasure.org",
                    "code": "kg"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1103-heartrate",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1103-heartrate",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: heart_rate = 50.0 {beats}/min</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1103-heartrate"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8867-4",
                            "display": "heart_rate"
                        }
                    ],
                    "text": "heart_rate"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 50,
                    "unit": "{beats}/min",
                    "system": "http://unitsofmeasure.org",
                    "code": "{beats}/min"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1087-weight",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1087-weight",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-04-18: weight = 87.0 kg</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1087-weight"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "3141-9",
                            "display": "weight"
                        }
                    ],
                    "text": "weight"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2007-04-18",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 87,
                    "unit": "kg",
                    "system": "http://unitsofmeasure.org",
                    "code": "kg"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1106-heartrate",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1106-heartrate",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: heart_rate = 48.0 {beats}/min</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1106-heartrate"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8867-4",
                            "display": "heart_rate"
                        }
                    ],
                    "text": "heart_rate"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 48,
                    "unit": "{beats}/min",
                    "system": "http://unitsofmeasure.org",
                    "code": "{beats}/min"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1089-heartrate",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1089-heartrate",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-18: heart_rate = 80.0 {beats}/min</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1089-heartrate"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8867-4",
                            "display": "heart_rate"
                        }
                    ],
                    "text": "heart_rate"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2007-07-18",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 80,
                    "unit": "{beats}/min",
                    "system": "http://unitsofmeasure.org",
                    "code": "{beats}/min"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1084-weight",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1084-weight",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-12-27: weight = 86.0 kg</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1084-weight"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "3141-9",
                            "display": "weight"
                        }
                    ],
                    "text": "weight"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2006-12-27",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 86,
                    "unit": "kg",
                    "system": "http://unitsofmeasure.org",
                    "code": "kg"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-4",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-4",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2008-01-16: Blood pressure 120/58 mmHg</div>"
                },
                "extension": [
                    {
                        "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/vital-signs#position",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "40199007",
                                    "display": "supine"
                                }
                            ],
                            "text": "supine"
                        }
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2008-01-16",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368209003",
                            "display": "right arm"
                        }
                    ],
                    "text": "right arm"
                },
                "method": {
                    "coding": [
                        {
                            "system": "http://smarthealthit.org/terms/codes/BloodPressureMethod#",
                            "code": "machine",
                            "display": "machine"
                        }
                    ],
                    "text": "machine"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 120,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 58,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-5",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-5",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2008-06-25: Blood pressure 121/73 mmHg</div>"
                },
                "extension": [
                    {
                        "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/vital-signs#position",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "33586001",
                                    "display": "sitting"
                                }
                            ],
                            "text": "sitting"
                        }
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2008-06-25",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368208006",
                            "display": "left arm"
                        }
                    ],
                    "text": "left arm"
                },
                "method": {
                    "coding": [
                        {
                            "system": "http://smarthealthit.org/terms/codes/BloodPressureMethod#",
                            "code": "machine",
                            "display": "machine"
                        }
                    ],
                    "text": "machine"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 121,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 73,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-2",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-2",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-04-18: Blood pressure 121/62 mmHg</div>"
                },
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2007-04-18",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368209003",
                            "display": "right arm"
                        }
                    ],
                    "text": "right arm"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 121,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 62,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1097-heartrate",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1097-heartrate",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2008-06-25: heart_rate = 50.0 {beats}/min</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1097-heartrate"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8867-4",
                            "display": "heart_rate"
                        }
                    ],
                    "text": "heart_rate"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2008-06-25",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 50,
                    "unit": "{beats}/min",
                    "system": "http://unitsofmeasure.org",
                    "code": "{beats}/min"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-3",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-3",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-18: Blood pressure 116/64 mmHg</div>"
                },
                "extension": [
                    {
                        "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/vital-signs#position",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "40199007",
                                    "display": "supine"
                                }
                            ],
                            "text": "supine"
                        }
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2007-07-18",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368209003",
                            "display": "right arm"
                        }
                    ],
                    "text": "right arm"
                },
                "method": {
                    "coding": [
                        {
                            "system": "http://smarthealthit.org/terms/codes/BloodPressureMethod#",
                            "code": "machine",
                            "display": "machine"
                        }
                    ],
                    "text": "machine"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 116,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 64,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-8",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-8",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-06-10: Blood pressure 168/86 mmHg</div>"
                },
                "extension": [
                    {
                        "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/vital-signs#position",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "40199007",
                                    "display": "supine"
                                }
                            ],
                            "text": "supine"
                        }
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-06-10",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "61396006",
                            "display": "left thigh"
                        }
                    ],
                    "text": "left thigh"
                },
                "method": {
                    "coding": [
                        {
                            "system": "http://smarthealthit.org/terms/codes/BloodPressureMethod#",
                            "code": "machine",
                            "display": "machine"
                        }
                    ],
                    "text": "machine"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 168,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 86,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-9",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-9",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: Blood pressure 122/66 mmHg</div>"
                },
                "extension": [
                    {
                        "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/vital-signs#position",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "40199007",
                                    "display": "supine"
                                }
                            ],
                            "text": "supine"
                        }
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368208006",
                            "display": "left arm"
                        }
                    ],
                    "text": "left arm"
                },
                "method": {
                    "coding": [
                        {
                            "system": "http://smarthealthit.org/terms/codes/BloodPressureMethod#",
                            "code": "machine",
                            "display": "machine"
                        }
                    ],
                    "text": "machine"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 122,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 66,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-6",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-6",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2008-06-25: Blood pressure 119/70 mmHg</div>"
                },
                "extension": [
                    {
                        "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/vital-signs#position",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "33586001",
                                    "display": "sitting"
                                }
                            ],
                            "text": "sitting"
                        }
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2008-06-25",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368208006",
                            "display": "left arm"
                        }
                    ],
                    "text": "left arm"
                },
                "method": {
                    "coding": [
                        {
                            "system": "http://smarthealthit.org/terms/codes/BloodPressureMethod#",
                            "code": "machine",
                            "display": "machine"
                        }
                    ],
                    "text": "machine"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 119,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 70,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-7",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-7",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-06-10: Blood pressure 137/68 mmHg</div>"
                },
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-06-10",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368209003",
                            "display": "right arm"
                        }
                    ],
                    "text": "right arm"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 137,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 68,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1104-heartrate",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1104-heartrate",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: heart_rate = 49.0 {beats}/min</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1104-heartrate"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8867-4",
                            "display": "heart_rate"
                        }
                    ],
                    "text": "heart_rate"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 49,
                    "unit": "{beats}/min",
                    "system": "http://unitsofmeasure.org",
                    "code": "{beats}/min"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1083-heartrate",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1083-heartrate",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-12-27: heart_rate = 54.0 {beats}/min</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1083-heartrate"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8867-4",
                            "display": "heart_rate"
                        }
                    ],
                    "text": "heart_rate"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2006-12-27",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 54,
                    "unit": "{beats}/min",
                    "system": "http://unitsofmeasure.org",
                    "code": "{beats}/min"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-12",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-12",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: Blood pressure 121/57 mmHg</div>"
                },
                "extension": [
                    {
                        "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/vital-signs#position",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "40199007",
                                    "display": "supine"
                                }
                            ],
                            "text": "supine"
                        }
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368209003",
                            "display": "right arm"
                        }
                    ],
                    "text": "right arm"
                },
                "method": {
                    "coding": [
                        {
                            "system": "http://smarthealthit.org/terms/codes/BloodPressureMethod#",
                            "code": "machine",
                            "display": "machine"
                        }
                    ],
                    "text": "machine"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 121,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 57,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1107-heartrate",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1107-heartrate",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: heart_rate = 52.0 {beats}/min</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1107-heartrate"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8867-4",
                            "display": "heart_rate"
                        }
                    ],
                    "text": "heart_rate"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 52,
                    "unit": "{beats}/min",
                    "system": "http://unitsofmeasure.org",
                    "code": "{beats}/min"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-11",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-11",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: Blood pressure 119/60 mmHg</div>"
                },
                "extension": [
                    {
                        "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/vital-signs#position",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "40199007",
                                    "display": "supine"
                                }
                            ],
                            "text": "supine"
                        }
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368209003",
                            "display": "right arm"
                        }
                    ],
                    "text": "right arm"
                },
                "method": {
                    "coding": [
                        {
                            "system": "http://smarthealthit.org/terms/codes/BloodPressureMethod#",
                            "code": "machine",
                            "display": "machine"
                        }
                    ],
                    "text": "machine"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 119,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 60,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-14",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-14",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: Blood pressure 123/58 mmHg</div>"
                },
                "extension": [
                    {
                        "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/vital-signs#position",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "40199007",
                                    "display": "supine"
                                }
                            ],
                            "text": "supine"
                        }
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368209003",
                            "display": "right arm"
                        }
                    ],
                    "text": "right arm"
                },
                "method": {
                    "coding": [
                        {
                            "system": "http://smarthealthit.org/terms/codes/BloodPressureMethod#",
                            "code": "machine",
                            "display": "machine"
                        }
                    ],
                    "text": "machine"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 123,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 58,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-13",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-13",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: Blood pressure 131/71 mmHg</div>"
                },
                "extension": [
                    {
                        "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/vital-signs#position",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "40199007",
                                    "display": "supine"
                                }
                            ],
                            "text": "supine"
                        }
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368209003",
                            "display": "right arm"
                        }
                    ],
                    "text": "right arm"
                },
                "method": {
                    "coding": [
                        {
                            "system": "http://smarthealthit.org/terms/codes/BloodPressureMethod#",
                            "code": "machine",
                            "display": "machine"
                        }
                    ],
                    "text": "machine"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 131,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 71,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-10",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-10",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: Blood pressure 121/65 mmHg</div>"
                },
                "extension": [
                    {
                        "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/vital-signs#position",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "40199007",
                                    "display": "supine"
                                }
                            ],
                            "text": "supine"
                        }
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368209003",
                            "display": "right arm"
                        }
                    ],
                    "text": "right arm"
                },
                "method": {
                    "coding": [
                        {
                            "system": "http://smarthealthit.org/terms/codes/BloodPressureMethod#",
                            "code": "machine",
                            "display": "machine"
                        }
                    ],
                    "text": "machine"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 121,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 65,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1088-height",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1088-height",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-18: height = 197.0 cm</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1088-height"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8302-2",
                            "display": "height"
                        }
                    ],
                    "text": "height"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2007-07-18",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 197,
                    "unit": "cm",
                    "system": "http://unitsofmeasure.org",
                    "code": "cm"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1082-height",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1082-height",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-12-27: height = 198.0 cm</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1082-height"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8302-2",
                            "display": "height"
                        }
                    ],
                    "text": "height"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2006-12-27",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 198,
                    "unit": "cm",
                    "system": "http://unitsofmeasure.org",
                    "code": "cm"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1091-height",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1091-height",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2008-01-16: height = 197.5 cm</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1091-height"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8302-2",
                            "display": "height"
                        }
                    ],
                    "text": "height"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2008-01-16",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 197.5,
                    "unit": "cm",
                    "system": "http://unitsofmeasure.org",
                    "code": "cm"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1110-weight",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1110-weight",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2010-12-22: weight = 92.3 kg</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1110-weight"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "3141-9",
                            "display": "weight"
                        }
                    ],
                    "text": "weight"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2010-12-22",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 92.3,
                    "unit": "kg",
                    "system": "http://unitsofmeasure.org",
                    "code": "kg"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1096-weight",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1096-weight",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2008-06-25: weight = 90.2 kg</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1096-weight"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "3141-9",
                            "display": "weight"
                        }
                    ],
                    "text": "weight"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2008-06-25",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 90.2,
                    "unit": "kg",
                    "system": "http://unitsofmeasure.org",
                    "code": "kg"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1101-heartrate",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1101-heartrate",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: heart_rate = 50.0 {beats}/min</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1101-heartrate"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8867-4",
                            "display": "heart_rate"
                        }
                    ],
                    "text": "heart_rate"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 50,
                    "unit": "{beats}/min",
                    "system": "http://unitsofmeasure.org",
                    "code": "{beats}/min"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1093-weight",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1093-weight",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2008-01-16: weight = 89.4 kg</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1093-weight"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "3141-9",
                            "display": "weight"
                        }
                    ],
                    "text": "weight"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2008-01-16",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 89.4,
                    "unit": "kg",
                    "system": "http://unitsofmeasure.org",
                    "code": "kg"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1099-weight",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1099-weight",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-06-10: weight = 94.7 kg</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1099-weight"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "3141-9",
                            "display": "weight"
                        }
                    ],
                    "text": "weight"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-06-10",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 94.7,
                    "unit": "kg",
                    "system": "http://unitsofmeasure.org",
                    "code": "kg"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-15",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-15",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2010-12-22: Blood pressure 123/59 mmHg</div>"
                },
                "extension": [
                    {
                        "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/vital-signs#position",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "33586001",
                                    "display": "sitting"
                                }
                            ],
                            "text": "sitting"
                        }
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "55284-4",
                            "display": "Blood pressure"
                        }
                    ],
                    "text": "Blood pressure"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2010-12-22",
                "performer": [
                    {
                        "reference": "Practitioner/smart-Practitioner-7880378"
                    }
                ],
                "bodySite": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368209003",
                            "display": "right arm"
                        }
                    ],
                    "text": "right arm"
                },
                "method": {
                    "coding": [
                        {
                            "system": "http://smarthealthit.org/terms/codes/BloodPressureMethod#",
                            "code": "machine",
                            "display": "machine"
                        }
                    ],
                    "text": "machine"
                },
                "component": [
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8480-6",
                                    "display": "Systolic blood pressure"
                                }
                            ],
                            "text": "Systolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 123,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    },
                    {
                        "code": {
                            "coding": [
                                {
                                    "system": "http://loinc.org",
                                    "code": "8462-4",
                                    "display": "Diastolic blood pressure"
                                }
                            ],
                            "text": "Diastolic blood pressure"
                        },
                        "valueQuantity": {
                            "value": 59,
                            "unit": "mmHg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mm[Hg]"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1090-weight",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1090-weight",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-18: weight = 90.2 kg</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1090-weight"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "3141-9",
                            "display": "weight"
                        }
                    ],
                    "text": "weight"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2007-07-18",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 90.2,
                    "unit": "kg",
                    "system": "http://unitsofmeasure.org",
                    "code": "kg"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1092-heartrate",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1092-heartrate",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2008-01-16: heart_rate = 47.0 {beats}/min</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1092-heartrate"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8867-4",
                            "display": "heart_rate"
                        }
                    ],
                    "text": "heart_rate"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2008-01-16",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 47,
                    "unit": "{beats}/min",
                    "system": "http://unitsofmeasure.org",
                    "code": "{beats}/min"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1109-heartrate",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1109-heartrate",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2010-12-22: heart_rate = 52.0 {beats}/min</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1109-heartrate"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8867-4",
                            "display": "heart_rate"
                        }
                    ],
                    "text": "heart_rate"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2010-12-22",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 52,
                    "unit": "{beats}/min",
                    "system": "http://unitsofmeasure.org",
                    "code": "{beats}/min"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1095-heartrate",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1095-heartrate",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2008-06-25: heart_rate = 47.0 {beats}/min</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1095-heartrate"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8867-4",
                            "display": "heart_rate"
                        }
                    ],
                    "text": "heart_rate"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2008-06-25",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 47,
                    "unit": "{beats}/min",
                    "system": "http://unitsofmeasure.org",
                    "code": "{beats}/min"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1085-height",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1085-height",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-04-18: height = 197.5 cm</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1085-height"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8302-2",
                            "display": "height"
                        }
                    ],
                    "text": "height"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2007-04-18",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 197.5,
                    "unit": "cm",
                    "system": "http://unitsofmeasure.org",
                    "code": "cm"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1094-height",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1094-height",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2008-06-25: height = 197.5 cm</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1094-height"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8302-2",
                            "display": "height"
                        }
                    ],
                    "text": "height"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2008-06-25",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 197.5,
                    "unit": "cm",
                    "system": "http://unitsofmeasure.org",
                    "code": "cm"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1100-height",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1100-height",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: height = 197.5 cm</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1100-height"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8302-2",
                            "display": "height"
                        }
                    ],
                    "text": "height"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 197.5,
                    "unit": "cm",
                    "system": "http://unitsofmeasure.org",
                    "code": "cm"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1105-heartrate",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1105-heartrate",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-12-23: heart_rate = 53.0 {beats}/min</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1105-heartrate"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8867-4",
                            "display": "heart_rate"
                        }
                    ],
                    "text": "heart_rate"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-12-23",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 53,
                    "unit": "{beats}/min",
                    "system": "http://unitsofmeasure.org",
                    "code": "{beats}/min"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1098-height",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1098-height",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-06-10: height = 198.0 cm</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1098-height"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8302-2",
                            "display": "height"
                        }
                    ],
                    "text": "height"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2009-06-10",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 198,
                    "unit": "cm",
                    "system": "http://unitsofmeasure.org",
                    "code": "cm"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://api.logicahealth.org/xs/data/Observation/smart-1108-height",
            "resource": {
                "resourceType": "Observation",
                "id": "smart-1108-height",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-07-15T03:10:34.000+00:00",
                    "source": "#eryp9ahfuDmUE2d2"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2010-12-22: height = 197.0 cm</div>"
                },
                "identifier": [
                    {
                        "use": "official",
                        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                        "value": "smart-1108-height"
                    }
                ],
                "status": "unknown",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ],
                        "text": "Vital Signs"
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8302-2",
                            "display": "height"
                        }
                    ],
                    "text": "height"
                },
                "subject": {
                    "reference": "Patient/smart-9995679"
                },
                "effectiveDateTime": "2010-12-22",
                "performer": [
                    {
                        "reference": "Practitioner/SMART-1234"
                    }
                ],
                "valueQuantity": {
                    "value": 197,
                    "unit": "cm",
                    "system": "http://unitsofmeasure.org",
                    "code": "cm"
                }
            },
            "search": {
                "mode": "match"
            }
        }
    ]
}


export const PatentResource = {
    "resourceType": "Patient",
    "id": "smart-981968",
    "meta": {
        "versionId": "1",
        "lastUpdated": "2020-07-15T03:10:16.000+00:00",
        "source": "#umFuoewHhad5Q525"
    },
    "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Brian Brooks</div>"
    },
    "identifier": [
        {
            "use": "official",
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                        "code": "MR",
                        "display": "Medical Record Number"
                    }
                ],
                "text": "Medical Record Number"
            },
            "system": "http://hospital.smarthealthit.org",
            "value": "smart-981968"
        }
    ],
    "active": true,
    "name": [
        {
            "use": "official",
            "family": "Brooks",
            "given": [
                "Brian",
                "N"
            ]
        }
    ],
    "telecom": [
        {
            "system": "phone",
            "value": "800-369-6403",
            "use": "home"
        },
        {
            "system": "email",
            "value": "brian.brooks@example.com"
        }
    ],
    "gender": "male",
    "birthDate": "1956-03-23",
    "address": [
        {
            "use": "home",
            "line": [
                "82 Lake St"
            ],
            "city": "Bixby",
            "state": "OK",
            "postalCode": "74008",
            "country": "USA"
        }
    ],
    "generalPractitioner": [
        {
            "reference": "Practitioner/smart-Practitioner-71614502"
        }
    ]
}