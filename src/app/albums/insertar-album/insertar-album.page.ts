import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-album',
  templateUrl: './insertar-album.page.html',
  styleUrls: ['./insertar-album.page.scss'],
})
export class InsertarAlbumPage implements OnInit {
  album: any = [];
  constructor(private service: ServicesService, private router: Router) {}

  ngOnInit() {}
  insertarAlbum(form) {
    this.service.save('album', form.value).subscribe((response) => {
      this.router.navigate(['/albums']);
    });
  }
  obtenerFecha(event) {
    this.album.lanzamiento = event.detail.value;
  }
}
