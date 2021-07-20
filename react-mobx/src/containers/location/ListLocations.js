import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react';
import LocationStoreContext from 'stores/LocationStore';

const ListLocations = observer(() => {
  const locationStore = useContext(LocationStoreContext);
  const { locations, fetchLocations, pendingRequest } = locationStore;

  useEffect(() => {
    fetchLocations();
  }, []);

  return pendingRequest > 0 ? (
    'loading'
  ) : (
    <div>
      {locations.map((location) => (
        <div>{location.name}</div>
      ))}
    </div>
  );
});

ListLocations.propTypes = {};

export default ListLocations;
