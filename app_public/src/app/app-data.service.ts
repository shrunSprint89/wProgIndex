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

  public getResourcesList():Promise<Resource[]>{
    const url:string = `${this.apiBaseUrl}/resources`;
    return this.http
            .get(url)
            .toPromise()
            .then(response => response as Resource[])
            .catch(this.handleErrors);
  };

  private handleErrors(error: any):Promise<any> {
    console.error('Something has gone wrong while making the API data fetch', error);
    return Promise.reject(error.message || error);
  };
}
