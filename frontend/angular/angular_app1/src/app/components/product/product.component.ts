import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  /*constructor(private service: ProductService) {

  }*/

  category:string[]=["","","",""]
  name: string = "";
  description: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  price: number = 0;
  state: boolean= false;
  active: boolean = false;
  

  ngOnInit(): void {

  }

  save(): void {
    console.log(this.name)
    console.log(this.description)
    console.log(this.price)
    console.log(this.state)
  }

}
