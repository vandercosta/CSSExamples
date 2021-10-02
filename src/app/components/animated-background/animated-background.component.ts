import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-background',
  templateUrl: './animated-background.component.html',
  styleUrls: ['./animated-background.component.scss'],
})
export class AnimatedBackgroundComponent implements OnInit {
  dark = false;
  ngOnInit(): void {
    console.log();
  }
}
