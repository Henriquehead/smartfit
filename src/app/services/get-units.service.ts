import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { UnitsResponse } from '../types/unit-respose-interface';

@Injectable({
  providedIn: 'root'
})
export class GetUnitsService {

  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"

  constructor(private httpCient:HttpClient) { }

  getAllUnits():Observable<UnitsResponse> {
    return this.httpCient.get<UnitsResponse>(this.apiUrl)
  }
}
