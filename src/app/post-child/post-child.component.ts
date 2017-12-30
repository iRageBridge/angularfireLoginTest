import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-child',
  templateUrl: './post-child.component.html',
  styleUrls: ['./post-child.component.css']
})
export class PostChildComponent implements OnInit {
  public myTitle;
  @Input()personName;
  @Output()onNameChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.myTitle = this.personName;
  }

  changeName(){
    this.myTitle = 'New Person Name';
    this.onNameChange.emit('New Person Name');
  }

}
