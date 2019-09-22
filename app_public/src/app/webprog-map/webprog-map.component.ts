import { Component, OnInit } from '@angular/core';
import {AppDataService} from '../app-data.service';
import 'markmap/lib/d3/d3';
import 'markmap/lib/d3-flextree';
import markmap from 'markmap/lib/view.mindmap';

//mindmup library
//import transform from 'markmap/lib/transform.mindmup';

//markdown libraries
//import parse from 'markmap/lib/parse.markdown';
//import transform from 'markmap/lib/transform.headings';

//textFile libraries
import parse from 'markmap/lib/parse.txtmap';
import transform from 'markmap/lib/transform.headings';

@Component({
  selector: 'app-webprog-map',
  templateUrl: './webprog-map.component.html',
  styleUrls: ['./webprog-map.component.css']
})
export class WebprogMapComponent implements OnInit {

  constructor(private appDataService: AppDataService) { }


  private updateMapFull(recdNodes):void {
    
    //mindmup transform
    //const data = transform(recdNodes);
    
    //markdown and text transform
    const data = transform(parse(recdNodes));

    markmap('svg#mapFull', data, {
      preset: 'colorful', // or default
      linkShape: 'diagonal' // or bracket
    });
    
  };

  private getMapFull():void{
    this.appDataService.getNodesFile().then(
      recdNodes => this.updateMapFull(recdNodes)
    );
  };

  ngOnInit() {

    this.getMapFull();

    
  };

}
