import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react';
import CounterStoreContext from 'stores/CounterStore';

import './home.scss';
import logo from 'logo.svg';

const Home = observer(() => {
  const counterStore = useContext(CounterStoreContext);
  const { value, pendingRequest, decrease, increase, increaseByAmount, increaseAsync, isEven } = counterStore;

  const [amount, setAmount] = useState(0);

  return (
    <div className='homepage'>
      <img src={logo} className='App-logo' alt='logo' />
      <div className='row'>
        <button
          className='button'
          aria-label='Decrement value'
          onClick={() => {
            decrease();
          }}
        >
          -
        </button>
        <span className='value'>{value}</span>
        <button
          className='button'
          aria-label='Increment value'
          onClick={() => {
            increase();
          }}
        >
          +
        </button>
      </div>
      <div className='row'>{pendingRequest > 0 ? 'loading...' : <>{`Counter is ${isEven ? 'even' : 'odd'}`}</>}</div>
      <div className='row'>
        <input className='textbox' aria-label='Set increment amount' value={amount} onChange={(e) => setAmount(+e.target.value)} />
        <button
          className='button'
          onClick={() => {
            increaseByAmount(amount);
          }}
        >
          Add Amount
        </button>
      </div>
      <div className='row'>
        <button
          className='button asyncButton'
          onClick={() => {
            increaseAsync();
          }}
        >
          Add Async
        </button>
      </div>
    </div>
  );
});

Home.propTypes = {};

export default Home;
