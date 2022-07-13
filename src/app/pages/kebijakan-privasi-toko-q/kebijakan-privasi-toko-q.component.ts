import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kebijakan-privasi-toko-q',
  templateUrl: './kebijakan-privasi-toko-q.component.html',
  styleUrls: ['./kebijakan-privasi-toko-q.component.scss']
})
export class KebijakanPrivasiTokoQComponent implements OnInit {
  @ViewChild('modalKebijakan') modalKebijakan:any;
  constructor(
    public modal : NgbModal,
    private route : Router
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.modal.open(this.modalKebijakan, {windowClass: 'modal-animation', modalDialogClass : 'modal-mode-1', centered:true, ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.route.navigate(['/'])
    }, (reason) => {
      this.route.navigate(['/'])
    })
  }
}
