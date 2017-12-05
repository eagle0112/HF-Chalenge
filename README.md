## Internship Program Coding Challenge

#### App Behaviour

1. Sign in using Facebook and grant access to Facebook albums & photos.
2. Buttons representing your Facebook albums are displayed
3. The user can tap an album, and see the photos inside that album.
4. The user can select one or more photos from an album and export them to Firebase.

#### Technologies used

Those are the technologies i used to make the web app.

* Angular 5
* Third partie API's
> Firebase ; Facebook

#### How to run the app

> i'm using my facebook app configuration that i've created for the purpose of this challenge to make the test easy, so feel free to use it.

1. Clone the repository.
```git https://github.com/eagle0112/HF-Chalenge.git```
2. Go to the server directory and install all the dependencies by running this npm cmd.
```npm install```
3. You need to change the firebase configuration to yours because the app does not support firebase authentification.
> Go to src/environments/environment.ts and change the configuration with yours

> Make sure to change the security rules of your firebase storage to "allow read, write;"
4. once the dependencies are installed you can run the server.
````
ng serve --open
````
> Now the app is working sign in and test it out