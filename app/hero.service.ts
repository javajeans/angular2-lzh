/**
 * Created by zhiheng.li on 2016/10/27.
 */
import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heros";
import 'rxjs/add/operator/toPromise';
import {Http, Headers} from "@angular/http";
@Injectable()
export class HeroService{
    private heroesUrl = 'app/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

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


   update(hero:Hero):Promise<Hero>{
       const url = `${this.heroesUrl}/${hero.id}`;//这个相当于this.heroesUrl}+“/”+hero.id   为什么加入${}后续需要跟进
       console.log(url);
       return this.http.put(url,JSON.stringify(hero),{headers:this.headers})
           .toPromise()
           .then(()=>hero)
           .catch(this.handleError);
   }

   create(name:string):Promise<Hero>{
       return this.http
           .post(this.heroesUrl,JSON.stringify({name:name}),{headers:this.headers})
           .toPromise()
           .then(res => res.json().data)
           .catch(this.handleError);
   }

   delete(id:number): Promise<void>{
       const url =`${this.heroesUrl}/${id}`;
       return this.http.delete(url,{headers:this.headers})
           .toPromise()
           .then(()=>null)
           .catch(this.handleError);
   }
}