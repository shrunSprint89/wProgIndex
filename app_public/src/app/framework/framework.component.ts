import { Component, OnInit } from '@angular/core';
//import 'particles.js';

declare let particlesJS: any; 

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
  title = 'wProgIndex';
  constructor() { }

  ngOnInit() {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', '../assets/config/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

  }

}
