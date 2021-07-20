import { configure } from 'mobx';
import CounterStoreContext from './CounterStore';

configure({
  enforceActions: 'always',
});

const Stores = {
  CounterStoreContext,
};

export default Stores;
