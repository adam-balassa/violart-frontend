import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { opacityAnimation } from 'src/app/animation/animation';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [opacityAnimation()]
})
export class ContactsComponent implements OnInit {
  
  sender: string;
  subject: string;
  body: string;
  success: boolean = false;

  constructor(private api: ApiService, private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Kapcsolat | Violart Stúdió');
    this.meta.updateTag({ name: 'keywords', content: 'Violart, Violart Stúdió, ViolartStudio, Kapcsolat, Telefon, Email' })
    this.meta.updateTag({ name: 'description', content: 'Lépj velünk kapcsolatba! Mit tanulhatsz? Különböző grafikai technikákat, szabadkézi rajzot kezdő szinttől ameddig bírod, csendélettől az aktig, segítek, hogy bekerülhess álmaid művészeti iskolájába...' })
  }

  sendMail() {
    this.api.sendMail(this.sender, this.subject, this.body)
      .then(() => {
        this.sender = ''
        this.subject = ''
        this.body = ''
        this.showMessage();
      })
  }

  showMessage() {
    this.success = true;
  }

  hideMessage() {
    this.success = false;
  }
}
