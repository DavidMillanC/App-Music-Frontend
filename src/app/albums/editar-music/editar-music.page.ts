import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-editar-music',
  templateUrl: './editar-music.page.html',
  styleUrls: ['./editar-music.page.scss'],
})
export class EditarMusicPage implements OnInit {
  @Input() _id: string;
  @Input() album: string;
  music: any = [];

  constructor(
    private service: ServicesService,
    private modalComponent: ModalController
  ) {}

  ngOnInit() {
    this.getByIdMusic();
  }
  getByIdMusic() {
    this.service.getById('tracks', this._id).subscribe((response) => {
      this.music = response.track;
    });
  }
  editarMusic(form) {
    form.value._id = this._id;
    form.value.album = this.album;
    console.log(form.value);
    this.service.update('tracks', form.value).subscribe((response) => {
      console.log(response);
    });
    this.modalComponent.dismiss();
  }
  cerrar() {
    this.modalComponent.dismiss();
  }
}
