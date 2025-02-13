import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectToDiscord() {
    window.open('https://discord.gg/M6zjgFpXkN', '_blank');
  }
  redirectToGamingWeb() {
    window.open(environment.gamingWebUrl, '_blank');
  }

}
