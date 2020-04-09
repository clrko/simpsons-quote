import React from 'react';
// import PropTypes from 'prop-types';
import './QuoteCard.css';
import { render } from 'react-dom';


function QuoteCard({cards}) {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favorite: false,
//     };
//   }
// render() {
    const card = cards[0];
    return (
      <figure className="QuoteCard">
        <img src={card.image} alt={card.character} />
        <figcaption>
          <blockquote>{card.quote}</blockquote>
          <p>
            <cite>{card.character}</cite>
            {/* <span className={this.state.favorite? "is-favorite" : ""}
              onClick={event => {
                const newFavorite = !this.state.favorite;
                this.setState({ favorite: newFavorite });
              }}
            >&#9733;</span> */}
          </p>
        </figcaption>
      </figure>
    );
  //}
}


// QuoteCard.propTypes = {
//   character: PropTypes.string.isRequired,
//   quote: PropTypes.string.isRequired,
// };

export default QuoteCard;