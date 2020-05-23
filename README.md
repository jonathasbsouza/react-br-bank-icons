# React-br-bank-icons
> Iconpack com brands dos bancos inscritos na FEBRABAN.

Atualmente temos cerca de 150 instituições bancárias registradas na FEBRABAN. O propósito dessa biblioteca é permitir a pessoas trabalhando em plataformas bancárias conseguir exibir a marca dessas instituições quando necessário, sem precisar gerar novas imagens, nem se preocupar em atualizá-los de acordo com a lista da FEBRABAN.

![](header.png)

## Installation

With NPM

```sh
npm install react-br-bank-icons --save
```

## Usage example

Você pode ver a lista de ícones e seus respectivos `name` e `bankId` em [ICONLIST.md](ICONLIST.md). Para ver todos os bancos da lista da FEBRABAN, vá até [BANKLIST.md](BANKLIST.md).

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

Distributed under the GPL-3.0 license. See ``LICENSE`` for more information.

All brands' copyrights goes to their respective legal owners.

## Contributing

1. Fork it (<https://github.com/jonathasbsouza/react-br-bank-icons/fork>)
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