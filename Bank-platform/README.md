# Private customer Area & Architecture #

### Installing and running the app ###

* `npm install` to install all libraries required to run the app.
* `npm start` to run the app.

### Architecture ###

The app is implemented in Vanilla JS running with only a few external libraries. Because it does not require any special requirements when bundling, we are using parcel instead of webpack.

The purpose of this project is to have a small but structured app, where its components are organized obeying a purpose. The meaning of this is to implement a functional simple app architecture that can be the seed for future projects.

The project is divided in `./server` and `./src`.

* `./server` is the location where we simulate an actual server. This is a project on its own, with its package.json and its source folder. In `./src` is located the mock data `data.json` that will be used to simulate the client data. It also holds `login.middleware.js` (credentials hardcoded) and `account.middleware.js`.

* `./src` is the location of all the files that run the frontend of our application. In this folder you will find the next folder/files:

  * `./index.html` By default the bundler will crawl through the folder `./src` looking for an `index.html`. Once it finds it, this file will perform as a "*spider web*", using the different files as they are called.
  *  `index.js` File called by `index.html`. This file then calls `login.html` in `./pages/login`.
  * `./pages` contains one folder per page of the app. Each folder contains an `index.html` file that will use the different components as they are needed. The idea is to set up pages that are as unconnected as possible from the rest of the app. All components needed for running a certain page should be within the folder of the page. We would have at least the following components:
    * `index.html` as the structure of the code. It will call a JS file in a `<script>` tag
    * main JS orchestrates the rest of the components of the folder.
    * The Api component file component will bring from the server (our local server) the required data.
    * The Mapper component maps the data stored from API and returns only what we need.
    * Helpers component sets the secondary functions that do not need to be defined in our main JS. It helps us to keep our main JS tidy.
    * Validators imports from library `@lemoncode/fonk` to validate field easily.

* `./core` contains components that cross the application. They are central to the app.

  * `./content` contains the general styles and images used. If there would be any need for any extra styling in a certain page, that would go into the folder of that page.
  * `./router` contains the components that orchestrate our entire app thanks to the definitions of the routes that will lead to each of our `index.html` in `./pages`.

* `./common` contains functionalities that are used in different locations of our application. Do not confuse with the `./core` as the first one are simple functionalities that are just simply shared by many components at the same time. 

  *Please note this way of Architecture is totally subjective and is intended to be used as a guide.*

