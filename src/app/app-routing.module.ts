import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'article',component:ArticleComponent},
  {path:'category',component:CategoryComponent},
  {path:'user',component:UserComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
