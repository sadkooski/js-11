// Funkcje w JavaScript nie różnią się niczym od liczb, ciągów znaków czy tablic — są po prostu specjalnym typem danych (obiektem wyższego rzędu), wartością, która może być przechowywana w zmiennej lub przekazywana jako argument do innej funkcji

function greet(name) {
    return `Pozdrawiam ${name}.`;
}

  // Wywołaj funkcję greet i wyświetl jej wynik w konsoli
console.log(greet("Mango"));// Pozdrawiam Mango.

  // Wyświetl funkcję greet w konsoli bez jej wywoływania
console.log(greet);// ƒ greet() { return `Pozdrawiam ${name}.`; }

// W pierwszym logu jako wartość podajemy funkcję greet wywołaną za pomocą nawiasów okrągłych, zostanie więc ona wyświetlona w konsoli. Drugi log zawiera link do funkcji, a nie wynik wywołania (nie ma nawiasów), więc tylko jej ciało jest wyświetlane w konsoli. Oznacza to, że funkcję można przypisać do zmiennej lub przekazać jako argument do innej funkcji.

// Funkcja wywołania zwrotnego (callback) - to funkcja, która jest przekazywana do innej funkcji jako argument, i następnie jej w niej wywoływana

// Funkcja wyższego rzędu (higher order function) - funkcja, która przyjmuje inne funkcje jako argumenty lub zwraca funkcję jako wynik.


// Funkcja wywołania zwrotnego
function greet(name) {
    console.log(`Pozdrawiam ${name}.`);
}

  // Funkcja wyższego rzędu
function registerGuest(name, callback) {
    console.log(`Rejestracja gościa ${name}.`);
    callback(name);
}

registerGuest("Mango", greet);

// Przekazaliśmy link do funkcji greet jako argument, więc zostanie ona przypisana do parametru callback i wywołana wewnątrz funkcji registerGuest przez nawiasy okrągłe. Nazwa parametru dla wywołania zwrotnego może być dowolna, najważniejszą rzeczą do zapamiętania jest to, że wartością będzie funkcja. Często spotkamy się z nazwą cb.



// Wywołania zwrotne inline
// Jeśli funkcja zwrotna jest krótka i potrzebna tylko do przekazywania jako argument, można ją zadeklarować bezpośrednio podczas wywoływania funkcji, do której przekazujemy callback. Taka funkcja będzie dostępna tylko jako wartość parametru i nigdzie indziej w naszym kodzie.

function registerGuest(name, callback) {
console.log(`Rejestracja gościa ${name}.`);
callback(name);
}

// Przekaż funkcję inline greet jako wywołanie zwrotne
registerGuest("Mango", function greet(name) {
console.log(`Pozdrawiam ${name}.`);
});

// Przekaż funkcję inline notify jako wywołanie zwrotne
registerGuest("Poly", function notify(name) {
console.log(
    `Szanowny(a) ${name}, Pana/Pani pokój będzie gotowy za 30 minut.`
);
});


// Kilka wywołań zwrotnych
// Funkcja może akceptować dowolną liczbę callbacków, tak jak możemy podać jej dowolna ilość argumentów. Załóżmy, że piszemy logikę odbierania połączeń telefonicznych. Program powinien włączyć automatyczną sekretarkę, gdy abonent jest niedostępny lub przepuścić połączenie. Zasymulujemy dostępność abonenta za pomocą generatora liczb losowych, aby uzyskać różne wyniki między różnymi wywołaniami funkcji.

function processCall(recipient) {
    // Symuluj dostępność abonenta za pomocą liczby losowej
const isRecipientAvailable = Math.random() > 0.5;

if (!isRecipientAvailable) {
    console.log(`Abonent ${recipient} jest niedostępny, zostaw wiadomość.`);
        // Logika aktywacji automatycznej sekretarki
} else {
    console.log(`Łączenie z ${recipient}, proszę czekać...`);
        // Logika odbierania połączenia
}
}

processCall("Mango");



// Zrefaktoryzujmy funkcję tak, aby pobierała dwa callbacki onAvailable i onNotAvailable i wywoływała je warunkowo.

function processCall(recipient, onAvailable, onNotAvailable) {
// Symuluj dostępność abonenta za pomocą liczby losowej
const isRecipientAvailable = Math.random() > 0.5;

if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
}

onAvailable(recipient);
}

function takeCall(name) {
console.log(`Łączenie z ${name}, proszę czekać...`);
// Logika odbierania połączenia
}

function activateAnsweringMachine(name) {
console.log(`Abonent ${name} jest niedostępny, zostaw wiadomość.`);
// Logika aktywacji automatycznej sekretarki
}

function leaveHoloMessage(name) {
console.log(`Abonent ${name} jest niedostępny, nagraj hologram.`);
// Logika nagrywania hologramu
}

processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);

// Callback często służy do przetwarzania akcji użytkownika na stronie, podczas przetwarzania żądań do serwera, wykonywania nieznanych wcześniej funkcji itp. Dzieki nim możemy opóźnić wykonanie się danego kodu.


// Abstrakcja - ukrywanie szczegółów implementacji. Pozwala myśleć o zadaniach na wyższym (abstrakcyjnym) poziomie. Funkcje to dobry sposób na budowanie abstrakcji.

// Powiedzmy, że skrypt wykonuje akcję określoną liczbę razy. Aby to zrobić, możesz napisać pętlę for.

for (let i = 0; i < 10; i += 1) {
console.log(i);
}


// Czy możemy wyabstrahować „zrobić coś N razy” jako funkcję? - Tak! Napiszmy funkcję, która wywołuje console.log() N razy.

function repeatLog(n) {
for (let i = 0; i < n; i += 1) {
    console.log(i);
}
}

repeatLog(5);


// Ale co, jeśli chcemy zrobić coś innego niż rejestrowanie numerów? Ponieważ „zrobić coś” można zapisać jako funkcję, a same funkcje to tylko wartości, możemy więc przekazać akcję jako argument.

function printValue(value) {
console.log(value);
}

function prettyPrint(value) {
console.log("Logging value: ", value);
}

function repeat(n, action) {
for (let i = 0; i < n; i += 1) {
    action(i);
}
}

// Przekaż printValue jako funkcję zwrotną
repeat(3, printValue);
// 0
// 1
// 2

// Przekaż prettyPrint jako funkcję zwrotną
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2



// Metoda do iteracji, zawarta w tablicach i używana jako zamiennik pętli for i for...of podczas pracy z kolekcją danych.

tablica.forEach(function callback(element, index, array) {
    // Ciało funkcji zwrotnej
});


const numbers = [5, 10, 15, 20, 25];

// Klasyczny for
for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Indeks ${i}, wartość ${numbers[i]}`);
}

// Iterujący forEach
numbers.forEach(function (number, index) {
    console.log(`Indeks ${index}, wartość ${number}`);
});


// Jedynym warunkiem, pod którym należy użyć pętli for lub for...of do iteracji po tablicy, jest konieczność przerwania pętli. Nie możesz w łatwy sposób przerwać wykonywania metody forEach, domyślnie iteruje po tablicy do końca. Słowa kluczowe break i continue nie działają w pętli forEach



// Wszystkie funkcje strzałkowe są tworzone jako wyrażenie funkcyjne, a jeśli funkcja nie jest anonimowa, to musi być przypisana do zmiennej.

// "Normalna" deklaracja funkcji
function classicAdd(a, b, c) {
    return a + b + c;
}

// To samo w postaci arrow function
const arrowAdd = (a, b, c) => {
    return a + b + c;
};

// Słowo kluczowe function nie jest używane, zamiast tego następuje deklaracja parametrów, po których następuje symbol => i ciało funkcji.

const add = (a, b, c) => {
    return a + b + c;
};

const add = a => {
    return a + 5;
};

const greet = () => {
    console.log("Cześć!");
};



const add = (a, b, c) => {
    console.log(a, b, c);
    return a + b + c;
};

const add = (a, b, c) => a + b + c;


// Jeśli istnieją nawiasy klamrowe, a funkcja musi zwrócić jakąś wartość, musisz jawnie wstawić słowo kluczowe return. Nazywamy to jawnym zwrotem (explicit return). Taka składnia jest używana, jeśli oprócz zwracania wartości są inne instrukcje które chcesz wykonać w ciele funkcji

// Jeśli nie ma nawiasów klamrowych, zwracany jest wynik wyrażenia które znajduje się po =>. Nazywamy to niejawnym zwrotem (implicit return). Powyższy przykład zwróci wynik wyrażenia dodania parametrów a, b i c.


// Przed
function classicAdd(a, b, c) {
    return a + b + c;
}

  // Po
const arrowAdd = (a, b, c) => a + b + c;



// Pseudotablica arguments

// Funkcje strzałkowe nie mają zmiennej lokalnej arguments zawierającej wszystkie argumenty. Jeśli konieczne jest zebranie wszystkich argumentów do tablicy, używana jest operacja rest.

const add = (...args) => {
    console.log(args);
};

add(1, 2, 3);// [1, 2, 3]



const numbers = [5, 10, 15, 20, 25];

// Deklaracja funkcji
numbers.forEach(function (number, index) {
    console.log(`Indeks ${index}, wartość ${number}`);
});

// Anonimowa funkcja strzałkowa
numbers.forEach((number, index) => {
    console.log(`Indeks ${index}, wartość ${number}`);
});


// Możesz również osobno zadeklarować funkcję strzałkową w zmiennej i przekazać do niej link. Należy to zrobić, jeśli jedna funkcja jest używana w kilku miejscach w programie lub jest w niej dużo instrukcji.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
    console.log(`Indeks ${index}, wartość ${number}`);
};

numbers.forEach(logMessage);




// Programowanie imperatywne
// Opisuje proces obliczeniowy w postaci zadanej sekwencji instrukcji zmieniających stan programu. Innymi słowy jest to opis tego, jak coś się wykonuje.

// Programowanie imperatywne to takie programowanie, które daje maszynie zestaw szczegółowych instrukcji do wykonania zadania. Na przykład pętla for, która dostarcza dokładne instrukcje do iteracji wedle danych warunków.

// Można to porównać do przepisu na danie. Przepis to zestaw instrukcji krok po kroku potrzebny do uzyskania pożądanego rezultatu.


// Programowanie deklaratywne
// Opisuje, jaki jest rezultat, a nie jak to zrobić. Nie ma znaczenia kolejność wykonania i sposób osiągnięcia.

// Kiedy piszemy kod HTML, to robimy to deklaratywnie, używając znaczników i atrybutów, opisujemy, co chcemy w rezultacie uzyskać. Przeglądarka odczytuje ten kod i sama wykonuje wszystkie niezbędne operacje do tworzenia elementów HTML i umieszczania ich na stronie.

// Można to porównać do menu restauracji. Jest to deklaratywny zestaw dań do zamówienia, których szczegóły przygotowania i podania są ukryte.


// Deklaratywny opis problemu jest bardziej wizualny i łatwiejszy do sformułowania. Mówimy, co chcemy zrobić, wywołując metodę lub funkcję. Jego implementacja najprawdopodobniej wykorzystuje kod imperatywny, ale on jest ukryty i nie komplikuje zrozumienia głównego kodu.


// Imperatywne vs deklaratywne
// Rozważmy różnicę w podejściach na przykładzie podstawowej operacji filtrowania kolekcji. Napiszmy kod do iteracji i filtrowania tablicy liczb według jakiegoś kryterium.

// Podejście imperatywne
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
}
}

console.log(filteredNumbers);// [4, 5]


// Metoda filter() ukrywa logikę iteracji po kolekcji i wywołuje funkcję zwrotną, którą przekazujemy do niej dla każdego elementu, zwracając tablicę elementów spełniających podane w niej kryterium.

// Podejście deklaratywne
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
console.log(filteredNumbers); // [4, 5]