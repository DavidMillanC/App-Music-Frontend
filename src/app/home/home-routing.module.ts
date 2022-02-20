import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'detalle-artista',
    loadChildren: () =>
      import('../artistas/detalle-artista/detalle-artista.module').then(
        (m) => m.DetalleArtistaPageModule
      ),
  },
  {
    path: 'insertar-artista',
    loadChildren: () =>
      import('../artistas/insertar-artista/insertar-artista.module').then(
        (m) => m.InsertarArtistaPageModule
      ),
  },
  {
    path: 'editar-artista',
    loadChildren: () =>
      import('../artistas/editar-artista/editar-artista.module').then(
        (m) => m.EditarArtistaPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
