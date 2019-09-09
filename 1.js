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
  console.log(0, bookTitle);

  // constは再代入できないので、プリミティブな値を入れれば定数に近い変数を定義することができるが、
  // constで定義したものがオブジェクトの場合は、その値を変更することができるので、
  // 必ずしも定数のようなふるまいをするわけではない
    
    // 定義的な使い方
    const tenNum = 10;

    // オブジェクトをconstで定義すると、オブジェクトそのものは変更できてしまう
    const obj = {
      key: "val"
    };
    obj.key = "new val";
    console.log(0.1, obj); // key: "new val"

    obj.o = "";
    console.log(0.2, obj); // key: "new val", o: ""


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
  var i = "aaa";
  var i = "bbb";
  console.log(i); // bbb

  let k = "aaa";
  // let k = "bbb"; <= Uncaught SyntaxError: Identifier 'k' has already been declared
  console.log(k);


// まとめ
  // まずconstで定義できないか検討し、出来ない場合はletで書いていく
}
constAndLet();
