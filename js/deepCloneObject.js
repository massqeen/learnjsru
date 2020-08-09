/* Ф-ция глубокого клонирования */
const obj = {
  name: 'obj',
  salary: 2000,
  address: {
    street: 'Hoeger Mall',
    suite: 'Apt. 692',
    city: 'South Elvis',
    zipcode: '53919-4257',
    geo: {
      lat: '29.4572',
      lng: '-164.2990'
    }
  }
};

const deepCloneObj = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (typeof obj[key] === 'object') {
      acc[key] = deepCloneObj(obj[key]);
      return acc;
    }
    acc[key] = obj[key];
    return acc;
  }, {});
};

let clonedObj = deepCloneObj(obj);
let copiedObj = new Object(obj);
obj.address.street = 'street';
console.log('obj:', obj);
console.log('clonedObj:', clonedObj);
console.log('copiedObj:', copiedObj);
