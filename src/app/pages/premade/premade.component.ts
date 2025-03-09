import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiAccessService } from 'src/app/servies/api-access.service';
@Component({
  selector: 'app-premade',
  templateUrl: './premade.component.html',
  styleUrls: ['./premade.component.css']
})
export class PremadeComponent implements OnInit {

  premadeParties: any[] = [];
  fallbackVideoUrl: string = '';

  constructor(private auth: ApiAccessService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.fallbackVideoUrl = this.transformVideoUrl('https://www.youtube.com/embed/V08UPqchVgQ');
    this.auth.fetchPremadeParties().subscribe((data) => {
      this.premadeParties = data?.data;
      if (this.premadeParties.length > 1) {
        this.premadeParties = this.premadeParties.slice(0, 1);
      }
      this.premadeParties.map((party) => party.embedUrl = this.transformVideoUrl(party.party?.videoUrl));

    });
  }

  transformVideoUrl(value: string): any {
    if (value) {
      return this._sanitizer.bypassSecurityTrustResourceUrl(value);
    } else {
      return '';
    }
  }

  redirectToPremade(): void {
    window.location.href = 'https://qa-gaming.ggera.com/client/premade-available';
  }

}
