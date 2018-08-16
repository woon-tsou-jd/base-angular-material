import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageComponent } from './components/page/page.component';
import { MinHeightLayoutCalcDirective } from './directives/minHeightLayoutCalc.directive';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PageComponent
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PageComponent,
    MinHeightLayoutCalcDirective
  ],
  providers: [],
})
export class SharedModule { }
