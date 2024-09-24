# Project Setup: Cricket Website

This guide walks you through setting up your React project with Tailwind CSS, creating a multi-stage registration form with demo API integration, and deploying the project on GitHub Pages.

## Prerequisites
Make sure the following tools are installed on your system:

- **Node.js** (version 14.x or later)
- **npm** (Node Package Manager, comes with Node.js)

---

## Installation Steps

### 1. Check Node and npm Versions

Open your terminal and run the following commands to check the versions:

```bash
node -v
npm -v
```
### 2. Install FNM (Fast Node Manager)
To manage multiple versions of Node.js, install FNM:
```
winget install Schniz.fnm
```
### 3. Set FNM to Use on Directory Change
Configure FNM to switch Node versions when entering a directory:
```
fnm env --use-on-cd
```
### 4. Update npm
Ensure npm is updated:
```
npm install -g npm
npm rebuild
```
### 5. Create a New React Application
Create your React app by running:
```
npx create-react-app cricket-website
cd cricket-website
```
### 6. Install Tailwind CSS
Add Tailwind CSS as a development dependency:
```
npm install -D tailwindcss
npx tailwindcss init
```
### 7. Set Node Options
If you encounter issues with OpenSSL, set the legacy provider:
```
set NODE_OPTIONS=--openssl-legacy-provider
```
### 8. Clean Up Previous Dependencies (if necessary)
If there are problems with dependencies, clean them up:
```
del package-lock.json
rmdir /s /q node_modules
```
### 9. Install Dependencies Again
Reinstall all project dependencies:
```
npm install
```
### 10. Install React Router for Routing
To enable navigation in your application, install React Router:
```
npm install react-router-dom
```
### 11. Start the Application
Run your application locally:
```
npm start
```

## Tailwind CSS Configuration
In the tailwind.config.js file, add the following configuration:
```
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
```
Tailwind Directives:
Add Tailwind directives to your src/index.css file:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Multi-Stage Registration Form with Demo API Integration
### Setup Form Submission with Axios
In your RegistrationForm.js, update the handleSubmit function to send the form data to a demo API using Axios:
```
import axios from 'axios';
const handleSubmit = async (formData) => {
  try {
    const response = await axios.post('https://reqres.in/api/users', formData);
    console.log(response.data); // Handle success (e.g., show a success message)
  } catch (error) {
    console.error('Error submitting the form:', error); // Handle error (e.g., show an error message)
  }
};
```
### Install Axios for API Requests
To handle API requests, install Axios:
```
npm install axios
```

## Deploying to GitHub Pages
### 1. Install GitHub Pages Package
Install the GitHub Pages package for deploying your React application:
```
npm install gh-pages --save-dev
```
### 2. Update package.json
Add the following properties to your package.json file:
```
"homepage": "https://github.com/<your-username>/<your-repo-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Replace <your-username> with your GitHub username.
Replace <your-repo-name> with the name of your GitHub repository.
### 3. Deploy Your Application
Run the following command to deploy your React app to GitHub Pages:
```
npm run deploy
```
### 4. Access Your Live Site
After deployment, you can view your live application at:
(https://github.com/your-username/your-repo-name)
