import { Injectable } from '@angular/core';
import { Part } from "../../models/part.model";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PartsService {
  private _parts: Part[] = [
    {name: 'Wheel', amount: 1},
    {name: 'Engine', amount: 1},
    {name: 'mirror', amount: 4}
  ];

  editedElement: Subject<{part:Part, index: number}> = new Subject();

  private _listChange: BehaviorSubject<any> = new BehaviorSubject<any>(this._parts);

  get parts() {
    return this._listChange.asObservable();
  }

  constructor() { }

  addParts(parts: Part[]) {
    this._parts.push(...parts);
    this._listChange.next(this._parts);
  }

  onEditPart(index) {
    const part = this._parts[index];
    this.editedElement.next({part, index});
  }

  editPart(part: Part, index: number) {
    this._parts[index].name = part.name;
    this._parts[index].amount = part.amount;
    this._listChange.next(this._parts);
  }

  deletePart(index: number) {
    this._parts.splice(index, 1);
    this._listChange.next(this._parts);
  }
}
