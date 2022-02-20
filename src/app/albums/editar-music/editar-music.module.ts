import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarMusicPageRoutingModule } from './editar-music-routing.module';

import { EditarMusicPage } from './editar-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarMusicPageRoutingModule
  ],
  declarations: [EditarMusicPage]
})
export class EditarMusicPageModule {}
