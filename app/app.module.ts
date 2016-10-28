import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from "./heroes.component";
import {HeroService}         from './hero.service';
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
@NgModule({
    imports: [//导入模板（例如使用表单需要导入FormsModule
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)//InMemoryWebApiModule 将 Http 客户端默认的后端服务（这是一个辅助服务，负责与远程服务器对话）替换成了 内存 Web API 服务
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
