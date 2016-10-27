/**
 * Created by zhiheng.li on 2016/10/27.
 */
import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heros";
@Injectable()
export class HeroService{
   //异步服务与承诺 (Promise)
   getHeroes():Promise<Hero[]>{//我们通过返回一个 立即解决的承诺 的方式，模拟了一个超快、零延迟的超级服务器
      return Promise.resolve(HEROES);
   }
}