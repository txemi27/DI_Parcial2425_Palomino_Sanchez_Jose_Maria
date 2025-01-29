import { Component } from '@angular/core';
import { CuestionarioService } from './../servicios/cuestionario.service';
import { IPregunta } from './../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
logotipos: string[] = ["assets/icon/volkswagen.jpg","assets/icon/apple.jpg","assets/icon/Shell.jpg","assets/icon/starbucks.jpg",];
preguntasService = this.cuestionarServicio.preguntas;

  //Importar servicio
  constructor(private cuestionarServicio: CuestionarioService) {}

  //Crear método para gestionar el onclick de RESPONDER
  //Recibirá un IPregunta y llamará al servicio para realizar las operaciones necesarias.
  responder(){
    this.cuestionarServicio.presentAlert();
  }

  //Crear método para gestionar el onclick de Guardar
  //No recibe parámetros y llamará al servicio para realizar las operaciones necesarias.
  guardar(){
    
  }

  marcas: string[] = [];
}
