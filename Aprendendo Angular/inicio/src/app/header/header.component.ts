import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges{
  @Input() public title: string = "Projeto Angular";

  constructor(){}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log("Foi alterado a entrada passada como parâmetro")
  }
}
