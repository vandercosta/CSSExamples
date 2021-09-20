import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NeonComponent } from './components/neon/neon.component';

const routes: Routes = [
  { path: '', redirectTo: 'neon', pathMatch: 'full' },
  { path: 'neon', component: NeonComponent },
  { path: '**', component: NeonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
