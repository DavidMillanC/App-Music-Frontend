import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-editar-artista',
  templateUrl: './editar-artista.page.html',
  styleUrls: ['./editar-artista.page.scss'],
})
export class EditarArtistaPage implements OnInit {
  @Input() _id: string;
  artista: any = [];

  constructor(
    private service: ServicesService,
    private modalComponent: ModalController
  ) {}

  ngOnInit() {
    this.getByIdArtista();
  }

  getByIdArtista() {
    this.service.getById('artista', this._id).subscribe((response) => {
      this.artista = response.Artista;
    });
  }

  editarArtista(form) {
    form.value._id = this._id;
    this.service.update('artista', form.value).subscribe((response) => {
      console.log(response);
    });
    this.modalComponent.dismiss();
  }

  cerrar() {
    this.modalComponent.dismiss();
  }
}
