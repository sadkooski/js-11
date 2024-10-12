// Operacja ... (spread) umożliwia rozłożenie kolekcji elementów (tablicy, stringa lub obiektu) do miejsca, w którym oczekiwany jest zestaw różnych wartości. Istnieją pewne ograniczenia, na przykład nie można rozkładać tablicy do obiektu i odwrotnie.

// Istnieje pewna różnica - w JavaScript takie rozłożenie nie zmienia oryginalnej kolekcji, czyli tworzy kopię każdego elementu. Po rozłożeniu będziemy mieli zarówno pudełko pełne jabłek jak i kopię każdego z jabłek.

const temps = [14, -4, 25, 8, 11];

// Konsola wyświetli tablicę
console.log(temps);
// ❌ To nie zadziała, ponieważ przekazujemy całą tablicę
console.log(Math.max(temps));// NaN

// Konsola wyświetli zestaw oddzielnych liczb
console.log(...temps);
// ✅ Rozkładamy kolekcję elementów na oddzielne argumenty
console.log(Math.max(...temps));// 25


// Operacja ... (spread) pozwala również na utworzenie kopii tablicy lub "sklejenie" dowolnej liczby tablic w jedną nową. Wcześniej używaliśmy do tego metod slice() i concat(), ale operacja rozłożenia pozwala zrobić to samo w krótszej formie.


const temps = [14, -4, 25, 8, 11];

// To jest dokładna, niezależna kopia tablicy temps
const copyOfTemps = [...temps];
console.log(copyOfTemps);// [14, -4, 25, 8, 11]


// W powyższym przykładzie mamy pudełko “jabłek” temps i chcemy stworzyć jego niezależną kopię. Bierzemy puste pudełko i wsypujemy do niego jabłka z oryginalnego pudełka temps - rozkładamy go do innej kolekcji. W tym przypadku pudełko temps nie zmieni się, nadal będzie zawierało jabłka, a nowe pudełko będzie zawierało ich dokładne kopie. W ten sposób unikamy problemów związanych z referencją.


const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps);// [14, 25, 11, 23, 17, 18]

// Ponieważ obiekty podobnie jak tablice, przypisywane są przez referencję, spread pozwala nam uniknąć problemów z tym związanych.


const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third);// { propA: 5, propB: 10, propC: 15 }




const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third);// { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth);// { propA: 5, propB: 10, propC: 50, propD: 20 }




const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third);// { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth);// { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth);// { propA: 5, propB: 20, propC: 15 }



// Operacja ... (rest) umożliwia zebranie grupy niezależnych elementów w nową kolekcję. Syntaktycznie jest to bliźniak operacji rozłożenia, ale łatwo je rozróżnić — rozłożenie następuje, gdy ... znajduje się po prawej stronie operacji przypisania, a zbiór ma miejsce, gdy ... znajduje się po lewej stronie.



// Jak zadeklarować parametry funkcji tak,
// aby można było przekazać dowolną liczbę argumentów?
function multiply() {
    // ...
    }
    
    multiply(1, 2);
    multiply(1, 2, 3);
    multiply(1, 2, 3, 4);




    function multiply(...args) {
        console.log(args);// tablica wszystkich argumentów
    }
    
    multiply(1, 2);
    multiply(1, 2, 3);
    multiply(1, 2, 3, 4);
    


    function multiply(firstNumber, secondNumber, ...otherArgs) {
        console.log(firstNumber);// Wartość pierwszego argumentu
        console.log(secondNumber);// Wartość drugiego argumentu
        console.log(otherArgs);// Tablica innych argumentów
    }
    
    multiply(1, 2);
    multiply(1, 2, 3);
    multiply(1, 2, 3, 4);
    

    // Wszystkie argumenty dla których zostaną zadeklarowane parametry przekażą im swoje wartości, reszta argumentów zostanie umieszczona w tablicy jeśli skorzystamy z tego zapisu. Operacja rest zbiera wszystkie pozostałe argumenty i dlatego musi znaleźć się na końcu w sygnaturze funkcji, w przeciwnym razie wystąpi błąd.


    // Destrukturyzacja obiektów


    const book = {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        genres: ["historical prose", "adventure"],
        isPublic: true,
        rating: 8.38,
    };
    
    const accessType = book.isPublic ? "publiczny" : "zamknięty";
    const message = `Książka ${book.title} autorstwa ${book.author} z oceną ${book.rating} ma dostęp ${accessType}.`;
    
      // 'Książka The Last Kingdom autorstwa Bernard Cornwell z oceną 8.38 ma dostęp publiczny.'



    const book = {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        genres: ["historical prose", "adventure"],
        isPublic: true,
        rating: 8.38,
    };
    
      // Destrukturyzacja
    const { title, author, isPublic, rating, coverImage } = book;
    console.log(coverImage);// undefined
    
    const accessType = isPublic ? "publiczny" : "zamknięty";
    const message = `Książka ${title} autorstwa ${author} z oceną ${rating} ma dostęp w ${accessType}.`;
      // 'Książka The Last Kingdom autorstwa Bernard Cornwell z oceną 8.38 ma dostęp publiczny.'
    

    //   Destrukturyzacja zawsze znajduje się po lewej stronie operacji przypisania. Zmiennym wewnątrz nawiasów klamrowych przypisywane są wartości właściwości obiektu. Jeśli nazwa zmiennej i nazwa właściwości są takie same, to przypisanie ma miejsce, w przeciwnym razie zostanie mu przypisane undefined. Kolejność, w jakiej zmienne są deklarowane w nawiasach klamrowych, nie jest ważna, ponieważ w obiekcie nazwy właściwości są unikalne.


    const book = {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
    };
    
      // Dodajmy zdjęcie na okładkę, jeśli nie ma go w obiekcie książki
    const {
        title,
        coverImage = "https://via.placeholder.com/640/480",
        author,
    } = book;
    
    console.log(title);// The Last Kingdom
    console.log(author);// Bernard Cornwell
    console.log(coverImage);// https://via.placeholder.com/640/480
    


    const firstBook = {
        title: "The Last Kingdom",
        coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
    };
    
    const {
        title: firstTitle,
        coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
    } = firstBook;
    
    console.log(firstTitle);// The Last Kingdom
    console.log(firstCoverImage);// https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
    
    const secondBook = {
        title: "Sen śmiesznego człowieka",
    };
    
    const {
        title: secondTitle,
        coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
    } = secondBook;
    
    console.log(secondTitle);// Sen śmiesznego człowieka
    console.log(secondCoverImage);// https://via.placeholder.com/640/480
    


    const books = [
        {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
        },
        {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
        },
    ];
    
    for (const book of books) {
        console.log(book.title);
        console.log(book.author);
        console.log(book.rating);
    }
    


    const books = [
        {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
        },
        {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
        },
    ];
    
    for (const book of books) {
        const { title, author, rating } = book;
    
        console.log(title);
        console.log(author);
        console.log(rating);
    }
    


    // Jeśli obiekt ma niewiele właściwości, destrukturyzację można przeprowadzić bezpośrednio w miejscu, w którym deklarowana jest zmienna book.


    const books = [
        {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
        },
        {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
        },
    ];
    
    for (const { title, author, rating } of books) {
        console.log(title);
        console.log(author);
        console.log(rating);
    }
    

    const user = {
        name: "Jacques Gluke",
        tag: "jgluke",
        stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
        },
    };
    
    const {
        name,
        tag,
        stats: { followers, views: userViews, likes: userLikes = 0 },
    } = user;
    
      console.log(name); // Jacques Gluke
      console.log(tag); // jgluke
      console.log(followers); // 5603
      console.log(userViews); // 4827
      console.log(userLikes); // 1308


// Przypisanie destrukturyzujące może być również użyte dla tablic, ale będzie się nieco różniło:

// Użyj nawiasów kwadratowych [] zamiast nawiasów klamrowych {}.
// Zmiennym określonym w nawiasach kwadratowych [], będą po kolei przypisywane wartości elementów tablicy - kolejność zmiennych będzie więc miała znaczenie.

const rgb = [200, 255, 100];
const [red, green, blue] = rgb;

console.log(`R:${red},G:${green},B:${blue}`);// "R:200,G:255,B:100"


const rgb = [200, 255, 100];
let red, green, blue;

[red, green, blue] = rgb;

console.log(`R:${red},G:${green},B:${blue}`);// "R:200,G:255,B:100"


const rgb = [200, 100, 255];

const [red, green, blue, alfa = 0.3] = rgb;

console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`);// "R:200,G:100,B:255,Alfa:0.3"


const rgb = [200, 255, 100];

const [red, ...colors] = rgb;

console.log(red);// "200"
console.log(colors);// [255, 100]


// Elementy możemy też pominąć. Załóżmy, że musisz pobrać tylko ostatnią wartość z tablicy rgb. Taki zapis nie jest zbyt często używany, ale poznajmy go:

const rgb = [200, 100, 255];

const [, , blue] = rgb;

console.log(`Blue: ${blue}`);// "Blue: 255"



function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
    // wykorzystanie parametrów
console.log(title);
console.log(numberOfPages);
    // dalsza część kodu
}

// ❌ Co to jest 736? Co to jest 10283? Co to jest true?
doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);



Wzorzec "Obiekt parametru" pomaga rozwiązać ten problem, zastępując zestaw parametrów tylko jednym — obiektem o nazwanych właściwościach

function doStuffWithBook(book) {
    // wykorzystanie parametru (obiektu)
console.log(book.title);
console.log(book.numberOfPages);
    // dalsza część kodu
}

// ✅ wykorzystanie wszystkich zmiennych jest jasne
doStuffWithBook({
    title: "The Last Kingdom",
    numberOfPages: 736,
    downloads: 10283,
    rating: 8.38,
    isPublic: true,
});


function doStuffWithBook(book) {
    const { title, numberOfPages, downloads, rating, isPublic } = book;
    console.log(title);
    console.log(numberOfPages);
      // dalsza część kodu
}


Lub od razu w sygnaturze funkcji, oba zapisy są poprawne

function doStuffWithBook({
    title,
    numberOfPages,
    downloads,
    rating,
    isPublic,
}) {
    console.log(title);
    console.log(numberOfPages);
    // dalsza część kodu
}