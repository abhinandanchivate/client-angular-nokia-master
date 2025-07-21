import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  submitted: boolean = false;
  registerForm: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.authService.registerUser(this.registerForm.value).subscribe({
      next: (response) => {
        // Handle successful registration
        // For example: show a success message, reset form, or redirect
        console.log('Registration successful:', response);

        // this.router.navigate(['/login']);
        // or
        // this.registerForm.reset();
        // or
        // this.successMessage = 'Registration successful!';
      },
      error: (error) => {
        // Handle error
        console.error('Registration failed:', error);
        // this.errorMessage = 'Registration failed. Please try again.';
        // Optionally show more details based on error object
      },
    });
  }
}
