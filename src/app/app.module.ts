import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FbService } from './fb.service';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlbumComponent } from './album/album.component';
import { LoginComponent } from './login/login.component';
import { AlbumPicsComponent } from './album/album-pics/album-pics.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { UploadService } from './album/shared/upload.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    LoginComponent,
    AlbumPicsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [FbService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
