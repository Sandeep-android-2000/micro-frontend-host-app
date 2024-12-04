import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SafePipe } from "./safe.pipe";

@Component({
  selector: 'app-root',
  imports: [SafePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'mfe-host-app';

  apps = [
    { name: 'App 1', url: 'http://localhost:4201' },
    { name: 'App 2', url: 'http://localhost:4202' },
    { name: 'App 3', url: 'http://localhost:4203' },
    { name: 'App 4', url: 'http://localhost:4204' },
    { name: 'App 5', url: 'http://localhost:4205' },
  ];

  

 // microFrontendUrl: string = 'http://localhost:4201'; // URL of the micro-frontend
  selectedAppUrl: string = this.apps[0].url;

  sendMessageToIframe(message: string) {
    const iframe = document.querySelector('iframe');

    // console.log(iframe?.contentWindow)
    iframe?.contentWindow?.postMessage({ type: 'data', payload: { message } }, '*');
  }

  loadApp(url: string) {
    this.selectedAppUrl = url;
    
  }
}
