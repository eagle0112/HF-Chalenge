import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

declare var window: any;
declare var FB: any;

export class FbService {
  // variables
  logStatus = false;
  subject = new Subject<object>();
  constructor() {
    // Facebook connection initialisation
    window.fbAsyncInit = () => {
      console.log("fbasyncinit")
      FB.init({
          appId            : '107916566618413',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v2.10'
      });
      FB.AppEvents.logPageView();
    };
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  // Login Function
  login () {
    FB.login((response: any) => {
      if (response.status === 'connected') {
          // Logged into your app and Facebook.
          this.logStatus = true;
          // Send message to the component through the subject saying that the user is connected
          this.subject.next({logStat: true});
          // Get information (albums, name, etc..) from facebook
          this.getInformations();
      } else if (response.status === 'not_authorized') {
          // The person is logged into Facebook, but not your app.
          console.log("user not authorized");
      } else {
          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.
          console.log("user not logged into Facebook");
      }
    }, {
      // Here we define permissions
      scope: 'user_photos'
    });
  }
  // Logout Function
  logout() {
    FB.logout(function(response) {
      console.log("User log out.");
    });
  }
  // Get information (albums, name, etc..) from facebook
  getInformations(){
    FB.api("me?fields=id,email,albums{name,photos{source,updated_time,created_time}},birthday,address,education,gender,first_name,last_name,picture{url},cover{source}",
    (response) => {
      if (response && !response.error) {
        console.log(response);
        // Send message to the component through the subject containing (albums, name, etc..)
        this.subject.next(response);
      }
    });
  }
  // Get the subject to receive information in component after the response is received from facebook
  getSubject(): Subject<object> {
    return this.subject;
  }
  // Get the status of the user
  getStatus(): boolean{
    return this.logStatus;
  }

}
