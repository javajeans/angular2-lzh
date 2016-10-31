import { Component, OnInit } from '@angular/core';
import {Hero} from "../../domain/hero";
import {HeroService} from "../../service/hero.service";
import {Router} from "@angular/router";
/**
 * Created by zhiheng.li on 2016/10/27.
 */
@Component({
    moduleId:module.id,
    selector: 'my-heroes',
    templateUrl:'heroes.component.html',
    styleUrls:['heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes:Hero[];
    title = 'Tour of Heroes';
    selectedHero: Hero;
    constructor(
        private router:Router,
        private heroService: HeroService
    ) {
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    //heroes = HEROES;
    //heroes = this.heroService.getHeroes();
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail():void{
        this.router.navigate(['/detail',this.selectedHero.id]);
    }
    //ADD - 添加数据
    add(name:string):void {
        name= name.trim();
        if(!name){
            return;
        }
        this.heroService.create(name)
            .then(hero =>{
                this.heroes.push(hero);
                this.selectedHero = null;
            })
    }
    //DELETE -删除数据
    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

}
