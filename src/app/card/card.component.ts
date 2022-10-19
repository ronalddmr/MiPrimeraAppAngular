import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  public imagen: string =
    'https://th.bing.com/th/id/OIP.a9st7KSaOt1lU-P2JQaMiwHaFg?pid=ImgDet&rs=1';
  public Titulo: string = 'Mi primera tarjeta en Angular';

  constructor() {}

  ngOnInit(): void {}
}
