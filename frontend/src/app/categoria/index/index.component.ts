import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../categoria.service';
import { Category } from '../categoria';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  categorias: Category[] = [];

  // constructor() { }
  constructor(public categoriaService: CategoryService) { }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe((data: Category[]) => {
      this.categorias = data;
      console.log(this.categorias);
    })
  }

  deleteCategoria(id: any) {
    this.categoriaService.delete(id).subscribe(res => {
      this.categorias = this.categorias.filter(item => item.id !== id);
      console.log('Person deleted successfully!');
    })
  }
}
