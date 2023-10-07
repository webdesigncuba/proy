import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Category } from './.././../categoria/categoria';
import { CategoryService } from './.././../categoria/categoria.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  ProductForm: FormGroup;
  categorias: Category[];
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
    public categoriaService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe((data: Category[]) => {
      this.categorias = data;
      console.log(this.categorias);
    })

    this.ProductForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      category_id: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      valor: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      venc: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      quant: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      perc: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
    });

  }

  get f() {
    return this.ProductForm.controls;
  }

  submit() {
    console.log(this.ProductForm.value);
    this.ProductService.create(this.ProductForm.value).subscribe(res => {
      console.log('product created successfully!');
      this.router.navigateByUrl('product/index');
    })
  }
}