import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarModule } from '../SharedModule/Components/Navbar/navbar/navbar.module';
//import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../SharedModule/Components/Navbar/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../FeaturesModule/landing/landing.module').then(
        (m) => m.LandingModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('../FeaturesModule/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //NavbarModule,
    RouterModule.forRoot(routes),
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
