import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiAccessService } from 'src/app/servies/api-access.service';
import { environment } from 'src/environments/environment';
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
    window.location.href = `${environment.gamingWebUrl}client/premade-available`;
  }

}
