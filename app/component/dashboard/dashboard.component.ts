/**
 * Created by zhiheng.li on 2016/10/27.
 */
import {Component, OnInit} from "@angular/core";
import {Hero} from "../../domain/hero";
import {HeroService} from "../../service/hero.service";
import {Router} from "@angular/router";
@Component({
    moduleId:module.id,
    selector:'my-dashboard',
    templateUrl:'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{
  heroes:Hero[] = [];

    constructor(private heroService:HeroService,private router: Router){}

    ngOnInit():void{
        this.heroService.getHeroes()
            .then(heroes =>this.heroes = heroes.slice(1,5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
/**
 * 1.创建一个heroes数组属性
 * 2.把HeroService注入构造函数中，并且把它保存在一个私有的heroService字段中
 * 3.在Angular的ngOninit生命周期钩子里面调用服务来获得英雄列表K
 **/