import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
       id!: number;
  product: Product=new Product();

  constructor(private route:ActivatedRoute,private router:Router,
    private productservice:ProductService) { }

  ngOnInit() {
  
    this.id =this.route.snapshot.params[`id`];

    this.productservice.getProductById(this.id).subscribe(data => {
      this.product=data;
     console.log(data) 
    })
    
  }
  updateProduct(){
    this.productservice.updateProduct(this.id,this.product)
    .subscribe(data => console.log(data))
    this.product=new Product();
    this.gotoList();

    }
    onSubmit(){
      this.updateProduct();
    }
    gotoList(){
      this.router.navigate([`/product`]);
    }
  }


