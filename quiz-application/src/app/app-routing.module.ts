import { AdminComponent } from './admin/admin.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'quiz', component: QuizComponent},
{ path: 'admin', component: AdminComponent},
{ path: '', redirectTo: '/admin', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
