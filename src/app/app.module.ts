import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NetflixLogoBigComponent } from './components/general/netflix-logo-big/netflix-logo-big.component';
import { NetflixLogoSmallComponent } from './components/general/netflix-logo-small/netflix-logo-small.component';
import { HeaderComponent } from './components/fragments/header/header.component';
import { NavBarComponent } from './components/fragments/nav-bar/nav-bar.component';
import { ProfilePicComponent } from './components/general/profile-pic/profile-pic.component';
import { BannerComponent } from './components/fragments/banner/banner.component';
import { ButtonOneComponent } from './components/general/button-one/button-one.component';
import { ThumbnailComponent } from './components/general/thumbnail/thumbnail.component';
import { SectionComponent } from './components/general/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixLogoBigComponent,
    NetflixLogoSmallComponent,
    HeaderComponent,
    NavBarComponent,
    ProfilePicComponent,
    BannerComponent,
    ButtonOneComponent,
    ThumbnailComponent,
    SectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
