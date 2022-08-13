import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    NavigationBarComponent,
    DataBindingComponent,
    FooterComponent,
    LoginComponent,
    ServicesComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot([
      {path: 'log-in', component: LoginComponent},
      {path: 'about', component: AboutComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'home', component: HomeComponent},

    ]),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
