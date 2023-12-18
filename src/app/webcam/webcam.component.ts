import { Component } from '@angular/core';
import { WebcamService } from './webcam.service';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrl: './webcam.component.css'
})
export class WebcamComponent {
   constructor(private  webCam: WebcamService){}


   openCam(){
      this.webCam.starVideo()
   }
   stopCam(){
    this.webCam.stopVideo()
   }
}
