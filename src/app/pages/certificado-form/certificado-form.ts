import { Component, ViewChild } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ICertificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado';
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  constructor(private certificadoService: CertificadoService) {}

  @ViewChild('form') form!: NgForm

  atividade: string = ''
  certificado: ICertificado = {
    id: '',
    nome: '',
    atividades: [],
    dataEmissao: ''
  }

  campoInvalido(control: NgModel){
    return control.invalid && control.touched
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0
  }

  addAtividade() {
    if (this.atividade.length == 0) {
      return
    }
    this.certificado.atividades.push(this.atividade)
    this.atividade = ''
  }

  removeAtividade(index: number) {
    this.certificado.atividades.splice(index, 1)
  }

  submit() {
    if(!this.formValido()){
      return
    }
    this.certificado.dataEmissao = this.dataAtual()
    this.certificado.id = uuidv4()
    this.certificadoService.addCertificado(this.certificado)

    this.certificado = this.estadoInicialCertificado()
    this.form.resetForm()
  }

  dataAtual() {
    const dataAtual = new Date()
    const dia = String(dataAtual.getDate()).padStart(2, '0')
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0')
    const ano = dataAtual.getFullYear()

    const dataFormatada = `${dia}/${mes}/${ano}`
    return dataFormatada
  }

  estadoInicialCertificado(): ICertificado {
    return {
      id: '',
      nome: '',
      atividades: [],
      dataEmissao: ''
    }
  }
}
