import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string} = {} as {id: number, name: string};

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.user.id = +this.activatedRoute.snapshot.paramMap.get('id');
    // this.user.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.user.id = +paramMap.get('id');
        this.user.name = paramMap.get('name');
      });
  }

}
