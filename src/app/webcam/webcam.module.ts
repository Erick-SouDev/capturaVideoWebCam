import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamComponent } from './webcam.component';
import { WebcamService } from './webcam.service';



@NgModule({
  declarations: [
    WebcamComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WebcamComponent
  ]
  ,providers:[WebcamService]
})
export class WebcamModule { }
