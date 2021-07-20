import { makeAutoObservable, action } from 'mobx';
import { createContext } from 'react';

class CounterStore {
  value = 0;
  pendingRequest = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => (this.value += 1);

  decrease = () => (this.value -= 1);

  increaseByAmount = (amount) => (this.value += amount);

  increaseAsync = async () => {
    this.pendingRequest += 1;
    setTimeout(
      action(() => {
        console.log('tic tok');
        this.value += 1;
        this.pendingRequest -= 1;
      }),
      2000
    );
  };

  get isEven() {
    return this.value % 2 === 0;
  }
}

const CounterStoreContext = createContext(new CounterStore());

export default CounterStoreContext;
