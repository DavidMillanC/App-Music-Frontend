import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarArtistaPageRoutingModule } from './editar-artista-routing.module';

import { EditarArtistaPage } from './editar-artista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarArtistaPageRoutingModule
  ],
  declarations: [EditarArtistaPage]
})
export class EditarArtistaPageModule {}
