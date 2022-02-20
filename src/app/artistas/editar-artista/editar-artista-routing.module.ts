import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarArtistaPage } from './editar-artista.page';

const routes: Routes = [
  {
    path: '',
    component: EditarArtistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarArtistaPageRoutingModule {}
