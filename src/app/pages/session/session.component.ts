import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiAccessService } from 'src/app/servies/api-access.service';
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  proUsers: any[] = [];

  constructor(private auth: ApiAccessService) { }

  ngOnInit(): void {
    this.auth.fetchProUsers().subscribe((data) => {
      this.proUsers = data?.data;
      const selectedProUsersLocal = this.proUsers.filter(c => c.currentStatus === 'ONLINE');

      if (selectedProUsersLocal.length < 4) {
        const remainingUsers = 4 - selectedProUsersLocal.length;
        const otherProUsersLocal = this.proUsers.filter(c => c.currentStatus !== 'ONLINE' && c.platform);
        const usersToAdd = otherProUsersLocal.slice(0, remainingUsers);
        this.proUsers = selectedProUsersLocal.concat(usersToAdd);
      } else {
        this.proUsers = selectedProUsersLocal;
      }

    });
  }

}
