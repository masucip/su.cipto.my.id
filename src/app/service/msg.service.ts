import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MsgComponent } from '../etc/msg/msg.component';
interface configMessage {
  typeMsg : string,
  title : string,
  deskription : string,
}
@Injectable({
  providedIn: 'root'
})
export class MsgService {
  
  constructor(
    private modal : NgbModal
  ) {

  }

  showMsg(config : configMessage){
    const modal = this.modal.open(MsgComponent,{backdrop:'static', modalDialogClass : 'modal-danger modal-mode-2',size:'md'})
    modal.componentInstance.config = config
  }
}
