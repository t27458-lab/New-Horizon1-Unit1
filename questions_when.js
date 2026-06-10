// 接続詞 when 練習問題データ
// 中学2年生 / 中1レベル語彙 / 約65問

var ALL_Q = [

// ===== fill: 空欄補充（whenの位置・カンマ・be動詞など） =====

{"t":"fill","g":"basic","tag":"基本：when の使い方","q":"___ I get home, I eat dinner.","sub":"私は家に帰ると、夕食を食べます。","ans":0,"ch":["When","If","But","Because"],"ex":"「〜するとき」はwhenで始めます。文頭に置くとき、コンマ（,）が必要です。"},

{"t":"fill","g":"basic","tag":"基本：when の使い方","q":"I eat dinner ___ I get home.","sub":"私は家に帰ると、夕食を食べます。","ans":0,"ch":["when","When","but","if"],"ex":"whenが文の途中に来るときは小文字のwhenを使い、コンマは不要です。"},

{"t":"fill","g":"basic","tag":"基本：when の使い方","q":"When I am tired, I ___ to bed early.","sub":"疲れているとき、私は早く寝ます。","ans":0,"ch":["go","goes","went","going"],"ex":"主語がIのとき、動詞は原形（go）を使います。goesはhe/she/itのときです。"},

{"t":"fill","g":"basic","tag":"基本：when の使い方","q":"When she ___ hungry, she eats bread.","sub":"彼女はお腹がすいているとき、パンを食べます。","ans":0,"ch":["is","am","are","be"],"ex":"主語がsheのとき、be動詞はisを使います。"},

{"t":"fill","g":"basic","tag":"基本：when の使い方","q":"___ I study, I listen to music.","sub":"勉強するとき、私は音楽を聴きます。","ans":0,"ch":["When","Because","But","So"],"ex":"「〜するとき」はwhenを使います。becauseは「なぜなら」、butは「しかし」です。"},

{"t":"fill","g":"basic","tag":"基本：when の使い方","q":"When I ___ sad, I watch movies.","sub":"悲しいとき、私は映画を見ます。","ans":0,"ch":["am","is","are","be"],"ex":"主語がIのとき、be動詞はamを使います。"},

{"t":"fill","g":"basic","tag":"基本：when の使い方","q":"I play soccer ___ it is sunny.","sub":"晴れているとき、私はサッカーをします。","ans":0,"ch":["when","where","who","what"],"ex":"「〜のとき」という意味の接続詞はwhenです。"},

{"t":"fill","g":"basic","tag":"基本：when の使い方","q":"When my brother ___ free, he plays games.","sub":"弟は暇なとき、ゲームをします。","ans":0,"ch":["is","am","are","be"],"ex":"主語がmy brother（三人称単数）のとき、be動詞はisを使います。"},

{"t":"fill","g":"basic","tag":"基本：when の使い方","q":"When we are free, we ___ TV.","sub":"暇なとき、私たちはテレビを見ます。","ans":0,"ch":["watch","watchs","watches","watching"],"ex":"主語がweのとき、動詞は原形（watch）を使います。watchesはhe/she/itのときです。"},

{"t":"fill","g":"basic","tag":"基本：when の使い方","q":"___ it rains, I stay home.","sub":"雨のとき、私は家にいます。","ans":0,"ch":["When","What","Where","Who"],"ex":"「〜のとき」はwhenです。what/where/whoは疑問詞なので別の使い方をします。"},

// ===== fill: willの誤用 =====

{"t":"fill","g":"will","tag":"注意：when節にwillは使わない","q":"When I ___ home, I will eat dinner.","sub":"家に帰ったら、夕食を食べます。","ans":0,"ch":["get","will get","am get","gets"],"ex":"when節（〜するとき）の中ではwillを使いません。「帰ったら」でも現在形getを使います。"},

{"t":"fill","g":"will","tag":"注意：when節にwillは使わない","q":"When it ___ cold, I wear a coat.","sub":"寒くなったとき、私はコートを着ます。","ans":0,"ch":["is","will be","are","be"],"ex":"when節の中ではwillを使わず、現在形を使います。will beではなくisが正しいです。"},

{"t":"fill","g":"will","tag":"注意：when節にwillは使わない","q":"I will help you when you ___ ready.","sub":"準備ができたら、手伝います。","ans":0,"ch":["are","will be","is","am"],"ex":"when節の中ではwillを使いません。will beではなくareが正しいです。主語がyouなのでareを使います。"},

// ===== arrange: 並べ替え =====

{"t":"arrange","g":"arrange","tag":"並べ替え","words":["When","I","am","hungry","I","eat","rice",",","."],"ans":"When I am hungry, I eat rice.","sub":"お腹がすいているとき、私はご飯を食べます。","ex":"When＋主語＋動詞, 主語＋動詞 の語順です。文頭のWhenは大文字で始め、コンマを忘れずに。"},

{"t":"arrange","g":"arrange","tag":"並べ替え","words":["I","listen","to","music","when","I","study","."],"ans":"I listen to music when I study.","sub":"勉強するとき、私は音楽を聴きます。","ex":"whenが文の途中に来るとき、コンマは不要です。"},

{"t":"arrange","g":"arrange","tag":"並べ替え","words":["When","it","rains","I","stay","home",",","."],"ans":"When it rains, I stay home.","sub":"雨のとき、私は家にいます。","ex":"When＋主語＋動詞, 主語＋動詞 の語順です。whenが文頭なので大文字Wで始めます。"},

{"t":"arrange","g":"arrange","tag":"並べ替え","words":["She","drinks","tea","when","she","is","tired","."],"ans":"She drinks tea when she is tired.","sub":"疲れているとき、彼女はお茶を飲みます。","ex":"whenが文の途中に来るとき、コンマは不要です。主語sheにはdrinks（三単現のs）が必要です。"},

{"t":"arrange","g":"arrange","tag":"並べ替え","words":["When","he","is","free","he","plays","soccer",",","."],"ans":"When he is free, he plays soccer.","sub":"暇なとき、彼はサッカーをします。","ex":"文頭whenのあとにコンマが必要です。heなのでplays（三単現のs）が必要です。"},

{"t":"arrange","g":"arrange","tag":"並べ替え","words":["I","watch","TV","when","I","am","free","."],"ans":"I watch TV when I am free.","sub":"暇なとき、私はテレビを見ます。","ex":"whenが文の途中なのでコンマは不要です。"},

{"t":"arrange","g":"arrange","tag":"並べ替え","words":["When","my","mother","is","busy","I","cook","dinner",",","."],"ans":"When my mother is busy, I cook dinner.","sub":"母が忙しいとき、私が夕食を作ります。","ex":"When＋主語＋動詞, 主語＋動詞 の語順。コンマを忘れずに。"},

{"t":"arrange","g":"arrange","tag":"並べ替え","words":["We","go","to","the","park","when","the","weather","is","nice","."],"ans":"We go to the park when the weather is nice.","sub":"天気がいいとき、私たちは公園に行きます。","ex":"whenが文の途中なのでコンマは不要です。"},

{"t":"arrange","g":"arrange","tag":"並べ替え","words":["When","I","am","happy","I","sing","songs",",","."],"ans":"When I am happy, I sing songs.","sub":"嬉しいとき、私は歌を歌います。","ex":"文頭whenのあとにコンマが必要です。"},

{"t":"arrange","g":"arrange","tag":"並べ替え","words":["He","reads","books","when","he","is","on","the","train","."],"ans":"He reads books when he is on the train.","sub":"電車の中にいるとき、彼は本を読みます。","ex":"whenが文の途中なのでコンマは不要です。主語heにはreads（三単現のs）が必要です。"},

// ===== error: 誤り指摘 =====

{"t":"error","g":"error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nWhen I will get home, I eat dinner.","ans":0,"ch":["will get","When","home","eat"],"ex":"when節の中ではwillを使いません。「帰ったら」でも現在形getを使います。will get → get が正しいです。"},

{"t":"error","g":"error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nWhen she are tired, she goes to bed.","ans":0,"ch":["are","she","tired","goes"],"ex":"主語がsheのとき、be動詞はisを使います。are → is が正しいです。"},

{"t":"error","g":"error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nWhen I am free I read books.","ans":0,"ch":["free I","When","am","read"],"ex":"whenが文頭のとき、when節の後にコンマ（,）が必要です。free, I read... が正しいです。"},

{"t":"error","g":"error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nI will go to the park when it will be sunny.","ans":0,"ch":["will be","will go","park","when"],"ex":"when節の中ではwillを使いません。will be → is が正しいです。"},

{"t":"error","g":"error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nWhen I am hungry, I eats lunch.","ans":0,"ch":["eats","When","hungry","lunch"],"ex":"主語がIのとき、動詞は原形（eat）を使います。eatsはhe/she/itのときに使います。"},

{"t":"error","g":"error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nWhen he is free, he play soccer.","ans":0,"ch":["play","When","free","is"],"ex":"主語がheのとき、一般動詞には三単現のs（plays）が必要です。play → plays が正しいです。"},

{"t":"error","g":"error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nI listen music when I study.","ans":0,"ch":["listen music","when","I","study"],"ex":"listenの後には前置詞toが必要です。listen to music が正しい表現です。"},

{"t":"error","g":"error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nWhen I am happy, I sings a song.","ans":0,"ch":["sings","When","happy","song"],"ex":"主語がIのとき、動詞は原形（sing）を使います。sings → sing が正しいです。"},

// ===== translate: 和訳（選択肢） =====

{"t":"translate","g":"translate","tag":"和訳問題","q":"When I am tired, I go to bed early.","ans":0,"ch":["疲れているとき、私は早く寝ます。","疲れているとき、私は遅く起きます。","私は疲れているので、早く寝ます。","私は疲れているけれど、早く寝ます。"],"ex":"When＝「〜のとき」です。becauseと混同しないように。becauseは「なぜなら〜だから」という理由を表します。"},

{"t":"translate","g":"translate","tag":"和訳問題","q":"I listen to music when I study.","ans":0,"ch":["勉強するとき、私は音楽を聴きます。","音楽を聴くとき、私は勉強します。","私は勉強して、音楽を聴きます。","私は音楽を聴くから、勉強します。"],"ex":"when節が文の後半にある場合も「〜するとき」と訳します。前後の主節と従属節の関係に注意しましょう。"},

{"t":"translate","g":"translate","tag":"和訳問題","q":"When it is hot, we swim in the sea.","ans":0,"ch":["暑いとき、私たちは海で泳ぎます。","暑いので、私たちは海で泳ぎます。","海が暑いとき、私たちは泳ぎます。","私たちは暑いとき、海に行きます。"],"ex":"When it is hot＝「暑いとき」。itは天気・気温を表す形式主語です。"},

{"t":"translate","g":"translate","tag":"和訳問題","q":"She reads books when she is on the train.","ans":0,"ch":["電車の中にいるとき、彼女は本を読みます。","電車の中にいるので、彼女は本を読みます。","彼女は電車の本を読みます。","電車に乗るとき、彼女は本を買います。"],"ex":"when she is on the train＝「彼女が電車の中にいるとき」。when節が後半にあるのでコンマなしです。"},

{"t":"translate","g":"translate","tag":"和訳問題","q":"When my father is free, he watches TV.","ans":0,"ch":["父が暇なとき、彼はテレビを見ます。","父が暇なので、彼はテレビを見ます。","父がテレビを見るとき、彼は暇です。","父が暇なとき、彼はテレビを買います。"],"ex":"When my father is free＝「父が暇なとき」。freeは「暇な・自由な」という意味です。"},

{"t":"translate","g":"translate","tag":"和訳問題","q":"I will call you when I get to the station.","ans":0,"ch":["駅に着いたら、電話します。","駅に着いたので、電話します。","駅に着くつもりなので、電話します。","電話したら、駅に着きます。"],"ex":"when I get to the station＝「駅に着いたとき」。when節の中はwillを使わず、現在形getを使います。"},

{"t":"translate","g":"translate","tag":"和訳問題","q":"When she is happy, she sings songs.","ans":0,"ch":["嬉しいとき、彼女は歌を歌います。","悲しいとき、彼女は歌を歌います。","嬉しいので、彼女は歌を歌います。","嬉しいとき、彼女は歌を聴きます。"],"ex":"When she is happy＝「彼女が嬉しいとき」。主語がsheなのでsinGsと三単現のsがついています。"},

// ===== ja_to_en: 日本語→英語（選択肢） =====

{"t":"translate","g":"ja_to_en","tag":"日本語→英語","q":"「お腹がすいているとき、私はラーメンを食べます。」の正しい英語は？","ans":0,"ch":["When I am hungry, I eat ramen.","When I am hungry, I will eat ramen.","When I will be hungry, I eat ramen.","Because I am hungry, I eat ramen."],"ex":"when節の中にwillは使いません。またwhenとbecauseを混同しないように。becauseは理由を表します。"},

{"t":"translate","g":"ja_to_en","tag":"日本語→英語","q":"「晴れているとき、私たちは外で遊びます。」の正しい英語は？","ans":0,"ch":["When it is sunny, we play outside.","When it is sunny we play outside.","When it will be sunny, we play outside.","When it is sunny, we plays outside."],"ex":"文頭whenのあとにコンマが必要です。when節にwillは不要。主語weなのでplays（三単現のs）は不要です。"},

{"t":"translate","g":"ja_to_en","tag":"日本語→英語","q":"「疲れているとき、彼は早く寝ます。」の正しい英語は？","ans":0,"ch":["When he is tired, he goes to bed early.","When he is tired, he go to bed early.","When he will be tired, he goes to bed early.","When he is tired he goes to bed early."],"ex":"主語がheなのでgo → goes（三単現のs）。when節にwillは不要。文頭whenのあとにコンマが必要です。"},

{"t":"translate","g":"ja_to_en","tag":"日本語→英語","q":"「勉強するとき、私は音楽を聴きます。」の正しい英語は？","ans":0,"ch":["I listen to music when I study.","I listen to music when I will study.","I listen music when I study.","When I study I listen to music."],"ex":"listen to musicが正しい表現。when節にwillは不要。whenが後半にくるのでコンマは不要です。"},

{"t":"translate","g":"ja_to_en","tag":"日本語→英語","q":"「暇なとき、私は本を読みます。」の正しい英語は？","ans":0,"ch":["When I am free, I read books.","When I am free I read books.","When I will be free, I read books.","When I are free, I read books."],"ex":"文頭whenのあとにコンマが必要。I am free（Iにはam）。when節にwillは不要です。"},

{"t":"translate","g":"ja_to_en","tag":"日本語→英語","q":"「電車に乗っているとき、彼女は音楽を聴きます。」の正しい英語は？","ans":0,"ch":["She listens to music when she is on the train.","She listen to music when she is on the train.","She listens to music when she will be on the train.","She listens music when she is on the train."],"ex":"主語sheにはlistens（三単現のs）。when節にwillは不要。listen to musicが正しい表現です。"},

{"t":"translate","g":"ja_to_en","tag":"日本語→英語","q":"「準備ができたら、出発します。」の正しい英語は？","ans":0,"ch":["I will leave when I am ready.","I will leave when I will be ready.","I leave when I am ready.","When I am ready I will leave."],"ex":"when節の中にwillは使いません。will be ready → am ready が正しいです。主節にはwillを使えます。"},

// ===== dialog: 対話補充 =====

{"t":"dialog","g":"dialog","tag":"対話補充問題","q":"A: What do you do when you are free?\nB: ___ I am free, I watch YouTube.","sub":"空欄に入る正しい語を選んでください","ans":0,"ch":["When","Because","But","If"],"ex":"「〜のとき」はwhenです。becauseは「なぜなら」、ifは「もし〜なら」という条件を表します。"},

{"t":"dialog","g":"dialog","tag":"対話補充問題","q":"A: Do you study at home?\nB: Yes. I listen to music when I ___.","sub":"空欄に入る正しい語を選んでください","ans":0,"ch":["study","studies","will study","studying"],"ex":"when節の中では動詞の原形（現在形）を使います。studiesはhe/she/itのときです。willは不要です。"},

{"t":"dialog","g":"dialog","tag":"対話補充問題","q":"A: When do you eat breakfast?\nB: I eat breakfast ___ I get up.","sub":"空欄に入る正しい語を選んでください","ans":0,"ch":["when","because","but","so"],"ex":"「〜するとき」はwhenです。whenが文の途中に来るのでコンマは不要です。"},

{"t":"dialog","g":"dialog","tag":"対話補充問題","q":"A: What will you do when you get home?\nB: When I get home, I ___ my homework.","sub":"空欄に入る正しい語句を選んでください","ans":0,"ch":["will do","do","doing","does"],"ex":"when節（従属節）の中は現在形、主節にはwillを使えます。ここはwhen節ではなく主節なのでwill doが正しいです。"},

{"t":"dialog","g":"dialog","tag":"対話補充問題","q":"A: ___ it is cold, what do you do?\nB: I drink hot tea.","sub":"空欄に入る正しい語を選んでください","ans":0,"ch":["When","Because","And","So"],"ex":"「〜のとき」はwhenです。文頭に来るのでWhenと大文字で始めます。"},

// ===== typing: タイピング =====

{"t":"typing","g":"typing","tag":"タイピング問題","q":"「お腹がすいているとき、私はご飯を食べます。」を英語で入力してください。","sub":"When I am hungry, ... で始めましょう","ans":["When I am hungry I eat rice","When I am hungry, I eat rice"],"ex":"文頭whenのあとにコンマが正式ですが、ここでは省略も正解とします。when節の中にwillは不要です。"},

{"t":"typing","g":"typing","tag":"タイピング問題","q":"「疲れているとき、私は早く寝ます。」を英語で入力してください。","sub":"When I am tired, ... で始めましょう","ans":["When I am tired I go to bed early","When I am tired, I go to bed early"],"ex":"go to bed＝「寝る・就寝する」。earlyは「早く」。when節の中にwillは不要です。"},

{"t":"typing","g":"typing","tag":"タイピング問題","q":"「勉強するとき、私は音楽を聴きます。」を英語で入力してください。","sub":"I listen to music when ... の形で書きましょう","ans":["I listen to music when I study"],"ex":"listen to musicが正しい表現です。listen musicとしないように注意。when節が後半なのでコンマは不要です。"},

{"t":"typing","g":"typing","tag":"タイピング問題","q":"「晴れているとき、私たちは公園へ行きます。」を英語で入力してください。","sub":"When it is sunny, ... で始めましょう","ans":["When it is sunny we go to the park","When it is sunny, we go to the park"],"ex":"天気を表すときは主語にitを使います。when節の中にwillは不要です。"},

{"t":"typing","g":"typing","tag":"タイピング問題","q":"「準備ができたら、電話します。」を英語で入力してください。","sub":"I will call you when ... の形で書きましょう","ans":["I will call you when I am ready","I will call you when you are ready"],"ex":"when節の中にwillは使いません。will be ready → am ready / are ready が正しいです。"},

{"t":"typing","g":"typing","tag":"タイピング問題","q":"「暇なとき、彼は映画を見ます。」を英語で入力してください。","sub":"When he is free, ... で始めましょう","ans":["When he is free he watches movies","When he is free, he watches movies"],"ex":"主語heには三単現のsが必要です。watch → watches。when節の中にwillは不要です。"},

{"t":"typing","g":"typing","tag":"タイピング問題","q":"「家に帰ったら、宿題をします。」を英語で入力してください。","sub":"I will do my homework when ... の形で書きましょう","ans":["I will do my homework when I get home"],"ex":"when節の中にwillは使いません。will get home → get home が正しいです。"},

// ===== fill: 総合 =====

{"t":"fill","g":"review","tag":"総合確認","q":"___ I am free, I read books or watch TV.","sub":"暇なとき、私は本を読んだりテレビを見たりします。","ans":0,"ch":["When","Because","So","But"],"ex":"「〜するとき」はwhenです。becauseは「なぜなら」、soは「だから」、butは「しかし」です。"},

{"t":"fill","g":"review","tag":"総合確認","q":"When I feel sick, I ___ to the hospital.","sub":"具合が悪いとき、私は病院に行きます。","ans":0,"ch":["go","goes","will go","going"],"ex":"主語がIのとき、動詞は原形（go）を使います。when節の中なのでwill goは不正解です。"},

{"t":"fill","g":"review","tag":"総合確認","q":"My sister studies hard when she ___ an exam.","sub":"試験があるとき、姉は一生懸命勉強します。","ans":0,"ch":["has","have","will have","is"],"ex":"主語がmy sister（三人称単数）なのでhave → has（三単現のs）。when節の中にwillは不要です。"},

{"t":"fill","g":"review","tag":"総合確認","q":"When I ___ to school, I talk with my friends.","sub":"学校へ行くとき、私は友達と話します。","ans":0,"ch":["go","goes","will go","am go"],"ex":"主語がIのとき、動詞は原形（go）。when節の中にwillは使いません。"},

{"t":"fill","g":"review","tag":"総合確認","q":"I feel happy ___ I eat good food.","sub":"よいものを食べるとき、私は幸せを感じます。","ans":0,"ch":["when","because","but","so"],"ex":"「〜のとき」はwhenです。「おいしいから幸せ」という理由を言うならbecauseですが、「〜のとき幸せを感じる」という意味ならwhenです。"},

{"t":"fill","g":"review","tag":"総合確認","q":"When it ___ dark, I turn on the lights.","sub":"暗くなったとき、私は電気をつけます。","ans":0,"ch":["gets","will get","get","getting"],"ex":"主語がitのとき、動詞には三単現のs（gets）が必要です。when節の中にwillは不要です。"},

{"t":"fill","g":"review","tag":"総合確認","q":"___ you are ready, please tell me.","sub":"準備ができたら、教えてください。","ans":0,"ch":["When","If","Because","But"],"ex":"「〜のとき・〜したら」はwhenです。ifも「もし〜なら」という条件を表しますが、whenは「〜するとき」という時間・場面を表します。"},

{"t":"fill","g":"review","tag":"総合確認","q":"She feels better when she ___ with her friends.","sub":"友達と話すとき、彼女は気分がよくなります。","ans":0,"ch":["talks","talk","will talk","talking"],"ex":"主語がsheのとき、動詞には三単現のs（talks）が必要です。when節の中にwillは不要です。"},

];

// 初級はタイピング問題を除外
var ALL_Q_BASIC = ALL_Q.filter(function(q){ return q.t !== 'typing'; });
var _orig_all = ALL_Q;
ALL_Q = ALL_Q_BASIC;

// 中級・上級は全問（タイピング含む）
var ALL_Q_MID = _orig_all;
var ALL_Q_ADV = _orig_all;
var IMGS = {};