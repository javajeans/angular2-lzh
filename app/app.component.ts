import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink = "/heroes">Heroes</a>
    <a routerLink="/dashboard">Dashboard</a>
</nav>
    <router-outlet></router-outlet><!--路由器需要把激活的组件显示在 <router-outlet> 里面-->
    <!--<my-heroes></my-heroes>-->
  `

})
export class AppComponent {
}
