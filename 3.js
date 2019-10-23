// 文と式
// JSは、文（Statement）と式（Expression）から構成されている


/******************* 式 *******************/

// 式とは、値を生成し、変数に代入できるものを言う

// 42のようなリテラルやfooといった変数、関数呼び出しが式です。 
// また、1 + 1のような式と演算子の組み合わせも式と呼びます。
// 式の特徴として、式を評価すると結果の値を得ることができます。 この結果の値を評価値と呼びます。
// 評価した結果を変数に代入できるものは式であるという理解で問題ありません。

// 式たち
function checkExpr() {

  // 1という式の評価値を表示
  console.log(1);

  // 1+1という式の評価値
  console.log(1 + 1);

  // 式の評価値を変数に代入
  const total = 1 + 1;

  // 関数式の評価値（関数オブジェクト）を変数に代入
  const fn = function() {
    return 1;
  };

  // fn()という式の評価値を表示
  console.log(fn());
};
checkExpr();



/******************* 文 *******************/

// 文は、処理する1ステップが1つの文といえる。
// JSでは、文の末尾にセミコロンを置くことで文と文の区切りをつける

// if文やfor文が文と呼ばれる
// 文の処理の一部として式を含むことがある
function checkBun() {
  
  // isTrueという式がif文の中に出てくる
  const isTrue = true;
  if(isTrue) {

  };
};
checkBun();

// 他方、if文は文であり、式になることができない
// 式ではないため、if文を変数へ代入することはできない

// function errIf() {
//   var forIsNotExpression = if(true) { /* if文は文なので式にはなれずSyntaxErrorになる */}
// };
// errIf();




/******************* 式文 *******************/

// 式は文になることができる
// 文となった式を式文と呼ぶ
// 基本的に文が書ける場所には式を書くことが出来る
// 式文は文の一種であるため、セミコロンで文を区切る

// 式文は文の一種であるため、if文のように式になることはできない




/******************* ブロック文 *******************/

// { と }で囲んだ部分をブロックとよぶ

// ex
// {
//   文;
//   文;
// }

// ブロック文は単独ではあまり登場せず、if文と組み合わせたりすることがほとんどである

function checkBl() {
  if(true) {
    console.log(1, "文1");
    console.log(2, "文2");
  }
}
checkBl();


// 単独のブロック文の活用
// REPLなどで使用
// REPLで同じコードの一部を変更して実行を繰り返している場合には、単独のブロック文が役に立つ機会もあります。
// REPL(Read-Eval-Print Loop) 入力・評価・出力のループのこと。 
//    主にインタプリタ言語において、ユーザーとインタプリタが対話的にコードを実行する
function checkRepl() {
  // 入力時
  const count = 1; // -> undefined
  // const count = 2; // -> 構文エラー


  // ブロックで囲むことで参照できなくさせる
  {
    const cnt = 1;
    console.log("in")
  }

  {
    const cnt = 2;
    console.log("in 2")
  }

}
checkRepl();



// 文の末尾にはセミコロンをつけるが、例外としてブロックで終わる文の末尾には不要!
function semi(){
  // ブロックで終わってないので、セミコロンが必要！
  if(true) console.log(true);

  // ブロックで終わっている文なので、セミコロンが不要
  if(true) {
    console.log(true);
  } // <- ここにはセミコロンがいらない


  /******************************************/

  // function宣言（文）とfunction式
  // セミコロンいらない
  function learn() {
  }
  // ブロックだから

  // セミコロン必要
  const aaa = function() {
  };
  // 代入した式だから
}
semi();


/****************************************** 条件分岐 ********************************************/

// if文

function checkIf(){

  // if文の場合、falsyな値はすべてfalseで扱われる
  // これ以外の場合は、暗黙的にtrueとして扱われる
  const falsyList = [
    false,
    undefined,
    null,
    0,
    NaN,
    "" // 空文字
  ];
  console.log(falsyList);

  const zero = "0";
  if(zero) {
    console.log("a = 0");
  }


  const falsy = "false";

  if(falsy) {
    console.log(falsy.aa = "aa");
    console.log(falsy);
  }
}
checkIf();


// 
