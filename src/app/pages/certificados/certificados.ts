import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { CertificadoService } from '../../_services/certificado';
import { ICertificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificados',
  imports: [SecondaryButton, RouterLink, ItemCertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados implements OnInit {
  certificados: ICertificado[] = []
  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados
  }
}
