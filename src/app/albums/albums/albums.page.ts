import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Album } from 'src/app/Entidades/Album';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {
  listaAlbums: Album[];

  constructor(private service: ServicesService, private router: Router) {}

  ngOnInit() {
    this.getAlbums();
  }

  ionViewWillEnter() {
    this.getAlbums();
  }

  getAlbums() {
    this.service.get('Albums').subscribe((response) => {
      this.listaAlbums = response.Albums;
    });
  }
}
