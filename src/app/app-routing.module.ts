import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimatedBackgroundComponent } from './components/animated-background/animated-background.component';
import { ButtonGradientBorderComponent } from './components/button-gradient-border/button-gradient-border.component';
import { CardComponent } from './components/card/card.component';
import { GlassmorphismMenuComponent } from './components/glassmorphism-menu/glassmorphism-menu.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NeonComponent } from './components/neon/neon.component';

const routes: Routes = [
  { path: '', redirectTo: 'neon', pathMatch: 'full' },
  { path: 'neon', component: NeonComponent },
  { path: 'loader', component: LoaderComponent },
  { path: 'buttonGradientBorder', component: ButtonGradientBorderComponent },
  { path: 'card', component: CardComponent },
  { path: 'glassmorphismMenu', component: GlassmorphismMenuComponent },
  {
    path: 'animatedBackgroundComponent',
    component: AnimatedBackgroundComponent,
  },
  { path: '**', component: NeonComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
