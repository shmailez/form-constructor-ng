import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-static',
  templateUrl: './form-static.component.html',
  styleUrls: ['./form-static.component.css']
})
export class FormStaticComponent {
  forms: FormGroup[] = [];
  formConfig: any[] = [];


   constructor(private fb: FormBuilder) { }


  ngOnInit() {
    // Здесь вы бы сделали HTTP-запрос для получения конфигурации формы
    this.formConfig = [
      { type: 'text', label: 'Фамилия', name: 'firstName' },
      { type: 'text', label: 'Имя', name: 'lastName' },
      { type: 'email', label: 'Почта', name: 'email' },
      { type: 'text', label: 'Месседжер', name: 'messager' },
      { type: 'text', label: 'Телефон', name: 'tel' }
    ];

    this.addForm();
  }

  addForm() {
    let group:any = {};
    this.formConfig.forEach(input_template => {
      group[input_template.name] = [''];
    });

    this.forms.push(this.fb.group(group));
  }

  deleteForm(i: number) {
    this.forms.splice(i, 1);
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}

