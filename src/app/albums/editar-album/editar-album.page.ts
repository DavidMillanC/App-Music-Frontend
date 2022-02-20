import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicesService } from 'src/app/services/services.service';
import { Album } from '../../Entidades/Album';

@Component({
  selector: 'app-editar-album',
  templateUrl: './editar-album.page.html',
  styleUrls: ['./editar-album.page.scss'],
})
export class EditarAlbumPage implements OnInit {
  @Input() _id: string;
  album: any = [];
  fecha = '';

  constructor(
    private service: ServicesService,
    private modalComponent: ModalController
  ) {}

  ngOnInit() {
    this.getByIdAlbum();
  }

  obtenerFecha(event) {
    this.album.lanzamiento = event.detail.value;
  }

  getByIdAlbum() {
    this.service.getById('album', this._id).subscribe((response) => {
      this.album = response.album;
    });
  }

  editarAlbum(form) {
    form.value._id = this._id;
    this.service.update('album', form.value).subscribe((response) => {
      console.log(response);
    });
    this.modalComponent.dismiss();
  }

  cerrar() {
    this.modalComponent.dismiss();
  }
}
