## IT2810: Web Development - Project 3, Group 01

This is the third project in the NTNU course IT2810 - Web Development, autumn 2017. In this project, the group has made an Personal Assistent. With this application, you can keep track of you calendar with upcoming events this week, add or delete notes, and make and edit a todo-list. All information  will be stored locally in the application. There are two applications, web and mobile application.


### Table of contents:
1. [about](#About) 
2. [file structure](#FileStructure)
3. [setup](#Setup)

### About <a name="About"></a>

The web application is built with React, using node.js as the backend API.
The mobile application is built with React Native.

Authors of the projects are: Martin Lunde, Christoffer Almankaas, Petter Lohne, Thayanan Tharmapalan, Steffen Helgeland.

### General file structure of the project <a name="FileStructure"></a>
The project is split into to main folders: `app` and `web`, which respectively represent the code for application and webpage. The code is similar in both parts, but some changes has been made to accommodate for the differences between React (web application) and React Native (mobile application).

#### Website
* `website/public` contains the index.html-file in which which renders the whole site through Javacript. The favicon.ico-file is also located in this folder, which make sure to add an shortucut/tab-icon for the website in web browsers.
* `website/src` contains our whole page content. Everything is build up using react and javascript.
    * `website/src/index.js` exports all our components to make importing easier
    * `website/src/assets` contains all fonts, images and our stylesheets used in the website.
    * `website/src/service/registerServiceWorker.js` contains our service worker which allows for offline capabilities etc.
    * `website/src/views/containers` contains the containers for our pages.
    * `website/src/views/components` contains all our components, which are used to construct our views. The components folder are divided into subfolder, which each represent a feature of the Personal Assisent.
        * `website/src/views/Components.js` exports all our components to make importing easier
        * `website/src/components/calendar` contains components related to our Calendar-view.
        * `website/src/views/components/NoteList` contains components related to our Notes-view.
        * `website/src/views/components/SideBar` contains components related to our Sidebar on the page.
        * `website/src/views/components/TodoList` contains  components related to our TodoList-view.

#### App
The file structure for the app is mainly the same as the website.

### Setup
#### How to install & run the application

* Website
    * Make sure you have node with npm installed.
    * Clone this Git-repository: https://github.com/IT2810/it2810-webutvikling-h17-prosjekt-3-group-01
    * Navigate to the projects web folder: "cd it2810-webutvikling-h17-prosjekt-3-group-01/web
    * Run `npm install` to install the required dependecies
    * Run `npm start`
    * Navigate to localhost:8083 in your browser.

* App
    * Install the Expo application from your phones appstore.
    * Clone this Git-repository: https://github.com/IT2810/it2810-webutvikling-h17-prosjekt-3-group-01
    * Navigate to the projects app folder: "cd it2810-webutvikling-h17-prosjekt-3-group-01/app
    * Run `npm install -g npm@4` as expo recommends npm@4.6.1 to run.    
    * Run `npm start`
    * (If you get an error upon startup, run the following commands:
        - `sudo sysctl -w kern.maxfiles=5242880`
        - `sudo sysctl -w kern.maxfilesperproc=524288`
    * Use Expo on your phone to scan the QR code and view the app. (The javascript bundle may take some time to compile)

##### Website-dependencies:

    "prop-types": "^15.6.0",
    "react": "^15.6.2",
    "react-bootstrap": "^0.31.3",
    "react-dom": "^15.6.2",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.0.13"

##### App-dependencies:

Dev. dependencies:

    "react-native-scripts": "1.5.0",
    "jest-expo": "^21.0.2",
    "react-test-renderer": "16.0.0-alpha.12"

Dependencies:

    "expo": "^21.0.0",
    "react": "16.0.0-alpha.12",
    "react-native": "^0.48.4",
    "react-native-elements": "^0.17.0",
    "react-navigation": "^1.0.0-beta.13",
    "react-router-dom": "^4.2.2"
