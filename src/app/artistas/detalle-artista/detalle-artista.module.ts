import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafePipeModule } from 'safe-pipe';

import { IonicModule } from '@ionic/angular';

import { DetalleArtistaPageRoutingModule } from './detalle-artista-routing.module';

import { DetalleArtistaPage } from './detalle-artista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleArtistaPageRoutingModule,
    SafePipeModule,
  ],
  declarations: [DetalleArtistaPage],
})
export class DetalleArtistaPageModule {}
