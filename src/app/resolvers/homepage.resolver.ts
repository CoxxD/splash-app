import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SplashScreenStateService } from '../services/splash-screen-state.service';

@Injectable()
export class HomepageResolver implements Resolve<any> {

  constructor(private splashScreenStateService: SplashScreenStateService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Observable<any>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.splashScreenStateService.stop();
        resolve(of(['item1', 'item2']));
      }, 5000);
    });
  }

}
