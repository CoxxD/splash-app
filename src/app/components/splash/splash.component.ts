import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from 'src/app/services/splash-screen-state.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  public opacityChange = 1;
  public splashTransition;
  public showSplash = true;

  readonly ANIMATION_DURATION = 1;

  constructor(private splashScreenStateService: SplashScreenStateService) { }

  ngOnInit(): void {
    this.splashScreenStateService.subscribe(res => {
      this.hideSplashAnimation();
    });
  }

  private hideSplashAnimation() {
    this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
    this.opacityChange = 0;
    setTimeout(() => {
      this.showSplash = !this.showSplash;
    }, 1000);
  }

}
