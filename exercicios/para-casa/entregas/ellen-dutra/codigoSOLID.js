class MovieCatalog {
  constructor() {
    this.movies = {
      F001: { title: 'Ran', category: 'regular' },
      F002: { title: 'Trois Couleurs: Bleu', category: 'regular' },
      F003: { title: 'Cars 2', category: 'childrens' },
      F004: { title: 'Latest Hit Release', category: 'new' },
    };
  }

  getMovieInfo(movieID) {
    return this.movies[movieID];
  }
}

class RentalCalculator {
  calculateRentalAmount(movie, rental) {
    let rentalAmount = 0;

    switch (movie.category) {
      case 'regular':
        rentalAmount = 2;
        if (rental.days > 2) {
          rentalAmount += (rental.days - 2) * 1.5;
        }
        break;
      case 'new':
        rentalAmount = rental.days * 3;
        break;
      case 'childrens':
        rentalAmount = 1.5;
        if (rental.days > 3) {
          rentalAmount += (rental.days - 3) * 1.5;
        }
        break;
    }
    return rentalAmount;
  }
}

class StatementGenerator {
  constructor(movieData, rentalCalculator) {
    this.movieData = movieData;
    this.rentalCalculator = rentalCalculator;
  }

  generateStatement(customer) {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let statement = `Rental Record for ${customer.name}\n`;

    for (let rental of customer.rentals) {
      let movie = this.movieData.getMovieInfo(rental.movieID);
      let rentalAmount = this.rentalCalculator.calculateRentalAmount(
        movie,
        rental,
      );
      frequentRenterPoints++;

      if (movie.category === 'new' && rental.days > 2) frequentRenterPoints++;

      statement += `\t${movie.title}\t${rentalAmount}\n`;
      totalAmount += rentalAmount;
    }
    statement += this.generateFooter(totalAmount, frequentRenterPoints);
    return statement;
  }

  generateFooter(totalAmount, frequentRenterPoints) {
    return `Amount owed is ${totalAmount}\nYou earned ${frequentRenterPoints} frequent renter points\n`;
  }
}

const customer = {
  name: 'Ellen',
  rentals: [
    { movieID: 'F001', days: 3 },
    { movieID: 'F002', days: 2 },
  ],
};

const movie = new MovieCatalog();
const rental = new RentalCalculator();
const statementGenerator = new StatementGenerator(
  movie,
  rental,
).generateStatement(customer);
console.log(statementGenerator);