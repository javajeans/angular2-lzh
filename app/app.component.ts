import {Component} from '@angular/core';
@Component({
    moduleId:module.id,
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <a routerLink="/heroform" routerLinkActive="active">Hero-Form</a>
  </nav>
  <router-outlet></router-outlet>
`, styleUrls: ['app.component.css']


})
export class AppComponent {
}
