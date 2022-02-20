import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertarArtistaPageRoutingModule } from './insertar-artista-routing.module';

import { InsertarArtistaPage } from './insertar-artista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertarArtistaPageRoutingModule
  ],
  declarations: [InsertarArtistaPage]
})
export class InsertarArtistaPageModule {}
