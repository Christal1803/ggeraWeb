import { Component, OnInit } from '@angular/core';
import { ApiAccessService } from 'src/app/servies/api-access.service';
@Component({
  selector: 'app-premade',
  templateUrl: './premade.component.html',
  styleUrls: ['./premade.component.css']
})
export class PremadeComponent implements OnInit {

  premadeParties: any[] = [];

  constructor(private auth: ApiAccessService) { }

  ngOnInit(): void {
    this.auth.fetchPremadeParties().subscribe((data) => {
      this.premadeParties = data?.data;
      if (this.premadeParties.length > 1) {
        this.premadeParties = this.premadeParties.slice(0, 1);
      }

    });
  }

  redirectToPremade(): void {
    window.location.href = 'https://qa-gaming.ggera.com/client/premade-available';
  }

}
