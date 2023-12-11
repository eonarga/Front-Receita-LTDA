import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { UserRegisterComponent } from './components/users/user-register/user-register.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeRegisterComponent } from './components/recipes/recipe-register/recipe-register.component';
import { RecipeUpdateComponent } from './components/recipes/recipe-update/recipe-update.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/user-login', pathMatch: 'full' },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'recipe-update/:id', component: RecipeUpdateComponent },
  { path: 'recipe-register', component: RecipeRegisterComponent }, // função para proteger a rota canActivate: [AuthGuardService] },
  { path: 'recipe-update/:id', component: RecipeUpdateComponent }, // função para proteger a rota canActivate: [AuthGuardService] },
  { path: '404', component: PageNotFoundComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
