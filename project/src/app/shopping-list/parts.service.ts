import { Injectable } from '@angular/core';
import { Part } from "../shared/models/part.model";
import { BehaviorSubject, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { loader } from "../shared/loader/loader.decorator";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class PartsService {
  private _parts: Part[] = [];

  editedElement: Subject<{part:Part, index: number}> = new Subject();

  private _listChange: BehaviorSubject<any> = new BehaviorSubject<any>(this._parts);

  get parts() {
    return this._listChange.asObservable();
  }

  constructor(private http: HttpClient) { }

  @loader()
  getParts(headers?: HttpHeaders) {
    return this.http.get('https://fe3-course.firebaseio.com/parts.json', {headers})
      .pipe(
        map((data) => {
          const parts = [];
          for (let key in data) {
            parts.push({id: key, ...data[key]});
          }
          return parts;
        }));
  }

  addParts(parts: Part[]) {
    return this.http.post('https://fe3-course.firebaseio.com/parts.json', parts[0])
      .pipe(
        map((data: any) => {
          return {id: data.name, ...parts[0]};
        }));
  }

  onEditPart(index) {
    const part = this._parts[index];
    this.editedElement.next({part, index});
  }

  editPart(part: Part, index: number) {
    this.http.put(`https://fe3-course.firebaseio.com/parts/${part.id}.json`, part)
      .subscribe((data) => {
        this._parts[index].name = part.name;
        this._parts[index].amount = part.amount;
        this._listChange.next(this._parts);
      });
  }

  deletePart(index: number) {
    this._parts.splice(index, 1);
    this._listChange.next(this._parts);
  }
}
