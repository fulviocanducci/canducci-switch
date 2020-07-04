import React, { useState } from 'react'

import CanducciSwitch, { Size } from 'canducci-switch'

const App = () => {
  const [value0, setValue0] = useState<boolean>(true)
  const [value1, setValue1] = useState<boolean>(true)
  const [value2, setValue2] = useState<boolean>(true)
  const [value3, setValue3] = useState<boolean>(true)
  const [value4, setValue4] = useState<boolean>(true)
  const [value5, setValue5] = useState<boolean>(true)
  return (
    <div style={{ marginTop: 50, marginLeft: 0, textAlign: 'center' }}>
      <div>
        <CanducciSwitch
          defaultChecked={value0}
          onChange={() => setValue0(!value0)}
          size={Size.Big}
          defaultColor={'red'}
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <CanducciSwitch
          defaultChecked={value1}
          onChange={() => setValue1(!value1)}
          size={Size.Medium}
          defaultColor={'#c00a56'}
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <CanducciSwitch
          defaultChecked={value2}
          onChange={() => setValue2(!value2)}
          size={Size.Small}
        />
      </div>
      <hr />
      <div>
        <CanducciSwitch
          defaultChecked={value3}
          onChange={() => setValue3(!value3)}
          round
          size={Size.Big}
          defaultColor={'green'}
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <CanducciSwitch
          defaultChecked={value4}
          onChange={() => setValue4(!value4)}
          size={Size.Medium}
          round
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <CanducciSwitch
          defaultChecked={value5}
          onChange={() => setValue5(!value5)}
          size={Size.Small}
          round
        />
      </div>
      <div>
        <pre>
          {JSON.stringify(
            { value0, value1, value2, value3, value4, value5 },
            null,
            2
          )}
        </pre>
      </div>
      <div>
        <div>
          <CanducciSwitch
            defaultChecked={value0}
            onChange={() => setValue0(!value0)}
            size={Size.Medium}
          />
        </div>
        <div>
          <CanducciSwitch
            defaultChecked={value0}
            onChange={() => setValue0(!value0)}
            size={Size.Medium}
            round
          />
        </div>
      </div>
    </div>
  )
}

export default App
