import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './interceptor/token.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [provideHttpClient(withInterceptors([tokenInterceptor]))],
})
export class SharedModule {}
