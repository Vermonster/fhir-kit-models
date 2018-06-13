### FHIR Kit Models Roadmap

- Move from parsing FHIR Resource Schemas to Structure Definitions
  - Create the models from StructureDefinitions rather than from the FHIR JSON schema
  - Allow the application of profiles to resources using StructureDefinitions
- Include validation on cardinality and type checking
- Add support for DSTU2 and other versions as determined by the community?
- Support migration paths between different versions of FHIR, possible parsing of FHIR mapping language
