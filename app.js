/************** OBJECTS AND ARRAYS ****************/

var JSONobject =
{
    firstname: 'Nikola',
    lastname: 'Milojevic',
    email: 'nikola.milojevic@vivifyideas.com'
}

var JSONarray = [
    {
        firstname: 'Nikola',
        lastname: 'Milojevic',
        email: 'nikola.milojevic@vivifyideas.com'
    },
    {
        firstname: 'Nikola',
        lastname: 'Pacariz',
        email: 'nikola.pacariz@vivifyideas.com'
    },
    {
        firstname: 'Aleksandar',
        lastname: 'Milinkovic',
        email: 'aleksandar.milinkovic@vivifyideas.com'
    }
]

console.log('JSON object:')
console.log(JSONobject)

console.log('Array of JSON objects:')
console.log(JSONarray)


/************** CLASSES, INHERITANCE, STATIC MEMBERS ****************/

function Person(firstname, lastname, gender)
{
    Person.counter++;
    this.firstName = firstname;
    this.lastName = lastname;
    this.gender = gender;
}

Person.counter=0;
Person.showMessage = function() {
    console.log('This is a static function')
}

var Nikola = new Person('Nikola', 'Milojevic', 'male');
var Aleksandar = new Person('Aleksandar', 'Milinkovic', 'male');

console.log('Two objects of Person class:')
console.log(Nikola)
console.log(Aleksandar)

function Ninja(firstname, lastname, gender, speciality)
{
    Person.call(this, firstname, lastname, gender);
    this.speciality = speciality;
}

var Pacariz = new Ninja('Nikola', 'Pacariz', 'male', 'backend');

console.log(Pacariz)

console.log(Person.counter)
Person.showMessage()

/************** CALLBACK ****************/

function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
  }

  doHomework('math', function() {
    alert('Finished my homework');
  });

/************** PROMISE ****************/

  var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('resolved');
    }, 3000);
  });

  promise1.then(function(value) {
    console.log(value);
    // expected output: "resolved"
  });

  console.log(promise1);
//   expected output: [object Promise]
