import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'artistas',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: ':artistaId',
        loadChildren: () =>
          import('./artistas/detalle-artista/detalle-artista.module').then(
            (m) => m.DetalleArtistaPageModule
          ),
      },
      {
        path: 'insertar-artista',
        loadChildren: () =>
          import('./artistas/insertar-artista/insertar-artista.module').then(
            (m) => m.InsertarArtistaPageModule
          ),
      },
    ],
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./albums/albums/albums.module').then((m) => m.AlbumsPageModule),
  },
  {
    path: 'albums',
    children: [
      {
        path: ':albumId',
        loadChildren: () =>
          import('./albums/detalle-album/detalle-album.module').then(
            (m) => m.DetalleAlbumPageModule
          ),
      },
      {
        path: 'insertar-album',
        loadChildren: () =>
          import('./albums/insertar-album/insertar-album.module').then(
            (m) => m.InsertarAlbumPageModule
          ),
      },
    ],
  },
  {
    path: 'editar-album',
    loadChildren: () =>
      import('./albums/editar-album/editar-album.module').then(
        (m) => m.EditarAlbumPageModule
      ),
  },
  {
    path: 'insertar-music',
    loadChildren: () =>
      import('./albums/insertar-music/insertar-music.module').then(
        (m) => m.InsertarMusicPageModule
      ),
  },
  {
    path: 'editar-music',
    loadChildren: () =>
      import('./albums/editar-music/editar-music.module').then(
        (m) => m.EditarMusicPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
