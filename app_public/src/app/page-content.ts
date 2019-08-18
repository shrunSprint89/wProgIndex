export class Resource {
  _id: number;
  serialNo: number;
  name: string;
  categoryTags: string[];
  subjectTags: string[];
  helpfulness: number;
  description: string;
  pictures: any;
  link: string;
}
export class PageContent {
  pageTitle: string;
  pageText: string;
  resourceList: Resource[];
}
