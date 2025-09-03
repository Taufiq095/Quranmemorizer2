import type { Surah } from './types';  

export const surahCatalog: Record<string, Surah> = {  
  // 95. At-Tin  
  '95': {  
    number: 95,  
    name: 'التين',  
    englishName: 'At-Tin',  
    ayahCount: 8,  
    revelationPlace: 'Meccan',  
    ayat: [  
      { number: 1, arabic: 'وَالتِّينِ وَالزَّيْتُونِ', transliteration: 'Wa t-tīni wa z-zaytūn', translation: 'By the fig and the olive' },  
      { number: 2, arabic: 'وَطُورِ سِينِينَ', transliteration: 'Wa ṭūri sīnīn', translation: 'And [by] Mount Sinai' },  
      { number: 3, arabic: 'وَهَٰذَا الْبَلَدِ الْأَمِينِ', transliteration: 'Wa hādhā l-baladi l-amīn', translation: 'And [by] this secure city [Makkah]' },  
      { number: 4, arabic: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ', transliteration: 'Laqad khalaqnā l-insāna fī aḥsani taqwīm', translation: 'We have certainly created man in the best of stature' },  
      { number: 5, arabic: 'ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ', transliteration: 'Thumma radadnāhu asfala sāfilīn', translation: 'Then We return him to the lowest of the low' },  
      { number: 6, arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ', transliteration: 'Illā alladhīna āmanū wa ʿamilū ṣ-ṣāliḥāti falahum ajrun ghayru mamnūn', translation: 'Except for those who believe and do righteous deeds, for they will have a reward uninterrupted' },  
      { number: 7, arabic: 'فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ', transliteration: 'Famā yukadhdhibuka baʿdu bi d-dīn', translation: 'So what yet causes you to deny the Recompense?' },  
      { number: 8, arabic: 'أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ', transliteration: 'Alaysa llāhu bi-aḥkami l-ḥākimīn', translation: 'Is not Allah the most just of judges?' }  
    ]  
  },  

  // 96. Al-‘Alaq  
  '96': {  
    number: 96,  
    name: 'العلق',  
    englishName: "Al-'Alaq",  
    ayahCount: 19,  
    revelationPlace: 'Meccan',  
    ayat: [  
      { number: 1, arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', transliteration: 'Iqraʾ bismi rabbika alladhī khalaq', translation: 'Recite in the name of your Lord who created' },  
      { number: 2, arabic: 'خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ', transliteration: 'Khalaqa l-insāna min ʿalaq', translation: 'Created man from a clinging substance' },  
      { number: 3, arabic: 'اقْرَأْ وَرَبُّكَ الْأَكْرَمُ', transliteration: 'Iqraʾ wa rabbuka l-akram', translation: 'Recite, and your Lord is the most Generous' },  
      { number: 4, arabic: 'الَّذِي عَلَّمَ بِالْقَلَمِ', transliteration: 'Alladhī ʿallama bil-qalam', translation: 'Who taught by the pen' },  
      { number: 5, arabic: 'عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ', transliteration: 'ʿAllama l-insāna mā lam yaʿlam', translation: 'Taught man that which he knew not' },  
      { number: 6, arabic: 'كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَىٰ', transliteration: 'Kallā inna l-insāna la-yaṭghā', translation: 'No! Indeed, man transgresses' },  
      { number: 7, arabic: 'أَن رَّآهُ اسْتَغْنَىٰ', transliteration: 'An raʾāhu staghna', translation: 'Because he sees himself self-sufficient' },  
      { number: 8, arabic: 'إِنَّ إِلَىٰ رَبِّكَ الرُّجْعَىٰ', transliteration: 'Inna ilā rabbika r-rujʿā', translation: 'Indeed, to your Lord is the return' },  
      { number: 9, arabic: 'أَرَأَيْتَ الَّذِي يَنْهَىٰ', transliteration: 'Araʾayta alladhī yanhā', translation: 'Have you seen the one who forbids' },  
      { number: 10, arabic: 'عَبْدًا إِذَا صَلَّىٰ', transliteration: 'ʿAbdan idhā ṣallā', translation: 'A servant when he prays?' },  
      { number: 11, arabic: 'أَرَأَيْتَ إِن كَانَ عَلَى الْهُدَىٰ', transliteration: 'Araʾayta in kāna ʿala l-hudā', translation: 'Have you seen if he is upon guidance' },  
      { number: 12, arabic: 'أَوْ أَمَرَ بِالتَّقْوَىٰ', transliteration: 'Aw amara bi t-taqwā', translation: 'Or enjoins righteousness?' },  
      { number: 13, arabic: 'أَرَأَيْتَ إِن كَذَّبَ وَتَوَلَّىٰ', transliteration: 'Araʾayta in kadhdhaba wa tawallā', translation: 'Have you seen if he denies and turns away' },  
      { number: 14, arabic: 'أَلَمْ يَعْلَمْ بِأَنَّ اللَّهَ يَرَىٰ', transliteration: 'Alam yaʿlam bi-anna llāha yarā', translation: 'Does he not know that Allah sees?' },  
      { number: 15, arabic: 'كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعًا بِالنَّاصِيَةِ', transliteration: 'Kallā laʾin lam yantahi lanasfaʿan bi n-nāṣiya', translation: 'No! If he does not desist, We will surely drag him by the forelock' },  
      { number: 16, arabic: 'نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ', transliteration: 'Nāṣiyatin kādhibatin khāṭiʾa', translation: 'A lying, sinning forelock' },  
      { number: 17, arabic: 'فَلْيَدْعُ نَادِيَهُ', transliteration: 'Falyadʿu nādiyah', translation: 'Then let him call his associates' },  
      { number: 18, arabic: 'سَنَدْعُ الزَّبَانِيَةَ', transliteration: 'Sanadʿu z-zabāniya', translation: 'We will call the angels of Hell' },  
      { number: 19, arabic: 'كَلَّا لَا تُطِعْهُ وَاسْجُدْ وَاقْتَرِب', transliteration: 'Kallā lā tuṭiʿhu wasjud wa qtarib', translation: 'No! Do not obey him. But prostrate and draw near [to Allah].' }  
    ]  
  },  

  // 97. Al-Qadr  
  '97': {  
    number: 97,  
    name: 'القدر',  
    englishName: 'Al-Qadr',  
    ayahCount: 5,  
    revelationPlace: 'Meccan',  
    ayat: [  
      { number: 1, arabic: 'إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ', transliteration: 'Innā anzalnāhu fī laylati l-qadr', translation: 'Indeed, We sent it [the Qur’an] down during the Night of Decree.' },  
      { number: 2, arabic: 'وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ', transliteration: 'Wa mā adrāka mā laylatu l-qadr', translation: 'And what can make you know what is the Night of Decree?' },  
      { number: 3, arabic: 'لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ', transliteration: 'Laylatu l-qadri khayrun min alfi shahr', translation: 'The Night of Decree is better than a thousand months.' },  
      { number: 4, arabic: 'تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ', transliteration: 'Tanazzalu l-malāʾikatu wa r-rūḥu fīhā bi-idhni rabbihim min kulli amr', translation: 'The angels and the Spirit descend therein by permission of their Lord for every matter.' },  
      { number: 5, arabic: 'سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ', transliteration: 'Salāmun hiya ḥattā maṭlaʿi l-fajr', translation: 'Peace it is until the emergence of dawn.' }  
    ]  
  },  

   // 98. Al-Bayyinah  
   '98': {  
    number: 98,  
    name: 'البينة',  
    englishName: 'Al-Bayyinah',  
    ayahCount: 8,  
    revelationPlace: 'Madinan',  
    ayat: [  
      { number: 1, arabic: 'لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ', transliteration: 'Lam yakuni lladhīna kafarū min ahli l-kitābi wa l-mushrikīna munfakkīna ḥattā taʾtiyahumu l-bayyinah', translation: 'Those who disbelieved among the People of the Scripture and the polytheists were not to be parted until there came to them clear evidence' },  
      { number: 2, arabic: 'رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً', transliteration: 'Rasūlun mina llāhi yatlū ṣuḥufan muṭahharah', translation: 'A Messenger from Allah, reciting purified scriptures' },  
      { number: 3, arabic: 'فِيهَا كُتُبٌ قَيِّمَةٌ', transliteration: 'Fīhā kutubun qayyimah', translation: 'Within which are correct writings' },  
      { number: 4, arabic: 'وَمَا تَفَرَّقَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِن بَعْدِ مَا جَاءَتْهُمُ الْبَيِّنَةُ', transliteration: 'Wa mā tafarraqa lladhīna ūtū l-kitāba illā min baʿdi mā jāʾathumu l-bayyinah', translation: 'Nor did those who were given the Scripture become divided until after there had come to them clear evidence' },  
      { number: 5, arabic: 'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ ۚ وَذَٰلِكَ دِينُ الْقَيِّمَةِ', transliteration: 'Wa mā umirū illā liyaʿbudū llāha mukhliṣīna lahu d-dīna ḥunafāʾa wa yuqīmū ṣ-ṣalāta wa yuʾtū z-zakāh, wa dhālika dīnu l-qayyimah', translation: 'And they were not commanded except to worship Allah, being sincere to Him in religion, inclining to truth, and to establish prayer and to give zakah. And that is the correct religion.' },  
      { number: 6, arabic: 'إِنَّ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ فِي نَارِ جَهَنَّمَ خَالِدِينَ فِيهَا ۚ أُولَٰئِكَ هُمْ شَرُّ الْبَرِيَّةِ', transliteration: 'Inna lladhīna kafarū min ahli l-kitābi wa l-mushrikīna fī nāri jahannama khālidīna fīhā, ulāʾika hum sharru l-bariyyah', translation: 'Indeed, they who disbelieved among the People of the Scripture and the polytheists will be in the Fire of Hell, abiding eternally therein. Those are the worst of creatures.' },  
      { number: 7, arabic: 'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ هُمْ خَيْرُ الْبَرِيَّةِ', transliteration: 'Inna lladhīna āmanū wa ʿamilū ṣ-ṣāliḥāt, ulāʾika hum khayru l-bariyyah', translation: 'Indeed, they who have believed and done righteous deeds—those are the best of creatures.' },  
      { number: 8, arabic: 'جَزَاؤُهُمْ عِندَ رَبِّهِمْ جَنَّاتُ عَدْنٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۖ رَّضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ ۚ ذَٰلِكَ لِمَنْ خَشِيَ رَبَّهُ', transliteration: 'Jazāʾuhum ʿinda rabbihim jannātu ʿadnin tajrī min taḥtihā l-anhār khālidīna fīhā abadan, raḍiya llāhu ʿanhum wa raḍū ʿanhu, dhālika liman khashiya rabbah', translation: 'Their reward with their Lord will be gardens of perpetual residence beneath which rivers flow, abiding therein forever; Allah being pleased with them and they with Him. That is for whoever has feared his Lord.' }  
    ]  
  },  

  // 99. Az-Zalzalah  
  '99': {  
    number: 99,  
    name: 'الزلزلة',  
    englishName: 'Az-Zalzalah',  
    ayahCount: 8,  
    revelationPlace: 'Madinan',  
    ayat: [  
      { number: 1, arabic: 'إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا', transliteration: 'Idhā zulzilati l-arḍu zilzālahā', translation: 'When the earth is shaken with its [final] earthquake' },  
      { number: 2, arabic: 'وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا', transliteration: 'Wa akhrajati l-arḍu athqālahā', translation: 'And the earth discharges its burdens' },  
      { number: 3, arabic: 'وَقَالَ الْإِنسَانُ مَا لَهَا', transliteration: 'Wa qāla l-insānu mā lahā', translation: 'And man says, “What is [wrong] with it?”' },  
      { number: 4, arabic: 'يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا', transliteration: 'Yawmaʾidhin tuḥaddithu akhbārahā', translation: 'That Day, it will report its news' },  
      { number: 5, arabic: 'بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا', transliteration: 'Bi-anna rabbaka awḥā lahā', translation: 'Because your Lord has commanded it' },  
      { number: 6, arabic: 'يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِّيُرَوْا أَعْمَالَهُمْ', transliteration: 'Yawmaʾidhin yaṣduru n-nāsu ashtātan liyuraw aʿmālahum', translation: 'That Day, the people will depart separated [into categories] to be shown [the result of] their deeds' },  
      { number: 7, arabic: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ', transliteration: 'Faman yaʿmal mithqāla dharratin khayran yarah', translation: 'So whoever does an atom’s weight of good will see it' },  
      { number: 8, arabic: 'وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ', transliteration: 'Wa man yaʿmal mithqāla dharratin sharran yarah', translation: 'And whoever does an atom’s weight of evil will see it.' }  
    ]  
  },  

  // 100. Al-‘Ādiyāt  
  '100': {  
    number: 100,  
    name: 'العاديات',  
    englishName: "Al-'Adiyat",  
    ayahCount: 11,  
    revelationPlace: 'Meccan',  
    ayat: [  
      { number: 1, arabic: 'وَالْعَادِيَاتِ ضَبْحًا', transliteration: 'Wa l-ʿādiyāti ḍabḥā', translation: 'By the racers, panting,' },  
      { number: 2, arabic: 'فَالْمُورِيَاتِ قَدْحًا', transliteration: 'Fa l-mūriyāti qadḥā', translation: 'And the producers of sparks [when striking],' },  
      { number: 3, arabic: 'فَالْمُغِيرَاتِ صُبْحًا', transliteration: 'Fa l-mughīrāti ṣubḥā', translation: 'And the chargers at dawn,' },  
      { number: 4, arabic: 'فَأَثَرْنَ بِهِ نَقْعًا', transliteration: 'Faʾatharna bihi naqʿā', translation: 'Stirring up thereby clouds of dust,' },  
      { number: 5, arabic: 'فَوَسَطْنَ بِهِ جَمْعًا', transliteration: 'Fawasaṭna bihi jamʿā', translation: 'Arriving thereby in the center collectively,' },  
      { number: 6, arabic: 'إِنَّ الْإِنسَانَ لِرَبِّهِ لَكَنُودٌ', transliteration: 'Inna l-insāna lirabbihi lakanūd', translation: 'Indeed mankind, to his Lord, is ungrateful.' },  
      { number: 7, arabic: 'وَإِنَّهُ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ', transliteration: 'Wa innahu ʿalā dhālika lashahīd', translation: 'And indeed, he is to that a witness.' },  
      { number: 8, arabic: 'وَإِنَّهُ لِحُبِّ الْخَيْرِ لَشَدِيدٌ', transliteration: 'Wa innahu liḥubbi l-khayri lashadīd', translation: 'And indeed he is, in love of wealth, intense.' },  
      { number: 9, arabic: 'أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا فِي الْقُبُورِ', transliteration: 'Afalā yaʿlamu idhā buʿthira mā fī l-qubūr', translation: 'But does he not know that when the contents of the graves are scattered' },  
      { number: 10, arabic: 'وَحُصِّلَ مَا فِي الصُّدُورِ', transliteration: 'Wa ḥuṣṣila mā fī ṣ-ṣudūr', translation: 'And that within the breasts is obtained' },  
      { number: 11, arabic: 'إِنَّ رَبَّهُم بِهِمْ يَوْمَئِذٍ لَّخَبِيرٌ', transliteration: 'Inna rabbahum bihim yawmaʾidhin lakhabīr', translation: 'Indeed, their Lord with them, that Day, is [fully] Acquainted.' }  
    ]  
  },  

  // 101. Al-Qāri‘ah
  '101': {
    number: 101,
    name: 'القارعة',
    englishName: 'Al-Qari‘ah',
    ayahCount: 11,
    revelationPlace: 'Meccan',
    ayat: [
      { number: 1, arabic: 'الْقَارِعَةُ', transliteration: 'Al-qāriʿah', translation: 'The Striking Calamity' },
      { number: 2, arabic: 'مَا الْقَارِعَةُ', transliteration: 'Mā l-qāriʿah', translation: 'What is the Striking Calamity?' },
      { number: 3, arabic: 'وَمَا أَدْرَاكَ مَا الْقَارِعَةُ', transliteration: 'Wa mā adrāka mā l-qāriʿah', translation: 'And what can make you know what is the Striking Calamity?' },
      { number: 4, arabic: 'يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ', transliteration: 'Yawma yakūnu n-nāsu ka l-farāshi l-mabthūth', translation: "It is the Day when people will be like moths, dispersed" },
      { number: 5, arabic: 'وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنفُوشِ', transliteration: 'Wa takūnu l-jibālu ka l-ʿihni l-manfūsh', translation: 'And the mountains will be like wool, fluffed up' },
      { number: 6, arabic: 'فَأَمَّا مَنْ ثَقُلَتْ مَوَٰزِينُهُ', transliteration: 'Fa ammā man thaqalat mawāzīnuhu', translation: 'Then as for one whose scales are heavy [with good deeds]' },
      { number: 7, arabic: 'فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ', transliteration: 'Fahuwa fī ʿīshatin rāḍiyah', translation: 'He will be in a pleasant life' },
      { number: 8, arabic: 'وَأَمَّا مَنْ خَفَّتْ مَوَٰزِينُهُ', transliteration: 'Wa ammā man khaffat mawāzīnuhu', translation: 'And as for one whose scales are light' },
      { number: 9, arabic: 'فَأُمِّيهَا هَاوِيَةٌ', transliteration: 'Fa-ummihā hāwiyah', translation: 'His refuge will be an abyss' },
      { number: 10, arabic: 'وَمَا أَدْرَاكَ مَا هِيَهْ', transliteration: 'Wa mā adrāka mā hiyah', translation: "And what can make you know what it is?" },
      { number: 11, arabic: 'نَارٌ حَامِيَةٌ', transliteration: 'Nārun ḥāmiyah', translation: 'It is a Fire, intensely hot' }
    ]
  },

    // 102. At-Takathur
    '102': {
      number: 102,
      name: 'التكاثر',
      englishName: 'At-Takathur',
      ayahCount: 8,
      revelationPlace: 'Meccan',
      ayat: [
        { number: 1, arabic: 'أَلْهَاكُمُ التَّكَاثُرُ', transliteration: 'Alhākumu t-takāthur', translation: 'Competition in [worldly] increase diverts you' },
        { number: 2, arabic: 'حَتَّىٰ زُرْتُمُ الْمَقَابِرَ', transliteration: 'Ḥattā zurtum u l-maqābir', translation: 'Until you visit the graves' },
        { number: 3, arabic: 'كَلَّا سَوْفَ تَعْلَمُونَ', transliteration: 'Kallā sawfa taʿlamūn', translation: 'No. You will come to know' },
        { number: 4, arabic: 'ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ', transliteration: 'Thumma kallā sawfa taʿlamūn', translation: 'Then, no. You will come to know' },
        { number: 5, arabic: 'كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ', transliteration: 'Kallā law taʿlamūna ʿilma l-yaqīn', translation: 'No. If you only knew with knowledge of certainty' },
        { number: 6, arabic: 'لَتَرَوُنَّ الْجَحِيمَ', transliteration: 'Lataraunnna l-jahīm', translation: 'You will surely see the Hellfire' },
        { number: 7, arabic: 'ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِينِ', transliteration: 'Thumma lataraunnahā ʿayna l-yaqīn', translation: 'Then you will surely see it with the eye of certainty' },
        { number: 8, arabic: 'ثُمَّ لَتُسْأَلُنَّ يَوْمَئِذٍ عَنِ النَّعِيمِ', transliteration: 'Thumma latus alunna yawmaʾidhin ʿani n-naʿīm', translation: 'Then you will be asked that Day about pleasure' }
      ]
    },

      // 103. Al-‘Asr
  '103': {
    number: 103,
    name: 'العصر',
    englishName: 'Al-‘Asr',
    ayahCount: 3,
    revelationPlace: 'Meccan',
    ayat: [
      { number: 1, arabic: 'وَالْعَصْرِ', transliteration: 'Wa l-ʿaṣr', translation: 'By time,' },
      { number: 2, arabic: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ', transliteration: 'Inna l-insāna lafī khusr', translation: 'Indeed, mankind is in loss' },
      { number: 3, arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ', transliteration: 'Illā alladhīna āmanū wa ʿamilū ṣ-ṣāliḥāti wa tawāṣaw bil-ḥaqqi wa tawāṣaw bi ṣ-ṣabr', translation: 'Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience' }
    ]
  },

    // 104. Al-Humazah
    '104': {
      number: 104,
      name: 'الهمزة',
      englishName: 'Al-Humazah',
      ayahCount: 9,
      revelationPlace: 'Meccan',
      ayat: [
        { number: 1, arabic: 'وَيْلٌ لِّكُلِّ هُمَزَةٍ لِّمُزَّمَةٍ', transliteration: 'Waylun likulli humazatin limuzammatin', translation: 'Woe to every scorner and mocker' },
        { number: 2, arabic: 'الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ', transliteration: 'Alladhī jamaʿa mālan wa ʿaddadah', translation: 'Who collects wealth and [continuously] counts it' },
        { number: 3, arabic: 'يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ', transliteration: 'Yaḥsubu anna mālahu akhladah', translation: 'He thinks that his wealth will make him immortal' },
        { number: 4, arabic: 'كَلَّا لَيُنبَذَنَّ فِي الْحُطَمَةِ', transliteration: 'Kallā layunbadhanna fī l-ḥuṭamah', translation: 'No! He will surely be thrown into the Crusher' },
        { number: 5, arabic: 'وَمَا أَدْرَاكَ مَا الْحُطَمَةُ', transliteration: 'Wa mā adrāka mā l-ḥuṭamah', translation: 'And what can make you know what is the Crusher?' },
        { number: 6, arabic: 'نَارُ اللَّهِ الْمُوقَدَةُ', transliteration: 'Nāru llāhi l-mūqadah', translation: 'It is the fire of Allah, [eternally] fueled' },
        { number: 7, arabic: 'الَّتِي تَطَّلِعُ عَلَى الْأَفْئِدَةِ', transliteration: 'Allatī taṭalliʿu ʿala l-afidah', translation: 'Which mounts directed at the hearts' },
        { number: 8, arabic: 'إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ', transliteration: 'Innahā ʿalayhim muʾṣadah', translation: 'Indeed, it will be closed down upon them' },
        { number: 9, arabic: 'فِي عَمَدٍ مّمّدُودَةٍ', transliteration: 'Fī ʿamadim mumaddadah', translation: 'In pillars extended' }
      ]
    },
    
  // 105. Al-Fil
  '105': {
    number: 105,
    name: 'الفيل',
    englishName: 'Al-Fil',
    ayahCount: 5,
    revelationPlace: 'Meccan',
    ayat: [
      { number: 1, arabic: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ', transliteration: 'Alam tara kayfa faʿala rabbuka bi-aṣḥābi l-fīl', translation: 'Have you not seen how your Lord dealt with the companions of the elephant?' },
      { number: 2, arabic: 'أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ', transliteration: 'Alam yajʿal kaydahum fī taḍlīl', translation: "Did He not make their plan into misguidance?" },
      { number: 3, arabic: 'وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ', transliteration: 'Wa arsal ʿalayhim ṭayran abābīl', translation: 'And He sent against them birds in flocks' },
      { number: 4, arabic: 'تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ', transliteration: 'Tarmīhim biḥijāratin min sijjīl', translation: 'Striking them with stones of hard clay' },
      { number: 5, arabic: 'فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ', transliteration: 'Fajaʿalahum ka ʿaṣfin maʾkūl', translation: 'And He made them like eaten straw' }
    ]
  },

  // 106. Quraysh
  '106': {
    number: 106,
    name: 'قريش',
    englishName: 'Quraysh',
    ayahCount: 4,
    revelationPlace: 'Meccan',
    ayat: [
      { number: 1, arabic: 'لِإِيلَافِ قُرَيْشٍ', transliteration: 'Li-īlāfi qurayish', translation: 'For the accustomed security of the Quraysh' },
      { number: 2, arabic: 'إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ', transliteration: 'Īlāfihim riḥlat a sh-shitāʾi wa ṣ-ṣayf', translation: 'Their accustomed security [in] the caravan of winter and summer' },
      { number: 3, arabic: 'فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ', transliteration: 'Falyabudū rabba hādhā l-bayt', translation: 'Let them worship the Lord of this House' },
      { number: 4, arabic: 'الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ', transliteration: 'Alladhī aṭʿamahum min jūʿin wa āmanahum min khawf', translation: 'Who has fed them, [saving them] from hunger and made them safe, [saving them] from fear' }
    ]
  },

    // 107. Al-Ma‘un
    '107': {
      number: 107,
      name: 'الماعون',
      englishName: 'Al-Maʿūn',
      ayahCount: 7,
      revelationPlace: 'Meccan',
      ayat: [
        { number: 1, arabic: 'أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ', transliteration: 'Araʾayta alladhī yukadhdhibu bi d-dīn', translation: 'Have you seen the one who denies the Recompense?' },
        { number: 2, arabic: 'فَذَلِكَ الَّذِي يَدُعُّ الْيَتِيمَ', transliteration: 'Fa dhālika alladhī yadʿu l-yatīm', translation: 'For that is the one who repulses the orphan' },
        { number: 3, arabic: 'وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ', transliteration: 'Wa lā yaḥuḍḍu ʿalā ṭaʿāmi l-miskīn', translation: 'And does not encourage the feeding of the poor' },
        { number: 4, arabic: 'فَوَيْلٌ لِّلْمُصَلِّينَ', transliteration: 'Fa waylun lil-muṣallīn', translation: 'So woe to those who pray' },
        { number: 5, arabic: 'الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ', transliteration: 'Alladhīna hum ʿan ṣalātihim sāhūn', translation: '[But] who are heedless of their prayer' },
        { number: 6, arabic: 'الَّذِينَ هُمْ يُرَاءُونَ', transliteration: 'Alladhīna hum yurāʾūn', translation: 'Those who make show [of their deeds]' },
        { number: 7, arabic: 'وَيَمْنَعُونَ الْمَاعُونَ', transliteration: 'Wa yamnaʿūna l-maʿūn', translation: 'And withhold [simple] assistance' }
      ]
    },

  // 108. Al-Kawthar
  '108': {
    number: 108,
    name: 'الكوثر',
    englishName: 'Al-Kawthar',
    ayahCount: 3,
    revelationPlace: 'Meccan',
    ayat: [
      { number: 1, arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ', transliteration: 'Innā aʿṭaynāka l-kawthar', translation: 'Indeed, We have granted you, [O Muhammad], al‑Kawthar.' },
      { number: 2, arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ', transliteration: 'Fa ṣalli li rabbika wanḥar', translation: 'So pray to your Lord and sacrifice [to Him alone].' },
      { number: 3, arabic: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ', transliteration: 'Inna shāniʼaka huwa l-abtar', translation: 'Indeed, your enemy is the one cut off.' }
    ]
  },

  // 109. Al-Kāfirūn
  '109': {
    number: 109,
    name: 'الكافرون',
    englishName: 'Al-Kāfirūn',
    ayahCount: 6,
    revelationPlace: 'Meccan',
    ayat: [
      { number: 1, arabic: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ', transliteration: 'Qul yā ayyuhā l-kāfirūn', translation: 'Say, "O disbelievers."' },
      { number: 2, arabic: 'لَا أَعْبُدُ مَا تَعْبُدُونَ', transliteration: 'Lā aʿbudu mā taʿbudūn', translation: 'I do not worship what you worship.' },
      { number: 3, arabic: 'وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ', transliteration: 'Wa lā antum ʿābidūna mā aʿbud', translation: 'Nor are you worshippers of what I worship.' },
      { number: 4, arabic: 'وَلَا أَنَا عَابِدٌ مَّا عَبَدْتُمْ', transliteration: 'Wa lā anā ʿābidun mā ʿabadtum', translation: 'Nor will I be a worshipper of what you worship.' },
      { number: 5, arabic: 'وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ', transliteration: 'Wa lā antum ʿābidūna mā aʿbud', translation: 'Nor will you be worshippers of what I worship.' },
      { number: 6, arabic: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ', transliteration: 'Lakum dīnukum wa liya dīn', translation: 'For you is your religion, and for me is my religion.' }
    ]
  },

  // 110. An-Nasr (3 āyāt)
  '110': {
    number: 110,
    name: 'النصر',
    englishName: 'An-Nasr',
    ayahCount: 3,
    revelationPlace: 'Medinan',
    ayat: [
      { number: 1, arabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ', transliteration: 'Idhā jāa naṣru llāhi wa l‑fatḥ', translation: 'When the victory of Allah has come and the conquest,' },
      { number: 2, arabic: 'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا', transliteration: 'Wa raʾayta n-nāsa yadkhulūna fī dīni llāhi afwājā', translation: 'And you see the people entering into the religion of Allah in multitudes,' },
      { number: 3, arabic: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا', transliteration: 'Fa sabbiḥ bi-ḥamdi rabbika wa‑istaghfirhu inna hu kāna tawwābā', translation: 'Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.' }
    ]
  },

  // 111. Al-Masad (5 āyāt)
  '111': {
    number: 111,
    name: 'المسد',
    englishName: 'Al-Masad',
    ayahCount: 5,
    revelationPlace: 'Meccan',
    ayat: [
      { number: 1, arabic: 'تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ', transliteration: 'Tabbat yadā abī lahabin wa tabb', translation: 'Perish the hands of Abu Lahab, and perish he!' },
      { number: 2, arabic: 'مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ', transliteration: 'Mā aghnā ʿanhu māluhu wa mā kasab', translation: 'His wealth will not avail him or that which he gained.' },
      { number: 3, arabic: 'سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ', transliteration: 'Sayaslā nāran dhāta lahab', translation: 'He will [enter to] burn in a Fire of [blazing] flame' },
      { number: 4, arabic: 'وَامْرَأَتُهُۥ حَمَّالَةَ الْحَطَبِ', transliteration: 'Wa imraʾatuhu ḥammālata l‑ḥaṭab', translation: 'And his wife [as well]—the carrier of firewood' },
      { number: 5, arabic: 'فِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ', transliteration: 'Fī jīdihā ḥablun min masad', translation: 'Around her neck is a rope of [twisted] fiber.' }
    ]
  },

  // 112. Al-Ikhlās (4 āyāt)
  '112': {
    number: 112,
    name: 'الإخلاص',
    englishName: 'Al-Ikhlās',
    ayahCount: 4,
    revelationPlace: 'Meccan',
    ayat: [
      { number: 1, arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', transliteration: 'Qul huwa llāhu aḥad', translation: 'Say, "He is Allah, [who is] One,' },
      { number: 2, arabic: 'اللَّهُ الصَّمَدُ', transliteration: 'Allāhu ṣ‑ṣamad', translation: 'Allah, the Eternal Refuge.' },
      { number: 3, arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', transliteration: 'Lam yalid wa lam yūlad', translation: 'He neither begets nor is born,' },
      { number: 4, arabic: 'وَلَمْ يَكُن لَهُ كُفُوًا أَحَدٌ', transliteration: 'Wa lam yakun lahu kufuwan aḥad', translation: 'Nor is there to Him any equivalent."' }
    ]
  },

  // 113. Al-Falaq (5 āyāt)
  '113': {
    number: 113,
    name: 'الفلق',
    englishName: 'Al-Falaq',
    ayahCount: 5,
    revelationPlace: 'Meccan',
    ayat: [
      { number: 1, arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', transliteration: 'Qul aʿūdhu bi‑rabbi l‑falaq', translation: 'Say, "I seek refuge in the Lord of daybreak' },
      { number: 2, arabic: 'مِن شَرِّ مَا خَلَقَ', transliteration: 'Min sharri mā khalaq', translation: 'From the evil of that which He created,' },
      { number: 3, arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ', transliteration: 'Wa min sharri ghāsiqin idhā waqab', translation: 'And from the evil of darkness when it settles,' },
      { number: 4, arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ', transliteration: 'Wa min sharri n‑naffāthāti fī l‑ʿuqad', translation: 'And from the evil of those who blow on knots,' },
      { number: 5, arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ', transliteration: 'Wa min sharri ḥāsidin idhā ḥasad', translation: 'And from the evil of an envier when he envies."' }
    ]
  },

  // 114. An-Nās (6 āyāt)
  '114': {
    number: 114,
    name: 'الناس',
    englishName: 'An-Nās',
    ayahCount: 6,
    revelationPlace: 'Meccan',
    ayat: [
      { number: 1, arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', transliteration: 'Qul aʿūdhu bi‑rabbi n‑nās', translation: 'Say, "I seek refuge in the Lord of mankind,' },
      { number: 2, arabic: 'مَلِكِ النَّاسِ', transliteration: 'Maliki n‑nās', translation: 'The Sovereign of mankind,' },
      { number: 3, arabic: 'إِلَٰهِ النَّاسِ', transliteration: 'Ilāhi n‑nās', translation: 'The God of mankind,' },
      { number: 4, arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', transliteration: 'Min sharri l‑waswāsi l‑khannās', translation: 'From the evil of the retreating whisperer—' },
      { number: 5, arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', transliteration: 'Alladhī yuwaswisu fī ṣudūri n‑nās', translation: 'Who whispers in the breasts of mankind,' },
      { number: 6, arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ', transliteration: 'Mina l‑jinnati wa n‑nās', translation: 'Among jinn and among mankind."' }
    ]
  }

    
}