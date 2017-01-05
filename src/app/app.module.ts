import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from '../../node_modules/ui-router-ng2/src/ng2';
import { AppComponent } from './app.component';
import {FooModule} from "./foo/foo.module";
import {MyRootUIRouterConfig} from "./router.config";
import {MainComponent} from "./main.component";
import {MAIN_STATES} from "./app.states";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: MAIN_STATES,
      otherwise: { state: 'app', params: {} },
     configClass: MyRootUIRouterConfig
    }),
    FormsModule,
    HttpModule,
    FooModule
  ],
  providers: [
    { provide: MyRootUIRouterConfig, useClass: MyRootUIRouterConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
