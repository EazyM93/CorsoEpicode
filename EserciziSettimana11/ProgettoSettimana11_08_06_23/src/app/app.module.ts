import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviepageComponent } from './components/moviepage/moviepage.component';
import { FavouritespageComponent } from './components/favouritespage/favouritespage.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { LoginComponent } from './auth/login/login.component';



const routes: Route[] = [

  {
    path: '',
    component: WelcomepageComponent
  },
  {
    path: 'movies',
    component: MoviepageComponent
  },
  {
    path: 'favourites',
    component: FavouritespageComponent
  },
  {
    path: 'profile',
    component: ProfilepageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviepageComponent,
    FavouritespageComponent,
    ProfilepageComponent,
    WelcomepageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
