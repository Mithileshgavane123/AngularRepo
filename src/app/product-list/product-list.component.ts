import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Object;

  constructor(private service:ProductService) { }

  ngOnInit() 
  {
    this.service.getProducts().subscribe((result) =>
      {
        console.log(result);
        this.products=result;
      })
  }

}
