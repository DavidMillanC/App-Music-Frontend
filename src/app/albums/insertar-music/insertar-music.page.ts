import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { ModalController } from '@ionic/angular';
import { Input } from '@angular/core';

@Component({
  selector: 'app-insertar-music',
  templateUrl: './insertar-music.page.html',
  styleUrls: ['./insertar-music.page.scss'],
})
export class InsertarMusicPage implements OnInit {
  music: any = [];
  @Input() album: string;
  constructor(
    private service: ServicesService,
    private modalComponent: ModalController
  ) {}

  ngOnInit() {
    this.music.album = this.album;
  }
  insertarMusic(form) {
    form.value.album = this.album;

    this.service.save('tracks', form.value).subscribe((response) => {
      this.music = response;
      console.log(form.value);
    });
    this.modalComponent.dismiss();
  }
  cerrar() {
    this.modalComponent.dismiss();
  }
}
