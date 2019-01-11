import {Component} from '@angular/core';
import {RouterFacade} from './core/router/store/facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private routerFacade: RouterFacade) {}

  goTo(path) {
    this.routerFacade.go({path});
  }
}
