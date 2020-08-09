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
  return Object.keys(obj).reduce((acc, itemArr) => {
    if (typeof obj[itemArr] === 'object') {
      acc[itemArr] = deepCloneObj(obj[itemArr]);
      return acc;
    }
    acc[itemArr] = obj[itemArr];
    return acc;
  }, {});
};
let clonedObj = deepCloneObj(obj);
let copiedObj = new Object(obj);
obj.address.street = 'street';
console.log(obj);
console.log(clonedObj);
console.log(copiedObj);
