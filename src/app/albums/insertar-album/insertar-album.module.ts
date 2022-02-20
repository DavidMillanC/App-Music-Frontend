import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertarAlbumPageRoutingModule } from './insertar-album-routing.module';

import { InsertarAlbumPage } from './insertar-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertarAlbumPageRoutingModule
  ],
  declarations: [InsertarAlbumPage]
})
export class InsertarAlbumPageModule {}
