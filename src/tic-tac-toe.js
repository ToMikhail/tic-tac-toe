class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.arr = [[], [], []]
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;

        if (this.arr[this.rowIndex][this.columnIndex] != null) {
            return this.currentPlayerSymbol;

        }
        else {
            this.arr[this.rowIndex][this.columnIndex] = this.currentPlayerSymbol;
            if (this.currentPlayerSymbol == 'x') {
                this.currentPlayerSymbol = 'o';
            } else {
                this.currentPlayerSymbol = 'x';
            }
        }
    }

    isFinished() {
        if (getWinner() || isDraw()) {
            return true
        }
        else {
            return false;
        }

    }

    getWinner() {
        let tmp = 0;

        for (let i = 0; i < this.arr[i].length - 1; i++) {


            if (this.arr[i][0] === this.arr[i][1] === this.arr[i][2] !== null) {
                if (this.arr[i][0] === 'x') {
                    return 'x - win'
                }
                else {
                    return '0 - win'
                }
            }


            if (this.arr[i][tmp] === this.arr[i][tmp] === this.arr[i][tmp] !== null) {
                if (this.arr[i][0] === 'x') {
                    return 'x - win'
                }
                else {
                    return '0 - win'
                }
            }
            tmp = tmp + 1;
        }

        if (this.arr[0][0] === this.arr[1][1] === this.arr[2][2] !== null ||
            this.arr[2][0] === this.arr[1][1] === this.arr[0][2] !== null) {
            if (this.arr[i][0] === 'x') {
                return 'x - win'
            }
            else {
                return '0 - win'
            }

        }

    }

    noMoreTurns() {
        let check = this.arr.indexOf('-')
        if (this.check == -1) {
            return true;
        }
        else {
            return false
        }
    }

    isDraw() {
        let check = this.arr.indexOf(null)
        if (this.check == -1 && !getWinner()) {
            return true;
        }
        else {
            return false
        }
    }

    getFieldValue(rowIndex, colIndex) {
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        if (this.arr[this.rowIndex][this.colIndex] == 'x' || this.arr[this.rowIndex][this.colIndex] == 'o') {
            return this.arr[this.rowIndex][this.colIndex];
        }
        else {
            return null;
        }


    }
}

module.exports = TicTacToe;


