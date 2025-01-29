import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { IPregunta } from './../interfaces/interfaces';
import { Observable } from 'rxjs';
import { GestionStorageService } from './gestion-storage.service';
import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  // Array para almacenar todas las preguntas del json. Recordad inicializar el array para evitar problemas
preguntas: IPregunta[] = [];
  //Añadir los componentes y servicios que se necesitan
  constructor(private alertController: AlertController, private leerFichero: HttpClient, private gestionAlmacenamiento: GestionStorageService) {
    //Cargar los datos
    this.getDatosFichero();
  }

  // Método que devolverá un array de IPregunta, es decir, todas las preguntas del cuestionario en un array


  // Recupera las preguntas de Storage. Si no hay ninguna almacenada, las lee del fichero
  // Controlar la asincronía.


  // Lee los datos de un fichero y los almacena en un array
getDatosFichero(){
  let datosFichero: Observable<IPregunta[]>;
datosFichero = this.leerFichero.get<IPregunta[]>("assets/datos/datos.json");
 datosFichero.subscribe(datos =>{
  console.log(datos);
  this.preguntas.push(...datos);
 })

}

  // Abre una alerta con el enunciado de la pregunta y comprueba la respuesta
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿De que marca es el logotipo?',
      inputs: [{
        name: 'enviar',
        placeholder: 'Atención a la ortografia',
        type: 'text',
      }
        
      ],
      buttons: [ 
      {
        text: 'Enviar',
        role: 'confirm',
        handler: (data) => {
          console.log(data);
          this.comprobarRespuesta(data)
        },
      },],
    });

    await alert.present();
  }
  // 1- En función de si es correcta o no, actualiza el estado de acierto.
  // 2- Si no se acierta:
  // 2.1- Restará el valor de los intentos
  // 2.2- Guardará el valor añadido en el array respuestasIncorrectas
comprobarRespuesta(data: string){

}

  // Almacenar el array de preguntas en Storage
almacenarPreguntasStorage(data: string){

}
}
