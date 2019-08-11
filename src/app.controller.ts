import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/planetas")
  Planetas(){
    let result = this.appService.obtenerPlanetas();
    return result;
  }

  @Get("/planetas/:planeta")
  obtenerPlanetaPorNombre(@Param('planeta') planeta){
    let result = this.appService.obtenerPlanetas(planeta);
    return result;
  }
}
