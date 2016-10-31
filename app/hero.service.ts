/**
 * Created by zhiheng.li on 2016/10/27.
 */
import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heros";
import 'rxjs/add/operator/toPromise';
import {Http} from "@angular/http";
@Injectable()
export class HeroService{
    private heroesUrl = 'app/heroes';

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    constructor(private http:Http){

    }
   //异步服务与承诺 (Promise)
   getHeroes():Promise<Hero[]>{//我们通过返回一个 立即解决的承诺 的方式，模拟了一个超快、零延迟的超级服务器
      return this.http.get(this.heroesUrl)
          .toPromise()
          .then(response =>response.json().data as Hero[])
          .catch(this.handleError);
   }
   getHero(id:number):Promise<Hero>{
      return this.getHeroes().then(heroes => heroes.find(hero =>hero.id ===id));
   }
}