import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebcamService {
  video: HTMLVideoElement
  constructor() {
    this.video = document.createElement("video");
  }
  
  starVideo() {
   let contentVideo = document.getElementById("container-video")
    contentVideo?.appendChild(this.video)
    navigator.mediaDevices.getUserMedia({ video: true }).then(streem => {

      this.video.srcObject = streem;
      this.video.play()
    }).catch(erro => {
      alert(erro)
    })
  }
  stopVideo(){
    this.video.pause()
  }
}
