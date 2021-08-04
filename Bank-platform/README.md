# Private customer Area & Architecture #

### Installing and running the app ###

* `npm install` to install all libraries required to run the app.
* `npm start` to run the app.

### Architecture ###

The app is implemented in Vanilla JS running with just two functional external libraries, Axios and qs. Because it does not require any special requirements when bundling, we are using parcel instead of webpack.

The purpose of this project is to have a small but structured app, where its components are located obeying a purpose. The meaning of this is to implement a functional simple app architecture that can be the seed of future projects.

The project is divided in server and src.

* `./server` is the location where we simulate the funcionality of an actual server. This is a project on its own, with its package.json and its src. Inside `./src` is located the mock data `data.json` that will be used to simulate the client data. It also holds two `login.middleware.js` (credentials hardcoded) and `account.middleware.js`. <sub><sup>*Server belongs to Backend*</sup></sub>
* `./src` is the location of all the files




