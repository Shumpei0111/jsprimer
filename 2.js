/************************************** 暗黙の型変換 **************************************/

function changeType(){

  // 以下の例は等価演算子（ == ）は、右辺の文字列を数値に変換してから比較している
  console.log(1.1, 1 === "1"); // false
  console.log(1.2, 1 == "1"); // true

  // trueが数値に型変換されてしまい、計算ができてしまう
  console.log(1.3, 1 + true); // => 1 + 1 = 2

  // 以下もエラーにならないので、バグが発見しづらい
  console.log(1.4, 0 == false); // true
  console.log(1.5, 10 == ["10"]); // true

  // そのため、厳密等価演算子（ === ）を比較の際は使用する

  // その他の型変換例
    console.log(1.6, 1 + "2"); // "12" 文字列 "1" + "2" を足して "12" と変換される
    
    // 文字列におけるマイナス演算子の定義はないため、数値型に変換されてから計算される
    console.log(1.7, 1 - "2"); // 1 - 2 = -1
    
    // 3つ以上混ざると予測できない動きになる
    const x = 1;
    const y = "2";
    const z = 3;
    console.log(1.8, x + y + z); // "123"
    console.log(1.9, y + x + z); // "213"
    console.log(1.11, x + z + y); // "42"
}
changeType();


/************************************** プリミティブ型へ明示的な型変換 **************************************/

function changeBool() {
  // Any => Bool
  // Booleanコンストラクタ関数を使用して任意を値をBool型に変換する
  console.log(2.1, Boolean("str")); // true
  console.log(2.2, Boolean(1));     // true
  console.log(2.3, Boolean({}));    // true
  console.log(2.4, Boolean(0));     // false
  console.log(2.5, Boolean(""));    // false
  console.log(2.6, Boolean(null));  // false

  // どの値がtrueで、どの値がfalseかはルールがある
  // - falsyな値はfalseになる
  // - それ以外はtrue
  //
  // falsyな値
  // - false
  // - undefined
  // - null
  // - 0
  // - NaN
  // - ""(空文字)

  // ex
  // xはundefined
  let x;
  if(!x) {
    console.log(2.7, "falsyな値なら表示", x);
  }

  // より厳密に比較を行う際は以下のように明示的に書く
  let y;
  if (y === undefined) {
    console.log(2.8, "undefinedなら表示", y);
  }
}
changeBool();


function changeStr() {
  // Any => String
  // Stringコンストラクタ関数を使用する
  console.log(3.1, String(1)); // "1"

  // プリミティブ型
  console.log(3.2, String("str")); // "str"
  console.log(3.3, String(true)); // "true"
  console.log(3.4, String(null)); // "null"
  console.log(3.5, String(undefined)); // "undefined"
  console.log(3.6, String(Symbol("シンボルの説明文"))); // "Symbol(シンボルの説明文)"

  // プリミティブ型でない場合
  console.log(3.7, String([1,2,3])); // "1,2,3"
  console.log(3.8, String({key: "value"})); // "[object Object]""
  console.log(3.9, String(function() {})); // "function() {}" 
  console.log(3.11, String({})); // "[object Object]"

  // オブジェクトや配列に対しては、意図した答えが返ってこないため、
  // 使用はプリミティブ型にとどめ、用意されている適切なメソッドで型変換を行う

}
changeStr();


function changeSym() {
  // Symbol => string
  //
  // SymbolはES2015から追加されたプリミティブ型
  //
  // 以下はエラーになる
  // console.log(4.1, "文字列" + Symbol("シンボルの説明文")); <= Uncaught TypeError: Cannot convert a Symbol value to a string
  //
  // 以下のように明示的にシンボルを文字列型に変換すれば解決する
  console.log(4.2, "文字列と" + String(Symbol("シンボルの説明文"))); // "文字列とSymbol（シンボルの説明文）"
}
changeSym();


function changeNum() {
  // String => Number
  //
  // ユーザ入力の文字列を数値に変換するときなどに使用する
  const input = window.prompt("数字を入力してください", "23");
  const num = Number(input);
  console.log(5.1, typeof num); // "number"
  console.log(5.2, num);  // 23 <= 入力された文字列をナンバー型に変換したもの

  // 文字列から数値を取り出す関数
  //
  // Number.parseInt
  // 文字列から整数を取り出す
  console.log(5.3, Number.parseInt("100", 10));        // 100 文字列100を10進数で取り出す
  console.log(5.4, Number.parseInt("43px", 10));       // 43 "px"を無視して取り出す
  console.log(5.41, Number.parseInt("aaa11aaa", 10));  // NaN
  console.log(5.42, Number.parseInt("11aaa", 10));     // 11
  console.log(5.5, Number.parseInt("20.2", 10));       // 20 parseIntだと整数のみ取り出す

  // Number.parseFloat
  // 文字列から浮動小数点数を取り出す
  console.log(5.6, Number.parseFloat("1"));            // 1
  console.log(5.7, Number.parseFloat("43.4px"));       // 43.4
  console.log(5.71, Number.parseFloat("aaa43.4px"));   // NaN
  console.log(5.8, Number.parseFloat("10.3"));         // 10.3

  // parseInt, parseFloatは数字以外の文字列は変換されず、NaNを返す
  // そのため、NaNの場合の処理も加えておく必要がある
  // 変換した値がNaNであるかは、Number.isNaN()メソッドで判定できる
  const usrInput = "str";
  const numb = Number.parseInt(usrInput, 10);
  if(!Number.isNaN(numb)) {
    console.log(5.9, "NaNではない値にパースできた", numb);
  } else {
    console.log(5.91, "NaNである", numb);
  }
}
changeNum();


/****************** EXTRA : about NaN *******************/

function checkNaN() {
  // NaNはnumber型であり、特殊な値である
  console.log(6.01, typeof NaN); // number

  // NaNは何と演算しても結果はNaNになる性質である
  // また、途中でNaNになった場合、最終的な結果はNaNになる
  const x = 1;
  const y = x + NaN;
  const z = y + 3;

  console.log(6, x);   // 1
  console.log(6.1, y); // NaN
  console.log(6.2, z); // NaN

  // NaNのみ、自分自身と一致しない特徴がある
  // この特徴を使い、NaN判定することができる
  function isNaN(x) {
    return x !== x;
  }  
  console.log(6.3, isNaN(1));     // false 
  console.log(6.4, isNaN("str")); // false
  console.log(6.5, isNaN({}));    // false
  console.log(6.6, isNaN([]));    // false
  console.log(6.7, isNaN(NaN));   // true

  // そんなことせずに予め用意されているisNaN()メソッドを使う
  Number.isNaN(NaN);
  
  /******************************************************************************************/

  // NaNは計算結果が狂う上、どこで発生したかわかりにくくデバッグしづらくなるので、
  // もっとも避けるべき値である
  // ex
  function sum(...vals) {
    return vals.reduce((total, value) => {
      return total + value;
    }, 0);
  }

  const a = 1;
  const b = undefined;
  const c = 10;
  console.log(6.8, sum(a,b,c)); // NaN
  // 内部的には以下のような計算が行われている
  // 1 + undefined = NaN
  // NaN + 10 = NaN

  // 引数を明示的にナンバー型にしてもNaNになった瞬間NaNしか返さなくなる
  //
  // reduceメソッドを使ってみる
  // arr.reduce(callback, initialValue)
  // initialValueを元にcallback（戻り値を累積）する => この場合は0から累積する...がNaNになる
  function sum2(...vals) {
    return vals.reduce((total, value) => {
      return total + Number(value);
    }, 0);
  }

  const d = 1;
  const e = undefined;
  const f = 10;
  console.log(6.9, sum2(d,e,f)); // NaN
  
  
  // 対策
  //
  // sum関数を使う側で、ナンバー型のみを渡すようにする
  // sum関数自体で、ナンバー型の値以外を受け付けないようにする
  //
  // JSDocで引数の型を記述する
  
  // ex
  /**
   * 数値を合計した値を返します。
   * 一つ以上の数値と共に呼び出す必要があります。
   * @param {...number} values
   * @returns {number}
   **/
  function sum3(...values) {
    return values.reduce((total, value) => {
      // 値をナンバー型がチェック
      if(typeof value !== "number") {
        throw new Error(`${value}はナンバー型ではありません`);
      }
      return total + Number(value);
    }, 0);
  }
  
  const h = 1;
  const i = undefined;
  const j = 10;

  console.log(7.1, h,i,j);       // 1 undefined 10
  // console.log(7.2, sum3(h,i,j)); <= Uncaught Error: undefinedはナンバー型ではありません

}
checkNaN();


/************************************** 明示的な変換でも解決しないこと **************************************/

// あらゆるケースが明示的な変換で解決できるわけではありません。 
// Number型と互換性がない値を数値にしても、NaNとなってしまいます。
//  一度、NaNになってしまうとNumber.isNaN(x)で判定して処理を終えるしかありません。
// JavaScriptの型変換は基本的に情報が減る方向へしか変換できません。 
// そのため、明示的な変換をする前に、まず変換がそもそも必要なのかを考える必要があります。

/********** 空文字判定 **********/
function checkEmp() {
  
  // 型変換しても意図しない結果になる例
  function isEmptyString(str) {
    return !Boolean(str);
  }
  // 空文字だとtrueを返す
  console.log(8.11, isEmptyString("")); // true
  // falsyな値だとtrueを返す
  console.log(8.12, isEmptyString(0));  // true
  // undefinedだとtrueを返す
  console.log(8.13, isEmptyString());   // true


  // 対策
  function isEmpStr(s) {
    // string型でlengthが0の値の場合はtrueを返す
    return typeof s === "string" && s.length === 0;
  }
  console.log(8.11, isEmpStr("")); // true
  console.log(8.12, isEmpStr(0));  // false
  console.log(8.13, isEmpStr());   // false

  // Boolの場合、安易に型変換でチェックせずに別の方法でチェックできないか検討する必要がある
}
checkEmp();


/************************************** 関数と宣言 **************************************/

function checkReturn() {

  // return で値を返すとは
  //
  // return で値を返すことで、その値を使ってさらに別の処理を続けることができる
  // return がないと処理をするだけで終了し、戻り値はundefinedになる
  function multiple(num) {
    return num * 2;
  }
  console.log(9.1, multiple(19));
}
checkReturn();

function checkArg() {
  
  // 引数の数
  //
  // 呼び出し時の引数が少ないとき
  // 余ったらundefinedが入る
  function args(l, n, m) {
     return [l, n, m];
  }
  console.log(10.1, args(10)); // [10, undefined, undefined]
  console.log(10.2, args(10, 20)); // [10, 20, undefined]
  console.log(10.3, args(10, 20, 30)); // [10, 20, 30]


  /********** [ES2015(ES6)] デフォルト引数 **********/
  function checkDef(a="デフォルト引数") {
    return a;
  }
  console.log(10.4, checkDef(1)); // 1
  console.log(10.5, checkDef());  // "デフォルト引数"
}
checkArg();


function moreArgs() {
  
  // 呼び出し引数が多いときは、単純に無視される
  function add(a, b) {
    return a + b;
  }
  console.log(11.1, add(1,2));   // 3
  console.log(11.2, add(1,2,3)); // 3
}
moreArgs();


function restParams() {
  // 可変長引数
  //
  // 引数を固定の個数ではなく、任意の個数を受け取る
  
  // Math.max => 引数の中で最大の数値を返す
  const max = Math.max(1,2,3,100,4);
  console.log(12.1, max); // 100  


  /********** [ES2015(ES6)] Rest Parameters **********/
  // ...から始まる可変長引数の書き方
  // 配列ライクに引数を取り出せるが、あくまで配列ライクなので、
  // 配列のメソッドは使えない
  function rP(...args) {
    console.log(12.2, args[0]); // 20
    console.log(12.3, args[1]); // 30
    console.log(12.4, args[2]); // 40
  }
  rP(20,30,40);

  // 複数の引数の中にRest Parametersを混ぜても良い
  // その場合は引数の最後に書く
  function rP2(a, ...args) {
    console.log(12.5, a);    // 10
    console.log(12.6, args); // [20, 30]
  }
  rP2(10, 20, 30);

  // Spread構文
  function rpSpread(...args) {
    console.log(13.1, args[0]); // "a"
    console.log(13.2, args[1]); // "b"
    console.log(13.3, args[2]); // "c"
  }
  const arr = ["a", "b", "c"]; 
  rpSpread(...arr);
  rpSpread(arr[0], arr[1], arr[2]); // <= 上と同じ意味 
}
restParams();


function fnDst() {
  // 関数の分割代入
  //
  // オブジェクトや配列からプロパティを取り出し、変数として定義し直すこと
  function usrId(usr) {
    console.log(14.1, usr.id); // 100
  }
  const user = {
    id: 100
  };
  usrId(user);

  /******************** オブジェクトの分割代入 ****************************/
  const fruit = {
    price: 100
  };
  const { price } = fruit;
  console.log(14.2, price);   // 100

  function printPrice({price}) {
    console.log(14.3, price); // 100
  }
  printPrice(fruit);


  /******************** 配列の分割代入 ****************************/
  function print([first, second]) {
    console.log(14.4, first);  // 1
    console.log(14.5, second); // 2
  }
  const ar = [1, 2];
  print(ar);

}
fnDst();


/******************** 関数はオブジェクト ****************************/
function fnObj() {

  // 関数は関数オブジェクト
  //
  // ()をつけて書くと処理を実行する
  // ()をつけないで書くとオブジェクトとして式（代入）扱いすることができる
  
  function fn() {
    console.log(15.1, "function fn(){}");
  }
  const myFn = fn;
  myFn(); // "function fn(){}"
}
fnObj();



// アロー関数
function checkArrow() {
  const fnA = () => {/* 引数ないとき */};
  const fnB = (x) => {/* 引数がひとつ */};
  const fnC = x => {/* 引数がひとつだけなら()を省略 */};
  const fnD = (x,y) => {/* 引数が複数ある場合 */};

  // 値の返し方
  const mulA = x => { return x * s; }; // ブロックの中でreturn
  const mulB = x => x + d; // 1行のみの場合はreturnとブロックを省略できる

  // アロー関数の特徴
  // 常に無名関数
  // thisが静的に決定できる
  // functionに比べて短く書ける
  // newできない（コンストラクタ関数ではない）
  // argments変数を参照できない
  //
  // functionキーワードの関数式との比較
  const arr = [1, 2, 3];
  const doubleArr = arr.map(function (val) {
    return val * 2;
  });
  console.log(16.1, doubleArr);

  const ar = [1, 2, 3];
  const doubleAr = ar.map(value => value * 2);
  console.log(16.2, doubleAr);
}
checkArrow();


// コールバック関数
//
// 引数として渡すことが出来る関数
// その場で作った匿名の関数を、関数の引数（値）として渡すことができる
// コールバックを使う関数のことを「高階関数」と呼ぶ

function checkCallBack(){

  function kokaiKanSu(callback) {
    collback();
  }

  // forEachはコールバック関数を引数として受け取る高階関数である
  // forEachは配列の各要素に対してコールバック関数を一度ずつ呼び出している
  const arr = [1, 2, 3];
  arr.forEach((val) => {
    console.log(17, val);
  })

};
checkCallBack();


// メソッド

// オブジェクトのプロパティである関数をメソッドと呼ぶ
// JSにおいては関数とメソッドの機能的な違いはない

// 例
function checkMethod() {
 
  const obj = {
    method1: function() {
      // オブジェクトの中の関数なのでメソッド
    },
    method2: function() {
      // オブジェクトなので増やすときはカンマで増やしていく
    },
    method3: () => {
      // アロー関数でも問題ない
    }
  };

  const obj2 = {};
  obj2.method = function() {
    // 先にobj2を宣言してからmethodプロパティに関数を代入してメソッドを定義することもできる    
  };


  // メソッドを呼び出す
  const o = {
    method: function() {
      return "this is method";
    }
  };
  console.log(18.1, o.method()); // "this is method"


  // ES2015でのメソッドの短縮記法
  // method: function()て書かない
  // オブジェクトリテラルの中で、"メソッド名(){ メソッドの処理 }"と書ける
  const m = {
    method() {
      return "this is method";
    }
  };
  console.log(18.2, m.method()); // "this is method"
}
checkMethod();
