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

  select(left: string): void {
    this.left = left;
  }
}
