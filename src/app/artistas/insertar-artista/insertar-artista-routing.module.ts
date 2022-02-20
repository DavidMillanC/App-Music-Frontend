import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertarArtistaPage } from './insertar-artista.page';

const routes: Routes = [
  {
    path: '',
    component: InsertarArtistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertarArtistaPageRoutingModule {}
