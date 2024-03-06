import { Component } from '@angular/core';
//Para trabajar con fFORMULARIOS REACTIVOS hay que importar esta clase
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario3-reactivo',
  templateUrl: './formulario3-reactivo.component.html',
  styleUrl: './formulario3-reactivo.component.css'
})
export class Formulario3ReactivoComponent {

//Y especificar que estas propiedades son una nueva instancia de esa clase
  // name = new FormControl ('', Validators.required);
  // email = new FormControl ('', [Validators.required, Validators.email]);

get name(){return this.formuser.get('name') as FormControl;}
get email(){return this.formuser.get('email') as FormControl;}

constructor(private fb: FormBuilder){}




// acceder al estado de todo el formulario 
  // formuser = new FormGroup({
  // 'name': new FormControl ('', Validators.required),
  // 'email': new FormControl ('', [Validators.required, Validators.email]),
  // });

  //Esto es lo mismo solo que ahora creamos grupos apartir de fb.group
  //en vez de poner new formgroup y ya no tenemos que especificar que los campos son
  //isntancia de new formcontrol (se hace para que se vea mas limpio y es mas simple)

  formuser = this.fb.group({
    'name': ['',Validators.required],
    'email': ['', [Validators.required, Validators.email]],
  });
  

  procesar(){
    console.log(this.formuser.value)
  }

}
