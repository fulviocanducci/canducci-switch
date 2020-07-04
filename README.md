## Canducci Switch Checkbox

[![NPM](https://img.shields.io/npm/v/canducci-switch.svg)](https://www.npmjs.com/package/canducci-switch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![npm](https://img.shields.io/npm/dt/canducci-switch?style=plastic)](https://www.npmjs.com/package/canducci-switch) ![Node.js CI](https://github.com/fulviocanducci/canducci-switch/workflows/Node.js%20CI/badge.svg) ![npm bundle size](https://img.shields.io/bundlephobia/min/canducci-switch?style=plastic)


## Install

```bash
npm install --save canducci-switch
```

## Usage

```tsx
import React, { Component } from 'react'

import CanducciSwitch, { Size } from 'canducci-switch'

class Example extends Component {
  const [value, setValue] = useState<boolean>(true)
  render() {
    return (
      <div>
        <div>
          <CanducciSwitch
            defaultChecked={value}
            onChange={() => setValue(!value)}
            size={Size.Medium}
          />
        </div>
        <div>
          <CanducciSwitch
            defaultChecked={value}
            onChange={() => setValue(!value)}
            size={Size.Medium}
            round            
          />
        </div>
      </div>
    )
  }
}
```

## Ouput

![output](https://raw.githubusercontent.com/fulviocanducci/canducci-switch/master/img/output.png)


## API

| Prop | Type | Default |
| --- | --- | --- |
| round | bool | false |
| size | enum | medium |
| backgroundColorOn | string | '#2196f3' |
| backgroundColorOff | string | '#cccccc' |
| cicleColor | string | '#ffffff' |