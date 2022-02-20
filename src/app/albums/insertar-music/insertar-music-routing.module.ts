import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertarMusicPage } from './insertar-music.page';

const routes: Routes = [
  {
    path: '',
    component: InsertarMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertarMusicPageRoutingModule {}
