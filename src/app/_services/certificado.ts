import { Injectable } from '@angular/core';
import { ICertificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  certificados: ICertificado[] = []

  constructor() {}

  addCertificado(certificado: ICertificado) {
    this.certificados.push({...certificado})
    localStorage.setItem('certificados', JSON.stringify(this.certificados))
  }

}
