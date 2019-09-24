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
