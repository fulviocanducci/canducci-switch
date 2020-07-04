import React from 'react'

import CanducciSwitch, { Size } from 'canducci-switch'
import './app.css'

const App = () => {
  // const [value0, setValue0] = useState<boolean>(true)
  // const [value1, setValue1] = useState<boolean>(true)
  // const [value2, setValue2] = useState<boolean>(true)
  // const [value3, setValue3] = useState<boolean>(true)
  // const [value4, setValue4] = useState<boolean>(true)
  // const [value5, setValue5] = useState<boolean>(true)
  return (
    <div>
      <main role='main' className='flex-shrink-0'>
        <div className='container'>
          <h1 className='mt-5'>Canducci Switch</h1>
          <p className='lead'>Switch Input type Checkbox</p>
          <p>
            <a
              target='_blank'
              href='https://www.npmjs.com/package/canducci-switch'
              rel='noopener noreferrer'
            >
              canducci-switch Package npmjs
            </a>
          </p>
          <h3>Normal</h3>
          <hr />
          <p>
            <pre>
              <code>{'<CanducciSwitch />'}</code>
            </pre>
          </p>
          <div>
            <CanducciSwitch />
          </div>
          <p>
            <pre>{'<CanducciSwitch round/>'}</pre>
          </p>
          <div>
            <CanducciSwitch round />
          </div>

          <br />

          <h3>3 Sizes</h3>
          <hr />
          <p>
            There are 3 settings: <code>'Big', 'Medium', 'Small'</code> and two
            Edges: <code>{'round={true}'}</code> or{' '}
            <code>{'round={false}'}</code>:
          </p>
          <p>
            <pre>
              <code>
                {'<CanducciSwitch size={Size.Big} />'}
                <br />
                {'<CanducciSwitch size={Size.Medium} />'}
                <br />
                {'<CanducciSwitch size={Size.Small} />'}
                <br />
                {'<CanducciSwitch size={Size.Big} round/>'}
                <br />
                {'<CanducciSwitch size={Size.Medium} round/>'}
                <br />
                {'<CanducciSwitch size={Size.Small} round/>'}
              </code>
            </pre>
          </p>
          <div>
            <CanducciSwitch size={Size.Big} />{' '}
            <CanducciSwitch size={Size.Medium} />{' '}
            <CanducciSwitch size={Size.Small} />{' '}
            <CanducciSwitch size={Size.Big} round />{' '}
            <CanducciSwitch size={Size.Medium} round />{' '}
            <CanducciSwitch size={Size.Small} round />{' '}
          </div>

          <br />

          <h3>Change Colors</h3>
          <hr />
          <p>
            <pre>
              {'<CanducciSwitch '} <br />
              {'  size={Size.Big} '} <br />
              {'  cicleColor={"white"} '} <br />
              {'  backgroundColorOn={"red"} '} <br />
              {'  backgroundColorOff={"blue"} />'} <br />
              <br />
              {'<CanducciSwitch '} <br />
              {'  size={Size.Big} '} <br />
              {'  cicleColor={"#87a38f"} '} <br />
              {'  backgroundColorOn={"#01611b"} '} <br />
              {'  backgroundColorOff={"#213326"} />'} <br />
            </pre>
          </p>
          <div>
            <CanducciSwitch
              size={Size.Big}
              cicleColor={'white'}
              backgroundColorOn={'red'}
              backgroundColorOff={'blue'}
            />{' '}
            <br />
            <CanducciSwitch
              size={Size.Big}
              cicleColor={'#87a38f'}
              backgroundColorOn={'#01611b'}
              backgroundColorOff={'#213326'}
              round
            />{' '}
          </div>
        </div>
      </main>
      {/* 
      <footer className='footer mt-auto py-3'>
        <div className='container'>
          <span className='text-muted'>Place sticky footer content here.</span>
        </div>
      </footer> */}
    </div>
  )
}

export default App
