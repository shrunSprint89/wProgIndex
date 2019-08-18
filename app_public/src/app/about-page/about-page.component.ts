import { Component, OnInit } from '@angular/core';
import {PageContent} from '../page-content'


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  pageContent: PageContent = {
    pageTitle : "About WProgIndex",
    pageText : "May musical arrival beloved luckily adapted him. Shyness mention married son she his started now. Rose if as past near were. To graceful he elegance oh moderate attended entrance pleasure. Vulgar saw fat sudden edward way played either. Thoughts smallest at or peculiar relation breeding produced an. At depart spirit on stairs. She the either are wisdom praise things she before. Be mother itself vanity favour do me of. Begin sex was power joy after had walls miles.",
    resourceList: []
  };

  constructor() { };

  ngOnInit() {
  }

}
