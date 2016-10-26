/**
 * Created by Jonathan on 2016/10/25.
 */
import {Component} from '@angular/core';
@Component({
    selector: 'my-app',

    template: '' +
    '<h1>{{title}}</h1>' +
    '<h2>{{hero.name}} details!</h2>' +
    '<div><label>id: </label>{{hero.id}}</div>' +
    '<div><label>name: </label>{{hero.name}}</div>' +
    '<input [(ngModel)] = "hero.name" value="{{hero.name}}" placeholder="name" >' +
    '<h2>My Heroes</h2>' +
    '<ul class="heroes">' +
    '<li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">' +
    '<span class = "badge">{{hero.id}}</span> {{hero.name}}' +
    '</li>' +
    '</ul>' +
        '<div *ngIf="selectedHero">'+
    '<h2>{{selectedHero.name}} details!</h2>'+
'<div><label>id: </label>{{selectedHero.id}}</div>'+
'<div>'+
    '<label>name: </label>'+
'<input [(ngModel)]="selectedHero.name" placeholder="name"/>'+
    '</div>'+
    '</div>'

})
export class AppComponent {
    title = 'Tour of Heroes';

    hero = {
        id: 1,
        name: 'windstorm'
    };
    heroes = HEROES;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    selectedHero: Hero;
}





export class Hero {
    id: number;
    name: string;
}
const HEROES: Hero[] = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
];
