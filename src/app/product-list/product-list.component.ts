import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Product} from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 product!: Product[];


  constructor(private productService:ProductService,
   private router:Router ) { }

  ngOnInit(): void {
  this.getProduct();
  }
  getProduct(){
    this.productService.getProductsList().subscribe(data=>{
      //console.log(data);
      this.product=data;
    });
  }
  updateProduct(id:number){
    this.router.navigate(['update-product',id]);

  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe( data =>{
      console.log(data);
      this.getProduct();
    });
  }
}
