import { Component, OnInit } from '@angular/core';
import { FbService } from '../fb.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { DataStruct } from './dataStruct';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
// This component is responsible for showing the albums
export class AlbumComponent implements OnInit {
  // The current album (Selected by the user)
  activeAlbum: object;
  // First Name
  firstName: string;
  // Last Name
  lastName: string;
  // Array of albums
  myAlbums: DataStruct[];
  // Subject that will send us data from our facebook service
  myData = new Subject<object>();
  // Login status
  logStat = false;

  constructor(private fbService: FbService, private router: Router) {

  }
  ngOnInit() {
    // Get our connection status
    this.logStat = this.fbService.getStatus();
    // Get the subject to receive the data from our facebook service
    this.myData = this.fbService.getSubject();
    // if the user is not connected we send him to the login component
    if (this.logStat) {
      // Subscribe to the subject to process the received data witch contains the albums
      this.myData.subscribe(
        (data) => {
          this.myAlbums = data['albums'].data;
          this.firstName = data['first_name'];
          this.lastName = data['last_name'];
        }
      );
    } else {
      this.router.navigate(['/']);
    }
  }
  // Triggered when the user selects an album so we set the activeAlbum attribute to show the album pictures in html
  onFilter(album) {
    this.activeAlbum = album.photos.data;
    console.log(this.activeAlbum);
  }
  onLogout(album) {
    this.fbService.logout();
    this.router.navigate(['/']);
  }
}
