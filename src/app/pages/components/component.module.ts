import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSensorComponent } from '../components/lista-sensor.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ListaSensorComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[ListaSensorComponent]
})
export class ComponentModule { }
