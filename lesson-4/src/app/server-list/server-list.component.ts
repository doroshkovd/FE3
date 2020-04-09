import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() elements: any[];

  @ContentChild('h2Ref', {static: true}) h2Ref: ElementRef;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChnages');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('onInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Content init');
    console.log(this.h2Ref);

  }

  ngAfterContentChecked(): void {
    console.log('Content checked');
  }

  ngAfterViewInit(): void {
    console.log('View init');

  }

  ngAfterViewChecked(): void {
    console.log('View checked');
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }


}
