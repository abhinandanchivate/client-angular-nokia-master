import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { CreateAssetsComponent } from './components/create-assets/create-assets.component';
import { tokenInterceptor } from '../shared/interceptor/token.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateAssetsComponent],
  imports: [CommonModule, ReactiveFormsModule, AssetsRoutingModule],
  providers: [provideHttpClient(withInterceptors([tokenInterceptor]))],
})
export class AssetsModule {}
