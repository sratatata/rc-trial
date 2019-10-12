# Judge App

The little jury helper application for marking and calculating score.

Initially, it's going to implement set of rules from rc-trial.pl and all credits for those should stay with rc-trial.pl. 

### Development
#### Directory structure:
- `lambdas` contains firebase scripts that act as a backend logic
- `public` basic directory to attach your app into. It contains scrub HTML and minimal CSS that is converted along with `src` directory into compiled, minified, `build` directory. 
- `src` application JS source file

#### Required software:
In order to compile app `npm` have to be installed on system. On `Debian` based distributions, to install `npm` write:
```
    npm install -g npm
```
`-g` parameter is optional, with it npm is installed *g*lobally (for all system users)

#### Running app locally:
In the project directory, you can run:
##### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
#### Running tests:
##### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
#### Building (compiling) app:
##### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

##### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

##### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

##### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

##### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
