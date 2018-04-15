import { Game } from 'boardgame.io/core';

function IsVictory(cells) {
  let lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let line of lines) {
    let symbol = cells[line[0]];
    if (symbol !== null && symbol === cells[line[1]] && symbol === cells[line[2]]) return true;
  }

  return false;
}

export const TicTacToe = Game({
  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell(G, ctx, id) {
      let cells = [...G.cells];
      cells[id] = ctx.currentPlayer;
      return { ...G, cells };
    },
  },

  flow: {
    endGameIf: (G, ctx) => {
      if (IsVictory(G.cells)) {
        return ctx.currentPlayer;
      }
    }
  },
});
