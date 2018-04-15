import { Client } from 'boardgame.io/react';
import { TicTacToe } from './game';
import { TicTacToeBoard } from './board';

const App = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
});

export default App;
