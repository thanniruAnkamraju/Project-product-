import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateproductComponent implements OnInit {

  product:Product=new Product();

   constructor(private productService:ProductService,
      private router:Router ){ }
  ngOnInit(): void {
  }
  saveProduct(){
    this.productService.createProduct(this.product).subscribe(data => {
      console.log(data);
      this.goToProductList();
    });
  }
  goToProductList(){
    this.router.navigate(['/product']);
  }
  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }
}
