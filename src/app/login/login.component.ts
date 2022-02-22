import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormLoginComponent } from './form-login/form-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  constructor(
    private modal : NgbModal,
    private route : Router
  ) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.modal.open(FormLoginComponent, {windowClass: 'modal-animation', modalDialogClass : 'modal-mode-2', centered:true, ariaLabelledBy: 'modal-basic-title', size: 'sm'}).result.then((result) => {
      
    }, (reason) => {
      this.route.navigate(['/'])
    })
  }
}
