import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegisterComponent } from './components/users/user-register/user-register.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { RecipeRegisterComponent } from './components/recipes/recipes/recipe-register/recipe-register.component';
import { RecipeUpdateComponent } from './components/recipes/recipes/recipe-update/recipe-update.component';
import { RecipeListComponent } from './components/recipes/recipes/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    RecipeRegisterComponent,
    RecipeUpdateComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
