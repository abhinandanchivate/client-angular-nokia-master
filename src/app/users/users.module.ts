import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { tokenInterceptor } from '../shared/interceptor/token.interceptor';
import { httpInterceptorProviders } from '../shared/interceptor';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, UsersRoutingModule],
  providers: [
    provideHttpClient(withInterceptors(httpInterceptorProviders)),
    AuthService,
  ],
})
export class UsersModule {}
