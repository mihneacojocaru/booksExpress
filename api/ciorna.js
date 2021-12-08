import { getBooks, saveBook } from "./repository.js";



// getBooks().then(e=>e.forEach(element => {
//     console.log(element);
// }));

const newBook = {
    "id": 51,
    "book_title": "Test Title",
    "author": 'John Doe',
    "release_date": '12/12/2000',
    "isbn_no": '123412345-T'
};

data = [{
    "id": 1,
    "book_title": "Hell's Hinges",
    "author": "Tabatha Lauchlan",
    "release_date": "25/07/1995",
    "isbn_no": "551896144-8"
  }, {
    "id": 2,
    "book_title": "Pulling John",
    "author": "Gasparo Older",
    "release_date": "01/11/1995",
    "isbn_no": "377866934-6"
  }, {
    "id": 3,
    "book_title": "Betrayal, The (Nerakhoon)",
    "author": "Marwin Bownass",
    "release_date": "31/03/1989",
    "isbn_no": "117630700-2"
  }, {
    "id": 4,
    "book_title": "Liberty Kid",
    "author": "Gilberte Perigeaux",
    "release_date": "11/05/1996",
    "isbn_no": "910345935-7"
  }, {
    "id": 5,
    "book_title": "Black Nativity",
    "author": "Alia Tafani",
    "release_date": "26/01/1981",
    "isbn_no": "228818536-8"
  }, {
    "id": 6,
    "book_title": "Come Have Coffee with Us",
    "author": "Katherine Dalby",
    "release_date": "26/05/1995",
    "isbn_no": "222836060-0"
  }, {
    "id": 7,
    "book_title": "Stopped on Track",
    "author": "Gaelan Grigorio",
    "release_date": "17/11/1987",
    "isbn_no": "995158351-2"
  }, {
    "id": 8,
    "book_title": "Forces of Nature",
    "author": "Mab Swafford",
    "release_date": "27/05/1981",
    "isbn_no": "396740420-X"
  }, {
    "id": 9,
    "book_title": "Harry Potter and the Goblet of Fire",
    "author": "Perla Bodesson",
    "release_date": "06/01/1985",
    "isbn_no": "812269796-8"
  }, {
    "id": 10,
    "book_title": "Heidi Fleiss: Hollywood Madam",
    "author": "Cassandre Seadon",
    "release_date": "04/06/1991",
    "isbn_no": "481736887-X"
  }, {
    "id": 11,
    "book_title": "Falling Awake",
    "author": "Analiese Soppit",
    "release_date": "22/10/1993",
    "isbn_no": "503931705-0"
  }, {
    "id": 12,
    "book_title": "Thirteenth Floor, The",
    "author": "Micheil Sarfati",
    "release_date": "10/11/1990",
    "isbn_no": "206175282-9"
  }, {
    "id": 13,
    "book_title": "Eastern Drift (Indigène d'Eurasie)",
    "author": "Amandi Ricardot",
    "release_date": "25/01/1998",
    "isbn_no": "212804867-2"
  }, {
    "id": 14,
    "book_title": "Bent",
    "author": "Moria Banaszkiewicz",
    "release_date": "18/05/1989",
    "isbn_no": "517905487-7"
  }, {
    "id": 15,
    "book_title": "Cry, the Beloved Country",
    "author": "Mariel Embleton",
    "release_date": "23/05/1998",
    "isbn_no": "353886319-9"
  }, {
    "id": 16,
    "book_title": "Babylon 5: The Gathering",
    "author": "Min Mack",
    "release_date": "09/08/1983",
    "isbn_no": "089404345-5"
  }, {
    "id": 17,
    "book_title": "Satyricon",
    "author": "Lynsey Wilde",
    "release_date": "30/10/1995",
    "isbn_no": "009709607-5"
  }, {
    "id": 18,
    "book_title": "Mission: Impossible II",
    "author": "Udall Semarke",
    "release_date": "22/02/1998",
    "isbn_no": "103860086-3"
  }, {
    "id": 19,
    "book_title": "Verbo",
    "author": "Wheeler Joron",
    "release_date": "22/12/1987",
    "isbn_no": "395968829-6"
  }, {
    "id": 20,
    "book_title": "Vlad",
    "author": "Brigg Delacroux",
    "release_date": "11/07/1994",
    "isbn_no": "727532871-2"
  }, {
    "id": 21,
    "book_title": "Knocked Up",
    "author": "Jobey Riding",
    "release_date": "20/04/1986",
    "isbn_no": "503007520-8"
  }, {
    "id": 22,
    "book_title": "Instructions Not Included (No se Aceptan Devoluciones)",
    "author": "Carmel Riolfi",
    "release_date": "28/11/1981",
    "isbn_no": "032203210-5"
  }, {
    "id": 23,
    "book_title": "Children of the Revolution",
    "author": "Kordula Birmingham",
    "release_date": "04/06/1989",
    "isbn_no": "078305430-0"
  }, {
    "id": 24,
    "book_title": "Body Snatchers",
    "author": "Carce Bindon",
    "release_date": "21/01/1989",
    "isbn_no": "041441271-0"
  }, {
    "id": 25,
    "book_title": "Men, The",
    "author": "Florencia Dearnly",
    "release_date": "03/06/1990",
    "isbn_no": "833357748-2"
  }, {
    "id": 26,
    "book_title": "66 Scenes From America",
    "author": "Jessalyn Dowdam",
    "release_date": "30/10/1980",
    "isbn_no": "921193226-2"
  }, {
    "id": 27,
    "book_title": "Heart of Dragon (Long de xin)",
    "author": "Janina Sparkes",
    "release_date": "18/05/1991",
    "isbn_no": "647811206-3"
  }, {
    "id": 28,
    "book_title": "Animal",
    "author": "Anjela Attew",
    "release_date": "26/11/1984",
    "isbn_no": "172911561-6"
  }, {
    "id": 29,
    "book_title": "Flowing (Nagareru)",
    "author": "Banky Creamen",
    "release_date": "13/07/1980",
    "isbn_no": "683913729-5"
  }, {
    "id": 30,
    "book_title": "Canadian Bacon",
    "author": "Indira Kinde",
    "release_date": "05/05/1986",
    "isbn_no": "412473783-1"
  }, {
    "id": 31,
    "book_title": "Short Film About John Bolton, A",
    "author": "Paige Pembridge",
    "release_date": "20/11/1999",
    "isbn_no": "822660398-6"
  }, {
    "id": 32,
    "book_title": "Amnèsia",
    "author": "Schuyler Cale",
    "release_date": "14/12/1989",
    "isbn_no": "693106126-7"
  }, {
    "id": 33,
    "book_title": "Black Rain",
    "author": "Oren Berdale",
    "release_date": "20/09/1981",
    "isbn_no": "524766474-4"
  }, {
    "id": 34,
    "book_title": "Perfect World, A",
    "author": "Edik Hallbord",
    "release_date": "03/11/1998",
    "isbn_no": "269328187-3"
  }, {
    "id": 35,
    "book_title": "Lie with Me",
    "author": "Wally Sutherington",
    "release_date": "01/03/1980",
    "isbn_no": "170007522-5"
  }, {
    "id": 36,
    "book_title": "Leave",
    "author": "Berget Clemmensen",
    "release_date": "08/11/1989",
    "isbn_no": "599933745-3"
  }, {
    "id": 37,
    "book_title": "Get Smart",
    "author": "Silvana Jurkowski",
    "release_date": "06/03/1999",
    "isbn_no": "289631282-X"
  }, {
    "id": 38,
    "book_title": "Invasion, The",
    "author": "Andriana Ishchenko",
    "release_date": "19/03/1987",
    "isbn_no": "544118503-1"
  }, {
    "id": 39,
    "book_title": "Razor's Edge, The",
    "author": "Cordey Sore",
    "release_date": "15/04/1996",
    "isbn_no": "788559033-X"
  }, {
    "id": 40,
    "book_title": "White Angel, The (L'angelo bianco)",
    "author": "Onfroi Dwight",
    "release_date": "01/08/1995",
    "isbn_no": "103443648-1"
  }, {
    "id": 41,
    "book_title": "Monte Carlo",
    "author": "Boothe Sidery",
    "release_date": "12/02/1981",
    "isbn_no": "441475425-9"
  }, {
    "id": 42,
    "book_title": "Dave Attell: Captain Miserable",
    "author": "Cindee Cabrales",
    "release_date": "07/02/1987",
    "isbn_no": "475313996-4"
  }, {
    "id": 43,
    "book_title": "Sgt. Kabukiman N.Y.P.D.",
    "author": "Scott Harvison",
    "release_date": "07/09/1992",
    "isbn_no": "763129417-8"
  }, {
    "id": 44,
    "book_title": "Dark Ride",
    "author": "Damaris Visick",
    "release_date": "29/06/1987",
    "isbn_no": "630202773-X"
  }, {
    "id": 45,
    "book_title": "Document of the Dead",
    "author": "Clayson Meneur",
    "release_date": "11/08/1982",
    "isbn_no": "869410269-2"
  }, {
    "id": 46,
    "book_title": "Feeding Frenzy",
    "author": "Bartholomew Canning",
    "release_date": "04/09/1983",
    "isbn_no": "569436550-X"
  }, {
    "id": 47,
    "book_title": "Waydowntown",
    "author": "Gordy Rasmus",
    "release_date": "04/08/1998",
    "isbn_no": "490857281-X"
  }, {
    "id": 48,
    "book_title": "Bigger, Stronger, Faster*",
    "author": "Marget Coraini",
    "release_date": "08/02/1980",
    "isbn_no": "949159280-7"
  }, {
    "id": 49,
    "book_title": "The Referee",
    "author": "Crosby Godfroy",
    "release_date": "07/01/1999",
    "isbn_no": "072817661-0"
  }, {
    "id": 50,
    "book_title": "Jungle Book of Regulations, A (Nie Ma Rozy Bez Ognia)",
    "author": "Adoree Durtnal",
    "release_date": "01/04/1992",
    "isbn_no": "811999230-X"
  }]
