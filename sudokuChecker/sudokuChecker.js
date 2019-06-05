/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  const bm = board.split('\n');
  // row check
  for(let i = 0; i < 9; i++){
    if(bm[i].split('').reduce((a,b) => a + Number(b), 0) !== 45) return 'invalid';
  }
  
  // vertical check
  for(let i = 0; i < 9; i++){
    let total = 0;
    for(let j = 0; j < 9; j++){
      total += Number(bm[j][i])
    }
    if(total !== 45) return 'invalid';
  }
  // block check
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      if((i + j) % 3 === 0){
        let total  = 0
        for(var r = 0; r < 3; r++){
          for(var c = 0; c < 3; c++ ){
            total += Number(bm[i + r][j+ c]);
          }
        }
        if(total !== 45) return 'invalid';
      }
    }
  }

  return 'solved';
}

var input = "215873649\n734965812\n698412537\n387241965\n146597283\n471659328\n952386471\n563128794\n829734156"
console.log(sudokuChecker(input));