import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertarMusicPageRoutingModule } from './insertar-music-routing.module';

import { InsertarMusicPage } from './insertar-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertarMusicPageRoutingModule
  ],
  declarations: [InsertarMusicPage]
})
export class InsertarMusicPageModule {}
