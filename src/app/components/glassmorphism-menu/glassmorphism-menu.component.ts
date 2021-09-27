import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glassmorphism-menu',
  templateUrl: './glassmorphism-menu.component.html',
  styleUrls: ['./glassmorphism-menu.component.scss'],
})
export class GlassmorphismMenuComponent implements OnInit {
  left = '0';
  ngOnInit(): void {
    console.log();
  }

  teste(left: string): void {
    this.left = left;
  }

  // teste(e: Event): void {
  //   // this.teste2(e.target);
  //   console.log(e);
  // }

  // teste2(e: EventTarget | null): void {
  //   console.log(e);
  // }
}
