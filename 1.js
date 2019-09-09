/************************************** undefinedとnull **************************************/
// undefined
  // 変数を未定義の場合、関数で暗黙的にreturn undefinedを返している

// null  
  // null値を指定した場合のみnullになる


/************************************** const と let **************************************/

function constAndLet() {
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
};
constAndLet();


/************************************** Number **************************************/

function checkNumber() {
// 整数リテラル
  // 10進数
    // ただし、複数の数字を組み合わせた際に、先頭を0から始めると8進数として扱われる場合がある
    console.log(3, 1);
    console.log(4, 10);

    // 非推奨な8進数の書き方
    // use strictモードだとエラー
    console.log(5, 0644); // 420
    console.log(6, 0777); // 511

  // 2進数
  // bはbinaryの意味。ビットを表現するのに利用
  console.log(7, 0b0); // 0
  console.log(8, 0b1010); // 10

  // 8進数
  // oはoctalの意味。ファイルのパーミッションを表現するのに利用
  console.log(9, 0o644); // 420
  console.log(10, 0o777); // 511

  // 16進数
  // xはhexの意味。文字のコードポイントやRGB値を表現するのに利用
  console.log(11, 0xFF); // 255
  console.log(12, 0x30A2); // 12450


// 不動小数点リテラル
  // 0から始まる場合は省略可能だが非推奨
  console.log(13, .123); // 0.123

  // eは指数を意味する。
  // 2e8は2x10の8乗
  console.log(14, 2e8); // 200000000
};
checkNumber();


/************************************** String **************************************/

function checkString() {
// 文字列リテラル
  // ダブルクオートとシングルクオートは同じ文字列扱いとして評価される

  // バックスラッシュ
  console.log(15, "8 o'clock");  // "8 o'clock"
  console.log(16, '8 o\'clock'); // "8 o'clock"

  // 改行
  console.log(17, "改行前\n改行後");
  
// ES2015(ES6)での機能
  // 改行
  console.log(18, `改行前
  改行後`);

  // テンプレート機能
  // バッククオートで囲う
  const str = "string";
  console.log(19, `this is ${str}`); // "this is string"

  const s = "`str`";
  console.log(19.1, `this is ${s}`); // "this is `str`"
  
  // リテラルを含める場合、エスケープを使う
  console.log(20, `this is \`str\``); // "this is `str`"

};
checkString();


/************************************** null **************************************/

function checkNull() {
// null
  // null = 値がない
  // 未定義の変数を参照するとエラー

  // console.log(21, foo); <= Uncaught ReferenceError: foo is not defined
  const foo = null;
  console.log(21.1, foo); // null

  // nullにオブジェクトの値を代入しようとしてもエラーになる
  // foo.hoge = "aaa";
  // console.log(21.2, foo); <= Uncaught TypeError: Cannot set property 'hoge' of null

  // constで定義しているので再代入は不可
  // foo = {};
  // console.log(21.1-1, foo); <= Uncaught TypeError: Assignment to constant variable.

  // letだと再代入可能
  let f = null;
  console.log(21.3, f); // null

  f = {};
  console.log(21.4, f); // {}
  
  f.hoge = "bbb";
  console.log(21.5, f); // {hoge: "bbb"}
};
checkNull();


/************************************** Object **************************************/

function checkObj() {
// オブジェクトリテラル
  // プリミティブ型以外はすべてオブジェクト型である

  // 参照方法はドット（.）で繋ぐか、ブラケット（[]）で参照する
  const obj = {
    "key": "value"
  };
  
  // dot
  console.log(22.1, obj.key); // "value"
  
  // braket
  console.log(22.2, obj["key"]); // "value"

  const numObj = {
    123: "value",
    "123": "str value"
  };
  console.log(23.1, numObj[123]); // "value"
  console.log(23.2, numObj["123"]); // "str value" 23.1の123も上書きされてしまう
  // console.log(23.2, numObj.123); <= Uncaught SyntaxError: missing ) after argument list
};
checkObj();


/************************************** Array **************************************/

function checkArr() {
// 配列リテラル
  const empArr = [];
  const array = [1, 2, 3];

  // 配列の値は添字を持っているので、配列に対してarray[index]で値を参照できる
  console.log(24, array[0]); // 1
};
checkArr();


/************************************** Regexp **************************************/

function checkReg() {
// 正規表現リテラル
  //ex: 1文字以上の数字にマッチする
  const numReg = /\d+/;
  console.log(25, numReg.test(123)); // true
};
checkReg();


/************************************** Wrapper Object **************************************/

function checkWrapObj() {
// プリミティブ型とオブジェクト
  // プリミティブ型をboolean, number, stringはオブジェクトとして表現することが可能
  // プリミティブ型の値をラップしたようなオブジェクトのため、ラッパーオブジェクトと呼ぶ

  // ラッパーオブジェクト
  // new演算子と対応するコンストラクタ関数で作成
  // ex: new String
  const str = new String("文字列");
  
  // オブジェクトなので、typeofで調べるとobjectが返ってくる
  // プリミティブ型のデータにアクセスする際、ラッパーオブジェクトが暗黙の型変換を行っているため  
  console.log(26, typeof str); // object
  // 文字数も返ってくる
  console.log(27, str.length); // 3

  // ただし、明示的にラッパーオブジェクトを使用しないようにする
  // プリミティブ型でもオブジェクトのように参照できる仕組みなため
  const s = "文字列";
  console.log(28, typeof s); // "string"
  console.log(29, s.length); // 3
}
checkWrapObj();
