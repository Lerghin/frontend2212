import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';



const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthoritie'; 
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL= 'https://above-tallia-lerghin.koyeb.app/personas/';

  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<persona[]> {
    return this.httpClient.get<persona[]>(this.URL + 'lista');
}

public details(id: number): Observable<persona> {
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
}
/*public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', educacion);
}*/
public update(id: number, Persona: persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
}

/*public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL +`delete/${id}`);

}*/
}


