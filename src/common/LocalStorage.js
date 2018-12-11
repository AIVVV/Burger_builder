import storage from "store";

export const localStorage = Object.freeze({
  Save: (type, state) => storage.set(type, state),
  Remove: type => storage.remove(type),
  Get: type => storage.get(type)
});

