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

  //categories:string[]=["Health","Botanic","Clothes","Shoes","Beauty"]
  categories:any[]=[
    {id:'1',name:'health article'},
    {id:'2',name:'tech article'},
    {id:'3',name:'clothes article'},
    {id:'4',name:'beauty article'}

  ]
  name: string = "";
  description: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  price: number = 0;
  state: boolean= false;
  active: boolean = false;
  idtegory: string="";
  

  ngOnInit(): void {

  }

  save(): void {
    console.log(this.name);
    console.log(this.description);
    console.log(this.price);
    console.log(this.state);
    console.log(this.idtegory);

  }

}
