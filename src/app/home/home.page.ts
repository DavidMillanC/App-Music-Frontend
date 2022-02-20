import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Artista } from '../Entidades/Artista';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private service: ServicesService, private router: Router) {}
  listaArtistas: Artista[];

  ngOnInit(): void {
    this.getArtistas();
  }
  ionViewWillEnter() {
    this.getArtistas();
  }

  getArtistas() {
    this.service.get('Artistas').subscribe((response) => {
      this.listaArtistas = response.Artista;
    });
  }
}
