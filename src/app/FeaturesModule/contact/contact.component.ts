import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form: FormGroup;
  matcher = new ErrorStateMatcher();
  loadingState = false;

  messageState: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.email]),

      message: new FormControl('', [Validators.required]),
    });
  }
  ngOnDestroy() {}

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get message(): FormControl {
    return this.form.get('message') as FormControl;
  }

  onSubmit() {
    this.messageState = !this.messageState;
  }
}
