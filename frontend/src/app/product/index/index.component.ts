import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Category } from './.././../categoria/categoria';
import { CategoryService } from './.././../categoria/categoria.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products: Product[] = [];
  category: Category[] = [];

  // constructor() { }
  constructor(
    public productService: ProductService,
    public categoriaService: CategoryService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[]) => {
      this.products = data;
      console.log(this.products);
    });
    this.categoriaService.getAll().subscribe((data: Category[]) => {
      this.category = data;
      console.log(this.category);
    });
  }

  deleteProduct(id: any) {
    this.productService.delete(id).subscribe(res => {
      this.products = this.products.filter(item => item.id !== id);
      console.log('Person deleted successfully!');
    })
  }
}
