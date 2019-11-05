/********************************* オブジェクト *********************************/

// プロパティのキーには、文字列の他にSymbolが使える
// JSにはあらゆるオブジェクトの元となるObjectというビルトインオブジェクトがある
// ビルトインオブジェクトとは、どの実行環境ｄめお利用可能な組み込みオブジェクトのこと



/************** オブジェクトを作成する **************/

function makeObj() {
  // オブジェクトリテラルを使う({ })
  // プロパティを初期値として持つことが出来る
  const o = {
    "key": "val",
    // プロパティ名（キー）はクオートを省略できる
    key2: "val2",
    // ハイフンは省略できない
    // ke-y: "hyphen val" <= 使えない
    "ke-y": "hyphen val",
  };

  // プロパティの値に変数名を指定すれば、そのキーは指定した変数を参照する
  const name = "名前";
  const nanika = "nanika"
  const ob = {
    name: name, // プロパティ名: 変数名
    b: nanika
  };
  console.log(1, ob); // { name: "名前", b: "nanika"}


  /*********************** ES2015 ***********************/
  // プロパティ名と値に指定する変数名が同じ場合は{ name }のように省略できる
  const n = "名前";
  const obj = {
    n
  };
  console.log(2, obj); // { n: "名前" }
  
}
makeObj();


/************** {}はObjectのインスタンスオブジェクト **************/
// JSにはObjectというビルトインオブジェクトがある
// オブジェクトリテラル（{}）は、このビルトインオブジェクトであるObjectを元にして
// 新しいオブジェクトを作成するための構文

// オブジェクトリテラル以外の方法として、newを使う。
// newするとObjectから新しいオブジェクトを作成できる
// new Object()でオブジェクトを作成しても、空のオブジェクトリテラルと同じ意味である

function oLite() {
  const obj = new Object();
  const o = {};
  console.log(3, obj);
  console.log(4, o);
  console.log(5, "obj == o", obj == o);
  console.log(6, "obj === o", obj === o);
}
oLite();


function proAc() {
  const o = {
    key: "val"
  };

  // ドットを繋ぐ
  console.log(o.key);
  // ドットで繋ぐ場合、以下の規則がある
  // - プロパティは数字で始めない
  // - プロパティ名にハイフンは使わない

  // ブラケットで書く
  console.log(o["key"]);
  // [ ]の間に任意の文字列が書ける
  // ただし、プロパティ名は暗黙的に文字列に変換される

  const ex = {
    123: 456,
    "my-key": "my-val"
  };
  console.log(ex[123]); // 456
  console.log(ex["my-key"]); // "my-val"


  // ブラケットだと変数も使える
  const jp = {
    ja: "日本語",
    en: "英語"
  };

  const lang = "ja";
  console.log(jp[lang]);
  
  
}
proAc();


// プロパティの追加
function addProp() {
  "use strict";
  
  // オブジェクトは、一度作成した後もその値自体を変更できる => ミュータブルの特性
  // プロパティ名に代入すると追加できる。プロパティがなかったら作成される
  const o = {};
  o.add = "val";
  console.log(o);
  console.log(o["add"]);
  
  const key ="key str";
  const obj = {};
  obj[key] = "new val"
  console.log(obj); // new val
  
  /****************** ES2015 ******************/
  // オブジェクトリテラルの中でもブラケット記法が書ける
  // 上記の記法で書いたプロパティ名はComputed property namesと呼ばれる
  const k = "val";
  const oo = {
    ["k"]: "k is new val"
  };
  console.log(oo.k); // k is new val
  console.log(oo["k"]);  // k is new val
  
  
  /****************** 悪い例 ******************/
  // JSはオブジェクト作成後、プロパティが変更可能である
  // 関数が受け取ったオブジェクトに対して、勝手にプロパティを追加できてします
  function changeProp() {
    ooo.key = "func val"
  }
  const ooo = {};
  changeProp(ooo);
  console.log(ooo.key);
  console.log(ooo);


  // つまり、自由に追加できてしまうので、出来る限り作成後には新しいプロパティを追加しないように作る


  /****************** プロパティの削除 ******************/
   const delo = {
     key1: "val1",
     key2: "val2"
   };

   delete delo.key1;
   console.log(delo); // { key2: "val2" }

   

  /****************** constで定義したオブジェクトは変更可能 ******************/

  const constObj = { key: "val" };
  constObj.key = "HI";
  console.log(constObj); // {key: "HI"}

  // constは変数の再代入を防ぐが、変数に代入された値であるオブジェクトの変更は防げない
  // const errObj = { key: "val" };
  // errObj = {}; <= typeerror 
  

  // 変更を防止するには、"use strict"でstrictモードにした上で Object.freezeを使う
  const stO = Object.freeze({ key: "val" });
  // stO.key = "new val"; // key is read-only
}
addProp();



// プロパティの存在を確認する
function isProp() {
  const o = {};
  console.log(o.noProp); // <= undefined
  // エラーは起きない

  // プロパティ名を間違えていた場合でも例外が発生しない
  const widget = {
    window: {
      ttl: "タイトル"
    }
  };
  console.log(8, widget.windw); // undefined
  // console.log(9, widget.windw.title);  // undefined.titleを探そうとしてエラーが起きる


  // 比較
  // undefined
  // in 演算子
  // hasOwnProperty メソッド

  // undefinedでやる方法
  const obj = {
    key: "val",
    und: undefined
  };
  
  // 実行される
  if(obj.key !== undefined) {
    console.log("is Prop"); // is Prop
  }

  // 実行されない
  if(obj.und !== undefined) {
    console.log("is Prop?"); // 実行されない
  }

  // => key: "val"は存在するので実行される
  // => und: undefinedは実行されない 
  
  // プロパティの値がundefinedの場合、プロパティそのものが存在するかを区別できない
  // und変数にundefinedを入れてプロパティはあるのに実行されない


  // in 演算子で存在を確認する
  const inEnzanshi = { key: undefined };
  if("key" in inEnzanshi) {
    console.log("is"); // 実行される
  }
  // in演算子は、プロパティの値に関係なく、プロパティが存在した場合にtrueを返す



  // hasOwnPropertyメソッドを使う
  const hasO = { key: "aaa" };
  hasO.und =  undefined;
  
  console.log(hasO); // => {key: "aaa", und: undefined}

  if(hasO.hasOwnProperty("key")) {
    console.log("aaa has"); // 実行される
  }
  if(hasO.hasOwnProperty("und")) {
    console.log("und has"); // 実行される
  }
}
isProp();



/****************** toStringメソッド ******************/

function toStringMethod() {
  const obj = { key: "val" };

  console.log(obj.toString()); // [object Object]

  // Stringコンストラクタ関数は内部的に`toStringメソッド`を呼んでいる
  console.log(String(obj)); // [object Object]


  // 独自にtoStringメソッドを再定義してみる
  // Stringメソッドを呼ぶとtoStringになることを確認してみる
  const customObj = {
    toString() {
      return "custom val";
    }
  };
  console.log(String(customObj)); // "custom val"
}
toStringMethod();



/****************** オブジェクトのプロパティ名は文字列化される ******************/
// オブジェクトのプロパティへアクセスする際に、指定したプロパティ名は暗黙的に文字列に変換される

// ブラケット記法では、オブジェクトをプロパティ名に指定することは出来るが、オブジェクト自体を文字列化してしまうと、`[object Object]`になるので意図した結果にならない

function propToString() {
  const obj = {};
  console.log(obj); // {}

  const keyObj1 = { a: 1 };
  const keyObj2 = { b: 2 };

  // "[object Object]"に代入
  obj[keyObj1] = "1";
  console.log(obj); // {[object Object]: "1"}

  // "[object Object]"に代入
  // => keyObj1をkeyObj2で上書き  
  obj[keyObj2] = "2";
  console.log(obj); // {[object Object]: "2"}
}
propToString();

// 唯一の例外として、Symbolだけは文字列化されないでオブジェクトのプロパティ名として扱える
function symToString() {
  const o = {};
  const symKey1 = Symbol("シンボル1");
  const symKey2 = Symbol("シンボル2");

  o[symKey1] = "1";
  console.log(o); // {Symbol(シンボル1): "1"}

  o[symKey2] = "2";
  console.log(o); // {Symbol(シンボル1): "1", Symbol(シンボル2): "2"}
}
symToString();


/****************** オブジェクトの静的メソッド ******************/

// 静的メソッドは、インスタンスの元となるオブジェクトから呼び出せるメソッドのこと

// toStringメソッドなどは、Objectのインスタンスオブジェクトから呼び出すメソッド
// 静的メソッドはObjectそのものから呼び出せるメソッド



/************ オブジェクトの列挙 ************/

// - Object.keys ... オブジェクトのプロパティ名を配列にして返す
// - Object.values[ES2017] ... オブジェクトの値を配列にして返す 
// - Object.entries ... オブジェクトのプロパティ名と値の配列を返す
function objArr() {
  const obj = {
    "one": 1,
    "two": 2,
    "three": 3
  };

  console.log(Object.keys(obj)); // ["one", "two", "three"]
  console.log(Object.values(obj)); // [1, 2, 3]
  console.log(Object.entries(obj)); // [["one": 1], ["two": 2], ["three", 3]]


  // 配列のforEachメソッドと組み合わせて、プロパティに対して反復処理ができる
  // Object.keysメソッドで取得したプロパティ名の一覧をコンソールに出す
  const keys = Object.keys(obj);
  keys.forEach(key => {
    console.log(key); // one, two, three
  })
  // 変数keysでオブジェクトobjのkeysでオブジェクトのキーを配列で取得
  // 引数keyに対してforEachをかけてobjのkeysに対して１つずつ取り出す
}
objArr();



/************ オブジェクトのマージと複製 ************/
// Object.assign[ES2015] ... オブジェクトを別のオブジェクトに代入できる
// Object.assignは、targetオブジェクトに対して、1つ以上のsourcesオブジェクトを指定する
// sourcesオブジェクト自身が持つ列挙可能なプロパティを第一引数のtargetに対してコピーする
// Object.assignメソッドの戻り値は、targetオブジェクトになる

function objMerge() {
  const objA = { a: "a" };
  const objB = { b: "b" };
  const merged = Object.assign({}, objA, objB); // <= 空のオブジェクトにマージする
  console.log(merged); // { a: "a", b: "b" }
  
  const merged2 = Object.assign({merge2: "2"}, objA, objB);
  console.log(merged2); // { merge2: "2", a: "a", b: "b" }  
  console.log(objA); // { a: "a" }
  
  // 既存のオブジェクトにマージする
  // マージは破壊的なので値が変更される
  const mA = { a: "a" };
  const mB = { b: "b" };
  const mgd = Object.assign(mA, mB);
  
  console.log(mgd); // { a: "a", b: "b" }
  console.log(mA); // { a: "a", b: "b" }
  console.log(mgd === mA); // true
  

  /***************** 破壊的なので基本的に空のオブジェクトを作ってからマージする *****************/

  // プロパティ名がかぶってると上書きされる
  const upA = { ver: "a" };
  const upB = { ver: "b" };
  const mrg = Object.assign({}, upA, upB);
  console.log(mrg); // { ver: "b" }
  
  /****** ES2018 spread構文でのマージ ******/
  const spA = { spread構文: "は必ず新しいオブジェクトを作成する" };
  const spB = { なぜなら: "spread構文はオブジェクトリテラルの中でのみ記述できるし、オブジェクトリテラルは新しいオブジェクトを作成できるから" };
  const spMrg = {
    ...spA,
    ...spB
  };
  console.log(spMrg);
  
  
  /****** オブジェクトの複製 ******/
  // JSにはオブジェクトを複製する関数は用意されていない
  // 空のオブジェクトを作成し、そこへ既存のオブジェクトのプロパティをコピーすることで複製と同じ効果を得る
  const shallowClone = (obj) => {
    return Object.assign({}, obj);
  };
  
  // 比較用オブジェクト
  const shObj = { a: "a" };

  const cloneObj = shallowClone(shObj);
  console.log(cloneObj); // { a: "a" }
  console.log(shObj === cloneObj); // false

}
objMerge();

/******* プロパティの値までも再帰的に複製するかどうか *******/

function copy() {
  /******* 浅いコピー *******/
  // 浅いコピーは、sourcesオブジェクトの直下にあるプロパティだけをコピーする
  const shallowClone = (obj) => {
    return Object.assign({}, obj);
  };
  const obj = {
    level: 1,
    nest: {
      level: 2,
    }
  };
  const cloneObj = shallowClone(obj);
  console.log(cloneObj.nest === obj.nest); // trueが返ってくる
  // 比較してtrueだと、複製されてなくて異なるオブジェクトじゃない
  
  // 同じものを見てる
  cloneObj.nest.level = "add";
  console.log(cloneObj.nest === obj.nest); // true
  console.log(cloneObj); // {level:1, nest: {level: "add"}}
  console.log(obj); // {level:1, nest: {level: "add"}}
  


  /******* 深いコピー *******/
  // オブジェクトの値までも別のオブジェクトととして扱う場合、
  // 深いコピーを浅いコピーを再帰的に行うことで実現していく
  const shallowC = obj => {
    return Object.assign({}, obj);
  };

  function deepClone(obj) {
    const newObj = shallowC(obj);
    Object.keys(newObj)
        .filter(k => typeof newObj[k] === "object")
        .forEach(k => newObj[k] = deepClone(newObj[k]));
    return newObj;
  }

  const cloneO = deepClone(obj);
  console.log(cloneO.nest === obj.nest); // false

  // 別のオブジェクトになった
  obj.nest.level = "new val";
  console.log(obj); // {level:1, nest: { level: "new val" }}
  console.log(cloneO); // { level:1, nest: { level: "add" }}
  

}
copy();
