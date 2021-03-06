/**
 * Created by Jonathan on 2016/10/28.
 * 路由
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './component/dashboard/dashboard.component';
import { HeroesComponent }      from './component/heros/heroes.component';
import { HeroDetailComponent }  from './component/hero-detail/hero-detail.component';
import {HeroFormComponent} from "./component/hero-form/hero-form.component";
const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent},
    { path: 'detail/:id', component: HeroDetailComponent},
    { path: 'heroes',     component: HeroesComponent},
    { path: 'heroform',     component: HeroFormComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
