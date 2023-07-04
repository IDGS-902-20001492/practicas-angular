import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent {

pizzaForm!: FormGroup;

nombre!: string;
direccion!: string;
telefono!: string;
tamano!: string;
ingrediente1!: boolean;
ingrediente2!: boolean;
ingrediente3!: boolean;
nPizzas!: number;
fecha!: string;
clientes:string[] = [];
totalDia: number = 0;
listaPizza: iPizza[] = [];
confirmar:boolean = false;
edicion:boolean = false;

constructor(private readonly fb:FormBuilder) { 
    this.pizzaForm = this.initForm();
}


obtenerValores():void{
    this.obtenerParametros();
    this.listaPizza.push({
        nombre: this.nombre,
        direccion: this.direccion,
        telefono: this.telefono,
        tamano: this.tamano,
        ingredientes: this.detIng(),
        precio: this.calcularPrecio(),
        nPizzas: this.nPizzas,
        fecha: new Date()
    });
    
}


initForm(){
    return this.fb.group({
        nombre: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
        telefono: [''],
        tamano: ['', [Validators.required]],
        ingrediente1 : [false],
        ingrediente2 : [false],
        ingrediente3 : [false],
        nPizzas: ['', [Validators.required]],
        fecha: [''],
    });

  }

  detIng():string[]{
    let ingredientes:string[] = [];
    if(this.ingrediente1){
        ingredientes.push('Jamon');
    }
    if(this.ingrediente2){
        ingredientes.push('Piña');
    }
    if(this.ingrediente3){
        ingredientes.push('Champiñones');
    }
    return ingredientes;
  }

  calcularPrecio():number{
    let precio:number = 0;
    if(this.tamano == 'Chica'){
        precio = this.nPizzas * 40;
        precio += (this.detIng().length * 10) * this.nPizzas;
    }else if(this.tamano == 'Mediana'){
        precio = this.nPizzas * 80;
        precio += (this.detIng().length * 10) * this.nPizzas;
    }else if(this.tamano == 'Grande'){
        precio = this.nPizzas * 120;
        precio += (this.detIng().length * 10) * this.nPizzas;
    }
    return precio;
  }

  quitarP(indice:number):void{
    this.listaPizza.splice(indice, 1);
  }
  limpiarLista(){
    this.listaPizza = [];
    this.clientes = [];
    this.totalDia = 0;
    this.fecha = '';
  }

  editarPedido(indice:number):void{
    let confEdicion = confirm("¿Desea editar el pedido? (Se eliminará el pedido actual)");

    if(confEdicion){
        this.pizzaForm.get('nombre')?.setValue(this.listaPizza[indice].nombre);
        this.pizzaForm.get('direccion')?.setValue(this.listaPizza[indice].direccion);
        this.pizzaForm.get('telefono')?.setValue(this.listaPizza[indice].telefono);
        this.pizzaForm.get('tamano')?.setValue(this.listaPizza[indice].tamano);
        this.pizzaForm.get('ingrediente1')?.setValue(this.listaPizza[indice].ingredientes.includes('Jamon'));
        this.pizzaForm.get('ingrediente2')?.setValue(this.listaPizza[indice].ingredientes.includes('Piña'));
        this.pizzaForm.get('ingrediente3')?.setValue(this.listaPizza[indice].ingredientes.includes('Champiñones'));
        this.pizzaForm.get('nPizzas')?.setValue(this.listaPizza[indice].nPizzas);
        this.pizzaForm.get('fecha')?.setValue(this.listaPizza[indice].fecha); 
        this.quitarP(indice);
    }
    }
    
   ventaPorCliente():string[]{
    for(let i = 0; i < this.listaPizza.length; i++){
        if(!this.clientes.includes(this.listaPizza[i].nombre)){
            this.clientes.push(this.listaPizza[i].nombre+" total: "+this.listaPizza[i].precio);
        }
    }
    return this.clientes;
    }

    ventaTotal():number{
        for(let i = 0; i < this.listaPizza.length; i++){
            this.totalDia += this.listaPizza[i].precio;
        }
        return this.totalDia;
    }

    mostrarFecha():void{
     let fechaActual = new Date();
        this.fecha = fechaActual.getDate() + "/" + (fechaActual.getMonth() +1) +
                                             "/" + fechaActual.getFullYear();
    }
    mostrarAlerta():void{
        this.confirmar = confirm('¿Desea confirmar el total del día?');

        if(this.confirmar){
            this.ventaPorCliente();
            this.ventaTotal();
            this.mostrarFecha();
        }
    }

  obtenerParametros():void{
    this.nombre = this.pizzaForm.get('nombre')?.value;
    this.direccion = this.pizzaForm.get('direccion')?.value;
    this.telefono = this.pizzaForm.get('telefono')?.value;
    this.tamano = this.pizzaForm.get('tamano')?.value;
    this.ingrediente1 = this.pizzaForm.get('ingrediente1')?.value;
    this.ingrediente2 = this.pizzaForm.get('ingrediente2')?.value;
    this.ingrediente3 = this.pizzaForm.get('ingrediente3')?.value;
    this.nPizzas = this.pizzaForm.get('nPizzas')?.value;

  }
}

export interface iPizza{
    nombre: string;
    direccion: string;
    telefono: string;
    tamano: string;
    ingredientes: string[];
    precio: number;
    nPizzas: number;
    fecha: Date;
}
