import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public modalActive : NgbActiveModal,
    public config : NgbAccordionConfig
  ) {
    config.closeOthers = true
  }

  ngOnInit(): void {
  }

}
