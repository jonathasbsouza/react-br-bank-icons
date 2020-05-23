# React-br-bank-icons
> Iconpack com brands dos bancos inscritos na FEBRABAN.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

Atualmente temos cerca de 150 instituições bancárias registradas na FEBRABAN. O propósito dessa biblioteca é permitir a pessoas trabalhando em plataformas bancárias conseguir exibir a marca dessas instituições quando necessário, sem precisar gerar novas imagens, nem se preocupar em atualizá-los de acordo com a lista da FEBRABAN.

![](header.png)

## Installation

With NPM

```sh
npm install react-br-bank-icons --save
```

## Usage example

Você pode ver a lista de bancos, seus respectivos `name` e `bankId`, e quais já estão disponíveis nesse repositório em [BANKLIST.md](BANKLIST.md).

### Nome do banco

```js
<BankIcon name="itau" size="16" />
```

### ID do Banco

```js
<BankIcon bankId="341" size="16" />
```

### Cores

#### Original

```js
<BankIcon name="itau" size="16" />
```

#### Monocromático

> Em breve

```js
<BankIcon color="##FF0000" name="itau" size="16" />
```

## Release History

* 0.0.1
    * Work in progress

## Meta

Jônathas Souza – [meu site](https://jonathas.work) – jonathas.souza@vtex.com.br

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/jonathasbsouza](https://github.com/jonathasbsouza/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki