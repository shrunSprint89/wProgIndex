import { Component, OnInit } from '@angular/core';
import {Resource, PageContent} from '../page-content';
import {AppDataService} from '../app-data.service';


@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  constructor(private appDataService: AppDataService) { };

  public pageContent: PageContent = {
    pageTitle : "Resources list",
    pageText : "",
    resourceList: []
  };

  private updateResourceList(resources:Resource[]):void {
    this.pageContent.resourceList = resources;
  };

  private getResources():void{
    //Stub code below
    // let resources:Resource[] = [
    //     {
    //       _id : 2134231,
    //       serialNo: 1,
    //       name : 'Getting MEAN with Mongo, Express, Angular and NodeJS',
    //       categoryTags: ['Book'],
    //       subjectTags: ['MEAN stack', 'JavaScript', 'Full stack'],
    //       helpfulness: 5,
    //       description: 'Book by Manning publications on MEAN stack, hands-on approach',
    //       pictures: {},
    //       link: '	https://www.manning.com/books/getting-mean-with-mongo-express-angular-and-node-second-edition'
    //     },
    //     {
    //       _id : 212344,
    //       serialNo: 2,
    //       name : 'Angular Front to Back	',
    //       categoryTags: ['Course'],
    //       subjectTags: [	'Angular', 'Front end', 'JavaScript', 'Test'],
    //       helpfulness: 5,
    //       description: 'Course by Brad Traversy on Angular, hands-on aproach',
    //       pictures: {},
    //       link: 'https://www.udemy.com/angular-4-front-to-back/'
    //     },
    //     {
    //       _id : 3213412,
    //       serialNo: 3,
    //       name : 'The Complete 2019 Web Development Bootcamp',
    //       categoryTags: ['Course'],
    //       subjectTags: ['JavaScript', 'Full stack'],
    //       helpfulness: 5,
    //       description: 'Book by Manning publications on MEAN stack, hands-on approach',
    //       pictures: {},
    //       link: 'https://www.udemy.com/the-complete-web-development-bootcamp/'
    //     }
    //   ];
    //this.updateResourceList(resources);
    this.appDataService.getResourcesList().then(
      recdResources => this.updateResourceList(recdResources)
    );
  };

  ngOnInit() {
    this.getResources();
  };

}
