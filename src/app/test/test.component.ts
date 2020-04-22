import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title = "Angular"

  @Input() name = '';
  @Output() outputEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onBtnClick() {
    this.outputEvent.emit();
  }
}
