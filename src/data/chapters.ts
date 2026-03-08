export interface Chapter {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  title: string;
  texts: string[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "ホームポジション",
    description: "タイピングの基本となるホームポジションを習得しましょう。",
    lessons: [
      {
        id: 1,
        title: "左手の基本キー",
        texts: [
          "asdf asdf asdf asdf",
          "fdsa fdsa fdsa fdsa",
          "asdf fdsa asdf fdsa",
          "a s d f a s d f",
          "fads fasd dfas sdaf",
        ],
      },
      {
        id: 2,
        title: "右手の基本キー",
        texts: [
          "jkl; jkl; jkl; jkl;",
          ";lkj ;lkj ;lkj ;lkj",
          "jkl; ;lkj jkl; ;lkj",
          "j k l ; j k l ;",
          "lkjs kjls jlsk slkj",
        ],
      },
      {
        id: 3,
        title: "両手の組み合わせ",
        texts: [
          "asdf jkl; asdf jkl;",
          "fjdk sl;a fjdk sl;a",
          "asdfjkl; asdfjkl;",
          "fall fall fall fall",
          "ask ask ask ask",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "数字と記号",
    description: "プログラミングで頻繁に使用する数字と記号を練習します。",
    lessons: [
      {
        id: 1,
        title: "数字キー",
        texts: [
          "123 456 789 012",
          "111 222 333 444 555",
          "2024 2025 2026 1999",
          "100 200 300 400 500",
          "12345 67890 12345",
        ],
      },
      {
        id: 2,
        title: "基本記号",
        texts: [
          "!@#$%^&*()",
          "!!! @@@ ### $$$",
          "100% 50% 25% 10%",
          "a@b.com c@d.org",
          "#1 #2 #3 #4 #5",
        ],
      },
      {
        id: 3,
        title: "算術演算子",
        texts: [
          "1 + 2 = 3",
          "10 - 5 = 5",
          "3 * 4 = 12",
          "20 / 4 = 5",
          "10 % 3 = 1",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "プログラミング記号",
    description: "コーディングで必須の括弧や記号をマスターしましょう。",
    lessons: [
      {
        id: 1,
        title: "括弧類",
        texts: [
          "(()) [[]] {{}}",
          "() [] {} () [] {}",
          "((a)) [[b]] {{c}}",
          "(a, b) [0, 1] {x: 1}",
          "func() arr[] obj{}",
        ],
      },
      {
        id: 2,
        title: "プログラミング記号",
        texts: [
          "; ; ; ; ; ; ; ;",
          ": : : : : : : :",
          "// /* */ <!-- -->",
          "=> -> :: == ===",
          '&& || != !== ??',
        ],
      },
      {
        id: 3,
        title: "引用符",
        texts: [
          '"hello" "world"',
          "'a' 'b' 'c' 'd'",
          '`template ${var}`',
          '"string" \'char\'',
          '"""docstring"""',
        ],
      },
    ],
  },
  {
    id: 4,
    title: "変数名と関数名",
    description: "実際のプログラミングで使われる命名パターンを練習します。",
    lessons: [
      {
        id: 1,
        title: "キャメルケース",
        texts: [
          "userName firstName lastName",
          "getData setData updateData",
          "isActive hasValue canEdit",
          "onClick onChange onSubmit",
          "maxLength minValue defaultName",
        ],
      },
      {
        id: 2,
        title: "スネークケース",
        texts: [
          "user_name first_name last_name",
          "get_data set_data update_data",
          "is_active has_value can_edit",
          "max_length min_value default_name",
          "total_count page_size item_list",
        ],
      },
      {
        id: 3,
        title: "定数名（大文字）",
        texts: [
          "MAX_SIZE MIN_VALUE DEFAULT_NAME",
          "API_KEY SECRET_TOKEN BASE_URL",
          "ERROR_CODE SUCCESS_MESSAGE",
          "HTTP_STATUS DATABASE_URL",
          "CONFIG_PATH LOG_LEVEL",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "コードスニペット",
    description: "実際のプログラミングコードを入力してみましょう。",
    lessons: [
      {
        id: 1,
        title: "変数宣言",
        texts: [
          "const x = 10;",
          "let name = 'Alice';",
          "var count = 0;",
          "const arr = [1, 2, 3];",
          "let obj = { key: 'value' };",
        ],
      },
      {
        id: 2,
        title: "関数定義",
        texts: [
          "function add(a, b) { return a + b; }",
          "const sum = (x, y) => x + y;",
          "function hello() { console.log('Hi'); }",
          "const greet = name => `Hello, ${name}`;",
          "async function fetchData() { }",
        ],
      },
      {
        id: 3,
        title: "条件分岐",
        texts: [
          "if (x > 0) { return true; }",
          "if (a === b) { } else { }",
          "x > 0 ? 'positive' : 'negative'",
          "switch (type) { case 'a': break; }",
          "if (arr.length > 0) { }",
        ],
      },
      {
        id: 4,
        title: "ループ処理",
        texts: [
          "for (let i = 0; i < 10; i++) { }",
          "while (count > 0) { count--; }",
          "arr.forEach(item => console.log(item));",
          "for (const key of obj) { }",
          "arr.map(x => x * 2);",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "実践コード",
    description: "より実践的なコードパターンを練習しましょう。",
    lessons: [
      {
        id: 1,
        title: "配列操作",
        texts: [
          "const filtered = arr.filter(x => x > 0);",
          "const doubled = nums.map(n => n * 2);",
          "const sum = arr.reduce((a, b) => a + b, 0);",
          "const found = users.find(u => u.id === 1);",
          "const sorted = items.sort((a, b) => a - b);",
        ],
      },
      {
        id: 2,
        title: "オブジェクト操作",
        texts: [
          "const { name, age } = user;",
          "const newObj = { ...obj, key: value };",
          "Object.keys(obj).forEach(k => { });",
          "const merged = { ...obj1, ...obj2 };",
          "const entries = Object.entries(obj);",
        ],
      },
      {
        id: 3,
        title: "非同期処理",
        texts: [
          "const data = await fetch(url);",
          "const json = await response.json();",
          "Promise.all([p1, p2]).then(results => { });",
          "try { await api(); } catch (e) { }",
          "setTimeout(() => callback(), 1000);",
        ],
      },
    ],
  },
];
