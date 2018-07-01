"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas, velocidade) {
        this.modelo = "";
        this.numeroDePortas = 0;
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidade = velocidade;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = '';
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
