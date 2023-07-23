import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface FormConfig {
  type: string;
  label: string;
  name: string;
}

//написано в chat.forefront.ai

@Component({
  selector: 'app-form-gpt',
  templateUrl: './form-gpt.component.html',
  styleUrls: ['./form-gpt.component.css']
})



export class FormGptComponent implements OnInit {
  forms: FormGroup[] = [];
  formConfig: any[] = [];

 

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.getFormConfig().subscribe(config => {
      console.log(Object.values( config).flat().splice(1, 4))
      this.formConfig = Object.values(config).flat();
      this.addForm();
    });
  }

  getFormConfig(): Observable<FormConfig[]> {
    return this.http.get<FormConfig[]>('https://staging.lobsterlab.io/test_task.php');
  }

  addForm() {
    let group:any = {};

    this.formConfig.forEach(input_template => {
      group[input_template.name] = [''];
    });

    this.forms.push(this.fb.group(group));
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }

}  


////// статический JSON

 // constructor(private fb: FormBuilder) { }


//   ngOnInit() {
//     // Здесь вы бы сделали HTTP-запрос для получения конфигурации формы
//     this.formConfig = [
//       { type: 'text', label: 'First Name', name: 'firstName' },
//       { type: 'text', label: 'Last Name', name: 'lastName' },
//       { type: 'email', label: 'Email', name: 'email' }
//     ];

//     this.addForm();
//   }

//   addForm() {
//     let group:any = {};
//     this.formConfig.forEach(input_template => {
//       group[input_template.name] = [''];
//     });

//     this.forms.push(this.fb.group(group));
//   }

//   onSubmit(form: FormGroup) {
//     console.log(form.value);
//   }
// }
