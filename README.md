# react-br-bank-icons
[![Coverage Status](https://coveralls.io/repos/github/jonathasbsouza/react-br-bank-icons/badge.svg?branch=master)](https://coveralls.io/github/jonathasbsouza/react-br-bank-icons?branch=master)
[![Build Status](https://travis-ci.org/jonathasbsouza/react-br-bank-icons.svg?branch=master)](https://travis-ci.org/jonathasbsouza/react-br-bank-icons)

> Iconpack with brands of brazilian banks enrolled in FEBRABAN.

We currently have about 150 banking institutions registered with FEBRABAN. The purpose of this library is to allow people working on banking platforms to be able to easily display the brand of these institutions when necessary.

## Installation

With NPM

```sh
npm install react-br-bank-icons --save
```

## Usage example

You can see the `name` and `bankId` of available icons in [ICONLIST.md](docs/ICONLIST.md). To see all banks enrolled in FEBRABAN, go to [BANKLIST.md](docs/BANKLIST.md).

### By bank name

```js
<BankIcon name="itau" size="24" />
```

### By bank ID

```js
<BankIcon bankId={341} size="24" />
```

### Colors

#### Brand colors

```js
<BankIcon name="itau" size="24" />
```

#### Mono

You can define a specific color for the icon, and the library will use a mono version of it. You can use:
-  **HEX colors**: `color="#F4F6F8"`
-  **Color names**: `color='red'`
-  **RGBa**: `color="rgba(244,22,234,3)"`

```js
<BankIcon color="##FF0000" name="itau" size="24" />
```

### Fallback

If no valid `bankName` or `bankId` is given, the component will render a generic bank icon.



## Release History

* 0.1.0
    * Work in progress

## Contributing

1. Fork it (<https://github.com/jonathasbsouza/react-br-bank-icons/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Meta

Distributed under the GPL-3.0 license. See ``LICENSE`` for more information.

All brands' copyrights goes to their respective legal owners.

