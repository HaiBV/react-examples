import { makeAutoObservable, action, runInAction } from 'mobx';
import { createContext } from 'react';
import { getLocation } from 'rickmortyapi';

class LocationStore {
  locations = [];
  pendingRequest = 0;

  constructor() {
    makeAutoObservable(this);
  }

  fetchLocations = async (page = 1) => {
    this.pendingRequest += 1;
    const { info, results } = await getLocation();
    runInAction(() => {
      this.locations = results;
      this.pendingRequest -= 1;
    });
  };
}

const LocationStoreContext = createContext(new LocationStore());

export default LocationStoreContext;
