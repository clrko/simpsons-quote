import React from 'react';
import QuoteCard from './components/QuoteCard';
import LoadingSpinner from './components/LoadingSpinner';
import axios from 'axios';
import './App.css';

const sampleCard = [
  {
   "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
   "character": "Nelson Muntz",
   "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   "characterDirection" : "Left"
  }
];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      card: sampleCard,
      loading: false,
    }
    this.getCard = this.getCard.bind(this);
  }

  getCard(){
    this.setState({loading: true}, () => {
      axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          loading: false,
          card: data,
        })
      })
    })
  }
  
  render () {
    return (
      <div className="App">
        {this.state.loading? <LoadingSpinner /> : <QuoteCard cards={this.state.card} />}
        <button type="button" onClick={this.getCard}>Get new card</button>
      </div>
    )
  }
}

export default App;
