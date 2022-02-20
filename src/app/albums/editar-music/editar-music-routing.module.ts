import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarMusicPage } from './editar-music.page';

const routes: Routes = [
  {
    path: '',
    component: EditarMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarMusicPageRoutingModule {}
