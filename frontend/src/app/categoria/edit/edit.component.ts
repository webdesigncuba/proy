import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../categoria';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  categoria: Category;
  form: FormGroup;

  constructor(
    public categoriaService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCategory'];
    this.categoriaService.find(this.id).subscribe((data: Category) => {
      this.categoria = data;
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    });

  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.categoriaService.update(this.id, this.form.value).subscribe(res => {
      console.log('Category updated successfully!');
      this.router.navigateByUrl('category/index');
    })
  }

}
