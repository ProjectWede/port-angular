import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InfoPagina } from "../interfaces/info-pagina.interface";

@Injectable({
  providedIn: "root",
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any;

  constructor(private Http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.Http.get("assets/data/data-pagina.json").subscribe(
      (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      }
    );
  }

  private cargarEquipo() {
    this.Http.get(
      "https://angular-html-25741-default-rtdb.firebaseio.com/equipo.json"
    ).subscribe((resp: any[]) => {
      this.equipo = resp;
    });
  }
}
