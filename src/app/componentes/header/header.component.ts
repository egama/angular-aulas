import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() titulo = "";
  @Output() doMenuClicado = new EventEmitter();

  ngOnInit(): void {
  }

  clickMenu = () => {
    debugger;
    this.doMenuClicado.emit("Clicadoooooo!!!")
  }
}
