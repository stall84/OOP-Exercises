/* Practicing Object Oriented Programming concepts */

/* Person Class-Instance Exercise */

class Person {
    constructor(name,email,phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greet(otherPerson) {
        console.log(`Hey ${otherPerson.name}, I am ${this.name} !`);
    }
}

let sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

sonny.greet(jordan);
jordan.greet(sonny);
console.log(`Contact info for ${sonny.name}: phone: ${sonny.phone}, email: ${sonny.email}`);
console.log(`Contact info for ${jordan.name}: phone: ${jordan.phone}, email: ${jordan.email}`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Card Exercise */

class Card {
    constructor(points, suit) {
        this.points = points;
        this.suit = suit;
    }
    getImageUrl() {
        return `/images/PNG/${this.points}${this.suit}.png`;
    }

}

let card1 = new Card(4,'Spades');
let card2 = new Card(3,'Diamonds');

console.log(card1.suit + ' ' + card1.points);
console.log(card2.points + ' ' + card2.suit);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* getImageUrl() Exercise */


// added method to the class above

let cardImg = document.createElement('img');
// If I had time I could create a whole deck of cards ... but this is a hard-coded way of displaying the card image
cardImg.src = card1.getImageUrl();
//document.getElementById('cardRender').appendChild(cardImg);


/* see https://stackoverflow.com/questions/7932759/dom-appendchild-to-insert-images */


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Hand Constructor */

class Hand {
    constructor() {
        this.cards = [];
    }
    addCard(card) {
        this.cards.push(card)
    }
    getPoints(card) {
        for (let i = 0; i < this.cards.length; i++) {
            var sum = 0
            sum += this.cards[i].points
        }
        console.log(sum)
        }
}

let myHand = new Hand();
myHand.addCard(new Card(5,'Diamonds'))
myHand.addCard(new Card(12, 'Spades'))

// the way i've constructed getPoints is only returning the last card in the array's point value
// spend a lot of time looking for answer, apparently related to way objects reference, but I still can't get it

myHand.getPoints();
console.log(myHand);