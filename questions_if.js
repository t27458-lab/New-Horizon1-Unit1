// 接続詞 if 練習問題データ
// 中学2年生 / 中1レベル語彙 / 約60問

var IF_Q = [

// ===== fill: 基本（ifの使い方） =====

{"t":"fill","g":"if_basic","tag":"基本：if の使い方","q":"___ it rains, I stay home.","sub":"雨が降ったら、私は家にいます。","ans":0,"ch":["If","When","But","Because"],"ex":"「もし〜なら」という条件はifで表します。whenは「〜するとき」、becauseは「なぜなら」です。"},

{"t":"fill","g":"if_basic","tag":"基本：if の使い方","q":"I will call you ___ I am free.","sub":"暇だったら、電話します。","ans":0,"ch":["if","when","but","so"],"ex":"「もし〜なら」はifです。ifが文の途中に来るときは小文字のifを使い、コンマは不要です。"},

{"t":"fill","g":"if_basic","tag":"基本：if の使い方","q":"___ you are hungry, eat this.","sub":"もしお腹がすいているなら、これを食べてください。","ans":0,"ch":["If","When","So","And"],"ex":"「もし〜なら」はIfです。文頭に来るときは大文字で始め、コンマが必要です。"},

{"t":"fill","g":"if_basic","tag":"基本：if の使い方","q":"___ I have time, I will help you.","sub":"時間があれば、手伝います。","ans":0,"ch":["If","Because","But","When"],"ex":"「もし〜なら（条件）」はifです。whenは時間・場面を表し、ifは条件を表します。"},

{"t":"fill","g":"if_basic","tag":"基本：if の使い方","q":"I will go to the party ___ I finish my homework.","sub":"宿題が終わったら（もし終われば）、パーティーに行きます。","ans":0,"ch":["if","when","but","because"],"ex":"「もし〜なら」はifです。文の途中なのでコンマは不要です。"},

{"t":"fill","g":"if_basic","tag":"基本：if の使い方","q":"___ she is tired, she will go to bed early.","sub":"もし彼女が疲れているなら、早く寝るでしょう。","ans":0,"ch":["If","When","Because","So"],"ex":"「もし〜なら」はIfです。文頭なのでIfと大文字で始め、コンマが必要です。"},

{"t":"fill","g":"if_basic","tag":"基本：if の使い方","q":"___ it is cold, wear a coat.","sub":"もし寒いなら、コートを着てください。","ans":0,"ch":["If","When","But","And"],"ex":"「もし〜なら」はIfです。命令文でも使えます。"},

{"t":"fill","g":"if_basic","tag":"基本：if の使い方","q":"I will buy it ___ it is cheap.","sub":"安ければ買います。","ans":0,"ch":["if","when","but","because"],"ex":"「もし〜なら」はifです。whenは時間・場面、ifは条件です。"},

{"t":"fill","g":"if_basic","tag":"基本：if の使い方","q":"___ you need help, please ask me.","sub":"もし助けが必要なら、聞いてください。","ans":0,"ch":["If","When","Because","So"],"ex":"「もし〜なら」はIfです。命令文（ask me）と組み合わせてよく使われます。"},

{"t":"fill","g":"if_basic","tag":"基本：if の使い方","q":"___ he studies hard, he will pass the test.","sub":"一生懸命勉強すれば、テストに合格するでしょう。","ans":0,"ch":["If","When","Because","But"],"ex":"「もし〜なら」はIfです。結果を表す主節にはwillが使えます。"},

// ===== fill: if節でwillを使わない =====

{"t":"fill","g":"if_will","tag":"注意：if節にwillは使わない","q":"If it ___ tomorrow, I will stay home.","sub":"もし明日雨なら、家にいます。","ans":0,"ch":["rains","will rain","rained","rain"],"ex":"if節（もし〜なら）の中ではwillを使いません。「明日雨なら」でも現在形rainsを使います。"},

{"t":"fill","g":"if_will","tag":"注意：if節にwillは使わない","q":"I will help you if you ___ ready.","sub":"準備ができたら、手伝います。","ans":0,"ch":["are","will be","is","am"],"ex":"if節の中ではwillを使いません。will beではなくareが正しいです。主語がyouなのでareを使います。"},

{"t":"fill","g":"if_will","tag":"注意：if節にwillは使わない","q":"If he ___ free, he will come to the party.","sub":"もし彼が暇なら、パーティーに来るでしょう。","ans":0,"ch":["is","will be","are","be"],"ex":"if節の中ではwillを使いません。主語がheなのでbe動詞はisです。"},

{"t":"fill","g":"if_will","tag":"注意：if節にwillは使わない","q":"She will go out if the weather ___ nice.","sub":"天気がよければ、彼女は外出するでしょう。","ans":0,"ch":["is","will be","are","be"],"ex":"if節の中ではwillを使いません。天気を表すitが主語なのでisが正しいです。"},

{"t":"fill","g":"if_will","tag":"注意：if節にwillは使わない","q":"If I ___ hungry, I will eat some bread.","sub":"もしお腹がすいたら、パンを食べます。","ans":0,"ch":["am","will be","is","are"],"ex":"if節の中ではwillを使いません。主語がIなのでbe動詞はamです。"},

// ===== arrange: 並べ替え =====

{"t":"arrange","g":"if_arrange","tag":"並べ替え","words":["If","it","rains","I","will","stay","home",",","."],"ans":"If it rains, I will stay home.","sub":"もし雨が降ったら、家にいます。","ex":"If＋主語＋動詞, 主語＋will＋動詞 の語順です。if節の中にwillは不要です。"},

{"t":"arrange","g":"if_arrange","tag":"並べ替え","words":["I","will","call","you","if","I","am","free","."],"ans":"I will call you if I am free.","sub":"暇なら電話します。","ex":"ifが文の途中に来るとき、コンマは不要です。"},

{"t":"arrange","g":"if_arrange","tag":"並べ替え","words":["If","you","are","hungry","eat","this",",","."],"ans":"If you are hungry, eat this.","sub":"お腹がすいているなら、これを食べてください。","ex":"If＋主語＋動詞, 命令文 の語順です。コンマを忘れずに。"},

{"t":"arrange","g":"if_arrange","tag":"並べ替え","words":["He","will","pass","the","test","if","he","studies","hard","."],"ans":"He will pass the test if he studies hard.","sub":"一生懸命勉強すれば、彼はテストに合格するでしょう。","ex":"ifが文の途中なのでコンマは不要です。主語heにはstudies（三単現のs）が必要です。"},

{"t":"arrange","g":"if_arrange","tag":"並べ替え","words":["If","she","is","tired","she","will","go","to","bed",",","."],"ans":"If she is tired, she will go to bed.","sub":"もし疲れているなら、彼女は寝るでしょう。","ex":"文頭Ifのあとにコンマが必要です。if節の中にwillは不要です。"},

{"t":"arrange","g":"if_arrange","tag":"並べ替え","words":["I","will","buy","it","if","it","is","cheap","."],"ans":"I will buy it if it is cheap.","sub":"安ければ買います。","ex":"ifが文の途中なのでコンマは不要です。if節の中にwillは不要です。"},

{"t":"arrange","g":"if_arrange","tag":"並べ替え","words":["If","you","need","help","please","ask","me",",","."],"ans":"If you need help, please ask me.","sub":"もし助けが必要なら、聞いてください。","ex":"文頭Ifのあとにコンマが必要です。命令文（please ask me）と組み合わせます。"},

{"t":"arrange","g":"if_arrange","tag":"並べ替え","words":["We","will","go","to","the","beach","if","the","weather","is","nice","."],"ans":"We will go to the beach if the weather is nice.","sub":"天気がよければ、海に行きます。","ex":"ifが文の途中なのでコンマは不要です。"},

// ===== error: 誤り指摘 =====

{"t":"error","g":"if_error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nIf it will rain, I will stay home.","ans":0,"ch":["will rain","If","rain","stay"],"ex":"if節の中ではwillを使いません。「雨が降ったら」でも現在形rainsを使います。will rain → rains が正しいです。"},

{"t":"error","g":"if_error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nIf he are free, he will come.","ans":0,"ch":["are","If","free","come"],"ex":"主語がheのとき、be動詞はisを使います。are → is が正しいです。"},

{"t":"error","g":"if_error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nIf I am hungry I will eat lunch.","ans":0,"ch":["hungry I","If","am","eat"],"ex":"ifが文頭のとき、if節の後にコンマ（,）が必要です。hungry, I will... が正しいです。"},

{"t":"error","g":"if_error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nI will go out if the weather will be nice.","ans":0,"ch":["will be","will go","out","if"],"ex":"if節の中ではwillを使いません。will be → is が正しいです。"},

{"t":"error","g":"if_error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nIf I am free, I helps you.","ans":0,"ch":["helps","If","free","you"],"ex":"主語がIのとき、動詞は原形（help）を使います。helps → help が正しいです。"},

{"t":"error","g":"if_error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nIf he study hard, he will pass.","ans":0,"ch":["study","If","hard","pass"],"ex":"主語がheのとき、一般動詞には三単現のs（studies）が必要です。study → studies が正しいです。"},

{"t":"error","g":"if_error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nIf you need help, please asks me.","ans":0,"ch":["asks","If","need","me"],"ex":"命令文（please ask）では動詞の原形を使います。asks → ask が正しいです。"},

{"t":"error","g":"if_error","tag":"誤り指摘","q":"次の文の間違っている部分を選んでください。\nShe will come if she will finish her homework.","ans":0,"ch":["will finish","will come","if","homework"],"ex":"if節の中ではwillを使いません。will finish → finishes が正しいです。"},

// ===== translate: 和訳 =====

{"t":"translate","g":"if_translate","tag":"和訳問題","q":"If it rains, I will stay home.","ans":0,"ch":["もし雨が降ったら、家にいます。","雨が降るとき、家にいます。","雨が降るので、家にいます。","雨が降ったとき、家にいます。"],"ex":"If＝「もし〜なら」という条件です。whenは「〜のとき」、becauseは「〜なので」です。"},

{"t":"translate","g":"if_translate","tag":"和訳問題","q":"I will help you if you are busy.","ans":0,"ch":["もし忙しいなら、手伝います。","忙しいとき、手伝います。","忙しいので、手伝います。","忙しいけど、手伝います。"],"ex":"if you are busy＝「もしあなたが忙しいなら」。if節が後半なのでコンマなしです。"},

{"t":"translate","g":"if_translate","tag":"和訳問題","q":"If he studies hard, he will pass the test.","ans":0,"ch":["もし一生懸命勉強すれば、テストに合格するでしょう。","勉強するとき、テストに合格するでしょう。","一生懸命勉強するので、テストに合格します。","勉強したとき、テストに合格しました。"],"ex":"If he studies hard＝「もし彼が一生懸命勉強すれば」。主節のwillは未来の結果を表します。"},

{"t":"translate","g":"if_translate","tag":"和訳問題","q":"If you are hungry, eat something.","ans":0,"ch":["もしお腹がすいているなら、何か食べてください。","お腹がすいているとき、何か食べてください。","お腹がすいているから、何か食べてください。","お腹がすいているけど、何か食べません。"],"ex":"If you are hungry＝「もしお腹がすいているなら」。命令文（eat something）と組み合わせています。"},

{"t":"translate","g":"if_translate","tag":"和訳問題","q":"She will come to the party if she is free.","ans":0,"ch":["暇なら、彼女はパーティーに来るでしょう。","暇なとき、彼女はパーティーに来ます。","暇なので、彼女はパーティーに来ます。","暇なとき、彼女はパーティーに行きます。"],"ex":"if she is free＝「もし彼女が暇なら」。if節が後半なのでコンマなしです。"},

{"t":"translate","g":"if_translate","tag":"和訳問題","q":"If the weather is nice, we will go to the park.","ans":0,"ch":["天気がよければ、公園に行きます。","天気がいいとき、公園に行きます。","天気がいいので、公園に行きます。","天気がよければ、公園に行きました。"],"ex":"If the weather is nice＝「もし天気がよければ」。if節の中にwillは使いません。"},

{"t":"translate","g":"if_translate","tag":"和訳問題","q":"I will buy this book if it is cheap.","ans":0,"ch":["安ければ、この本を買います。","安いとき、この本を買います。","安いので、この本を買います。","安ければ、この本を読みます。"],"ex":"if it is cheap＝「もしそれが安ければ」。if節の中にwillは使いません。"},

// ===== ja_to_en: 日本語→英語 =====

{"t":"translate","g":"if_ja_to_en","tag":"日本語→英語","q":"「もし明日晴れなら、海に行きます。」の正しい英語は？","ans":0,"ch":["If it is sunny tomorrow, I will go to the sea.","If it will be sunny tomorrow, I will go to the sea.","When it is sunny tomorrow, I will go to the sea.","If it is sunny tomorrow I will go to the sea."],"ex":"if節の中にwillは使いません。文頭ifのあとにコンマが必要です。"},

{"t":"translate","g":"if_ja_to_en","tag":"日本語→英語","q":"「もし疲れているなら、早く寝てください。」の正しい英語は？","ans":0,"ch":["If you are tired, go to bed early.","If you will be tired, go to bed early.","When you are tired, go to bed early.","If you are tired go to bed early."],"ex":"if節の中にwillは使いません。文頭ifのあとにコンマが必要です。命令文と組み合わせます。"},

{"t":"translate","g":"if_ja_to_en","tag":"日本語→英語","q":"「一生懸命練習すれば、上手になるでしょう。」の正しい英語は？","ans":0,"ch":["If you practice hard, you will get better.","If you will practice hard, you will get better.","When you practice hard, you will get better.","If you practice hard you will get better."],"ex":"if節の中にwillは使いません。文頭ifのあとにコンマが必要です。"},

{"t":"translate","g":"if_ja_to_en","tag":"日本語→英語","q":"「もし彼が来るなら、私も行きます。」の正しい英語は？","ans":0,"ch":["If he comes, I will go too.","If he will come, I will go too.","When he comes, I will go too.","If he comes I will go too."],"ex":"if節の中にwillは使いません。主語heにはcomes（三単現のs）が必要です。"},

{"t":"translate","g":"if_ja_to_en","tag":"日本語→英語","q":"「お腹がすいているなら、このサンドイッチを食べてください。」の正しい英語は？","ans":0,"ch":["If you are hungry, eat this sandwich.","If you will be hungry, eat this sandwich.","Because you are hungry, eat this sandwich.","If you are hungry eat this sandwich."],"ex":"if節の中にwillは使いません。becauseは「なぜなら」でここでは不自然です。"},

{"t":"translate","g":"if_ja_to_en","tag":"日本語→英語","q":"「天気がよければ、私たちはピクニックに行きます。」の正しい英語は？","ans":0,"ch":["We will go on a picnic if the weather is nice.","We will go on a picnic if the weather will be nice.","We go on a picnic if the weather is nice.","We will go on a picnic when the weather is nice."],"ex":"if節の中にwillは使いません。if節が後半なのでコンマは不要です。"},

{"t":"translate","g":"if_ja_to_en","tag":"日本語→英語","q":"「宿題が終わったら、ゲームをしていいですよ。」の正しい英語は？","ans":0,"ch":["You can play games if you finish your homework.","You can play games if you will finish your homework.","You can play games when you finish your homework.","You can play games if you finishes your homework."],"ex":"if節の中にwillは使いません。主語がyouなのでfinish（原形）を使います。"},

// ===== dialog: 対話補充 =====

{"t":"dialog","g":"if_dialog","tag":"対話補充問題","q":"A: What will you do if it rains tomorrow?\nB: ___ it rains, I will watch movies at home.","sub":"空欄に入る正しい語を選んでください","ans":0,"ch":["If","When","Because","But"],"ex":"「もし〜なら」はIfです。whenは「〜するとき」、ifは「もし〜なら」という条件を表します。"},

{"t":"dialog","g":"if_dialog","tag":"対話補充問題","q":"A: Can you help me?\nB: Sure, I will help you ___ I am free.","sub":"空欄に入る正しい語を選んでください","ans":0,"ch":["if","when","but","because"],"ex":"「もし〜なら」はifです。if節が後半なのでコンマは不要です。"},

{"t":"dialog","g":"if_dialog","tag":"対話補充問題","q":"A: Are you going to the park?\nB: Yes. ___ the weather is nice, I will go.","sub":"空欄に入る正しい語を選んでください","ans":0,"ch":["If","When","So","Because"],"ex":"「もし〜なら」はIfです。文頭なのでIfと大文字で始めます。"},

{"t":"dialog","g":"if_dialog","tag":"対話補充問題","q":"A: What should I do if I feel sick?\nB: ___ you feel sick, please see a doctor.","sub":"空欄に入る正しい語を選んでください","ans":0,"ch":["If","When","But","So"],"ex":"「もし〜なら」はIfです。命令文と組み合わせています。"},

{"t":"dialog","g":"if_dialog","tag":"対話補充問題","q":"A: Will you come to the party?\nB: I will come ___ I finish my homework.","sub":"空欄に入る正しい語句を選んでください","ans":0,"ch":["if","when","but","so"],"ex":"「もし〜なら（条件）」はifです。whenは「〜するとき」という時間・場面を表します。"},

// ===== typing: タイピング =====

{"t":"typing","g":"if_typing","tag":"タイピング問題","q":"「もし雨が降ったら、家にいます。」を英語で入力してください。","sub":"If it rains, ... で始めましょう","ans":["If it rains I will stay home","If it rains, I will stay home"],"ex":"if節の中にwillは不要です。文頭Ifのあとにコンマが正式です。"},

{"t":"typing","g":"if_typing","tag":"タイピング問題","q":"「もし暇なら、手伝います。」を英語で入力してください。","sub":"I will help you if ... の形で書きましょう","ans":["I will help you if I am free","I will help you if you are free"],"ex":"if節の中にwillは使いません。if節が後半なのでコンマは不要です。"},

{"t":"typing","g":"if_typing","tag":"タイピング問題","q":"「一生懸命勉強すれば、テストに合格するでしょう。」を英語で入力してください。","sub":"If you study hard, ... で始めましょう","ans":["If you study hard you will pass the test","If you study hard, you will pass the test"],"ex":"if節の中にwillは不要です。文頭Ifのあとにコンマが正式です。"},

{"t":"typing","g":"if_typing","tag":"タイピング問題","q":"「天気がよければ、公園に行きます。」を英語で入力してください。","sub":"If the weather is nice, ... で始めましょう","ans":["If the weather is nice we will go to the park","If the weather is nice, we will go to the park"],"ex":"天気を表すときは主語にitを使います。if節の中にwillは不要です。"},

{"t":"typing","g":"if_typing","tag":"タイピング問題","q":"「もし疲れているなら、早く寝てください。」を英語で入力してください。","sub":"If you are tired, ... で始めましょう","ans":["If you are tired go to bed early","If you are tired, go to bed early"],"ex":"if節の中にwillは使いません。文頭Ifのあとにコンマが正式です。"},

{"t":"typing","g":"if_typing","tag":"タイピング問題","q":"「彼が来るなら、私も行きます。」を英語で入力してください。","sub":"I will go too if ... の形で書きましょう","ans":["I will go too if he comes"],"ex":"if節の中にwillは使いません。主語heにはcomes（三単現のs）が必要です。"},

// ===== fill: 総合 =====

{"t":"fill","g":"if_review","tag":"総合確認","q":"___ I have money, I will buy a new bike.","sub":"お金があれば、新しい自転車を買います。","ans":0,"ch":["If","When","Because","So"],"ex":"「もし〜なら（条件）」はIfです。becauseは「なぜなら」、soは「だから」です。"},

{"t":"fill","g":"if_review","tag":"総合確認","q":"You will feel better ___ you sleep well.","sub":"よく眠れば、気分がよくなるでしょう。","ans":0,"ch":["if","when","but","because"],"ex":"「もし〜なら」はifです。whenは時間・場面、ifは条件を表します。"},

{"t":"fill","g":"if_review","tag":"総合確認","q":"If my father ___ home early, we will eat out.","sub":"父が早く帰ってきたら、外食します。","ans":0,"ch":["comes","will come","come","coming"],"ex":"if節の中ではwillを使いません。主語がmy fatherなのでcomes（三単現のs）を使います。"},

{"t":"fill","g":"if_review","tag":"総合確認","q":"___ you don't understand, ask your teacher.","sub":"もし理解できなかったら、先生に聞いてください。","ans":0,"ch":["If","When","But","So"],"ex":"「もし〜なら」はIfです。命令文（ask your teacher）と組み合わせています。"},

{"t":"fill","g":"if_review","tag":"総合確認","q":"If she ___ practice every day, she will get better.","sub":"毎日練習すれば、彼女は上手になるでしょう。","ans":0,"ch":["practices","practice","will practice","practicing"],"ex":"if節の中にwillは使いません。主語がsheなのでpractices（三単現のs）を使います。"},

{"t":"fill","g":"if_review","tag":"総合確認","q":"I will give you my umbrella ___ you need it.","sub":"必要なら、傘をあげます。","ans":0,"ch":["if","when","but","so"],"ex":"「もし〜なら（条件）」はifです。whenは「〜するとき」という時間・場面を表します。"},

];

// 初級はタイピング問題を除外
var IF_Q_BASIC = IF_Q.filter(function(q){ return q.t !== 'typing'; });
var IF_Q_MID = IF_Q;
var IF_Q_ADV = IF_Q;
