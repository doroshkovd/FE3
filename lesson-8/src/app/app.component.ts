import { Component, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  options = [
    {
      value: 'name',
      label: 'Filtering by Name',
    },
    {
      value: 'address',
      label: 'Filtering by City',
    },
    {
      value: 'email',
      label: 'Filtering by Email',
    },
  ];
  filterStr: string = '';
  filterField: string = 'name';
  users$: Observable<any> = of([
    {
      name: 'Judith',
      email: 'Aliquam.ultrices.iaculis@Integer.co.uk',
      startDate: '2020-04-07T11:40:04',
      address: 'Magangu',
    },
    {
      name: 'Lamar',
      email: 'ante.blandit.viverra@vel.co.uk',
      startDate: '2020-04-16T05:34:37',
      address: 'Sukkur',
    },
    {
      name: 'Marcia',
      email: 'ipsum@a.co.uk',
      startDate: '2019-07-08T05:08:36',
      address: 'Puerto Octay',
    },
    {
      name: 'Selma',
      email: 'auctor@nequeNullamut.net',
      startDate: '2020-02-17T10:21:13',
      address: 'Bogota',
    },
    {
      name: 'Rose',
      email: 'auctor@nequeNullamut.net',
      startDate: '2019-09-07T22:26:38',
      address: 'Hoogeveen',
    },
    {
      name: 'Ronan',
      email: 'et.rutrum.non@fames.net',
      startDate: '2010-11-10T01:53:53',
      address: 'Otranto',
    },
    {
      name: 'Kirk',
      email: 'Nulla.tincidunt.neque@duiFusce.ca',
      startDate: '2016-04-17T21:10:01',
      address: 'Cabano',
    },
  ]);
  users: any;
  // users = [
  //   {
  //     name: 'Judith',
  //     email: 'Aliquam.ultrices.iaculis@Integer.co.uk',
  //     startDate: '2020-04-07T11:40:04',
  //     address: 'Magangu',
  //   },
  //   {
  //     name: 'Lamar',
  //     email: 'ante.blandit.viverra@vel.co.uk',
  //     startDate: '2020-04-16T05:34:37',
  //     address: 'Sukkur',
  //   },
  //   {
  //     name: 'Marcia',
  //     email: 'ipsum@a.co.uk',
  //     startDate: '2019-07-08T05:08:36',
  //     address: 'Puerto Octay',
  //   },
  //   {
  //     name: 'Selma',
  //     email: 'auctor@nequeNullamut.net',
  //     startDate: '2020-02-17T10:21:13',
  //     address: 'Bogota',
  //   },
  //   {
  //     name: 'Rose',
  //     email: 'auctor@nequeNullamut.net',
  //     startDate: '2019-09-07T22:26:38',
  //     address: 'Hoogeveen',
  //   },
  //   {
  //     name: 'Ronan',
  //     email: 'et.rutrum.non@fames.net',
  //     startDate: '2010-11-10T01:53:53',
  //     address: 'Otranto',
  //   },
  //   {
  //     name: 'Kirk',
  //     email: 'Nulla.tincidunt.neque@duiFusce.ca',
  //     startDate: '2016-04-17T21:10:01',
  //     address: 'Cabano',
  //   },
  // ];

  name = 'Ivan Ivanov';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };

  ngOnInit(): void {
    // this.users$.subscribe((users) => {
    //   this.users = users;
    // });
  }

  addUsers() {
    this.users = [...this.users, {
        name: 'JudithCopy',
        email: 'Aliquam.ultrices.iaculis@Integer.co.uk',
        startDate: '2020-04-07T11:40:04',
        address: 'Magangu',
      },
      {
        name: 'LamarCopy',
        email: 'ante.blandit.viverra@vel.co.uk',
        startDate: '2020-04-16T05:34:37',
        address: 'Sukkur',
      },
      {
        name: 'MarciaCopy',
        email: 'ipsum@a.co.uk',
        startDate: '2019-07-08T05:08:36',
        address: 'Puerto Octay',
      }];
  }

  check() {
    console.log(this.filterField);
  }
}
