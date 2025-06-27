import { Component } from '@angular/core';
import { PageTitleComponent } from "../shared/page-title/page-title.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageTitleComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
