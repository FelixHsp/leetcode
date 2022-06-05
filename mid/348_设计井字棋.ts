/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/design-tic-tac-toe/
 * @Date: 2022-06-05 16:13:11 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-05 17:32:53
 */

class TicTacToe {
  private n: number;
  private map: Map<string, number[]>;
  constructor(n: number) {
    this.n = n;
    this.map = new Map();
  }

  move(row: number, col: number, player: number): number {
    return this._check(`r-${row}`, player)
      || this._check(`c-${col}`, player)
      || this._check('lt', player, row === col)
      || this._check('rt', player, row === this.n - col - 1);
  }

  private _check(key: string, player: number, check = true) {
    if (!check) {
      return 0;
    }
    const item = this.map.get(key);
    if (!item) {
      this.map.set(key, [player, 1]);
      if (this.n === 1) {
        return player;
      }
    }
    else if (player === item[0]) {
      item[1]++;
      if (item[1] === this.n) {
        return player;
      }
    }
    else {
      item[0] = 0;
    }

    return 0;
  }
}

export default void 0;