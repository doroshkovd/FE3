import { Injectable } from '@angular/core';
import { Part } from "../../models/part.model";
import { BehaviorSubject, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { loader } from "../../loader/loader.decorator";

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
    this.http.get('https://fe3-course.firebaseio.com/parts.json', {headers})
      .subscribe((data: any) => {
        const parts = [];
        console.log(data);
        for (let key in data) {
          parts.push({id: key, ...data[key]});
        }

        this._parts = parts;
        console.log(this._parts);
        this._listChange.next(this._parts);
      });
  }

  addParts(parts: Part[]) {
    this.http.post('https://fe3-course.firebaseio.com/parts.json', parts[0])
      .subscribe((data: any) => {
        this._parts.push({id: data.name, ...parts[0]});
        this._listChange.next(this._parts);
      });
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
