import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from 'src/app/services/splash-screen-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private splashScreenStateService: SplashScreenStateService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 5000);
  }

}
