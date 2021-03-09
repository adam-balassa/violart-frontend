import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Kapcsolat | Violart Stúdió');
    this.meta.updateTag({ name: 'keywords', content: 'Violart, Violart Stúdió, ViolartStudio, Kapcsolat, Telefon, Email' })
    this.meta.updateTag({ name: 'description', content: 'Lépj velünk kapcsolatba! Mit tanulhatsz? Különböző grafikai technikákat, szabadkézi rajzot kezdő szinttől ameddig bírod, csendélettől az aktig, segítek, hogy bekerülhess álmaid művészeti iskolájába...' })
  }

}
