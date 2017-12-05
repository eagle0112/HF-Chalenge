import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FbService } from '../fb.service';
import { Observer } from 'rxjs/Observer';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Subject to get the facebook connection status
  logstat = new Subject<object>();
  constructor(private fbService: FbService, private router: Router) { }
  onLogin() {
    // Login to facebook using our facebook service that we injected into the component
    this.fbService.login();
    // We get the subject from our facebook service
    this.logstat = this.fbService.getSubject();
    // Subscribe to the subject so that when we get the message that the connection is made we send the user to the album component
    this.logstat.subscribe(
      (response) => {
        if (response['logStat']) {
          this.router.navigate(['/myalbums']);
        }
      }
    );
  }
}
