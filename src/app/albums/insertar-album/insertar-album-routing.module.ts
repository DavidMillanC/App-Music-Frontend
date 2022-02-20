import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertarAlbumPage } from './insertar-album.page';

const routes: Routes = [
  {
    path: '',
    component: InsertarAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertarAlbumPageRoutingModule {}
