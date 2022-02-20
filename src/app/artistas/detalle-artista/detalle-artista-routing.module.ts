import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleArtistaPage } from './detalle-artista.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleArtistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleArtistaPageRoutingModule {}
