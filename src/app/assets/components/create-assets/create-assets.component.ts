import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssetsService } from '../../services/assets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-assets',
  standalone: false,
  templateUrl: './create-assets.component.html',
  styleUrl: './create-assets.component.css',
})
export class CreateAssetsComponent {
  assetForm: FormGroup;
  errorMessage: string = '';

  statusOptions = ['available', 'assigned', 'maintenance', 'lost'];

  constructor(
    private fb: FormBuilder,
    private assetsService: AssetsService,
    private router: Router
  ) {
    this.assetForm = this.fb.group({
      assetName: ['', Validators.required],
      assetType: ['', Validators.required],
      assetLocation: ['', Validators.required],
      assignedTo: ['', Validators.required],
      deployedDate: ['', Validators.required],
      status: ['available', Validators.required], // default
    });
  }

  onSubmit(): void {
    if (this.assetForm.valid) {
      console.log('Asset Data:', this.assetForm.value);
      // You can call an AssetService here to send data to backend
      this.assetsService.createAssets(this.assetForm.value).subscribe({
        next: (res: any) => {
          // Save token to localStorage or service
          // localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Login failed';
        },
      });
    }
  }
}
