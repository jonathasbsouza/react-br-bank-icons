# react-br-bank-icons
[![Coverage Status](https://coveralls.io/repos/github/jonathasbsouza/react-br-bank-icons/badge.svg?branch=master)](https://coveralls.io/github/jonathasbsouza/react-br-bank-icons?branch=master)
[![Build Status](https://travis-ci.org/jonathasbsouza/react-br-bank-icons.svg?branch=master)](https://travis-ci.org/jonathasbsouza/react-br-bank-icons)

[![Build Status](https://travis-ci.org/jonathasbsouza/react-br-bank-icons.svg?branch=master)](https://travis-ci.org/jonathasbsouza/react-br-bank-icons)

> Iconpack com brands dos bancos inscritos na FEBRABAN.

Atualmente temos cerca de 150 instituições bancárias registradas na FEBRABAN. O propósito dessa biblioteca é permitir a pessoas trabalhando em plataformas bancárias conseguir exibir a marca dessas instituições quando necessário, sem precisar gerar novas imagens, nem se preocupar em atualizá-los de acordo com a lista da FEBRABAN.

## Installation

With NPM

```sh
npm install react-br-bank-icons --save
```

## Usage example

Você pode ver a lista de ícones e seus respectivos `name` e `bankId` em [ICONLIST.md](docs/ICONLIST.md). Para ver todos os bancos da lista da FEBRABAN, vá até [BANKLIST.md](docs/BANKLIST.md).

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