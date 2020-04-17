const person = [{
    name: 'Jim',
    color: 'blue',
    age: 22,
  },
  {
    name: 'Sam',
    color: 'blue',
    age: 33,
  },
  {
    name: 'Eddie',
    color: 'green',
    age: 77,
  },
];

// Accepts the array and key
const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
    var obj = result.find(s=>s[key] == currentValue[key])
    if(obj)
    {
      (obj["value"]|| []).push(currentValue)
    }
    else{
      result.push({color:currentValue[key] , value:[currentValue]})
    }
    return result;
  }, []);
};

// Group by color as key to the person array
const personGroupedByColor = groupBy(person, 'color');

document.getElementById("json").textContent = JSON.stringify(personGroupedByColor, undefined, 2);

