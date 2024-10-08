const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};

const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    location: {
    country: "Jamaica",
    city: "Ocho Rios",
    },
    stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
    },
};


const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle);// 'The Last Kingdom'

const bookGenres = book.genres;
console.log(bookGenres);// ['historical prose', 'adventurs']

const bookPrice = book.price;
console.log(bookPrice);// undefined


const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    location: {
    country: "Jamaica",
    city: "Ocho Rios",
    },
    hobbies: ["swimming", "music", "sci-fi"],
};

const location = user.location;
console.log(location);// { country: "Jamaica", city: "Ocho Rios" }

const country = user.location.country;
console.log(country);// 'Jamaica'



const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    location: {
    country: "Jamaica",
    city: "Ocho Rios",
    },
    hobbies: ["swimming", "music", "sci-fi"],
};

const hobbies = user.hobbies;
console.log(hobbies);// ['swimming', 'music', 'sci-fi']

const firstHobby = user.hobbies[0];
console.log(firstHobby);// 'swimming'

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies);// 3



// Składnia „nawiasów kwadratowych” jest używana znacznie rzadziej, zazwyczaj wtedy gdy nazwa właściwości nie jest z góry znana lub jest przechowywana w zmiennej, na przykład jako wartość parametru funkcji.


const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle);// 'The Last Kingdom'

const bookGenres = book["genres"];
console.log(bookGenres);// ['historical prose', 'adventure']

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor);// 'Bernard Cornwell'


const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};

book.rating = 9;
book.isPublic = false;
book.genres.push("drama");

console.log(book.rating);// 9
console.log(book.isPublic);// false
console.log(book.genres);// ['historical prose', 'adventures', 'drama']


const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];

console.log(book.pageCount);// 836
console.log(book.originalLanguage);// 'en'
console.log(book.translations);// ['ua', 'ru']


// Shorthand Property

const name = "Henry Cibola";
const age = 25;

const user = {
name: name,
age: age,
};

console.log(user.name);// "Henry Cibola"
console.log(user.age);// 25

const name = "Henry Cibola";
const age = 25;

const user = {
name,
age,
};

console.log(user.name);// "Henry Cibola"
console.log(user.age);// 25


// Computed properties

const propName = "name";
const user = {
age: 25,
};

user[propName] = "Henry Cibola";
console.log(user.name);// 'Henry Cibola'


const propName = "name";
const user = {
age: 25,
    // Nazwa tej właściwości zostanie pobrana z wartości zmiennej propName
[propName]: "Henry Cibola",
};

console.log(user.name);// 'Henry Cibola'



// ✅ Widzimy zgrupowane ze sobą właściwości i metody w strukturze obiektu
const bookShelf = {
    books: ["The Last Kingdom", "Dream Guardian"],
    
      // To jest metoda obiektowa
    getBooks() {
    console.log("Ta metoda zwróci wszystkie książki - właściwość books");
    },
    
      // To jest metoda obiektowa
    addBook(bookName) {
    console.log("Ta metoda doda nową książkę do właściwości books");
    },
};

  // Wywołania metod
bookShelf.getBooks();
bookShelf.addBook("Nowa książka");



const bookShelf = {
    books: ["The Last Kingdom"],
    getBooks() {
    console.log(this);
    },
};

  // Kropka jest poprzedzona obiektem bookShelf,
  // więc kiedy metoda jest wywoływana,
  // this będzie przechowywało link do niego.
bookShelf.getBooks();// {books: ['The Last Kingdom'], getBooks: f getBooks()}


const bookShelf = {
    books: ["The Last Kingdom"],
    getBooks() {
    return this.books;
    },
    addBook(bookName) {
    this.books.push(bookName);
    },
    removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
    },
};

console.log(bookShelf.getBooks());// ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks());// ['The Last Kingdom', 'The Mist', 'Dream Guardian']
bookShelf.removeBook("The Mist");
console.log(bookShelf.getBooks());// ['The Last Kingdom', 'Dream Guardian']



for (key in object) {
    // instrukcje
}


const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
};

for (const key in book) {
    // Klucz
    console.log(key);
    // Wartość właściwości pod tym kluczem
    console.log(book[key]);
}



const animal = {
    legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog);// {name: 'Mango'}
console.log(dog.name);// 'Mango'
console.log(dog.legs);// 4

// Metoda Object.create(animal) tworzy i zwraca nowy obiekt, używając i wiążąc go z obiektem animal. W związku z tym możemy uzyskać wartość właściwości legs przez odniesienie do niej jako dog.legs, mimo że nie znajduje się ona jako tako w obiekcie dog - jest to jej właściwość dziedziczona obiektu animal.



// Operator in, który jest używany w pętli for...in, nie rozróżnia własnych i dziedziczonych właściwości obiektu. To zachowanie może nam przeszkadzać, ponieważ raczej chcemy iterować tylko po własnych właściwościach obiektu. Aby dowiedzieć się, czy dana właściwość obiektu jest “własna”, używana jest metoda hasOwnProperty(key), która zwraca true albo false.

const animal = {
legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

// ❌ Zwraca true dla wszystkich właściwości
console.log("name" in dog);// true
console.log("legs" in dog);// true

// ✅ Zwraca true tylko dla własnych właściwości
console.log(dog.hasOwnProperty("name"));// true
console.log(dog.hasOwnProperty("legs"));// false


const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
};

for (const key in book) {
      // Jeśli to jest własna właściwość, wykonaj instrukcje w bloku if
    if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
    }
      // Jeśli to nie jest własna właściwość, nie rób nic


    const book = {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        genres: ["historical prose", "adventure"],
        rating: 8.38,
    };
    const keys = Object.keys(book);
    console.log(keys);// ['title', 'author', 'genres', 'rating']
    

    const book = {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        genres: ["historical prose", "adventure"],
        rating: 8.38,
    };
    const keys = Object.keys(book);
    
    for (const key of keys) {
      // Klucz
        console.log(key);
      // Wartość właściwości
        console.log(book[key]);
    }
    



    const book = {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    };
    const keys = Object.keys(book);
    console.log(keys);// ['title', 'author', 'rating']
    
    const values = Object.values(book);
    console.log(values);// ['The Last Kingdom', 'Bernard Cornwell', 8.38]
    


    const goods = {
        apples: 6,
        grapes: 3,
        bread: 4,
        cheese: 7,
    };
    
    const values = Object.values(goods);// [6, 3, 4, 7]
    
    let total = 0;
    
    for (const value of values) {
        total += value;
    }
    
    console.log(total);// 20
    


    const book = {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    };
    const keys = Object.keys(book);
    console.log(keys);// ['title', 'author', 'rating']
    
    const values = Object.values(book);
    console.log(values);// ['The Last Kingdom', 'Bernard Cornwell', 8.38]
    
    const entries = Object.entries(book);
    console.log(entries);
      // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
    


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
        {
        title: "Sen śmiesznego człowieka",
        author: "Fiodor Dostojewski",
        rating: 7.75,
        },
    ];
    

    for (const book of books) {
        // Obiekt książki
        console.log(book);
        // Tytuł
        console.log(book.title);
        // Autor
        console.log(book.author);
        // Ocena
        console.log(book.rating);
        }
    

        const bookNames = [];

        for (const book of books) {
        bookNames.push(book.title);
        }
        
        console.log(bookNames);// ["The Last Kingdom", "Beside Still Waters", "Sen śmiesznego człowieka"]
        


        let totalRating = 0;

for (const book of books) {
totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating); // 8.2