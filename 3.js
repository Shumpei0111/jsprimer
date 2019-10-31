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


// Switch文

function checkSwitch() {
  switch("式") {
    case "label1":
      // 式の評価結果がlabel1と一致する場合に実行
      break;

    case "label2":
      // 式の評価結果がlabel2と一致する場合に実行
      break;

    default:
      // どのcaseにも該当しない場合の処理
      break;
  }

  const ver = "ES6";
  switch(ver) {
    case "ES5":
      console.log("ECMAscript 5");
      break;
    case "ES6":
      console.log("ECMAscript 2015");
      break;
    case "ES7":
      console.log("ECMAscript 2016");
      break;
    default:
      console.log("no js");
      break;
  } // ECMAscript 2015
}
checkSwitch();


// break文
// switch文のcase節では基本的にbreak;を使いswitch文を抜けるようにする
// break;は省略可能だが、省略した場合、後ろに続くcase節が条件に関係なく実行されてしまう

function checkBreak() {
  const ver = "ES6";
  switch(ver) {
    case "ES5":
      console.log(3,"ECMAscript 5");
    case "ES6":
      console.log(3,"ECMAscript 2015"); // ES6にbreak;がないからこの下から無条件に実行される
    case "ES7":
      console.log(3,"ECMAscript 2016"); // break;がないから無条件に実行される
    default:
      console.log(3,"no js"); // break;がないから無条件に実行される
  }


  /*************************************************************************************/
  /*     break;はif文の代わりに使わないで関数と組み合わせて条件に対する値を返すときに使う     */
  /*************************************************************************************/
  function getESName(ver) {
    switch(ver) {
      case "ES5":
        return "ECMAscript 5";
      case "ES6":
        return "ECMAscript 2015";
      case "ES7":
        return "ECMAscript 2016";
      default:
        return "no js";
    }
  }
  let g = getESName("ES5");
  console.log(4, g);
}
checkBreak();



/****************************************** ループと反復処理 ********************************************/

// fizz buzz
function fzbz() {
  for (let i = 0; i <= 30; i++) {
    if(i % 15 === 0) {
      console.log("fizz buzz");
    } else if(i % 5 === 0) {
      console.log("buzz");
    } else if(i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}
fzbz();


// while文
// while文は女見識がtrueならば反復処理を行う
function checkWhile(){
  while(true) {
    // 実行する文;
    break;
  }

  let x = 0;
  console.log(`ループ開始前の値: ${x}`);
  while(x < 10) {
    console.log(x);
    x += 1;
  }
  console.log(`ループ終了後のxの値: ${x}`);
  
  // breakや終了条件を書かないと終わらないので無限ループする
  // 安易にwhileを使わずに他の手段をまず考える
}
checkWhile();


// do-while文
// while文と実行順序が異なる
//
// 1. 実行する文を実行
// 2. 条件式の評価結果がtrueなら次ステップ、falseなら終了
// 3. ステップ1に戻る
//
// そのため、1回は必ず実行する
function doWhile(){
  do {
    // 実行する文;
    break;
  } while ("条件式");
}
doWhile();
// ただこちらも他の手段を考える


// for文
// for文は繰り返す範囲を指定した反復処理を書くことが出来る
function checkFor() {

  let total = 0;
  for (let i = 0; i < 10; i++) {
    total += i + 1;
  }
  console.log(total);

  // 任意の数値が入った配列を受け取り、その合計値を返す
  // num配列に含まれている要素を先頭から順番に変数totalに加算し合計値を計算している
  //
  // ※配列は順番が保証されている
  function sum(num) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
      total += num[i];
    }
    return total;
  }
  console.log(sum([1,2,3,4,5]));
}
checkFor();



// 配列のforEachメソッド
//
// JSでは関数がファーストクラスであるため、その場で作った無名関数を引数として渡すことが出来る
//
// 引数として渡される関数のことを ** コールバック関数 ** と呼ぶ
// コールバック関数を引数として受け取る関数やメソッドを高階関数とよぶ
function forEachCheck() {
  const arr = [{a:1, b:100}, 2, 3];
  arr.forEach(currentVal => {
    // ループごとに実行する処理
    console.log(1000, currentVal);
    arr.push(2);
  });
  console.log(arr); // [{a:1, b:100}, 2, 3, 2, 2, 2] <= 3つの配列の要素を1つずつ取り出して2をpushしているから

  // forEachメソッドのコールバック関数には、配列の要素が先頭から順番に渡されて実行される
  // 上記の例では、currentValには1から3の値が順に渡される


  function sum(num) {
    let total = 0;
    num.forEach(n => {
      total += n;
    });
    return console.log(total);
  }
  sum([1,2,3,4,5]);

  // forEachはfor文の条件式に相当するものはなく、必ず配列のすべての要素を反復処理する
  // 変数i といった一時的な値を定義する必要がないので、シンプルに反復処理が書ける
}
forEachCheck();



// break文
// while, do-while, forの中で使う
// 処理中のループを抜けて次の文へ制御を移す
function breakCheck() {
  while(true) {
    break; // *1へ
  }
  // *1 次の文

  // switch文で出てきたものと同様で、処理中のループ文を終了できる
  // 次のコードでは、配列の要素に一つでも偶数を含んでいるかを判定している
  const nums = [1, 5, 10, 15, 20];

  let isEvenIncluded = false;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if ( num % 2 === 0) {
      isEvenIncluded = true;
      break;
    }
  }
  console.log(isEvenIncluded); // true



  // たいていこのような処理は使い回せるように関数として実装する
  
  // 引数のnが偶数ならtrueを返す
  function isEven(n) {
    return n % 2 === 0;
  }

  // 引数のnumに偶数が含まれているならtrueを返す
  function isEvenInc(num) {
    let isEvenInc = false;
    for (let i = 0; i < num.length; i++) {
      const n = num[i];
      if(isEven(n)) {
        isEvenInc = true;
        break;
        // 1行で return ture; でも可
        // そうすることで、ひとつでも偶数があった場合、その瞬間にループを抜けられる
      }
    }
    return isEvenInc; // 偶数が含まれていなかったら1行目のfalseが返ってくる
    // 上でreturn trueで返したならreturn falseにする
  }
  const arr = [1, 5, 10, 15, 20];
  console.log(20, isEvenInc(arr)); // true
}
breakCheck();


// 配列のsomeメソッド
// someメソッドは、配列の各要素をテストする処理をコールバック関数として受け取る
// コールバック関数が一度でもtrueを返した時点で反復処理を終了し、trueを返す
function arrSome() {
  const arr = [1, 2, 3, 4, 5];
  const isPassed = arr.some(currentVal => {
    // テストをパスするtrue,
    // そうでないならfalse
  })

  // someメソッドを使い、配列に偶数が含まれているか
  // 受け取った値が偶数であるかをテストするコールバック関数としてisEven関数を渡す
  function isEven(num) {
    return num % 2 === 0;
  }

  const nums = [1, 3, 4, 5];
  console.log(nums.some(isEven)); // true
}
arrSome();


// continue文
// continue文は現在の反復処理を終了し、次の反復処理を行う
// while, do-while, forの中で使用可能

// while文の処理中でcontinueが実行されると、現在の反復処理はその時点で終了される
// そして、次の反復処理で条件式を評価するところからループが再開される

function checkContinue() {
  // while("条件式") {
  //   // 実行される処理
  //   continue; // 条件式へ
  //   // これ以降の行は実行されない
  // }

  // 配列の中から偶数を集め、新しい配列を作り変えしています
  // 偶数でない場合、処理中のfor文をスキップする

  // numが偶数ならtrueを返す
  function isEven(num) {
    return num % 2 === 0;
  }

  // numsに含まれている偶数だけ取り出す
  function filterEven(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      // 偶数ではないなら、次のループへ
      if (!isEven(num)) {
        continue;
      }

      // 偶数をresに追加
      res.push(num);
    }
    return res;
  }

  const arr = [1, 5, 10, 15, 20];
  console.log(filterEven(arr));


  // continueを使わずに偶数ならresへ追加する書き方も可能
  // だけど条件が複雑になるとすぐにネストが深くなるから読みにくくなりがち
  function notUseContinue() {
    if (isEven(num)) {
      res.push(num);
    }
  }

  //うるう年判定のようにネストしない書き方でがんばる
  // const y = new Date().getFullYear();
  const y = 200;
  if( y % 400 === 0 ) {
    console.log(`${y}うるう`);
  } else if (y % 100 === 0) {
    console.log(`${y}うるわない`);
  } else if (y % 4 === 0){
    console.log(`${y}うるう`)
  } else {
    console.log(`${y}うるわない`);
  }
}
checkContinue();


// filterメソッド
// 配列から特定の値だけを集めた新しい配列を作るにはfilterメソッドを使う
//
// filterメソッドには、配列の各要素をテストする処理をコールバック関数として渡す
// コールバック関数がtrueを返した要素のみを集めた新しい配列を返す
function arrFilter() {
  const arr = [1, 2, 3, 4, 5];
  const filteredArr = arr.filter((currentVal, ind, arr) => {
    // テストをパスするならtrue, そうでないならfalse
  });

  // 先のcontinueを使った値の絞り込みはfilterメソッドを使うとより完結に書ける
  // 次のコードでは、filterメソッドを使い偶数だけに絞り込んでいる
  function isEven(num) {
    return num % 2 === 0;
  }

  const ar = [1, 2, 3, 4, 5];
  console.log(22,ar.filter(isEven));
}
arrFilter();



// for...in文
// for...inはオブジェクトのプロパティに対して、順不同で反復処理を行う

function forInCheck() {
  //ex
  // for(プロパティ in オブジェクト) {
  //   実行する文;
  // }

  // objのプロパティ名をkey変数に代入
  // objには、3つのプロパティがあるため3回繰り返される
  const o = {
    "a": 1,
    "b": 2,
    "c": 3
  };

  for (const key in o) {
    const val = o[key];
    console.log(23, `key: ${key}, val: ${val}`);
  }

  /*******************************************/
  /** for..inは継承している親オブジェクトまで見に行って検索して列挙してしまうため、
   * 意図した結果にならないため、使うべきではない
   * 安全にオブジェクトのプロパティを列挙するには、Object.keysメソッド、Object.valuesメソッド、
   * Object.entriesメソッドなどが利用できる */
  /*******************************************/
  const ob = {
    "a": 1,
    "b": 2,
    "c": 3
  };

  Object.keys(ob).forEach(key => {
    const val = ob[key];
    console.log(24, `key: ${key}, val: ${val}`);
  })


  /******* 配列の操作のだめなパターン *******/
  const arrNs = [5, 10];
  let t = 0;
  for (const ns in arrNs) {
    // 0 + "0" + "1"
    t += ns;
  }
  console.log(25, t); // "001"
  // 文字列変換されるし、文字列変換された配列のインデックスを返してくるから意図した結果にならない

  // 配列に対して反復処理する場合は、
  // for
  // for...of
  // を使う
  
}
forInCheck();



function forOf() {
  // JSでは、Symbol.iteratorというメソッドを実装したオブジェクトをiterableという
  // iterableオブジェクトはfor..ofで反復処理できる

  // iterableオブジェクトは、iterableから値を1つ取り出し、variableに代入して反復処理する

  // for (variable of iterable) {
  //   // 実行する文;
  // }

  /******************************** Arrayはiterableオブジェクト ********************************/
  // for...ofは配列から値を取り出すことが出来る
  const arr = [1, 2, 3, "aa", false, {obj: ""}];
  for (const v of arr) {
    console.log(26, v); 
  }
  // 26 1
  // 26 2
  // 26 3
  // 26 "aa"
  // 26 false
  // 26 {obj: ""}

  /******************************** JSではStringもiterableオブジェクト ********************************/
  const str = "吉野家";
  for (const val of str) {
    console.log(27, val);
  }
  // 27 "吉"
  // 27 "野"
  // 27 "家"

}
forOf();

/************************************* letではなくconstで反復処理する *************************************/

/**
 * for文やforEachは宣言した変数を書き換える挙動なので、constは使えない
 * そのため、反復処理した結果を受け取る方法が必要になる
 * 
 * 配列には、"reduce"メソッドは2つずつ要素をとりだし（左から右へ）、その値をコールバック関数に適用し、
 * "次の値"として1つの値を返す
 * 最終的な、reduceメソッドの返り値は、コールバック関数が最後にreturnした値となる
 */


//  arr = [1,2,3];
//  const res = arr.reduce(("前回の値", "現在の値") => {
//    return "次の値";
//  }, "初期値");

/***** ex *****/
function sum(nums) { // 前回の値, 現在の値
  return nums.reduce((total, num) => {
    return total + num; // 次の値
  }, 0); // 初期値が0
}

console.log(sum([1, 2, 3, 4, 5])); // 15

