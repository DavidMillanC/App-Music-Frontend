import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { EditarArtistaPage } from '../editar-artista/editar-artista.page';

@Component({
  selector: 'app-detalle-artista',
  templateUrl: './detalle-artista.page.html',
  styleUrls: ['./detalle-artista.page.scss'],
})
export class DetalleArtistaPage implements OnInit {
  artista: any = [];
  albums: any = [];
  urlVideo: any;

  constructor(
    private service: ServicesService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private ocont: AlertController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.getByIdArtista();
    this.getAlbumByArtista();
  }
  getByIdArtista() {
    this.actRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('artistaId');
      this.service.getById('artista', id).subscribe((response) => {
        this.artista = response.Artista;
      });
    });
  }

  getAlbumByArtista() {
    this.actRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('artistaId');
      this.service.getById('artista', id).subscribe((response) => {
        this.artista = response.Artista;
        this.service
          .getById('album/autor', this.artista.nombre)
          .subscribe((response) => {
            this.albums = response.albums;
          });
      });
    });
  }

  ionViewWillEnter() {
    this.getByIdArtista();
  }
  async presentModalEdit() {
    const modal = await this.modalController.create({
      component: EditarArtistaPage,
      cssClass: 'my-custom-class',
      componentProps: {
        _id: this.artista._id,
        imagen: this.artista.imagen,
        edad: this.artista.edad,
        nacionalidad: this.artista.nacionalidad,
        seguidores: this.artista.seguidores,
        resena: this.artista.resena,
        video: this.artista.video,
      },
    });
    modal.onDidDismiss().then(() => {
      this.ionViewWillEnter();
    });
    return await modal.present();
  }
  async eliminarArtista() {
    const alert = await this.ocont.create({
      header: 'Eliminar Artista',
      message: '¿Desea eliminar el artista?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: () => {
            this.service
              .delete('artista', this.artista._id)
              .subscribe((response) => {
                this.router.navigateByUrl('/home');
              });
          },
        },
      ],
    });
    await alert.present();
  }
}
