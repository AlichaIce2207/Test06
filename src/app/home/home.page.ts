import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },

    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];


  
  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Productname',
    },
    {
      placeholder: 'Price',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'textarea',
      placeholder: 'this is the product description',
    },
  ];

  constructor() {}

}
