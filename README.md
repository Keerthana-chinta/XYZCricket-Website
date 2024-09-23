# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



A detailed guide for setting up your React project with Tailwind CSS and deploying it on GitHub, including creating a multi-stage registration form with demo API integration.

#Project Setup:

#Prerequisites
#Make sure you have the following installed on your system:
Node.js (version 14.x or later)
npm (comes with Node.js)

#Installation Steps
#Check Node and npm Versions: Open your terminal and run:
node -v
npm -v

#Install FNM (Fast Node Manager): Use the following command to install FNM:
winget install Schniz.fnm

#Set FNM to Use on Directory Change: Run:
fnm env --use-on-cd

#Update npm: Run the following commands to ensure npm is updated:
npm install -g npm
npm rebuild

#Create React App: Create a new React application:
npx create-react-app cricket-website
cd cricket-website

#Install Tailwind CSS: Add Tailwind CSS as a development dependency:
npm install -D tailwindcss
npx tailwindcss init

#Set Node Options: Set the legacy provider:
set NODE_OPTIONS=--openssl-legacy-provider

#Clean Up Previous Dependencies: If you encounter issues, clean up any existing installations:
del package-lock.json
rmdir /s /q node_modules

#Install Dependencies Again: Run:
npm install

#Install React Router: For routing capabilities, install:
npm install react-router-dom

#Start the Application: Launch your application:
npm start

#Install Additional Dependencies:
#Axios: To handle form submission with a POST request:
npm install axios

#Tailwind Configuration
Add the following configuration in your tailwind.config.js:
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

#Tailwind Directives
Add the Tailwind directives to your src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

#Multi-Stage Registration Form with Demo API:
Update the handleSubmit function in your RegistrationForm.js to send the form data to a demo API:
import axios from 'axios';
// Example handleSubmit function
const handleSubmit = async (formData) => {
  try {
    const response = await axios.post('https://reqres.in/api/users', formData);
    console.log(response.data);
    // Handle success (e.g., show a success message)
  } catch (error) {
    console.error('Error submitting the form:', error);
    // Handle error (e.g., show an error message)
  }
};

#Deploying to GitHub Pages:
#Install GitHub Pages Package: Install the GitHub Pages package:
npm install gh-pages --save-dev

#Update package.json: Add the following properties in your package.json:
json:
"homepage": "https://<your-username>.github.io/<your-repo-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

#Deploy Your Application: Run the following command to deploy your application:
npm run deploy

#Access Your Site: Visit https://<your-username>.github.io/<your-repo-name> to see your live application.
