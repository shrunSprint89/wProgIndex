import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Resource} from './page-content';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

constructor(private http:HttpClient) { }

  private apiBaseUrl = environment.apiBaseUrl;
  private nodeData = {};
  private mdNodeData: string ="";

  public getResourcesList():Promise<Resource[]>{
    const url:string = `${this.apiBaseUrl}/resources`;
    return this.http
            .get(url)
            .toPromise()
            .then(response => response as Resource[])
            .catch(this.handleErrors);
  };

  public getNodesFile():Promise<any>{
    const url:string = `${this.apiBaseUrl}/nodes`;
    return this.http
            .get(url,  {responseType: 'text'})
            .toPromise()
            .then(response => response )
            .catch(this.handleErrors);
    
    /*
    const nodeData:any = this.nodeData;
    const mdNodeData:string = this.mdNodeData;
    const nodesPromise:Promise<any> = new Promise(
      function(resolve, reject) {
        setTimeout(function() {
          resolve(mdNodeData);
        }, 300);
      }
    );
    return nodesPromise.then(response => response )       
            .catch(this.handleErrors);
    */
  };

  private handleErrors(error: any):Promise<any> {
    console.error('Something has gone wrong while making the API data fetch', error);
    return Promise.reject(error.message || error);
  };
}
