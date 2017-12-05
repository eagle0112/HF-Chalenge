import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { Upload } from '../shared/upload';

import * as $ from 'jquery';
@Component({
  selector: 'app-album-pics',
  templateUrl: './album-pics.component.html',
  styleUrls: ['./album-pics.component.css']
})
// This component is responsible for showing the pictures of a selected album
export class AlbumPicsComponent {
  // album received from property binding that is why we need the input decorator
  @Input() album: any;
  // If a picture is selected
  isSelected: boolean;
  // Array of selected picture
  pics: Array<object> = [];
  // Image that is currently being uploaded
  currentUpload: Upload;

  constructor(private upService: UploadService) { }
  // Triggered when a picture is clicked on
  onSelect(photo: object) {
    this.isSelected = $(".gallery_product img[src='" + photo['source'] + "']").parent().hasClass("isSelected");
    if (!this.isSelected) {
      $(".gallery_product img[src='" + photo['source'] + "']").parent().addClass("isSelected");
      this.pics.push(photo);
    } else {
      $(".gallery_product img[src='" + photo['source'] + "']").parent().removeClass("isSelected");
      this.pics = this.pics.filter(item => item !== photo)
    }
  }
  // Triggered when we upload to firebase
  onSave() {
    // loop through the selected pictures
    this.pics.forEach(photo => {
      fetch(photo['source'])
        .then(res => res.blob()) // Gets the response and returns it as a blob
        .then(blob => {
          // Create a File object from the blob
          let picFile = new File([blob], photo['created_time'], { type: blob.type });
          // currentUpload is used to show the progress of the upload in our template
          this.currentUpload = new Upload(picFile);
          // We upload the picture to the firebase server
          this.upService.pushUpload(this.currentUpload);
          // After the upload of the picture we deselect it and we delete it from our array
          $(".gallery_product img[src='" + photo['source'] + "']").parent().removeClass("isSelected");
          this.pics = this.pics.filter(item => item !== photo)
        });
    });
  }
}
