// Kontekst wykonania funkcji

// Kontekst w JavaScript jest jak kontekst w zdaniu:

// Maciej biegnie szybko, ponieważ Maciej próbuje złapać pociąg.
// Maciej biegnie szybko, ponieważ on próbuje złapać pociąg.

// Maciej biegnie szybko, ponieważ Maciej próbuje złapać pociąg.
const maciej = {
    username: "Maciej",
    showName() {
    console.log(maciej.username);
    },
};

maciej.showName();


// Odwołanie do właściwości obiektu wewnątrz metod przy użyciu nazwy samego obiektu jest podobne do używania Maciej zamiast on.

// Zastrzeżone słowo kluczowe this może być użyte wewnątrz funkcji. Podczas wykonywania funkcji w this dostępne jest odwołanie do obiektu, w kontekście którego została wywołana. W ten sposób w ciele funkcji możemy uzyskać dostęp do właściwości i metod tego obiektu.

// Maciej biegnie szybko, ponieważ on (this) próbuje złapać pociąg.
const maciej = {
username: "Maciej",
showName() {
    console.log(this.username);
},
};

maciej.showName();


const bookShelf = {
    authors: ["Bernard Cornwell", "Robert Sheckley"],
    getAuthors() {
    return this.authors;
    },
    addAuthor(authorName) {
    this.authors.push(authorName);
    },
};

console.log(bookShelf.getAuthors());// ["Bernard Cornwell", "Robert Sheckley"]
bookShelf.addAuthor("Tanith Lee");
console.log(bookShelf.getAuthors());// ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]

// Metody getAuthors i addAuthor to funkcje (metody obiektowe), które są wywoływane w kontekście obiektu bookShelf. Podczas ich wykonywania do this zapisywane jest odwołanie do obiektu bookShelf i możemy przy pomocy this odwołać się do jego właściwości i metod.



// Warto nauczyć się tylko jednej głównej zasady definiowania this - wartość kontekstu wewnątrz funkcji (nie strzałkowej) będzie określana nie w momencie jej utworzenia, ale w momencie wywołania. Oznacza to, że wartość this jest określana przez sposób wywołania funkcji, a nie przez miejsce, w którym została zadeklarowana.

// this w zasięgu globalnym
// W zasięgu globalnym, jeśli skrypt nie jest wykonywany w trybie ścisłym, this odnosi się do obiektu window. W trybie ścisłym wartość this, w zasięgu globalnym to undefined.

function foo() {
console.log(this);
}

foo();// window bez "use strict" i undefined z "use strict"


// this w metodzie obiektu
// Jeśli funkcja została wywołana jako metoda obiektu, to kontekst będzie odnosił się do obiektu, którego częścią jest metoda.

const maciej = {
username: "Maciej",
showThis() {
    console.log(this);
},
showName() {
console.log(this.username);
},
};

maciej.showThis();// {username: "Maciej", showThis: ƒ, showName: ƒ}
maciej.showName();// 'Maciej'



// this w metodzie obiektu
// Jeśli funkcja została wywołana jako metoda obiektu, to kontekst będzie odnosił się do obiektu, którego częścią jest metoda.

const maciej = {
username: "Maciej",
showThis() {
    console.log(this);
},
showName() {
    console.log(this.username);
},
};

maciej.showThis();// {username: "Maciej", showThis: ƒ, showName: ƒ}
maciej.showName();// 'Maciej'


function showThis() {
    console.log("this in showThis: ", this);
}

  // Wywołujemy w kontekście globalnym
showThis();// this in showThis: Window

const user = {
    username: "Mango",
};

  // Zapisujemy link do funkcji do właściwości obiektu
  // Zauważ, że to nie jest wywołanie - nie ma ()
user.showContext = showThis;

  // Wywołaj funkcję w kontekście obiektu
  // this wskaże na bieżący obiekt, w kontekście
  // którego odbywa się wywołanie, a nie na obiekt globalny.
user.showContext();
  // this in showThis as show Context: {username: "Mango", showContext: ƒ}



  // this w funkcjach callback

const customer = {
    firstName: "Jacob",
    lastName: "Mercer",
    getFullName() {
    return `${this.firstName} ${this.lastName}`;
    },
};

function getMessage(callback) {
  // callback() to wywołanie metody getFullName bez obiektu
    console.log(`Przetwarzanie żądania od ${callback()}.`);
}
getMessage(customer.getFullName);// Wystąpi błąd podczas wywoływania funkcji

// CIEKAWOSTKA
// Rozwiązanie tego problemu zostanie omówione w części poświęconej  metodzie bind() i metodom obiektowym.



// this w funkcjach strzałkowych
// Kontekst wewnątrz funkcji strzałkowej jest określony przez miejsce jej deklaracji, a nie wywołanie i odwołuje się do kontekstu funkcji nadrzędnej.


const showThis = () => {
    console.log("this in showThis: ", this);
};

showThis();// this in showThis: window

const user = {
    username: "Mango",
};
user.showContext = showThis;

user.showContext();// this in showThis: window


const hotel = {
    username: "Resort hotel",
    showThis() {
    const foo = () => {
              // Funkcja strzałkowa zapamiętuje kontekst podczas deklaracji,
              // z zasięgu nadrzędnego
        console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
    },
};

hotel.showThis();
  // this in foo: {username: 'Resort hotel', showThis: ƒ}
  // this in showThis: {username: 'Resort hotel',showThis: ƒ}
