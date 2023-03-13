// object with field name

const object = {
    _name: [],      // [name, length][]
    
    set name(value) {
        const names = value.split(', ');
        names.map((item) => object._name.push([item, item.length]));
  },
    get name() {
        return object._name;
    }, 
};

object.name = 'Artak, Artavazd, Samvel';

console.log(object.name) // [['Artak',5],['Artavazd', 8],['Samvel, 6]];