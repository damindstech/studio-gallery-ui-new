import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './theme-alime/layout/layout.component';
import { HeaderComponent } from './theme-alime/header/header.component';
import { FooterComponent } from './theme-alime/footer/footer.component';
import { HomeComponent } from './theme-alime/home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent
  ]
})
export class SharedModule { }
