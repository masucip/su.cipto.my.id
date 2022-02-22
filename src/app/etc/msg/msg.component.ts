import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss']
})
export class MsgComponent implements OnInit {
  @Input() config : any
  constructor(
    public modal : NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
