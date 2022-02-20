import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { EditarAlbumPage } from '../editar-album/editar-album.page';
import { InsertarMusicPage } from '../insertar-music/insertar-music.page';
import { EditarMusicPage } from '../editar-music/editar-music.page';

@Component({
  selector: 'app-detalle-album',
  templateUrl: './detalle-album.page.html',
  styleUrls: ['./detalle-album.page.scss'],
})
export class DetalleAlbumPage implements OnInit {
  album: any = [];
  musica: any = [];

  constructor(
    private service: ServicesService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private ocont: AlertController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.getByIdAlbum();
    this.getMusicaByAlbumId();
  }

  getByIdAlbum() {
    this.actRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('albumId');
      this.service.getById('album', id).subscribe((response) => {
        this.album = response.album;
      });
    });
  }
  getMusicaByAlbumId() {
    this.actRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('albumId');
      this.service.getById('tracks/album', id).subscribe((response) => {
        this.musica = response.track;
      });
    });
  }
  ionViewWillEnter() {
    this.getByIdAlbum();
    this.getMusicaByAlbumId();
  }
  async presentModalEdit() {
    const modal = await this.modalController.create({
      component: EditarAlbumPage,
      cssClass: 'my-custom-class',
      componentProps: {
        _id: this.album._id,
        imagen: this.album.imagen,
        nombre: this.album.nombre,
        autor: this.album.autor,
        lanzamiento: this.album.lanzamiento,
      },
    });
    modal.onDidDismiss().then(() => {
      this.ionViewWillEnter();
    });
    return await modal.present();
  }
  async presentModalAggMusic() {
    const modal = await this.modalController.create({
      component: InsertarMusicPage,
      cssClass: 'my-custom-class',
      componentProps: {
        album: this.album._id,
      },
    });
    modal.onDidDismiss().then(() => {
      this.ionViewWillEnter();
    });
    return await modal.present();
  }

  async presentModalEditMusic(num) {
    const modal = await this.modalController.create({
      component: EditarMusicPage,
      cssClass: 'my-custom-class',
      componentProps: {
        _id: this.musica[num]._id,
        album: this.musica[num].album,
      },
    });
    modal.onDidDismiss().then(() => {
      this.ionViewWillEnter();
    });
    return await modal.present();
  }

  async eliminarAlbum() {
    const alert = await this.ocont.create({
      header: 'Eliminar Album',
      message: '¿Desea eliminar el album?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: () => {
            this.service
              .delete('album', this.album._id)
              .subscribe((response) => {
                this.router.navigateByUrl('/albums');
              });
          },
        },
      ],
    });
    await alert.present();
  }

  async eliminarMusic(num) {
    const alert = await this.ocont.create({
      header: 'Eliminar Música',
      message: '¿Desea eliminar la música?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: () => {
            this.service
              .delete('tracks', this.musica[num]._id)
              .subscribe((response) => {
                this.getMusicaByAlbumId();
              });
          },
        },
      ],
    });
    await alert.present();
  }
}
