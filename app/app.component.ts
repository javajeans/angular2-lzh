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
    '<input [(ngModel)] = "hero.name" value="{{hero.name}}" placeholder="name" >'

})
export class AppComponent {
    title = 'Tour of Heroes';

    hero = {
        id: 1,
        name: 'windstorm'
    }
}

export class Hero {
    id: number;
    name: string;

}