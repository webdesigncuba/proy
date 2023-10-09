import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../categoria.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public categoriaService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Validando a entrada de dados do formulário
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),

    });
  }

  // Alerta de Guardado
  successNotification() {
    Swal.fire('Categoria created successfully!', 'success');
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.categoriaService.create(this.form.value).subscribe(res => {
      console.log('categoria created successfully!');
      this.successNotification();
      this.router.navigateByUrl('category/index');
    })
  }
}
