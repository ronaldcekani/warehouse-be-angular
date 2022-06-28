import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoutesModule} from "@warehouse-management/routes";
import {ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@warehouse-management/layout";
import {UserModule} from "@warehouse-management/user";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RoutesModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    UserModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
