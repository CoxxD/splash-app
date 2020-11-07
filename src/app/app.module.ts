import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SplashComponent } from './components/splash/splash.component';
import { SplashScreenStateService } from './services/splash-screen-state.service';
import { HomepageResolver } from './resolvers/homepage.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SplashScreenStateService,
    HomepageResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
