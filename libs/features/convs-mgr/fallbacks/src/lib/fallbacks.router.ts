import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { FallbackMainPageComponent } from './pages/fallback-main-page/fallback-main-page.component';

const FALLBACK_ROUTES: Route[] = [
  {
    path: '',
    component: FallbackMainPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(FALLBACK_ROUTES)],
  exports: [RouterModule],
})
export class FallbackRouterModule {}
