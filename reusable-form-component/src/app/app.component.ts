import { Component, computed, effect, inject, model, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import FormElementWrapperComponent from "./components/form-element-wrapper/form-element-wrapper.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

export interface FormModel {
  firstname: string;
  lastname: string;
  username: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormElementWrapperComponent, FormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  formObject = model<FormModel>({
    firstname: '',
    lastname: '',
    username: ''
  })


  constructor() {
    
  }  
}
