import { Component, computed, input, InputSignal } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-form-element-wrapper',
    template: `
        <label class="form-label" [title]="tooltip()">{{label()}}</label>
        <ng-content></ng-content>
        <div class="text-danger">
            <small>{{validationMessages()}}</small>
        </div>
    `
})
export default class FormElementWrapperComponent {
    label: InputSignal<String> = input.required<String>()
    tooltip: InputSignal<String> = input<String>('')
    validation: InputSignal<any> = input<any>({})

    constructor() { }

    validationMessages = computed(() => {
        if (Object.keys(this.validation()).length > 0) {
            const keys = Object.keys(this.validation())

            switch (keys[0]) {
                case 'required':
                    return 'This field is required';

                case 'minlength':
                    return `This field must be at least ${this.validation().minlength.requiredLength} characters long`;

                default:
                    return '';
            }
        }

        return ''
    })
}