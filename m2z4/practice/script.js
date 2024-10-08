// Funkcja to podprogram, niezależny fragment kodu przeznaczony do wielokrotnego wykonywania tego samego zestawu instrukcji dla różnych wartości. Funkcje pomagają w tworzeniu dużych programów, ograniczają powtórzenia i lepiej izolują fragmenty kodu.

// 1. Deklaracja funkcji multiply
function multiply() {
    // Ciało funkcji
        console.log("Log podczas wywoływania funkcji multiply");
    }
    
    // 2. Wywołania funkcji multiply
    multiply();// 'To jest log podczas wywoływania funkcji multiply'
    multiply();// 'To jest log podczas wywoływania funkcji multiply'
    multiply();// 'To jest log podczas wywoływania funkcji multiply'


    // Deklaracja parametrów x, y, z
function multiply(x, y, z) {
    console.log(`Wynikiem mnożenia jest ${x * y * z}`);
}


// 1. Deklaracja parametrów x, y, z
function multiply(x, y, z) {
    console.log(`Wynikiem mnożenia jest ${x * y * z}`);
}

  // 2. Przekazywanie argumentów
multiply(2, 3, 5);// Wynikiem mnożenia jest 30
multiply(4, 8, 12);// Wynikiem mnożenia jest 384
multiply(17, 6, 25);// Wynikiem mnożenia jest 2550

// Kolejność przekazywania argumentów musi odpowiadać kolejności zadeklarowanych parametrów: wartość pierwszego argumentu zostanie przypisana do pierwszego parametru, drugiego argumentu do drugiego parametru itd. Jeśli jest więcej parametrów niż argumentów, to parametrom bez odpowiadającego im argumentu zostanie przypisane undefined.


function multiply(x, y, z) {
    console.log("Kod przed return jest wykonywany jak zwykle");

  // Zwracamy wynik wyrażenia mnożenia
    return x * y * z;

    console.log("Ten log nigdy nie zostanie wywołany, jest po return");
}

  // Wynik funkcji można zapisać do zmiennej
let result = multiply(2, 3, 5);
console.log(result);// 30

result = multiply(4, 8, 12);
console.log(result);// 384

result = multiply(17, 6, 25);
console.log(result);// 2550


// Instrukcja return bez jawnie określonej wartości zwraca wartość specjalną undefined. Jeśli nie ma return w ciele funkcji, nadal zwróci ona undefined. Z tego powodu, return bez podanej wartości służy tylko do przerwania wykonywania funkcji bez potrzeby użycia instrukcji warunkowych co w niektórych przypadkach poprawia czytelność kodu.


function multiply(x, y, z) {
    console.log(`Wynikiem mnożenia jest ${x * y * z}`);
}

console.log("Log przed wywołaniem funkcji multiply");
multiply(2, 3, 5);// Wynikiem mnożenia jest 30
console.log("Log po wywołaniu funkcji multiply");

  // Kolejność logów w konsoli
  // "Log przed wywołaniem funkcji multiply"
  // "Wynikiem mnożenia jest 30"
  // "Log po wywołaniu funkcji multiply"


//   Domyślne wartości parametrów

function count(countFrom = 0, countTo = 10, step = 1) {
    console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

    for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
    }
}

count(1, 5);// countFrom = 1, countTo = 5, step = 1
count(2);// countFrom = 2, countTo = 10, step = 1
count();// countFrom = 0, countTo = 10, step = 1


function multiply() {
    let total = 1;

    for (const argument of arguments) {
      total *= argument;
    }

    return total;
}

console.log(multiply(1, 2, 3));//  6
console.log(multiply(1, 2, 3, 4));//  24
console.log(multiply(1, 2, 3, 4, 5));//  120


function fn() {
    // Zmienna args będzie zawierać pełnowartościową tablicę
    const args = Array.from(arguments);
}
    
function fn() {
    // Zmienna args będzie zawierać pełnowartościową tablicę
    const args = [...arguments]
}

function fn(...args) {
    // Zmienna args będzie zawierać pełnowartościową tablicę
}

function fn(a, b, ...args) {
    // zmienna a i b będą zwykłymi parametrami przechowującymi
    // odpowiednio pierwszy i drugi podany argument
    // Zmienna args będzie zawierać pełnowartościową tablicę z trzecim, czwartym
    // i kolejnymi podanymi argumentami
}


function withdraw(amount, balance) {
    if (amount === 0) {
    console.log("Wprowadź kwotę większą od zera");
    } else if (amount > balance) {
    console.log("Za mało środków na koncie");
    } else {
    console.log("Operacja wypłaty powiodła się");
    }
}

withdraw(0, 300);// "Wprowadź kwotę większą od zera"
withdraw(500, 300);// "Za mało środków na koncie"
withdraw(100, 300);// "Operacja wypłaty powiodła się"


// Wzorzec "Early Return"


function withdraw(amount, balance) {
    // Jeśli warunek jest wykonany, wywoływany jest console.log
    // i wyjście z funkcji. 
    // Kod następujący po tym bloku if nie zostanie wtedy wykonany.
    if (amount === 0) {
        console.log("Wprowadź kwotę większą od zera");
        return;
    }
    
    // Jeśli warunek pierwszego if nie jest wykonany, jest on pomijany
    // a interpreter przechodzi do drugiego if.
    // Jeśli warunek jest wykonany, wywoływany jest console.log i wyjście z funkcji.
    // Kod następujący po tym bloku if nie zostanie wtedy wykonany.
    if (amount > balance) {
        console.log("Za mało środków na koncie");
        return;
    }
    
    // Jeśli żaden z poprzednich if nie został wykonany,
    // interpreter natrafia na ten fragment kodu i wykonuje go.
    // kolejne return nie jest tu koniecznie ponieważ funkcja i tak się kończy
    console.log("Operacja wypłaty zakończona");
    }
    
    withdraw(0, 300);// "Wprowadź kwotę większą od zera"
    withdraw(500, 300);// "Za mało środków na koncie"
    withdraw(100, 300);// "Operacja wypłaty zakończona"
    



    // Deklaracja funkcji (function declaration)
function multiply(x, y, z) {
    console.log(`Wynikiem mnożenia jest ${x * y * z}`);
}

  // Wyrażenie funkcyjne (function expression)
const multiply = function (x, y, z) {
    console.log(`Wynikiem mnożenia jest ${x * y * z}`);
};



// ❌ Błąd! Wywołanie nie działa przed deklaracją
multiply(1, 2, 3);

const multiply = function (x, y, z) {
  console.log(`Wynikiem mnożenia jest ${x * y * z}`);
};

// ✅ Wywołanie działa po deklaracji
multiply(4, 5, 6);


// Zadeklarowaną funkcję można wywołać przed miejscem jej utworzenia w kodzie.

// ✅ Wywołanie działa przed deklaracją
multiply(1, 2, 3);

function multiply(x, y, z) {
  console.log(`Wynikiem mnożenia jest ${x * y * z}`);
}

// ✅ Wywołanie działa po deklaracji
multiply(4, 5, 6);


const globalValue = 10;

console.log(globalValue);// 10

function foo() {
console.log(globalValue);// 10
}

for (let i = 0; i < 5; i++) {
console.log(globalValue);// 10

if (i === 2) {
    console.log(globalValue);// 10
}
}


function foo() {
    const a = 20;
    console.log(a);// 20

    for (let i = 0; i < 5; i++) {
    console.log(a);// 20

    if (i === 2) {
        console.log(a);// 20
    }
    }
}

  // ❌ Błąd! Zmienna a nie jest dostępna w zakresie globalnym
console.log(a);

for (let i = 0; i < 3; i++) {
  // ❌ Błąd! Zmienna a nie jest dostępna w tym zakresie
    console.log(a);
}


for (let i = 0; i < 5; i++) {
    const a = 20;
    console.log(a);// 20

    if (i === 2) {
    const b = 30;
    console.log(a);// 20
    console.log(b);// 30
    }

    if (i === 3) {
    console.log(a);// 20

  // ❌ Błąd! Zmienna b nie jest dostępna w tym zakresie
    console.log(b);
    }
}



function fnA() {
    console.log("Log wewnątrz funkcji fnA przed wywołaniem fnB");
    fnB();
    console.log("Log wewnątrz funkcji fnA po wywołaniu fnB");
}

function fnB() {
    console.log("Log wewnątrz funkcji fnB");
}

console.log("Log przed wywołaniem fnA");
fnA();
console.log("Log po wywołaniu fnA");

  // "Log przed wywołaniem fnA"
  // "Log wewnątrz funkcji fnA przed wywołaniem fnB"
  // "Log wewnątrz funkcji fnB"
  // "Log wewnątrz funkcji fnA po wywołaniu fnB"
  // "Log po wywołaniu fnA"

//   Stack frame (ramka stosu) - struktura dodawana do stosu podczas wywołania funkcji. Przechowuje informacje takie jak nazwa funkcji i numer linii, w której nastąpiło wywołanie.


function bar() {
    console.log("bar");
}

function baz() {
    console.log("baz");
}

function foo() {
    console.log("foo");
    bar();
    baz();
}

foo();

// Podczas wykonywania tego kodu najpierw wywoływane jest foo(), następnie wewnątrz foo() wywołuje się bar(), a następnie baz(). Wywołania console.log() również trafiają do stosu, ponieważ jest to funkcja. Poniższa ilustracja przedstawia stos wywołań krok po kroku dla powyższego przykładu.

// "Uncaught RangeError: Maximum call stack size exceeded" (stack overflow).


