import {Component, Input, OnInit} from '@angular/core';
import { Hero } from './hero';
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit{
    @Input()
    hero: Hero;

    constructor(
        private heroService:HeroService,
        private route:ActivatedRoute,
        private localtion:Location
    ){}

    ngOnInit():void{
        this.route.params.forEach((params:Params) =>{
            let id= +params['id'];
            this.heroService.getHero(id)
                .then(hero=>this.hero = hero);
        })
    }

    goBack():void{
        this.localtion.back();
    }

    save():void{
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }


}
