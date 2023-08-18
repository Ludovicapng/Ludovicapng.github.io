import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BcgComponent } from './bcg/bcg.component';
import { PjspreviewComponent } from './pjspreview/pjspreview.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  { path: '', component: BcgComponent },
  { path: 'projects', component: PjspreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
