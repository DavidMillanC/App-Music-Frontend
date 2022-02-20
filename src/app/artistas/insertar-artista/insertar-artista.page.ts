import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-artista',
  templateUrl: './insertar-artista.page.html',
  styleUrls: ['./insertar-artista.page.scss'],
})
export class InsertarArtistaPage implements OnInit {
  artista: any = [];
  constructor(private service: ServicesService, private router: Router) {}

  ngOnInit() {}
  insertarArtista(form) {
    this.service.save('artista', form.value).subscribe((response) => {
      this.router.navigate(['/home']);
    });
  }
}
