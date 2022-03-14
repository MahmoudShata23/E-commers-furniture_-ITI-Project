import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/Model/product.model';
import { ProductListService } from 'src/app/Service/product-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: Product;
  item_hearted=false;
  itemAddToCart: EventEmitter<Product> = new EventEmitter<Product>();
  closeResult = '';
  constructor(
    private modalService: NgbModal,
    private productListService: ProductListService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onItemAdded() {
    this.productListService.addToCart(this.productItem);
  }
  goTodetails(productItem: any) {
    this.router.navigate(['/product-details', productItem.id]);
  }

  open(content: any) {
    this.modalService.open(content, { size: 'xl' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
