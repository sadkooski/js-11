// Funkcja z efektami ubocznymi to funkcja, podczas wykonywania której mogą zmieniać się lub być wykorzystywane zmienne globalne, zmieniają się wartości argumentów referencyjnych, wykonywane są operacje wejścia-wyjścia itp.

const dirtyMultiply = (array, value) => {
    for (let i = 0; i < array.length; i += 1) {
      array[i] = array[i] * value;
    }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
  // nastąpiła mutacja (zmiana) oryginalnych danych - tablicy numbers
console.log(numbers);// [2, 4, 6, 8, 10]
// TA SAMA TABLICA

// Czysta funkcja (pure function) to funkcja, której wynik zależy tylko od wartości przekazanych argumentów. Przy tych samych argumentach zawsze zwraca ten sam wynik i nie ma skutków ubocznych, czyli nie zmienia wartości argumentów

const pureMultiply = (array, value) => {
    const newArray = [];

    array.forEach(element => {
      newArray.push(element * value);
    });

    return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

  // Nie nastąpiła mutacja oryginalnych danych
  console.log(numbers); // [1, 2, 3, 4, 5]
  // Funkcja zwróciła nową tablicę ze zmienionymi danymi
  console.log(doubledNumbers); // [2, 4, 6, 8, 10]


array.method(callback[currentValue, index, array])

array.method((item, idx, arr) => {
    // logika, która będzie stosowana przy każdej iteracji
});

array.method(item => {
    // logika, która będzie stosowana przy każdej iteracji
});




// Metoda map()

tablica.map((element, index, array) => {
    // Ciało funkcji zwrotnej
});


const planets = ["Ziemia", "Mars", "Wenus", "Jowisz"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase);// ['ZIEMIA', 'MARS', 'WENUS', 'JOWISZ']

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase);// ['ziemia', 'mars', 'wenus', 'jowisz']

// Oryginalna tablica się nie zmieniła
console.log(planets);// ['Ziemia', 'Mars', 'Wenus', 'Jowisz']


const students = [
    { name: "Mango", score: 83 },
    { name: "Poly", score: 59 },
    { name: "Ajax", score: 37 },
    { name: "Kiwi", score: 94 },
    { name: "Houston", score: 64 },
];

const names = students.map(student => student.name);
console.log(names);// ['Mango', 'Poly', 'Ajax', 'Kiwi', 'Houston']


Używając metody map(), możesz iterować tablicę obiektów i zwracać wartość właściwości każdego z nich w funkcji zwrotnej.




// Metoda flatMap()

const students = [
    { name: "Mango", courses: ["matematyka", "fizyka"] },
    { name: "Poly", courses: ["informatyka", "matematyka"] },
    { name: "Kiwi", courses: ["fizyka", "biologia"] },
];

students.map(student => student.courses);
  // [['matematyka', 'fizyka'], ['informatyka', 'matematyka'], ['fizyka', 'biologia']]

students.flatMap(student => student.courses);
  // ['matematyka', 'fizyka', 'informatyka', 'matematyka', 'fizyka', 'biologia'];



//   Metoda filter()

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues);// [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues);// [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log(bigValues);// []

// Oryginalna tablica się nie zmieniła
console.log(values);// [51, -3, 27, 21, -68, 42, -37]

// Filtrowanie unikalnych elementów
// Używając metody filter(), możesz filtrować tablicę tak, aby pozostały w niej tylko unikalne elementy. To podejście działa tylko z tablicą wartości prymitywnych, a nie obiektów.

// Wróćmy do grupy studentów i tablicy wszystkich uczęszczanych przedmiotów, które otrzymaliśmy za pomocą metody flatMap().

const students = [
{ name: "Mango", courses: ["matematyka", "fizyka"] },
{ name: "Poly", courses: ["informatyka", "matematyka"] },
{ name: "Kiwi", courses: ["fizyka", "biologia"] },
];

const allCourses = students.flatMap(student => student.courses);
// ['matematyka', 'fizyka', 'informatyka', 'matematyka', 'fizyka', 'biologia'];


// Zmienna allCourses przechowuje tablicę wszystkich odwiedzonych przedmiotów, które mogą się powtarzać. Zadaniem jest stworzenie nowej tablicy zawierającej tylko unikalne przedmioty, czyli bez powtórzeń.

const uniqueCourses = allCourses.filter(
(course, index, array) => array.indexOf(course) === index
);


// Używając array.indexOf(course), wyszukujemy pierwsze dopasowanie bieżącego elementu course i pobieramy jego indeks w oryginalnej tablicy wszystkich kursów. Parametr index przechowuje indeks bieżącego elementu course podczas iteracji po tablicy przy użyciu metody filter.

// Jeśli wynik indexOf() i wartość index są równe - jest to unikalny element, ponieważ jest to pierwszy przypadek napotkania takiej wartości w tablicy i w bieżącej iteracji filtr przetwarza akurat ją.

// # Tablica wszystkich kursów
// ['matematyka', 'fizyka', 'informatyka', 'matematyka', 'fizyka', 'biologia'];


// Dla elementu 'matematyka' przy indeksie 0:

// indexOf() zwróci 0, ponieważ szuka pierwszego dopasowania.
// Wartość parametru index będzie wynosić 0.
// Indeksy są równe, więc jest to pierwsze wystąpienie elementu.
// Dla elementu 'matematyka' przy indeksie 3:

// indexOf() zwróci 0, ponieważ szuka pierwszego dopasowania.
// Wartość parametru index będzie wynosić 3.
// Indeksy nie są równe, więc jest to powtórzenie, a nie unikalny element.



const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
{ name: "Mango", score: 83 },
{ name: "Poly", score: 59 },
{ name: "Ajax", score: 37 },
{ name: "Kiwi", score: 94 },
{ name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best);// Tablica obiektów o nazwach Mango i Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst);// Tablica z jednym obiektem Ajax

// W funkcji wywołania zwrotnego wygodnie
// będzie zdestrukturyzować właściwości obiektu
const average = students.filter(
({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average);// Tablica obiektów o imionach Poly i Houston