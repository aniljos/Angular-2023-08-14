import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import { DataBindingComponent } from './databinding/databinding.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductsModule } from './products/products.module';
import {RouterModule, Routes} from '@angular/router';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { GadgetsModule } from './gadgets/gadgets.module';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { UserService } from './services/user-service';
import { UserServiceImpl } from './services/user-service-imp';
import { AppSharedModule } from './app-shared/app-shared.module';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { RegisterComponent } from './register/register.component';

//Define the route-view(component) mapping
const routes: Routes = [

  {path: "home", component: HelloComponent},
  {path: "databinding", component: DataBindingComponent},
  {path: "login", component: LoginComponent},
  {path: "search", component: SearchComponent},
  {path: "register", component: RegisterComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: ViewNotFoundComponent},
]


@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, ViewNotFoundComponent, LoginComponent, SearchComponent, RegisterComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ProductsModule, 
    RouterModule.forRoot(routes), 
    GadgetsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppSharedModule
  ],
  providers: [
    {provide: UserService, useClass: UserServiceImpl},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
