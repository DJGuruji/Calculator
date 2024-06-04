import React, { useState } from 'react';
import './App.css';

function App() {
  const [screenValue, setScreenValue] = useState("");

  const btnclick = (value) => {
    setScreenValue(screenValue + value);
  };

  const cancel = () => {
    setScreenValue(screenValue.slice(0, -1));
  };

  const btndeci = () => {
    if (!screenValue.includes(".")) {
      setScreenValue(screenValue + ".");
    }
  };

  const calculate = () => {
    try {
      setScreenValue(eval(screenValue).toString());
    } catch (error) {
      setScreenValue("Error");
    }
  };

  const clearscreen = () => {
    setScreenValue("");
  };

  return (
    <div className='container'>
      <div className="calc">
        <p>DJGURUJI</p>
        <form>
          <input type="text" id="screen" readOnly value={screenValue} />
          <input type="button" className="button number" value="7" onClick={() => btnclick("7")} />
          <input type="button" className="button number" value="8" onClick={() => btnclick("8")} />
          <input type="button" className="button number" value="9" onClick={() => btnclick("9")} />
          <input type="button" className="button clear" value=" del" onClick={cancel} />
          <br />
          <input type="button" className="button number" value="4" onClick={() => btnclick("4")} />
          <input type="button" className="button number" value="5" onClick={() => btnclick("5")} />
          <input type="button" className="button number" value="6" onClick={() => btnclick("6")} />
          <input type="button" className="button operator" value="/" onClick={() => btnclick("/")} />
          <br />
          <input type="button" className="button number" value="1" onClick={() => btnclick("1")} />
          <input type="button" className="button number" value="2" onClick={() => btnclick("2")} />
          <input type="button" className="button number" value="3" onClick={() => btnclick("3")} />
          <input type="button" className="button operator" value="+" onClick={() => btnclick("+")} />
          <br />
          <input type="button" className="button number" value="." onClick={btndeci} />
          <input type="button" className="button number" value="0" onClick={() => btnclick("0")} />
          <input type="button" className="button number" value="=" onClick={calculate} />
          <input type="button" className="button operator" value="-" onClick={() => btnclick("-")} />
          <br />
          <input type="button" className="button clear" value="ac" onClick={clearscreen} />
          <input type="button" className="button number" value="(" onClick={() => btnclick("(")} />
          <input type="button" className="button number" value=")" onClick={() => btnclick(")")} />
          <input type="button" className="button operator" value="%" onClick={() => btnclick("%")} />
          <br />
        </form>
      </div>
    </div>
  );
}

export default App;
