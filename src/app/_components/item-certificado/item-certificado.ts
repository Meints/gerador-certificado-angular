import { Component } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  constructor(private router: Router) {}
  id: string = '6'

  redirecionaCertificado() {
    this.router.navigate(['/certificados', 2])
  }
}
