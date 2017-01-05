import {UIRouterModule} from "../../../node_modules/ui-router-ng2/src/ng2";
import {FOO_STATES} from "./foo.states";
import {NgModule} from "@angular/core";
import {FooComponent} from "./foo.component";
import {FooFooterComponent} from "./fooFooter.component";
import {Nest1Component} from "./nest1.component";
import {Nest2Component} from "./nest2.component";

/** The Foo NgModule */
@NgModule({
  imports: [
    UIRouterModule.forChild({ states: FOO_STATES })
  ],
  declarations: [
    FooComponent,
    FooFooterComponent,
    Nest1Component,
    Nest2Component,
  ]
})
export class FooModule { }
