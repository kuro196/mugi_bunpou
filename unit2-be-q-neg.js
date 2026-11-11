// ムギ物語～文法編～（書きかえ版）単元2「be動詞の疑問文・否定文」（4日目〜6日目）
// 問題・選択肢・解説はすべて Claude が作成。
// 項目：no / stage / type=tf / task=やること / base=もとの英文 / answer / wrong / ja=正解の文の意味 / explain
window.MUGI_G2 = {
"world": 2,
"title": "be動詞の疑問文・否定文",
"pos": "be動詞",
"sub": "Are you ...? / You aren't ...",
"stageNames": {"1": "否定文", "2": "疑問文", "3": "答え方とまとめ"},
"words": [
{"no":"b001","stage":1,"type":"tf","task":"否定文にしよう","base":"I am a doctor.","answer":"I am not a doctor.","wrong":["I not am a doctor.","I don't a doctor.","I am no a doctor."],"ja":"私は医者ではありません。","explain":"be動詞の否定文は、be動詞のあとに not。"},
{"no":"b002","stage":1,"type":"tf","task":"否定文にしよう","base":"He is busy.","answer":"He is not busy.","wrong":["He not is busy.","He doesn't busy.","He is no busy."],"ja":"彼は忙しくありません。","explain":"is のあとに not を置く。"},
{"no":"b003","stage":1,"type":"tf","task":"否定文にしよう","base":"They are students.","answer":"They aren't students.","wrong":["They don't students.","They isn't students.","They not are students."],"ja":"彼らは生徒ではありません。","explain":"are not を短くすると aren't。"},
{"no":"b004","stage":1,"type":"tf","task":"否定文にしよう","base":"This is my bag.","answer":"This isn't my bag.","wrong":["This aren't my bag.","This don't my bag.","This not is my bag."],"ja":"これは私のかばんではありません。","explain":"is not を短くすると isn't。"},
{"no":"b005","stage":1,"type":"tf","task":"否定文にしよう","base":"You are late.","answer":"You aren't late.","wrong":["You isn't late.","You don't late.","You not late."],"ja":"あなたは遅れていません。","explain":"you は are なので aren't。"},
{"no":"b006","stage":1,"type":"tf","task":"否定文にしよう","base":"We are in the same class.","answer":"We aren't in the same class.","wrong":["We isn't in the same class.","We don't in the same class.","We not are in the same class."],"ja":"私たちは同じクラスではありません。","explain":"be動詞の文に don't は使わない。aren't にする。"},
{"no":"b007","stage":1,"type":"tf","task":"否定文にしよう","base":"It is cold today.","answer":"It isn't cold today.","wrong":["It aren't cold today.","It doesn't cold today.","It not is cold today."],"ja":"今日は寒くありません。","explain":"it は is なので isn't。"},
{"no":"b008","stage":1,"type":"tf","task":"否定文にしよう","base":"I'm hungry.","answer":"I'm not hungry.","wrong":["I'm don't hungry.","I amn't hungry.","I not hungry."],"ja":"私はおなかがすいていません。","explain":"I'm のあとに not。am not は amn't とは短くできない。"},
{"no":"b009","stage":1,"type":"tf","task":"否定文にしよう","base":"My father is at home.","answer":"My father isn't at home.","wrong":["My father aren't at home.","My father doesn't at home.","My father not is at home."],"ja":"父は家にいません。","explain":"my father は1人なので isn't。"},
{"no":"b010","stage":1,"type":"tf","task":"否定文にしよう","base":"Ken and Yuki are good friends.","answer":"Ken and Yuki aren't good friends.","wrong":["Ken and Yuki isn't good friends.","Ken and Yuki don't good friends.","Ken and Yuki not are good friends."],"ja":"ケンとユキは仲のよい友だちではありません。","explain":"2人なので are not → aren't。"},
{"no":"b011","stage":2,"type":"tf","task":"疑問文にしよう","base":"You are a student.","answer":"Are you a student?","wrong":["Do you a student?","Is you a student?","Are a student you?"],"ja":"あなたは生徒ですか。","explain":"be動詞の疑問文は、be動詞を主語の前に出す。"},
{"no":"b012","stage":2,"type":"tf","task":"疑問文にしよう","base":"He is your brother.","answer":"Is he your brother?","wrong":["Does he your brother?","Are he your brother?","Is your brother he?"],"ja":"彼はあなたのお兄さんですか。","explain":"is を he の前に出して Is he ～?"},
{"no":"b013","stage":2,"type":"tf","task":"疑問文にしよう","base":"This is your notebook.","answer":"Is this your notebook?","wrong":["Are this your notebook?","Does this your notebook?","This your notebook is?"],"ja":"これはあなたのノートですか。","explain":"Is this ～? の形。"},
{"no":"b014","stage":2,"type":"tf","task":"疑問文にしよう","base":"They are from Osaka.","answer":"Are they from Osaka?","wrong":["Is they from Osaka?","Do they from Osaka?","Are from Osaka they?"],"ja":"彼らは大阪出身ですか。","explain":"are を they の前に出す。"},
{"no":"b015","stage":2,"type":"tf","task":"疑問文にしよう","base":"It is hot today.","answer":"Is it hot today?","wrong":["Does it hot today?","Are it hot today?","Is hot it today?"],"ja":"今日は暑いですか。","explain":"is を it の前に出して Is it ～?"},
{"no":"b016","stage":2,"type":"tf","task":"疑問文にしよう","base":"Your sister is a nurse.","answer":"Is your sister a nurse?","wrong":["Does your sister a nurse?","Are your sister a nurse?","Is a nurse your sister?"],"ja":"あなたのお姉さんは看護師ですか。","explain":"主語 your sister の前に is を出す。"},
{"no":"b017","stage":2,"type":"tf","task":"疑問文にしよう","base":"You are hungry.","answer":"Are you hungry?","wrong":["Do you hungry?","Is you hungry?","Are hungry you?"],"ja":"あなたはおなかがすいていますか。","explain":"「be動詞＋主語＋～?」の順。"},
{"no":"b018","stage":2,"type":"tf","task":"疑問文にしよう","base":"Ken and Yuki are in the classroom.","answer":"Are Ken and Yuki in the classroom?","wrong":["Is Ken and Yuki in the classroom?","Do Ken and Yuki in the classroom?","Are in the classroom Ken and Yuki?"],"ja":"ケンとユキは教室にいますか。","explain":"2人なので Are ～?"},
{"no":"b019","stage":2,"type":"tf","task":"疑問文にしよう","base":"That is your house.","answer":"Is that your house?","wrong":["Are that your house?","Does that your house?","That is your house is?"],"ja":"あれはあなたの家ですか。","explain":"Is that ～? の形。"},
{"no":"b020","stage":2,"type":"tf","task":"疑問文にしよう","base":"You are tired.","answer":"Are you tired?","wrong":["Do you tired?","Do you are tired?","Is you tired?"],"ja":"あなたは疲れていますか。","explain":"be動詞の文に Do は使わない。"},
{"no":"b021","stage":3,"type":"tf","task":"Yes で答えよう","base":"Are you a student?","answer":"Yes, I am.","wrong":["Yes, you are.","Yes, I do.","Yes, I'm."],"ja":"はい、そうです。","explain":"Are you ～? には Yes, I am. 答えの最後は I'm と短くしない。"},
{"no":"b022","stage":3,"type":"tf","task":"No で答えよう","base":"Is this your bag?","answer":"No, it isn't.","wrong":["No, this isn't.","No, it doesn't.","No, it not."],"ja":"いいえ、ちがいます。","explain":"this で聞かれたら it で答える。"},
{"no":"b023","stage":3,"type":"tf","task":"Yes で答えよう","base":"Is your mother a teacher?","answer":"Yes, she is.","wrong":["Yes, he is.","Yes, she does.","Yes, it is."],"ja":"はい、そうです。","explain":"your mother は she で受ける。"},
{"no":"b024","stage":3,"type":"tf","task":"No で答えよう","base":"Are they your friends?","answer":"No, they aren't.","wrong":["No, they don't.","No, we aren't.","No, they isn't."],"ja":"いいえ、ちがいます。","explain":"Are they ～? には No, they aren't."},
{"no":"b025","stage":3,"type":"tf","task":"No で答えよう","base":"Are you from Tokyo?","answer":"No, I'm not.","wrong":["No, I don't.","No, you aren't.","No, I amn't."],"ja":"いいえ、ちがいます。","explain":"Are you ～? には No, I'm not."},
{"no":"b026","stage":3,"type":"tf","task":"Yes で答えよう","base":"Is it cold today?","answer":"Yes, it is.","wrong":["Yes, it does.","Yes, this is.","Yes, it's."],"ja":"はい、寒いです。","explain":"Is it ～? には Yes, it is."},
{"no":"b027","stage":3,"type":"tf","task":"否定文にしよう","base":"She is from Canada.","answer":"She isn't from Canada.","wrong":["She doesn't from Canada.","She aren't from Canada.","She not is from Canada."],"ja":"彼女はカナダ出身ではありません。","explain":"is not → isn't。"},
{"no":"b028","stage":3,"type":"tf","task":"疑問文にしよう","base":"Your brother is tall.","answer":"Is your brother tall?","wrong":["Does your brother tall?","Are your brother tall?","Is tall your brother?"],"ja":"あなたのお兄さんは背が高いですか。","explain":"is を主語の前に出す。"},
{"no":"b029","stage":3,"type":"tf","task":"否定文にしよう","base":"We are busy now.","answer":"We aren't busy now.","wrong":["We don't busy now.","We isn't busy now.","We not are busy now."],"ja":"私たちは今忙しくありません。","explain":"are not → aren't。"},
{"no":"b030","stage":3,"type":"tf","task":"No で答えよう","base":"Is your sister a student?","answer":"No, she isn't.","wrong":["No, she doesn't.","No, he isn't.","No, she aren't."],"ja":"いいえ、ちがいます。","explain":"your sister は she で受けて No, she isn't."}
]
};
