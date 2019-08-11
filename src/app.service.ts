import { Injectable, HttpService, Get } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { response } from 'express';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { V4MAPPED } from 'dns';


@Injectable()
export class AppService {

  constructor(private http:HttpService){}

  getHello(): string {
    return 'Hello by!';
  }

  convertirObjeto(obj,predicate){
    Object.keys(obj)
    .filter( key => predicate(obj[key]) )
    .reduce( (res, key) => (res[key] = obj[key], res), {} );
  }

  obtenerPlanetas(planeta?:string){
    return this.http.get("http://localhost/planetas/src/planetas.json")
    .pipe(
      map(response=>{
        if(planeta){
          return response.data.images[planeta];
        }else{
          return response.data;
        }
      })
    );
  }
}
