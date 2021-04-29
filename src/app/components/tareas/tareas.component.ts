import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listTarea : Tarea[] = [];
  nombreTarea : '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    //Crear el objeto de tarea
    const tarea : Tarea = {
      nombre : this.nombreTarea,
      estado : false
    }
    //Agregar el objeto al arreglo
    this.listTarea.push(tarea);
    //Reset form
    this.nombreTarea = '';
  }

  eliminarTarea(index : number) : void {
    this.listTarea.splice(index, 1);
  }

  actualizarTarea(index : number, tarea : Tarea) : void {
    this.listTarea[index].estado = !tarea.estado;
  }

}
