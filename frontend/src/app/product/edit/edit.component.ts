import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/categoria/categoria';
import { CategoryService } from 'src/app/categoria/categoria.service';
import { ProductService } from '../product.service';
import { Product } from '../product';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  ProductForm: FormGroup;
  categorias: Category[];
  product: Product;
  model;

  // DatePicker Component
  SendDataonChange(event: any) {
    console.log(event.target.value);
  }
  changed: Date;
  onClick() {
    console.log(this.changed);
  }

  constructor(
    public ProductService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    public categoriaService: CategoryService
  ) { }

  ngOnInit(): void {

    // Solicite que todas as categorias sejam exibidas em "Select" de formulario produtos
    this.categoriaService.getAll().subscribe((data: Category[]) => {
      this.categorias = data;
      console.log(this.categorias);
    });
    // Procura de Product por Id
    this.id = this.route.snapshot.params['idProduct'];
    this.ProductService.find(this.id).subscribe((data: Product) => {
      this.product = data;
    });


    // Validações

    this.ProductForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      category_id: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required, Validators.pattern("^[0-9.,]*$")]),
      venc: new FormControl('', [Validators.required]),
      quant: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      perc: new FormControl('', [Validators.required]),
    });

  }

  // Alerta de Guardado
  successNotification() {
    Swal.fire('Product updated successfully!', 'success');
  }

  get f() {
    return this.ProductForm.controls;
  }

  submit() {
    console.log(this.ProductForm.value);
    this.ProductService.update(this.id, this.ProductForm.value).subscribe(res => {
      console.log('Product updated successfully!');
      this.successNotification()
      this.router.navigateByUrl('product/index');
    })
  }

}
