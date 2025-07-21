import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layouts/header/header.component';
import { LandingComponent } from './components/layouts/landing/landing.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { RouterModule } from '@angular/router';
import { UnauthorizedComponent } from './access/unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    UnauthorizedComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    UnauthorizedComponent,
  ],
})
export class CoreModule {}
