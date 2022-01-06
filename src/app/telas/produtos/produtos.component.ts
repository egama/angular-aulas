import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  meuTitulo = "Novo Titulo - Produtos";
  nomeProduto = "Bla Bla Bla";

  produtos = [
    { id: 100, descricao: "Monitor", grupo: 'eletronicos' },
    { id: 24, descricao: "Fone", grupo: 'eletronicos' },
    { id: 166, descricao: "Notebook", grupo: 'eletronicos' },
    { id: 45, descricao: "Geladeira", grupo: 'eletrodomesticos' }
  ];

  acaoBotao = (usuario: string) => {
    // const novoNome = this.nomeCompleto(usuario);

    // this.meuTitulo = novoNome;

    // debugger;
    // this.produtos.map((item, index) => {
    //   debugger;
    //   this.produtos[index].descricao = index.toString();
    // })

    // const detalheDoProduto = this.produtos.find(item => item.id == 166);
    // if (detalheDoProduto) {
    //   this.nomeProduto = detalheDoProduto!.descricao;
    // }

    // const itens = this.produtos.filter(item => item.id == 166);
    // this.produtos = itens;

    debugger;
    const indexFone = this.produtos.findIndex(p => p.grupo == 'eletronicos');

    if (indexFone >= 0) {
      const novaLista = this.produtos.splice(indexFone, 1);
    }
  }

  nomeCompleto = (usuario: string) => {
    const nomeComp = usuario + " Gama";
    return nomeComp;
  }

  acaoMenuClicado = (valor: string) => {
    debugger;
    this.nomeProduto = valor;
  }
}
