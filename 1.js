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


/************************************** Operand **************************************/
function checkOprand(){
// オペランド（演算子）
  // ＋演算子が値同士を足し算する場合
  // ex: 1 + 2;
  // このとき、値である1と2がオペランド

  // 二項演算子
    // 演算子に対して２つのオペランドを取ること
    // ex: 1 + 2;
    // つまり、先の例は二項演算子である

  // 単項演算子
    // １つの演算子に対して１つのオペランドを取る場合もある
    // ex: インクリメント
    let num = 1;
    num++;
    //or
    ++num;

  // べき乗演算子（**）
    // ES2016～から追加された演算子。
    console.log(30, 2**4); // 16（2の4乗）
    
    // べき乗演算子と同じ動作をするMath.powメソッドもある
    console.log(30.1, Math.pow(2, 4)); // 16 

  // 算術演算子
    // 単行プラス演算子（+）
      // 数値以外も数値へ変換する
      console.log(31, +"1"); // 1
      let a = "1";
      let b = 1;
      console.log(31.1, +a, b); // 1, 1
      console.log(31.2, typeof a, typeof +a, typeof b); // string, number, number

      // 数値に変換できない文字列はNaNに変換される
      console.log(32, +"文字"); // NaN
      // この書き方で変換することは非推奨である
      // 変換したい場合はNumberコンストラクタや、parseInt関数を使用して明示的に変換する

      // NaN
      console.log(33.1, NaN === NaN); // false 自分自身とも一致しない
      console.log(33.2, typeof NaN); // number number型
      console.log(33.3, Number.isNaN(NaN)); // true isNaN()メソッドでのみ確認できる

    // 単行マイナス演算子（-）
      // 単行マイナス演算子はマイナスの数値を反転できる
      console.log(34.1, -(-1)); // 1

      // 単行プラス演算子と同じく非推奨の書き方
      console.log(34.2, -"1"); // -1
      console.log(34.3, -"文字列"); // NaN


    // インクリメント演算子（++）
      // num++ ... ++を後ろに置く
        // 1, numの評価結果を返す
        // 2, numに対して+1する
        // そのため、num++が返す値は+1する前の値となる
        let x = 1;
        console.log(35.1, x++); // 1
        console.log(35.2, x); // 2

      // ++num ... ++を前に置く
        // 1, numに対して+1する
        // 2, numの評価結果を返す
        // そのため、++numが返す値は+1した後の値となる
        let y = 1;
        console.log(36.1, ++y); // 2
        console.log(36.2, y); // 2


    // デクリメント演算子
      // インクリメント演算子と同じ挙動


    // 厳密等価演算子（===）
      const objA = {};
      const objB = {};
      console.log(37.1, objA === objB); // false
      console.log(37.2, objA === objA); // true

    
    // 等価演算子（==）
      const objC = {};
      const objD = {};
      console.log(37.3, objC == objD); // false
      console.log(37.4, objC == objC); // true

      /////////////暗黙の型変換/////////////
      console.log(38.1, "1 == '1'", 1 == "1"); // true
      console.log(38.2, "1 == '01'", 1 == "01"); // true
      console.log(38.3, "0 == false", 0 == false); // 真偽値を数値変換後に比較　true
      console.log(38.4, "0 == null", 0 == null); // false
      console.log(38.5, "null == undefined", null == undefined); // 常にtrue
      /////////////暗黙の型変換/////////////

      // null undefined判定
      const val = undefined;

      if(val === null || val === undefined) {
        console.log(39.1, "nullまたはundefinedの処理");
      }

      if(val == null) {
        console.log(39.2, "nullまたはundefinedの処理...nullとundefinedの比較は常にtrueなので等価演算子（==）で比較するだけで良い");
      }
      
}
checkOprand();

/************************************** Bit **************************************/

function checkBit() {
  // ビット演算子
    // Number#toStringメソッドを使うことで2進数表記の文字列を取得する
    // ex
    console.log(40, (9).toString(2)); // 1001

    // 補数表現
    // ゼロ桁埋め右シフトから2進数表記を取得
    // ex
    console.log(41, (-9 >>> 0 ).toString(2)); // 11111111111111111111111111110111

    // ビット論理積（&）
    // AND演算
    // ２つの値を比較して、どちらも1なら1、どちらか片方でも0の場合は0を返します。
    // フラグをビット管理している時に、そのフラグが立っているのかを調べたりするのに使います。
    console.log(42, 15 & 9); // 15 => 1111  9 => 1001  A.9(1001)

    // ビット論理和（|）
    // OR演算
    // ２つの値を比較して、どちらかが1なら1、どちらも0の場合は0を返します。
    // フラグをビット管理している時に、そのフラグを立てる時などに使います
    console.log(43, 15 | 9); // 15 => 1111  9 => 1001  A.15(1111)

    // ビット排他的論理和（^）
    // XOR演算
    // ２つの値を比較して、どちか片方だけ1なら1、どちらも0またはどちらも1の場合は0を返します。
    // どこが違うか調べるときなどで使います。
    console.log(44, 15 ^ 9); // 15 => 1111  9 => 1001  A.6(0110)

    // ビット否定（~）
    // 単項演算子の否定演算子（~）はオペランドを反転した値を返します。 これは1の補数として知られている値と同じものです。
    console.log(45.1, ~15); // 15を10進数で反転して-15, 1の補数なのでさらに-1する  A.-16

    // 否定演算子（~）はビット演算以外でも使われていることがあります。
    // 文字列（Stringオブジェクト）がもつindexOfメソッドは、
    // マッチする文字列を見つけて、そのインデックス（位置）を返すメソッドです。
    // このindexOfメソッドは、検索対象が見つからない場合には-1を返します。
    var wd = "ああああいああああ";
    console.log(45.2, wd.indexOf("あ") + "番目"); // 0番目
    console.log(45.3, wd.indexOf("い") + "番目"); // 4番目
    console.log(45.4, wd.indexOf("あい") + "番目"); // 3番目
    console.log(45.5, wd.indexOf("う") + "番目"); // -1番目

};
checkBit();

/************************************** [ES2015(ES6) 分割代入 destructuring assingnment] **************************************/

function checkDA() {
  // ES2015では配列やオブジェクトの値を複数の変数へ同時に代入することができる
  const arr = [1, 2];

  // arrの0番目をaに、1番目をbに代入
  const [a, b] = arr;
  console.log(46.1, a); // 1
  console.log(46.2, b); // 2

  // 同じ意味
  const ar = [1, 2];
  const ara = ar[0];
  const arb = ar[1];
  
  // オブジェクトでも同じように扱うことが出来る
  const obj = {
    "key" : "value"
  };

  const { key } = obj;
  console.log(47.1, key); // "value"

  // 同じ意味
  const o = {
    "key": "value"
  };

  const o_key = o.key;
  console.log(47.2, o_key); // "value"
};
checkDA();

/************************************** 三項演算子 **************************************/

function checkIf() {
  // 条件演算子（？と：）
  // 条件式 ? Trueの時処理する式 : Falseの時処理する式;

  // if文との違いは式として書けるので、値を返すことが出来る
  const valA = true ? "A" : "B";
  console.log(48.1, valA); // "A"  < 式的に常にtrueだからAが返ってくる

  const valB = false ? "A" : "B";
  console.log(48.2, valB); // "B"  < 式的に常にfalseだからBが返ってくる


  // 何がいいか?
  //
  // 条件分岐による値を返すことが出来るので、変数の初期値を条件によってコントロールできる
  // 次の例では、text文字列にprefixとなる文字列を先頭に付ける関数を書いています。
  // prefixの第二引数を省略したり文字列ではないものが指定された場合に、デフォルトのprefixを使います。 
  // 第二引数が省略された場合には、prefixにundefinedが入ります。
  // 条件演算子の評価結果は値を返すので、constを使って宣言と同時に代入できます。

  function addPrefix(txt, prefix) {
    // prefixが指定されなければ”デフォルト：”をつける
    const pre = typeof prefix === "string" ? prefix : "デフォルト：";
    return pre + txt; 
  }
  console.log(49.1, addPrefix("文字列")); // "デフォルト：文字列"  引数が足りないので"デフォルト："が呼ばれる
  console.log(49.2, addPrefix("文字列", "カスタム")); // カスタム文字列
  console.log(49.3, addPrefix(0)); // "デフォルト：0"  文字列が渡っていないので"デフォルト："が呼ばれる

  // if文の場合は、宣言と代入を分ける必要があるため、constが使えない
  function addPrefix2(txt, prefix) {
    let pre = "デフォルト：";
    if(typeof prefix === "string") {
      pre = prefix;
    }
    return pre + txt;
  }
  console.log(50.1, addPrefix2("文字列")); // "デフォルト：文字列"
  console.log(50.2, addPrefix2("文字列", "カスタム")); // カスタム文字列
  console.log(50.3, addPrefix2(0)); // デフォルト：0

}
checkIf();


/************************************** 論理演算子 **************************************/

function checkAnd() {
  const value = "str";
  if (typeof value === "string" && value === "str") {
    console.log(51, `${value} is string value`);
  }
}
checkAnd();


/************************************** グループ演算子 **************************************/

function checkG() {
  const a = 1;
  const b = 2;
  const c = 3;

  console.log(52.1, a + b + c);  // 6
  console.log(52.2, (a + b) * c); // 9
}
checkG();

/************************************** カンマ演算子 **************************************/

function checkC() {
  // 式の左から評価され、最後の式の評価を返す
  const a = 1, b = 2, c = a + b;
  console.log(53, c); // 3
}
checkC();
