# FHIR Models

FHIR Models is an open source library of [FHIR](http://www.hl7.org/fhir/)
Resources for Node.js. Currently, the library supports STU3 sequence version
3.0.1.

Please view our [roadmap](ROADMAP.md) to get a better understanding of what
future features are planned.

## Usage

Assuming you are using [`yarn`](https://yarnpkg.com/lang/en/) as your package
manager. First, install with:

```
$ yarn add fhir-kit-models
```
Then include only the FHIR resources you need and instantiate with valid FHIR
JSON.

```javascript
const { Patient } = require('fhir-kit-models');

const patientJSON = {}; // or valid FHIR payload;

const patient = new Patient(patientJSON);

// List non-null property keys and key-value pairs for the patient instance
const keys = patient.keys();
const entries = patient.entries();

// Return a specific property value
const gender = patient.gender;
const addressText = patient.address[0].text;
const mobileContact = patient.telecom.find(contact => contact.use === 'mobile');

// Iterate over the patient instance
for (let [attr, value] of patient) {console.log(attr)}

// Return the FHIR object as a POJO
for patientObject = patient.toObject();
 ```

### Complementary Packages

Most likely, if you are working with FHIR data you are interfacing with a FHIR
server. Visit our sister project
[fhir-kit-client](https://github.com/Vermonster/fhir-kit-client).

## Contributing

We welcome and encourage contributions to this open source project. We use
GitHub issues to track bug fixes and improvements. We encourage the community
to join discussion, seek clarifications and create pull requests for new
features. Before you start, make sure you take a look at our project
[roadmap](ROADMAP.md) and our [Code of Conduct](CODE_OF_CONDUCT.md).

### Development
#### Install
If you are using [`yarn`](https://yarnpkg.com/lang/en/) as your package manager:
```
yarn install
```


#### Build
Build javascript classes of FHIR Resources from FHIR resource schemas in `dist`
directory:
```
yarn build
```

#### Testing and Linting

To run both testing and linting:
```
yarn lint && yarn test
```

To debug tests add `debugger` to a point in the code to set a breakpoint. Then
run tests with the `debug` option:
```
yarn test debug
```

Command `c` will jump to your breakpoint. Read more commands available in the
[node debugger api](https://nodejs.org/api/debugger.html#debugger_stepping).

### Code of Conduct

Our goal is to encourage a safe environment for all contributors through
promoting an open environment free from harassment. In that goal we expect
participants to adhere to a [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project has been published under the [MIT LICENSE.md](LICENSE.md).
