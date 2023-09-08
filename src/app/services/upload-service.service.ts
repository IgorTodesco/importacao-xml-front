import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, of, reduce, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  uploadXml(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('files', file);
    const url = `${this.baseUrl}/upload`;
    return this.http.post<void>(url, formData);
  } 

  uploadFile(files: File[]): Observable<Array<void>> {
    return of(files).pipe(
      switchMap((last) => {
        const obs = last.map(x => {
          return this.uploadXml(x);
        });
        return forkJoin(obs);
      })
    );
  }
}
