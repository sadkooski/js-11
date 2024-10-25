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




// Metoda find()

// Metoda filter(callback) jest używana do znalezienia wszystkich elementów spełniających warunek, natomiast metoda find(callback) pozwala na znalezienie i zwrócenie pierwszego pasującego elementu, po odnalezieniu którego iteracja po tablicy zatrzymuje się. Oznacza to, że nawet jeśli mamy wiele elementów spełniających dany warunek, otrzymamy tylko pierwszy element spełniający warunek.

// Metoda find() powinna służyć do jednego zadania - znalezienia elementu na podstawie unikalnej wartości właściwości. Na przykład może to być wyszukiwanie użytkownika na podstawie adresu email, samochodu na podstawie numeru seryjnego, książki na podstawie numeru ISBN itp.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find(option => option.label === "blue");// { label: 'blue', color: '#2196F3' }
colorPickerOptions.find(option => option.label === "pink");// { label: 'pink', color: '#E91E63' }
colorPickerOptions.find(option => option.label === "white");// undefined




// Metoda findIndex()

// Metoda findIndex(callback) jest nowoczesnym zamiennikiem metody indexOf(). Umożliwia wyszukiwanie według bardziej złożonych warunków niż tylko ścisła równość. Dzięki temu służy zarówno do wyszukiwania w tablicy elementów typu prymitywnego, jak i w tablicy obiektów.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.findIndex(option => option.label === "blue");// 2
colorPickerOptions.findIndex(option => option.label === "pink");// 3
colorPickerOptions.findIndex(option => option.label === "white");// -1




// Metody every() i some()

// Metoda every()
// Sprawdza, czy wszystkie elementy tablicy spełniają warunek dostarczony przez funkcję callback. Zwraca true lub false.
// Jest odpowiednikiem operatora logicznego &&

// Czy wszystkie elementy są większe lub równe zero? - tak
[1, 2, 3, 4, 5].every(value => value >= 0);// true

// Czy wszystkie elementy są większe lub równe zero? - nie
[1, 2, 3, -10, 4, 5].every(value => value >= 0);// false


// Metoda some()
// Sprawdza, czy przynajmniej jeden element tablicy przeszedł test dostarczony przez funkcję wywołania zwrotnego. Zwraca true lub false.
// Jest odpowiednikiem operatora logicznego ||

// Czy jest przynajmniej jeden element większy lub równy zero? - tak
[1, 2, 3, 4, 5].some(value => value >= 0);// true

// Czy jest przynajmniej jeden element większy lub równy zero? - tak
[-7, -20, 3, -10, -14].some(value => value >= 0);// true

// Czy jest przynajmniej jeden element mniejszy od zera? - nie
[1, 2, 3, 4, 5].some(value => value < 0);// false

// Czy jest przynajmniej jeden element mniejszy od zera? - tak
[1, 2, 3, -10, 4, 5].some(value => value < 0);// true


const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every zwróci true tylko wtedy, jeśli będzie więcej niż 0 sztuk wszystkich owoców
const allAvailable = fruits.every(fruit => fruit.amount > 0);// false

// some zwróci true tylko wtedy, jeśli będzie więcej niż 0 sztuk przynajmniej jednego owocu
const anyAvailable = fruits.some(fruits => fruits.amount > 0);// true




// Metoda reduce()
// Wykonuje dowolne operacje, akumulujące tablicę do jednej zmiennej (dowolnego typu).


const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total);// 32



// // # Najpierw metoda reduce() tworzy wewnętrzną zmienną-akumulator i
// // # przypisuje jej wartość parametru initialValue lub pierwszego elementu
// // # tablicy do iteracji, jeśli nie określono initialValue.
// previousValue = 0

// // # Następnie funkcja wywołania zwrotnego jest wywoływana dla każdego elementu tablicy. Obecna wartość
// // # parametru previousValue jest tym, co funkcja zwrotna zwróciła w ostatniej iteracji.
// Iteracja 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Iteracja 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Iteracja 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Iteracja 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Iteracja 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// // # Po iteracji po całej tablicy metoda reduce() zwraca wartość akumulatora.
// // Wynik - 32


// Oznacza to, że metoda reduce() jest używana, gdy trzeba wziąć „wiele” i zredukować do „jednego”. W codziennych zadaniach często przydaje się ona do pracy z liczbami.


const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// Nazwa akumulatora może być dowolna, to tylko parametr funkcji
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length; // 67.4


// Wyobraźmy, że mamy następujące zadanie: z tablicy postów na Twitterze pojedynczego użytkownika musimy obliczyć sumę wszystkich polubień. Możesz iterować za pomocą pętli for lub forEach, ale każde z tych rozwiązań będzie wymagało zbędnego kodu. Użyjmy więc reduce.

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Weźmy wszystkie elementy kolekcji i dodajmy wartości właściwości likes
// do akumulatora, którego początkowa wartość wynosi 0.
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(likes);// 32

// Liczenie polubień przyda nam się więcej niż raz, napiszmy więc funkcję
// do zliczania polubień z kolekcji
const countLikes = tweets => {
  return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log(countLikes(tweets));// 32



const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Weźmy wszystkie elementy kolekcji i dodajmy wartości właściwości tags
// do akumulatora, którego początkową wartość podamy jako pustą tablicę [].
// W każdej iteracji dodajmy wszystkie elementy tablicy tweet.tags do akumulatora i zwróćmy go.
const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);

console.log(tags);

// Zebranie listy tagów nie jest jednorazową operację, więc napiszmy funkcję
// do zbioru tagów z kolekcji
const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

console.log(getTags(tweets));
// [ 'js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react' ]




const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);

// Zadeklarujmy nasz callback jako osobną zmienną i podajmy ją metodzie reduce
// Jest to standardowa praktyka, jeśli funkcja wywołania zwrotnego jest dość długa lub wielokrotnie używana.

// Jeśli obiekt-akumulator nie posiada własnej właściwości z kluczem tag,
// utwórzmy go i zapiszmy mu wartość 0.
// W przeciwnym razie zwiększamy wartość o 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Początkową wartością akumulatora jest pusty obiekt {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);



// Metoda sort()

const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores);// [19, 35, 56, 61, 74, 92]


const scores = [27, 2, 41, 4, 7, 3, 75];
scores.sort();
console.log(scores);// [2, 27, 3, 4, 41, 7, 75]


const students = ["Vika", "Andrey", "Oleg", "Julia", "Boris", "Katya"];
students.sort();
console.log(students);
// [ 'Andrey', 'Boris', 'Julia', 'Katya', 'Oleg', 'Vika' ]


const letters = ["b", "B", "a", "A", "c", "C"];
letters.sort();
console.log(letters);// ['A', 'B', 'C', 'a', 'b', 'c']



// Z uwagi na fakt, że oryginalna tablica jest posortowana, naruszana jest zasada czystości funkcji i nie jest wygodne tworzenie kilku kolekcji pochodnych na podstawie oryginalnej, gdy chcemy na przykład utworzyć kolekcję posortowaną w kolejności rosnącej, a drugą w kolejności malejącej. Dlatego przed sortowaniem tworzymy pełną kopię oryginalnej tablicy i dopiero ja sortujemy.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort();

console.log(scores);// [61, 19, 74, 35, 92, 56]
console.log(ascendingScores);// [19, 35, 56, 61, 74, 92]

// sort(compareFunction)


// a - to pierwszy element do porównania.
// b - to drugi element do porównania.
// Jeśli wywołanie compareFunction(a, b) zwróci jakąkolwiek wartość ujemną, czyli a jest mniejsze niż b, sortowanie umieści a przed b. To jest sortowanie w porządku rosnącym (ascending).

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores);// [19, 35, 56, 61, 74, 92]


// Jeśli wywołanie compareFunction(a, b) zwróci dowolną wartość dodatnią większą od zera, czyli b jest większe niż a, sortowanie umieści b przed a. To jest sortowanie malejąco (descending).

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores);// [92, 74, 61, 56, 35, 19]


// Jeśli wywołanie compareFunction(a, b) zwróci 0, sortowanie pozostawi a i b niezmienione względem siebie, ale posortuje je względem wszystkich innych elementów. W takim wypadku tak naprawdę nie ma więc znaczenia co zwrócimy, ale warto trzymać się zasad i zwrócić 0

"a".localeCompare("b");// -1
"b".localeCompare("a");// 1
"a".localeCompare("a");// 0
"b".localeCompare("b");// 0


// Zwraca wartość ujemną, jeśli firstString musi znajdować się w kolejności przed secondString
// Zwraca wartość dodatnią większą od zera, jeśli firstString musi znajdować się w kolejności po secondString
// Jeśli wartości są takie same, zwracane jest zero.

const students = ["Vika", "Andrey", "Oleg", "Julia", "Boris", "Katya"];

const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder);
// [ 'Andrey', 'Boris', 'Julia', 'Katya', 'Oleg', 'Vika' ]

const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder);
// [ 'Vika', 'Oleg', 'Katya', 'Julia', 'Boris', 'Andrey' ]

// Sortowanie obiektów
// Podczas pracy z tablicą obiektów sortowanie odbywa się według wartości liczbowej lub stringowej jakiejś właściwości. Na przykład weźmy grupę studentów z wynikami testów. Tablicę obiektów należy posortować rosnąco i malejąco według liczby punktów oraz według imienia ucznia.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);



// Łańcuchowanie metod

const students = [
  { name: "Mango", score: 83, courses: ["matematyka", "fizyka"] },
  { name: "Poly", score: 59, courses: ["informatyka", "matematyka"] },
  { name: "Ajax", score: 37, courses: ["fizyka", "biologia"] },
  { name: "Kiwi", score: 94, courses: ["literatura", "informatyka"] },
];


// Musisz posortować tablicę ich imion w porządku rosnącym według wyników testów. W tym celu posortujemy kopię tablicy metodą sort(), a następnie za pomocą metody map() utworzymy tablicę wartości właściwości name z posortowanej tablicy.

const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map(student => student.name);

console.log(names);// ['Ajax', 'Poly', 'Mango', 'Kiwi']

// Problem polega na tym, że musimy tworzyć zmienne pośrednie po każdej operacji oprócz ostatniej. Zmienna sortedByAscendingScore jest tak naprawdę zbędna.

// Możesz pozbyć się takich „martwych” zmiennych, grupując wywołania metod w łańcuchy. Każda następna metoda zostanie wykonana na wyniku poprzedniej.

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names);// ['Ajax', 'Poly', 'Mango', 'Kiwi']

// Zrób kopię oryginalnej tablicy przed sortowaniem.
// Wywołaj metodę sort() na kopii oryginalnej tablicy.
// Zastosuj metodę map() do wyniku metody sort().
// Zmiennej names jest przypisywany wynik metody map().
// Uzyskajmy posortowaną alfabetycznie tablicę unikalnych odwiedzonych przedmiotów.

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses);// ['biologia', 'informatyka', 'literatura', 'matematyka', 'fizyka']

// Na oryginalnej tablicy wywołaj flatMap() i utwórz spłaszczoną tablicę wszystkich kursów.
// Na wyniku metody flatMap() zastosuj metodę filter(), aby odfiltrować unikalne elementy.
// Na wyniku metody filter() wywołaj sort().
// Zmiennej uniqueSortedCourses przypisywany jest wynik metody sort().
// Łańcuch metod może mieć dowolną długość, ale zwykle nie potrzebujemy więcej niż 2-3 operacje. Po pierwsze, metody iteracyjne są używane do stosunkowo prostych operacji z kolekcją. Po drugie, wywołanie każdej kolejnej metody jest dodatkową iteracją po tablicy, co przy większej liczbie elementów może wpłynąć na wydajność.