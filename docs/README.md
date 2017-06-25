# React Social Github
[![Build Status](https://travis-ci.org/vandreleal/react-social-github.svg)](https://travis-ci.org/vandreleal/react-social-github)
[![NPM Version](https://badge.fury.io/js/react-social-github.svg)](http://badge.fury.io/js/react-social-github)
[![dependencies Status](https://david-dm.org/vandreleal/react-social-github/status.svg)](https://david-dm.org/vandreleal/react-social-github)
[![devDependencies Status](https://david-dm.org/vandreleal/react-social-github/dev-status.svg)](https://david-dm.org/vandreleal/react-social-github?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/vandreleal/react-social-github/badge.svg?branch=master)](https://coveralls.io/github/vandreleal/react-social-github?branch=master)

Showcase your GitHub profile, organization or repository information in an elegant way.

---

## Install
React Social Github is available as the react-social-github package on npm.
```sh
$ npm install react-social-github --save
```
---

## Usage
```jsx
import { Github } from 'react-social-github';

ReactDOM.render(

  <GitHub user="torvalds" />

  <GitHub org="facebook" />

  <GitHub user="facebook" repo="react" />

);
```
---

## Reference

## Options

Name | Type | Default | Description
:---: | :---: | :---: | :---
user | `string` | none | Specify the username to show info about. Conflicts with `org`
repo | `string` | none | Specify the repository to show info about. Requires `user`
org | `string` | none | Specify the organization to show info about. Conflicts with `user`
type | `string` | `widget` | Specify the type of the presentation. See [types](#Types).

---

## Types


### Widget

Includes

### Inline

Inline an inline link that shows the tooltip on hover. In order to use the inline element.

### Button

Tooltips with anchor button.

#### Attributes

Name | Default
:---: | :---:
min-width | `240px`
max-width | `320px`

#### Options

Name | Type | Default | Description
:---: | :---: | :---: | :---
iconColor | `string` | #000 | Color name, RGB value, hexadecimal value, HSL value or HWB value.
iconWidth | `number` | 48 | px.
iconHeight | `number` | 48 | px.
fab | `bool` | false | Floating Action Button
fabCorner | `string` | bottom-right | Position of the FAB. Possible values: `bottom-right`, `bottom-left`, `top-right`, `top-left`
tooltipPosition | `string` | `auto` | Force a specific position to show the tooltip. Values: `left`, `right`, `top`, `bottom`, `auto` (will make the tooltip adaptive to avoid escaping from the view)
tooltipOnHover | `bool` | `true` | Enable/disable mouse hover events

---

#### Example

```jsx
  <Github user="torvalds" type="tooltip"></Github>

  <Github org="facebook" type="tooltip" fab={true}></Github>

  <Github org="twitter" type="tooltip" tooltipOnHover={false} fab={true} fabCorner="bottom-left" iconColor="orange" iconWidth={48} iconHeight={48}></Github>
```

---

## Examples

For a comprehensive list of examples, please proceed to the demo page.

---

## Team
+ [Vandré Leal Cândido](https://github.com/vandreleal)
+ [Gustavo Sampaio](https://github.com/GustavoKatel)
+ [Emerson Jair Reis Oliveira da Silva](https://github.com/dungahk)

---

## Open source

React Social Github is available on GitHub for downloading, forking, or contributing.