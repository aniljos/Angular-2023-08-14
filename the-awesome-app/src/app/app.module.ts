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
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { UserService } from './services/user-service';
import { UserServiceImpl } from './services/user-service-imp';
import { AppSharedModule } from './app-shared/app-shared.module';

//Define the route-view(component) mapping
const routes: Routes = [

  {path: "home", component: HelloComponent},
  {path: "databinding", component: DataBindingComponent},
  {path: "login", component: LoginComponent},
  {path: "search", component: SearchComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: ViewNotFoundComponent},
]


@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, ViewNotFoundComponent, LoginComponent, SearchComponent
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
  providers: [{provide: UserService, useClass: UserServiceImpl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
