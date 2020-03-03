import { Component } from '@angular/core';
import { RestauranteService } from '../servicios/restaurante.service';
import { iRestaurante } from '../modelos/restaurantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  restaurantes : iRestaurante[];

  constructor(private restaurantService : RestauranteService, private router : Router) {
    
  }


  ngOnInit(): void {
    this.restaurantes = [];
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.restaurantService.findAll().subscribe( data => {
      this.restaurantes = data;
    })
  }

  goToDetails(restaurante : iRestaurante){
    this.router.navigate(["/restaurante", restaurante.nombre]);
    console.log(restaurante.cod_res);
    
  }

}
