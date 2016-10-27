import { Component, OnInit } from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
/**
 * Created by zhiheng.li on 2016/10/27.
 */
@Component({
    selector: 'my-heroes',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `
})
export class HeroesComponent implements OnInit {
    heroes:Hero[];
    title = 'Tour of Heroes';
    selectedHero: Hero;
    constructor(private heroService: HeroService) {
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
}
