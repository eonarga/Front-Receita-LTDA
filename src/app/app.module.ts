import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegisterComponent } from './components/users/user-register/user-register.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { RecipeRegisterComponent } from './components/recipes/recipe-register/recipe-register.component';
import { RecipeUpdateComponent } from './components/recipes/recipe-update/recipe-update.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    RecipeRegisterComponent,
    RecipeUpdateComponent,
    RecipeListComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
//    MatTableDataSource,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
