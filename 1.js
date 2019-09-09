/************************************** undefinedとnull **************************************/
// undefined
  // 変数を未定義の場合、関数で暗黙的にreturn undefinedを返している

// null  
  // null値を指定した場合のみnullになる


/************************************** const と let **************************************/

function constAndLet(){
// const
  // constは再代入が不可な変数
  const bookTitle = "JS practice";
  // bookTitle = "jQuery practice";  <= Uncaught TypeError: Assignment to constant variable.


// let
  // letは再代入が可能な変数
  let bookPrice = "500 yen";
  bookPrice = "300 yen";
  console.log(1, bookPrice); // 300 yen

  // letは変数の初期値がなくても定義可能
  let bookCover;
  console.log(2, bookCover); // undefined


// var
  // varはletと同じような振る舞いをするが、同じ名前の変数を再定義できてしまう
  // ex
  var i = "aaa";
  var i = "bbb";
  console.log(i); // bbb

  let k = "aaa";
  // let k = "bbb"; <= Uncaught SyntaxError: Identifier 'k' has already been declared
  console.log(k); 
}
constAndLet();
