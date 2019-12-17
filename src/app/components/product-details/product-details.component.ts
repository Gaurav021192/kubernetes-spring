import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  details: any = [];
  starrating: any = new Array(5);
  prodRating1 = 3;
  prodRating2 = 4;

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit() {
    this.getProductDetails(this.route.snapshot.params['id']);
  }

  public getProductDetails(id: String) {
    this.userService.getUserDetails(id)
    .subscribe((data) =>
    {
      console.log(data);
      this.details = data;
    });
  }

}
