// if と when 総合問題データ
// when 40% / if 40% / 混合判断 20%
// 約50問

var COMBINED_Q = [

// ===== when 問題（約20問 / 40%） =====

{"t":"fill","g":"comb_when","tag":"when の練習","q":"___ I am tired, I go to bed early.","sub":"疲れているとき、私は早く寝ます。","ans":0,"ch":["When","If","Because","So"],"ex":"「〜するとき（時間・場面）」はwhenです。ifは「もし〜なら（条件）」を表します。"},

{"t":"fill","g":"comb_when","tag":"when の練習","q":"I listen to music ___ I study.","sub":"勉強するとき、音楽を聴きます。","ans":0,"ch":["when","if","but","because"],"ex":"「〜するとき」はwhenです。whenが文の途中なのでコンマは不要です。"},

{"t":"arrange","g":"comb_when","tag":"when の練習","words":["When","it","rains","I","stay","home",",","."],"ans":"When it rains, I stay home.","sub":"雨のとき、私は家にいます。","ex":"When＋主語＋動詞, 主語＋動詞 の語順です。when節の中にwillは不要です。"},

{"t":"error","g":"comb_when","tag":"when の練習","q":"次の文の間違っている部分を選んでください。\nWhen I will get home, I eat dinner.","ans":0,"ch":["will get","When","home","eat"],"ex":"when節の中ではwillを使いません。will get → get が正しいです。"},

{"t":"translate","g":"comb_when","tag":"when の練習","q":"When she is happy, she sings songs.","ans":0,"ch":["嬉しいとき、彼女は歌を歌います。","嬉しければ、彼女は歌を歌います。","嬉しいので、彼女は歌を歌います。","嬉しいとき、彼女は歌を聴きます。"],"ex":"When＝「〜のとき」です。ifは「もし〜なら（条件）」、becauseは「なぜなら」です。"},

{"t":"fill","g":"comb_when","tag":"when の練習","q":"___ my mother is busy, I cook dinner.","sub":"母が忙しいとき、私が夕食を作ります。","ans":0,"ch":["When","If","Because","And"],"ex":"「〜のとき（場面・状況）」はwhenです。ifは「もし〜なら（条件）」を表します。"},

{"t":"translate","g":"comb_when","tag":"when の練習","q":"「勉強するとき、私は音楽を聴きます。」の正しい英語は？","ans":0,"ch":["I listen to music when I study.","I listen to music if I study.","I listen to music because I study.","I listen to music when I will study."],"ex":"「〜するとき（時間・場面）」はwhenです。when節の中にwillは不要です。"},

{"t":"fill","g":"comb_when","tag":"when の練習","q":"When he is free, he ___ soccer.","sub":"暇なとき、彼はサッカーをします。","ans":0,"ch":["plays","play","will plays","playing"],"ex":"主語がheのとき、一般動詞には三単現のs（plays）が必要です。"},

{"t":"arrange","g":"comb_when","tag":"when の練習","words":["She","drinks","tea","when","she","is","tired","."],"ans":"She drinks tea when she is tired.","sub":"疲れているとき、彼女はお茶を飲みます。","ex":"whenが文の途中なのでコンマは不要です。主語sheにはdrinks（三単現のs）が必要です。"},

{"t":"fill","g":"comb_when","tag":"when の練習","q":"I feel happy ___ I eat good food.","sub":"よいものを食べるとき、嬉しい気持ちになります。","ans":0,"ch":["when","if","because","but"],"ex":"「〜するとき（時間・場面）」はwhenです。becauseは「なぜなら」です。"},

{"t":"translate","g":"comb_when","tag":"when の練習","q":"When I am on the train, I read books.","ans":0,"ch":["電車の中にいるとき、本を読みます。","電車の中にいれば、本を読みます。","電車の中にいるので、本を読みます。","電車の中にいるとき、本を買います。"],"ex":"When＝「〜のとき」です。ifは「もし〜なら（条件）」を表します。"},

{"t":"fill","g":"comb_when","tag":"when の練習","q":"___ I am free, I watch TV or read books.","sub":"暇なとき、テレビを見たり本を読んだりします。","ans":0,"ch":["When","If","So","Because"],"ex":"「〜するとき（場面）」はwhenです。「いつも暇なとき」という習慣的な場面を表しています。"},

{"t":"error","g":"comb_when","tag":"when の練習","q":"次の文の間違っている部分を選んでください。\nWhen she are tired, she goes to bed.","ans":0,"ch":["are","she","tired","goes"],"ex":"主語がsheのとき、be動詞はisを使います。are → is が正しいです。"},

{"t":"translate","g":"comb_when","tag":"when の練習","q":"「暇なとき、彼は映画を見ます。」の正しい英語は？","ans":0,"ch":["When he is free, he watches movies.","If he is free, he watches movies.","When he will be free, he watches movies.","When he is free he watches movies."],"ex":"「〜するとき（場面）」はwhenです。文頭whenのあとにコンマが必要です。"},

{"t":"fill","g":"comb_when","tag":"when の練習","q":"She reads books ___ she is on the train.","sub":"電車に乗っているとき、彼女は本を読みます。","ans":0,"ch":["when","if","but","because"],"ex":"「〜するとき（時間・場面）」はwhenです。"},

{"t":"arrange","g":"comb_when","tag":"when の練習","words":["When","I","am","happy","I","sing","songs",",","."],"ans":"When I am happy, I sing songs.","sub":"嬉しいとき、歌を歌います。","ex":"文頭whenのあとにコンマが必要です。when節の中にwillは不要です。"},

{"t":"fill","g":"comb_when","tag":"when の練習","q":"___ it gets dark, I turn on the lights.","sub":"暗くなったとき、電気をつけます。","ans":0,"ch":["When","If","Because","So"],"ex":"「〜なるとき（変化の場面）」はwhenです。いつもそうする習慣を表します。"},

{"t":"translate","g":"comb_when","tag":"when の練習","q":"I will call you when I get to the station.","ans":0,"ch":["駅に着いたら（着いたとき）、電話します。","駅に着いたら（もし着けば）、電話します。","駅に着くので、電話します。","駅に着いたので、電話します。"],"ex":"when I get to the station＝「駅に着いたとき」。when節の中はwillを使わず現在形getを使います。"},

{"t":"fill","g":"comb_when","tag":"when の練習","q":"My sister studies hard ___ she has an exam.","sub":"試験があるとき、姉は一生懸命勉強します。","ans":0,"ch":["when","if","but","so"],"ex":"「〜があるとき（場面）」はwhenです。試験があるのが確定した場面なのでwhenが自然です。"},

{"t":"fill","g":"comb_when","tag":"when の練習","q":"___ you are ready, please tell me.","sub":"準備ができたら（準備ができたとき）、教えてください。","ans":0,"ch":["When","If","Because","But"],"ex":"「〜なとき」はwhenです。準備ができる場面を表しています。ifも可能ですが、whenの方が自然です。"},

// ===== if 問題（約20問 / 40%） =====

{"t":"fill","g":"comb_if","tag":"if の練習","q":"___ it rains tomorrow, I will stay home.","sub":"もし明日雨が降ったら、家にいます。","ans":0,"ch":["If","When","Because","So"],"ex":"「もし〜なら（条件）」はifです。未来の不確かな条件を表します。"},

{"t":"fill","g":"comb_if","tag":"if の練習","q":"I will help you ___ you need me.","sub":"必要なら、手伝います。","ans":0,"ch":["if","when","but","because"],"ex":"「もし〜なら（条件）」はifです。if節が後半なのでコンマは不要です。"},

{"t":"arrange","g":"comb_if","tag":"if の練習","words":["If","you","are","hungry","eat","something",",","."],"ans":"If you are hungry, eat something.","sub":"お腹がすいているなら、何か食べてください。","ex":"If＋主語＋動詞, 命令文 の語順です。コンマを忘れずに。"},

{"t":"error","g":"comb_if","tag":"if の練習","q":"次の文の間違っている部分を選んでください。\nIf it will rain, I will stay home.","ans":0,"ch":["will rain","If","rain","stay"],"ex":"if節の中ではwillを使いません。will rain → rains が正しいです。"},

{"t":"translate","g":"comb_if","tag":"if の練習","q":"If he studies hard, he will pass the test.","ans":0,"ch":["もし一生懸命勉強すれば、テストに合格するでしょう。","勉強するとき、テストに合格するでしょう。","一生懸命勉強するので、テストに合格します。","勉強しているとき、テストに合格します。"],"ex":"If＝「もし〜なら（条件）」です。whenは「〜のとき（時間・場面）」です。"},

{"t":"fill","g":"comb_if","tag":"if の練習","q":"___ she is tired, she will go to bed early.","sub":"もし疲れているなら、早く寝るでしょう。","ans":0,"ch":["If","When","Because","And"],"ex":"「もし〜なら（不確かな条件）」はifです。"},

{"t":"translate","g":"comb_if","tag":"if の練習","q":"「もし明日晴れなら、ピクニックに行きます。」の正しい英語は？","ans":0,"ch":["If it is sunny tomorrow, we will go on a picnic.","When it is sunny tomorrow, we will go on a picnic.","If it will be sunny tomorrow, we will go on a picnic.","If it is sunny tomorrow we will go on a picnic."],"ex":"「もし〜なら」はifです。if節の中にwillは不要です。"},

{"t":"fill","g":"comb_if","tag":"if の練習","q":"If the weather ___ nice, we will go to the beach.","sub":"天気がよければ、海に行きます。","ans":0,"ch":["is","will be","are","be"],"ex":"if節の中ではwillを使いません。天気を表すitが主語なのでisが正しいです。"},

{"t":"arrange","g":"comb_if","tag":"if の練習","words":["He","will","come","to","the","party","if","he","is","free","."],"ans":"He will come to the party if he is free.","sub":"暇なら、彼はパーティーに来るでしょう。","ex":"ifが文の途中なのでコンマは不要です。if節の中にwillは不要です。"},

{"t":"fill","g":"comb_if","tag":"if の練習","q":"You will feel better ___ you take a rest.","sub":"休めば、気分がよくなるでしょう。","ans":0,"ch":["if","when","but","because"],"ex":"「もし〜なら（条件）」はifです。"},

{"t":"translate","g":"comb_if","tag":"if の練習","q":"If you are cold, close the window.","ans":0,"ch":["もし寒いなら、窓を閉めてください。","寒いとき、窓を閉めてください。","寒いので、窓を閉めてください。","もし寒いなら、窓を開けてください。"],"ex":"If＝「もし〜なら（条件）」です。命令文（close the window）と組み合わせています。"},

{"t":"fill","g":"comb_if","tag":"if の練習","q":"___ I have time, I will visit you.","sub":"時間があれば、会いに行きます。","ans":0,"ch":["If","When","Because","So"],"ex":"「もし〜なら（条件）」はIfです。"},

{"t":"error","g":"comb_if","tag":"if の練習","q":"次の文の間違っている部分を選んでください。\nIf I am hungry I will eat lunch.","ans":0,"ch":["hungry I","If","am","eat"],"ex":"ifが文頭のとき、if節の後にコンマが必要です。hungry, I will... が正しいです。"},

{"t":"translate","g":"comb_if","tag":"if の練習","q":"「もし彼が来るなら、私も行きます。」の正しい英語は？","ans":0,"ch":["If he comes, I will go too.","When he comes, I will go too.","If he will come, I will go too.","If he comes I will go too."],"ex":"「もし〜なら（条件）」はifです。主語heにはcomes（三単現のs）が必要です。"},

{"t":"fill","g":"comb_if","tag":"if の練習","q":"I will give you my umbrella ___ you need it.","sub":"必要なら傘をあげます。","ans":0,"ch":["if","when","but","so"],"ex":"「もし〜なら（条件）」はifです。if節が後半なのでコンマは不要です。"},

{"t":"arrange","g":"comb_if","tag":"if の練習","words":["If","you","need","help","please","ask","me",",","."],"ans":"If you need help, please ask me.","sub":"もし助けが必要なら、聞いてください。","ex":"文頭Ifのあとにコンマが必要です。命令文（please ask me）と組み合わせます。"},

{"t":"fill","g":"comb_if","tag":"if の練習","q":"___ you don't understand, ask your teacher.","sub":"もし理解できなければ、先生に聞いてください。","ans":0,"ch":["If","When","Because","So"],"ex":"「もし〜なら（条件）」はIfです。命令文（ask your teacher）と組み合わせています。"},

{"t":"translate","g":"comb_if","tag":"if の練習","q":"She will come if she finishes her homework.","ans":0,"ch":["宿題が終われば、彼女は来るでしょう。","宿題を終えるとき、彼女は来ます。","宿題を終えたので、彼女は来ます。","宿題が終われば、彼女は帰ります。"],"ex":"if she finishes her homework＝「もし彼女が宿題を終えれば」。主語sheにはfinishes（三単現のs）が必要です。"},

{"t":"fill","g":"comb_if","tag":"if の練習","q":"If my father ___ home early, we will eat out.","sub":"父が早く帰ってきたら、外食します。","ans":0,"ch":["comes","will come","come","coming"],"ex":"if節の中ではwillを使いません。主語がmy fatherなのでcomes（三単現のs）を使います。"},

{"t":"fill","g":"comb_if","tag":"if の練習","q":"___ you practice every day, you will get better.","sub":"毎日練習すれば、上手になるでしょう。","ans":0,"ch":["If","When","Because","And"],"ex":"「もし〜なら（条件）」はIfです。未来の結果を表す主節にはwillが使えます。"},

// ===== 混合判断問題（約10問 / 20%） =====

{"t":"fill","g":"comb_mixed","tag":"if か when か","q":"___ I am hungry, I always eat rice. （いつもお腹がすいたとき、ご飯を食べます）","sub":"「いつも〜するとき」という習慣の場面です","ans":0,"ch":["When","If","Because","So"],"ex":"「〜するとき（いつもの場面・習慣）」はwhenです。ifは「もし〜なら（確かでない条件）」を表します。"},

{"t":"fill","g":"comb_mixed","tag":"if か when か","q":"___ it rains tomorrow, the game will stop. （もし明日雨なら、試合は止まるでしょう）","sub":"「明日雨かどうかわからない」という条件です","ans":0,"ch":["If","When","Because","But"],"ex":"「もし〜なら（不確かな条件）」はifです。whenは「〜するとき（確定した場面）」を表します。"},

{"t":"fill","g":"comb_mixed","tag":"if か when か","q":"I eat breakfast ___ I get up. （起きたとき、朝食を食べます）","sub":"「起きたら必ずそうする」という習慣です","ans":0,"ch":["when","if","but","because"],"ex":"「〜するとき（必ずそうする習慣・場面）」はwhenです。ifは「もし〜なら（不確かな条件）」です。"},

{"t":"fill","g":"comb_mixed","tag":"if か when か","q":"I will call you ___ I arrive. （着いたら電話します）","sub":"「着く」のは確定しているので場面を表します","ans":0,"ch":["when","if","but","so"],"ex":"「〜したとき（確定している場面）」はwhenです。ifは「もし〜なら（不確か）」を表します。"},

{"t":"fill","g":"comb_mixed","tag":"if か when か","q":"___ you don't study, you will fail the test. （勉強しなければ、テストに落ちるでしょう）","sub":"「勉強しない」という仮定・条件です","ans":0,"ch":["If","When","Because","So"],"ex":"「もし〜なら（条件・仮定）」はIfです。whenは「〜するとき（場面）」を表します。"},

{"t":"fill","g":"comb_mixed","tag":"if か when か","q":"___ I listen to this song, I feel happy. （この曲を聴くといつも、嬉しくなります）","sub":"「いつもそうなる」という習慣です","ans":0,"ch":["When","If","Because","But"],"ex":"「〜するとき（いつもそうなる習慣）」はwhenです。ifは不確かな条件を表します。"},

{"t":"fill","g":"comb_mixed","tag":"if か when か","q":"___ you need anything, let me know. （何か必要なものがあれば、知らせてください）","sub":"「必要かどうかわからない」という条件です","ans":0,"ch":["If","When","Because","So"],"ex":"「もし〜なら（不確かな条件）」はIfです。whenは「〜するとき（場面）」を表します。"},

{"t":"translate","g":"comb_mixed","tag":"if か when か","q":"次の2文のうち、正しい意味の違いを選んでください。\n①When I see him, I smile. ②If I see him, I smile.","ans":0,"ch":["①彼を見るといつも笑顔になる　②もし彼を見たら笑顔になる","①もし彼を見たら笑顔になる　②彼を見るといつも笑顔になる","①②どちらも同じ意味","①彼を見るので笑顔になる　②彼を見るけど笑顔にならない"],"ex":"whenは「〜するとき（習慣・場面）」、ifは「もし〜なら（条件）」です。①は習慣、②は条件を表します。"},

{"t":"fill","g":"comb_mixed","tag":"if か when か","q":"___ she grows up, she wants to be a doctor. （大人になったとき、医師になりたい）","sub":"「大人になる」のは確定している将来の場面です","ans":0,"ch":["When","If","Because","So"],"ex":"「〜するとき（確定している将来の場面）」はwhenです。ifは「もし〜なら（不確か）」を表します。"},

{"t":"fill","g":"comb_mixed","tag":"if か when か","q":"___ you are free this weekend, let's play tennis. （もしこの週末暇なら、テニスをしましょう）","sub":"「暇かどうかわからない」という条件です","ans":0,"ch":["If","When","Because","But"],"ex":"「もし〜なら（不確かな条件）」はIfです。相手の予定は不確かなので、ifが自然です。"},

];

// 初級はタイピング問題を除外（この問題セットにはtyping問題なし）
var COMBINED_Q_BASIC = COMBINED_Q;
var COMBINED_Q_MID = COMBINED_Q;
var COMBINED_Q_ADV = COMBINED_Q;
