import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import disks from '../../data/disks.json';
import { Observable, of } from 'rxjs';
import { Disk } from '../../interface/disks';

@Injectable({
  providedIn: 'root'
})
export class DiskService {

  constructor(private http: HttpClient){}

  getDisks(): Observable<Disk[]>{
      return of([ ...disks ]);
  }

  setVisibility() {}
}
