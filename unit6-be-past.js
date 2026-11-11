// ムギ物語～文法編～（書きかえ版）単元6「be動詞の過去形」（16日目〜18日目）
// 問題・選択肢・解説はすべて Claude が作成。
// 項目：no / stage / type=tf / task=やること / base=もとの英文 / answer / wrong / ja=正解の文の意味 / explain
window.MUGI_G6 = {
"world": 6,
"title": "be動詞の過去形",
"pos": "be動詞の過去形",
"sub": "was / were",
"stageNames": {"1": "was・were", "2": "否定文", "3": "疑問文と答え方"},
"words": [
{"no":"f001","stage":1,"type":"tf","task":"過去の文にしよう","base":"I am busy.","answer":"I was busy.","wrong":["I were busy.","I did busy.","I am was busy."],"ja":"私は忙しかったです。","explain":"am・is の過去形は was。"},
{"no":"f002","stage":1,"type":"tf","task":"過去の文にしよう","base":"He is tired.","answer":"He was tired.","wrong":["He were tired.","He did tired.","He is was tired."],"ja":"彼は疲れていました。","explain":"is の過去形は was。"},
{"no":"f003","stage":1,"type":"tf","task":"過去の文にしよう","base":"They are at home.","answer":"They were at home.","wrong":["They was at home.","They did at home.","They are were at home."],"ja":"彼らは家にいました。","explain":"are の過去形は were。"},
{"no":"f004","stage":1,"type":"tf","task":"過去の文にしよう","base":"You are kind.","answer":"You were kind.","wrong":["You was kind.","You did kind.","You are were kind."],"ja":"あなたは親切でした。","explain":"you は are → were。"},
{"no":"f005","stage":1,"type":"tf","task":"過去の文にしよう","base":"It is sunny.","answer":"It was sunny.","wrong":["It were sunny.","It did sunny.","It is was sunny."],"ja":"晴れていました。","explain":"it は is → was。"},
{"no":"f006","stage":1,"type":"tf","task":"過去の文にしよう","base":"We are in the gym.","answer":"We were in the gym.","wrong":["We was in the gym.","We did in the gym.","We are were in the gym."],"ja":"私たちは体育館にいました。","explain":"we は are → were。"},
{"no":"f007","stage":1,"type":"tf","task":"過去の文にしよう","base":"My mother is a teacher.","answer":"My mother was a teacher.","wrong":["My mother were a teacher.","My mother did a teacher.","My mother is was a teacher."],"ja":"母は先生でした。","explain":"my mother（1人）は is → was。"},
{"no":"f008","stage":1,"type":"tf","task":"過去の文にしよう","base":"The dogs are hungry.","answer":"The dogs were hungry.","wrong":["The dogs was hungry.","The dogs did hungry.","The dogs are were hungry."],"ja":"犬たちはおなかがすいていました。","explain":"the dogs（2ひき以上）は are → were。"},
{"no":"f009","stage":1,"type":"tf","task":"過去の文にしよう","base":"I am in Tokyo.","answer":"I was in Tokyo.","wrong":["I were in Tokyo.","I did in Tokyo.","I am was in Tokyo."],"ja":"私は東京にいました。","explain":"am → was。"},
{"no":"f010","stage":1,"type":"tf","task":"過去の文にしよう","base":"Ken and Yuki are friends.","answer":"Ken and Yuki were friends.","wrong":["Ken and Yuki was friends.","Ken and Yuki did friends.","Ken and Yuki are were friends."],"ja":"ケンとユキは友だちでした。","explain":"2人なので are → were。"},
{"no":"f011","stage":2,"type":"tf","task":"否定文にしよう","base":"I was busy.","answer":"I wasn't busy.","wrong":["I didn't busy.","I weren't busy.","I not was busy."],"ja":"私は忙しくありませんでした。","explain":"was not を短くすると wasn't。be動詞の文に didn't は使わない。"},
{"no":"f012","stage":2,"type":"tf","task":"否定文にしよう","base":"They were at school.","answer":"They weren't at school.","wrong":["They wasn't at school.","They didn't at school.","They not were at school."],"ja":"彼らは学校にいませんでした。","explain":"were not を短くすると weren't。"},
{"no":"f013","stage":2,"type":"tf","task":"否定文にしよう","base":"It was cold.","answer":"It wasn't cold.","wrong":["It weren't cold.","It didn't cold.","It not was cold."],"ja":"寒くありませんでした。","explain":"was not → wasn't。"},
{"no":"f014","stage":2,"type":"tf","task":"否定文にしよう","base":"You were late.","answer":"You weren't late.","wrong":["You wasn't late.","You didn't late.","You not were late."],"ja":"あなたは遅れませんでした。","explain":"were not → weren't。"},
{"no":"f015","stage":2,"type":"tf","task":"否定文にしよう","base":"He was hungry.","answer":"He wasn't hungry.","wrong":["He weren't hungry.","He didn't hungry.","He not was hungry."],"ja":"彼はおなかがすいていませんでした。","explain":"was not → wasn't。"},
{"no":"f016","stage":2,"type":"tf","task":"否定文にしよう","base":"We were tired.","answer":"We weren't tired.","wrong":["We wasn't tired.","We didn't tired.","We not were tired."],"ja":"私たちは疲れていませんでした。","explain":"were not → weren't。"},
{"no":"f017","stage":2,"type":"tf","task":"否定文にしよう","base":"The test was easy.","answer":"The test wasn't easy.","wrong":["The test weren't easy.","The test didn't easy.","The test not was easy."],"ja":"テストは簡単ではありませんでした。","explain":"the test（1つ）は was → wasn't。"},
{"no":"f018","stage":2,"type":"tf","task":"否定文にしよう","base":"My parents were at home.","answer":"My parents weren't at home.","wrong":["My parents wasn't at home.","My parents didn't at home.","My parents not were at home."],"ja":"両親は家にいませんでした。","explain":"my parents（2人）は were → weren't。"},
{"no":"f019","stage":2,"type":"tf","task":"否定文にしよう","base":"She was a student.","answer":"She wasn't a student.","wrong":["She weren't a student.","She didn't a student.","She not was a student."],"ja":"彼女は生徒ではありませんでした。","explain":"was not → wasn't。"},
{"no":"f020","stage":2,"type":"tf","task":"否定文にしよう","base":"I was sleepy.","answer":"I wasn't sleepy.","wrong":["I weren't sleepy.","I didn't sleepy.","I not was sleepy."],"ja":"私は眠くありませんでした。","explain":"was not → wasn't。"},
{"no":"f021","stage":3,"type":"tf","task":"疑問文にしよう","base":"You were busy.","answer":"Were you busy?","wrong":["Was you busy?","Did you busy?","Did you were busy?"],"ja":"あなたは忙しかったですか。","explain":"was・were を主語の前に出す。Did は使わない。"},
{"no":"f022","stage":3,"type":"tf","task":"疑問文にしよう","base":"He was at home.","answer":"Was he at home?","wrong":["Were he at home?","Did he at home?","Did he was at home?"],"ja":"彼は家にいましたか。","explain":"was を he の前に出す。"},
{"no":"f023","stage":3,"type":"tf","task":"疑問文にしよう","base":"It was hot.","answer":"Was it hot?","wrong":["Were it hot?","Did it hot?","Did it was hot?"],"ja":"暑かったですか。","explain":"Was it ～?"},
{"no":"f024","stage":3,"type":"tf","task":"疑問文にしよう","base":"They were happy.","answer":"Were they happy?","wrong":["Was they happy?","Did they happy?","Did they were happy?"],"ja":"彼らは幸せでしたか。","explain":"Were they ～?"},
{"no":"f025","stage":3,"type":"tf","task":"疑問文にしよう","base":"Your sister was sick.","answer":"Was your sister sick?","wrong":["Were your sister sick?","Did your sister sick?","Did your sister was sick?"],"ja":"あなたのお姉さんは病気でしたか。","explain":"your sister（1人）なので Was ～?"},
{"no":"f026","stage":3,"type":"tf","task":"疑問文にしよう","base":"The movie was fun.","answer":"Was the movie fun?","wrong":["Were the movie fun?","Did the movie fun?","Did the movie was fun?"],"ja":"その映画はおもしろかったですか。","explain":"Was the movie ～?"},
{"no":"f027","stage":3,"type":"tf","task":"Yes で答えよう","base":"Were you busy?","answer":"Yes, I was.","wrong":["Yes, I were.","Yes, I did.","Yes, you were."],"ja":"はい、忙しかったです。","explain":"Were you ～? には Yes, I was. で答える（I は was）。"},
{"no":"f028","stage":3,"type":"tf","task":"No で答えよう","base":"Was it cold?","answer":"No, it wasn't.","wrong":["No, it weren't.","No, it didn't.","No, it isn't."],"ja":"いいえ、寒くありませんでした。","explain":"Was it ～? には No, it wasn't."},
{"no":"f029","stage":3,"type":"tf","task":"Yes で答えよう","base":"Were they at home?","answer":"Yes, they were.","wrong":["Yes, they was.","Yes, they did.","Yes, they are."],"ja":"はい、いました。","explain":"Were they ～? には Yes, they were."},
{"no":"f030","stage":3,"type":"tf","task":"No で答えよう","base":"Was your father tired?","answer":"No, he wasn't.","wrong":["No, he weren't.","No, he didn't.","No, she wasn't."],"ja":"いいえ、疲れていませんでした。","explain":"your father は he で受けて No, he wasn't."}
]
};
