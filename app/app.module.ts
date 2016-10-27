import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from "./heroes.component";
import {HeroService}         from './hero.service';
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
@NgModule({
    imports: [//导入模板（例如使用表单需要导入FormsModule
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([//forRoot 方法提供了路由需要的路由服务提供商和指令，并基于当前浏览器 URL 初始化导航
            {
               path:'heroes',
                component:HeroesComponent
            },{
                path:'dashboard',
                component:DashboardComponent,
                pathMatch:'full'
            }
        ])
    ],
    declarations: [//入口加载组件（Component）
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    bootstrap: [AppComponent],//bootstrap加载器入口为AppComponent
    providers: [//提供服务
        HeroService
    ]
})

export class AppModule {
}
