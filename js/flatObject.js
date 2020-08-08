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

const deepClone = (obj) => {
  // создаем массив ключей
  const arrOfKeys = Object.keys(obj); //["lat", "lng"]

  return arrOfKeys.reduce((acc, key) => {
    const value = obj[key]; // '29.4572', '-164.2990'
    // проверяем если значение равно объекту, то рекурсивно вызываем deepClone
    if (typeof value === 'object') {
      acc[key] = deepClone(value);
      return acc;
    }
    acc[key] = value; // acc = { lat: '29.4572' }; // acc = { lat: '29.4572', lng: '-164.2990' };

    return acc;
  }, {});
};
