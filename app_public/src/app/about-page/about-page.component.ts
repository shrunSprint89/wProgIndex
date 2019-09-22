import { Component, OnInit } from '@angular/core';
import {PageContent} from '../page-content'


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  pageContent: PageContent = {
    pageTitle : "About wProgIndex",
    pageText : "",
    resourceList: []
  };

  constructor() { };

  ngOnInit() {
  }

}
