/**
 * Taki's Portfolio — i18n.js
 * 5-language translation system: zh-CN, zh-TW, en, ja, ko
 * Default: zh-CN
 * API: window.i18n.t(key) / i18n.setLang(lang) / i18n.getLang() / i18n.template(key, vars)
 */

// ── TRANSLATION DICTIONARY ───────────────────────────────────────────────────
var TRANS = {
  // ---- NAV ----
  nav_sketchbook: {
    'zh-CN': '速写本',
    'zh-TW': '速寫本',
    'en':    'Sketchbook',
    'ja':    'スケッチブック',
    'ko':    '스케치북'
  },
  nav_works: {
    'zh-CN': '作品',
    'zh-TW': '作品',
    'en':    'Works',
    'ja':    '作品',
    'ko':    '작품'
  },
  nav_experience: {
    'zh-CN': '经历',
    'zh-TW': '經歷',
    'en':    'Experience',
    'ja':    '経歴',
    'ko':    '경력'
  },
  nav_about: {
    'zh-CN': '关于',
    'zh-TW': '關於',
    'en':    'About',
    'ja':    'について',
    'ko':    '소개'
  },
  nav_back: {
    'zh-CN': '← 作品',
    'zh-TW': '← 作品',
    'en':    '← Works',
    'ja':    '← 作品',
    'ko':    '← 작품'
  },

  // ---- INTRO ----
  intro_title: {
    'zh-CN': 'Works.',
    'zh-TW': 'Works.',
    'en':    'Works.',
    'ja':    'Works.',
    'ko':    'Works.'
  },
  intro_sub: {
    'zh-CN': '创新设计工程 · 激进融合',
    'zh-TW': '創新設計工程 · 激進融合',
    'en':    'Innovation Design Engineering · Radical Convergence',
    'ja':    'イノベーションデザイン工学 · ラディカルコンバージェンス',
    'ko':    '이노베이션 디자인 엔지니어링 · 래디컬 컨버전스'
  },

  // ---- CATEGORY LABELS ----
  cat_product: {
    'zh-CN': '产品设计',
    'zh-TW': '產品設計',
    'en':    'Product Design',
    'ja':    'プロダクトデザイン',
    'ko':    '제품 디자인'
  },
  cat_system: {
    'zh-CN': '系统设计',
    'zh-TW': '系統設計',
    'en':    'System Design',
    'ja':    'システムデザイン',
    'ko':    '시스템 디자인'
  },
  cat_social: {
    'zh-CN': '社会创新',
    'zh-TW': '社會創新',
    'en':    'Social Innovation',
    'ja':    'ソーシャルイノベーション',
    'ko':    '소셜 이노베이션'
  },
  cat_interaction: {
    'zh-CN': '交互设计',
    'zh-TW': '交互設計',
    'en':    'Interaction Design',
    'ja':    'インタラクションデザイン',
    'ko':    '인터랙션 디자인'
  },

  // ---- CARD TAGS (contains <br>, use data-i18n-html=true) ----
  card_tag_loop: {
    'zh-CN': '产品设计<br>隐性科技',
    'zh-TW': '產品設計<br>隱性科技',
    'en':    'Product Design<br>Implicit Technology',
    'ja':    'プロダクトデザイン<br>インプリシット・テクノロジー',
    'ko':    '제품 디자인<br>임플리시트 테크놀로지'
  },
  card_tag_aeropod: {
    'zh-CN': '系统设计<br>气候韧性',
    'zh-TW': '系統設計<br>氣候韌性',
    'en':    'System Design<br>Climate Resilience',
    'ja':    'システムデザイン<br>気候レジリエンス',
    'ko':    '시스템 디자인<br>기후 회복탄력성'
  },
  card_tag_mantis: {
    'zh-CN': '社会创新<br>无障碍',
    'zh-TW': '社會創新<br>無障礙',
    'en':    'Social Innovation<br>Accessibility',
    'ja':    'ソーシャルイノベーション<br>アクセシビリティ',
    'ko':    '소셜 이노베이션<br>접근성'
  },
  card_tag_watchglow: {
    'zh-CN': '交互设计<br>时尚科技',
    'zh-TW': '交互設計<br>時尚科技',
    'en':    'Interaction Design<br>Fashion Tech',
    'ja':    'インタラクションデザイン<br>ファッションテック',
    'ko':    '인터랙션 디자인<br>패션 테크'
  },

  // ---- PANEL TAGS ----
  panel_tag_loop: {
    'zh-CN': '产品设计 · 隐性科技',
    'zh-TW': '產品設計 · 隱性科技',
    'en':    'Product Design · Implicit Technology',
    'ja':    'プロダクトデザイン · インプリシット・テクノロジー',
    'ko':    '제품 디자인 · 임플리시트 테크놀로지'
  },
  panel_tag_aeropod: {
    'zh-CN': '系统设计 · 气候韧性',
    'zh-TW': '系統設計 · 氣候韌性',
    'en':    'System Design · Climate Resilience',
    'ja':    'システムデザイン · 気候レジリエンス',
    'ko':    '시스템 디자인 · 기후 회복탄력성'
  },
  panel_tag_mantis: {
    'zh-CN': '社会创新 · 无障碍',
    'zh-TW': '社會創新 · 無障礙',
    'en':    'Social Innovation · Accessibility',
    'ja':    'ソーシャルイノベーション · アクセシビリティ',
    'ko':    '소셜 이노베이션 · 접근성'
  },
  panel_tag_watchglow: {
    'zh-CN': '交互设计 · 时尚科技',
    'zh-TW': '交互設計 · 時尚科技',
    'en':    'Interaction Design · Fashion Tech',
    'ja':    'インタラクションデザイン · ファッションテック',
    'ko':    '인터랙션 디자인 · 패션 테크'
  },

  // ---- PANEL DESIGNER ----
  panel_designer: {
    'zh-CN': '设计：泷',
    'zh-TW': '設計：瀧',
    'en':    'Designed by Taki',
    'ja':    'デザイン：タキ',
    'ko':    '디자인: 타키'
  },

  // ---- PANEL DESCRIPTIONS ----
  desc_loop: {
    'zh-CN': 'LOOP 重新定义了女性健康监测的边界。<strong>\u00D8260mm\u00D7H320mm 智能垃圾桶，嵌入式非侵入式光谱传感器</strong>，在无感状态下监测经期健康。ARM Cortex-M4 处理器、BLE 5.0 无线传输、12个月续航。一种极其克制的设计哲学——最好的技术不是刷存在感，而是以近乎温柔的姿态，填补医学诊断与日常生活的断层。',
    'zh-TW': 'LOOP 重新定義了女性健康監測的邊界。\u00D8260mm\u00D7H320mm 智能垃圾桶，嵌入式非侵入式光譜傳感器，在無感狀態下監測經期健康。ARM Cortex-M4 處理器、BLE 5.0 無線傳輸、12個月續航。一種極其克制的設計哲學——最好的技術不是刷存在感，而是以近乎溫柔的姿態，填補醫學診斷與日常生活的斷層。',
    'en':    'LOOP redefines the boundaries of women\'s health monitoring. A \u00D8260mm\u00D7H320mm smart bin with embedded non-invasive spectral sensors that monitor menstrual health imperceptibly. ARM Cortex-M4 processor, BLE 5.0 wireless transmission, 12-month battery life. A design philosophy of extreme restraint \u2014 the best technology doesn\'t demand attention, but gently bridges the gap between clinical diagnosis and daily life.',
    'ja':    'LOOPは女性の健康モニタリングの境界を再定義します。\u00D8260mm\u00D7H320mmのスマートゴミ箱に非侵襲分光センサーを内蔵し、生理周期の健康状態を違和感なくモニタリング。ARM Cortex-M4プロセッサ、BLE 5.0無線通信、12ヶ月のバッテリー寿命。極限まで抑制されたデザイン哲学\u2014\u2014最高のテクノロジーは存在を主張せず、臨床診断と日常生活のギャップを優しく埋めるのです。',
    'ko':    'LOOP는 여성 건강 모니터링의 경계를 재정의합니다. \u00D8260mm\u00D7H320mm 스마트 쓰레기통에 내장된 비침습적 분광 센서가 생리 주기 건강을 무감각하게 모니터링합니다. ARM Cortex-M4 프로세서, BLE 5.0 무선 전송, 12개월 배터리 수명. 극도의 절제된 디자인 철학 \u2014 최고의 기술은 존재감을 과시하지 않고, 임상 진단과 일상의 간극을 부드럽게 메웁니다.'
  },
  desc_aeropod: {
    'zh-CN': 'Aeropod 是极高技术落地能力的缩影。<strong>IP68 防水铝合金外壳 + 钛合金 \u00D88mm 微孔曝气管，深入地下 40cm</strong>，每 cm\u00B2 含 200 个纳米级气孔。太阳能供电 + 边缘AI芯片预训练 2000+ 全球土壤样本库。从宏观气候命题切入，以微观工程实现最高维度的环保理想。',
    'zh-TW': 'Aeropod 是極高技術落地能力的縮影。IP68 防水鋁合金外殼 + 鈦合金 \u00D88mm 微孔曝氣管，深入地下 40cm，每 cm\u00B2 含 200 個奈米級氣孔。太陽能供電 + 邊緣AI晶片預訓練 2000+ 全球土壤樣本庫。從宏觀氣候命題切入，以微觀工程實現最高維度的環保理想。',
    'en':    'Aeropod epitomizes advanced engineering at scale. IP68 waterproof aluminum alloy housing + titanium \u00D88mm microporous aeration tube, penetrating 40cm underground with 200 nano-scale pores per cm\u00B2. Solar-powered + edge AI chip pre-trained on 2000+ global soil samples. Starting from macro climate challenges, achieving the highest dimension of environmental ideals through micro-engineering.',
    'ja':    'Aeropodは高度な工学の縮図です。IP68防水アルミ合金筐体 + チタン製\u00D88mm微細孔曝気管、地下40cmに貫入し1cm\u00B2あたり200のナノ細孔。太陽光発電 + 2000以上のグローバル土壌サンプルで事前学習されたエッジAIチップ。マクロな気候課題から出発し、ミクロな工学で最高次元の環境理想を実現します。',
    'ko':    'Aeropod는 고도화된 엔지니어링의 축소판입니다. IP68 방수 알루미늄 합금 하우징 + 티타늄 \u00D88mm 미세기공 폭기관, 지하 40cm까지 침투하며 cm\u00B2당 200개의 나노 기공. 태양광 발전 + 2000개 이상의 글로벌 토양 샘플로 사전 학습된 엣지 AI 칩. 거시적 기후 과제에서 출발하여 미시적 공학으로 최고 차원의 환경 이상을 실현합니다.'
  },
  desc_mantis: {
    'zh-CN': 'Mantis 祷告椅展示了设计工程中温情的人文底色。<strong>6061-T6 航空铝合金骨架，4.2kg 自重承重 150kg，折叠体积缩小 70%</strong>。6 自由度 CNC 球铰关节 + 液压阻尼器 + 三层复合压力分布垫。创新的终点不一定是赛博未来，也可以是让每一个人都在自己的信仰与文化中，获得应有的体面。',
    'zh-TW': 'Mantis 禱告椅展示了設計工程中溫情的人文底色。6061-T6 航空鋁合金骨架，4.2kg 自重承重 150kg，折疊體積縮小 70%。6 自由度 CNC 球鉸關節 + 液壓阻尼器 + 三層複合壓力分佈墊。創新的終點不一定是賽博未來，也可以是讓每一個人都在自己的信仰與文化中，獲得應有的體面。',
    'en':    'Mantis prayer chair reveals the warm humanistic core within design engineering. 6061-T6 aerospace aluminum frame, 4.2kg self-weight supporting 150kg, 70% volume reduction when folded. 6-DOF CNC ball joint + hydraulic damper + triple-layer composite pressure-distribution cushion. The endpoint of innovation isn\'t necessarily a cyberpunk future \u2014 it can be ensuring everyone finds dignity within their faith and culture.',
    'ja':    'Mantis祈祷椅子は、デザイン工学における温かな人間性を示します。6061-T6航空アルミ合金フレーム、自重4.2kgで150kgを支持、折り畳み時に体積70%削減。6自由度CNCボールジョイント + 油圧ダンパー + 三層複合圧力分散クッション。革新の到達点はサイバーパンクの未来とは限らず、誰もが信仰と文化の中で尊厳を得られることでもあるのです。',
    'ko':    'Mantis 기도 의자는 디자인 공학 속 따뜻한 인간적 본질을 드러냅니다. 6061-T6 항공 알루미늄 프레임, 자체 중량 4.2kg으로 150kg 지지, 접이식 부피 70% 감소. 6자유도 CNC 볼 조인트 + 유압 댐퍼 + 3중 복합 압력 분산 쿠션. 혁신의 종착점은 사이버펑크 미래가 아닐 수도 있습니다 \u2014 모든 이가 자신의 신앙과 문화 속에서 존엄을 누릴 수 있게 하는 것일 수도 있습니다.'
  },
  desc_watchglow: {
    'zh-CN': 'WATCH GLOW 将智能穿戴从工具升级为时尚宣言。<strong>46mm 方表表盘 \u00D7 10.2mm 厚度，铝合金机身 + 蓝宝石玻璃，仅重 50g</strong>。核心创新\u201C电子吧唧\u201D\u2014\u2014可拆卸动态徽章模块，通过 NFC 实现社交互动与自我表达。内嵌式滚轮旋钮与宝石装饰表带，100+ 运动模式、女性健康管理、eSIM 独立通信。',
    'zh-TW': 'WATCH GLOW 將智能穿戴從工具升級為時尚宣言。46mm 方錶錶盤 \u00D7 10.2mm 厚度，鋁合金機身 + 藍寶石玻璃，僅重 50g。核心創新\u201C電子吧唧\u201D\u2014\u2014可拆卸動態徽章模組，通過 NFC 實現社交互動與自我表達。內嵌式滾輪旋鈕與寶石裝飾錶帶，100+ 運動模式、女性健康管理、eSIM 獨立通信。',
    'en':    'WATCH GLOW elevates wearables from tools to fashion statements. 46mm square dial \u00D7 10.2mm thickness, aluminum alloy body + sapphire glass, just 50g. Core innovation \u2014 detachable dynamic badge module enabling social interaction and self-expression via NFC. Embedded scroll wheel crown and gemstone-decorated strap, 100+ sports modes, women\'s health management, eSIM standalone connectivity.',
    'ja':    'WATCH GLOWはウェアラブルをツールからファッションステートメントへ昇華させます。46mm角型ダイヤル \u00D7 10.2mm厚、アルミ合金ボディ + サファイアガラス、わずか50g。中核的革新\u2014\u2014NFCによるソーシャルインタラクションと自己表現を可能にする着脱式ダイナミックバッジモジュール。埋め込み式スクロールホイールリューズと宝石装飾ストラップ、100以上のスポーツモード、女性健康管理、eSIMスタンドアロン通信。',
    'ko':    'WATCH GLOW는 웨어러블을 도구에서 패션 선언으로 격상시킵니다. 46mm 스퀘어 다이얼 \u00D7 10.2mm 두께, 알루미늄 합금 바디 + 사파이어 글래스, 단 50g. 핵심 혁신 \u2014 NFC를 통한 소셜 인터랙션과 자기 표현을 가능하게 하는 탈착식 다이내믹 배지 모듈. 내장형 스크롤 휠 크라운과 보석 장식 스트랩, 100개 이상의 스포츠 모드, 여성 건강 관리, eSIM 독립 통신.'
  },

  // ---- FOOTER NAMES ----
  footer_name_loop: {
    'zh-CN': 'LOOP',
    'zh-TW': 'LOOP',
    'en':    'LOOP',
    'ja':    'LOOP',
    'ko':    'LOOP'
  },
  footer_name_aeropod: {
    'zh-CN': 'Aeropod',
    'zh-TW': 'Aeropod',
    'en':    'Aeropod',
    'ja':    'Aeropod',
    'ko':    'Aeropod'
  },
  footer_name_mantis: {
    'zh-CN': 'Mantis',
    'zh-TW': 'Mantis',
    'en':    'Mantis',
    'ja':    'Mantis',
    'ko':    'Mantis'
  },
  footer_name_watchglow: {
    'zh-CN': 'WATCH GLOW',
    'zh-TW': 'WATCH GLOW',
    'en':    'WATCH GLOW',
    'ja':    'WATCH GLOW',
    'ko':    'WATCH GLOW'
  },

  // ---- FOOTER DESCS ----
  footer_desc_loop: {
    'zh-CN': '女性健康数据的去中心化与赋权。传统医疗体系长期忽视女性生理健康的个性化需求，LOOP 将临床级监测能力融入日常物品，让每位女性在无感状态下获得属于自己的健康数据主权。',
    'zh-TW': '女性健康數據的去中心化與賦權。傳統醫療體系長期忽視女性生理健康的個性化需求，LOOP 將臨床級監測能力融入日常物品，讓每位女性在無感狀態下獲得屬於自己的健康數據主權。',
    'en':    'Decentralization and empowerment of women\'s health data. Traditional healthcare has long overlooked the personalized needs of women\'s physiological health. LOOP integrates clinical-grade monitoring into everyday objects, giving every woman sovereignty over her own health data, imperceptibly.',
    'ja':    '女性の健康データの分散化とエンパワーメント。従来の医療システムは女性の生理的健康の個別化されたニーズを長らく無視してきました。LOOPは臨床レベルのモニタリングを日常品に統合し、すべての女性が違和感なく自身の健康データ主権を獲得できるようにします。',
    'ko':    '여성 건강 데이터의 탈중앙화와 권한 부여. 전통적 의료 체계는 오랫동안 여성 생리 건강의 개인화된 요구를 간과해 왔습니다. LOOP는 임상급 모니터링 기능을 일상 용품에 통합하여, 모든 여성이 무감각하게 자신의 건강 데이터 주권을 확보하도록 합니다.'
  },
  footer_desc_aeropod: {
    'zh-CN': '气候韧性农业的技术民主化。全球 5 亿小农面临土壤退化的生存威胁，Aeropod 将实验室级土壤修复能力压缩至一台太阳能设备，让技术服务于最需要它的人。',
    'zh-TW': '氣候韌性農業的技術民主化。全球 5 億小農面臨土壤退化的生存威脅，Aeropod 將實驗室級土壤修復能力壓縮至一台太陽能設備，讓技術服務於最需要它的人。',
    'en':    'Democratizing technology for climate-resilient agriculture. 500 million smallholder farmers worldwide face existential threats from soil degradation. Aeropod compresses laboratory-grade soil restoration into a single solar-powered device, bringing technology to those who need it most.',
    'ja':    '気候レジリエント農業のための技術民主化。世界の5億人の小規模農家が土壌劣化による存続の脅威に直面しています。Aeropodは実験室レベルの土壌修復能力を一台のソーラー駆動装置に凝縮し、最も必要とする人々に技術を届けます。',
    'ko':    '기후 회복탄력적 농업을 위한 기술 민주화. 전 세계 5억 소농이 토양 황폐화로 인한 생존 위협에 직면해 있습니다. Aeropod는 실험실 수준의 토양 복원 능력을 하나의 태양광 구동 장치로 압축하여, 기술이 가장 필요한 사람들에게 전달합니다.'
  },
  footer_desc_mantis: {
    'zh-CN': '文化包容性与宗教实践的尊严设计。全球 18 亿穆斯林群体中，老年人及行动不便者在祷告时面临身体限制，Mantis 以航空级工程精度回应这一需求，让信仰实践不再受限于身体条件。',
    'zh-TW': '文化包容性與宗教實踐的尊嚴設計。全球 18 億穆斯林群體中，老年人及行動不便者在禱告時面臨身體限制，Mantis 以航空級工程精度回應這一需求，讓信仰實踐不再受限於身體條件。',
    'en':    'Dignified design for cultural inclusion and religious practice. Among the world\'s 1.8 billion Muslims, the elderly and those with limited mobility face physical barriers during prayer. Mantis responds with aerospace-grade engineering precision, ensuring that faith practice is no longer constrained by physical condition.',
    'ja':    '文化的包摂性と宗教的実践のための尊厳あるデザイン。世界の18億人のムスリムの中で、高齢者や身体の不自由な人々は祈りの際に身体的制限に直面しています。Mantisは航空宇宙グレードの工学精度でこのニーズに応え、信仰実践が身体的条件に制限されないようにします。',
    'ko':    '문화적 포용성과 종교적 실천을 위한 존엄한 디자인. 전 세계 18억 무슬림 중 노인과 거동이 불편한 이들은 기도 시 신체적 제약에 직면합니다. Mantis는 항공우주급 엔지니어링 정밀도로 이 요구에 응답하여, 신앙 실천이 더 이상 신체 조건에 제한되지 않도록 합니다.'
  },
  footer_desc_watchglow: {
    'zh-CN': '时尚科技的去性别化与自我表达。智能穿戴长期被定义为男性化的极客工具，WATCH GLOW 以可拆卸电子徽章系统打破这一刻板印象\u2014\u2014科技不应定义你是谁，而应成为你表达自我的媒介。',
    'zh-TW': '時尚科技的去性別化與自我表達。智能穿戴長期被定義為男性化的極客工具，WATCH GLOW 以可拆卸電子徽章系統打破這一刻板印象\u2014\u2014科技不應定義你是誰，而應成為你表達自我的媒介。',
    'en':    'De-gendering fashion-tech and enabling self-expression. Wearables have long been defined as masculine geek tools. WATCH GLOW shatters this stereotype with its detachable electronic badge system \u2014 technology should not define who you are, but become your medium of self-expression.',
    'ja':    'ファッションテックの脱ジェンダー化と自己表現。ウェアラブルは長らく男性的なギークツールと定義されてきました。WATCH GLOWは着脱式電子バッジシステムでこのステレオタイプを打ち破ります\u2014\u2014テクノロジーはあなたが誰かを定義するのではなく、自己表現の媒体となるべきです。',
    'ko':    '패션 테크의 탈젠더화와 자기 표현. 웨어러블은 오랫동안 남성적인 기크 도구로 정의되어 왔습니다. WATCH GLOW는 탈착식 전자 배지 시스템으로 이러한 고정관념을 깨뜨립니다 \u2014 기술은 당신이 누구인지 정의하는 것이 아니라, 자기 표현의 매체가 되어야 합니다.'
  },

  // ---- CLICK CUE & COLLAPSE ----
  click_cue: {
    'zh-CN': '点击展开爆炸图',
    'zh-TW': '點擊展開爆炸圖',
    'en':    'Click to Explode',
    'ja':    'クリックで分解',
    'ko':    '클릭하여 분해'
  },
  collapse_btn: {
    'zh-CN': '收起',
    'zh-TW': '收起',
    'en':    'Collapse',
    'ja':    '閉じる',
    'ko':    '접기'
  },

  // ---- SCENE TRIGGER ----
  scene_trigger: {
    'zh-CN': '使用场景 \u25BE',
    'zh-TW': '使用場景 \u25BE',
    'en':    'Scenes \u25BE',
    'ja':    '使用シーン \u25BE',
    'ko':    '사용場景 \u25BE'
  },

  // ---- POPUP LABELS ----
  scene_label_loop_1: {
    'zh-CN': '晨光浴室 \u00B7 无感监测',
    'zh-TW': '晨光浴室 \u00B7 無感監測',
    'en':    'Morning Bathroom \u00B7 Invisible Monitoring',
    'ja':    '朝のバスルーム \u00B7 見えないモニタリング',
    'ko':    '아침 욕실 \u00B7 무감각 모니터링'
  },
  scene_label_loop_2: {
    'zh-CN': '手机端 \u00B7 健康数据',
    'zh-TW': '手機端 \u00B7 健康數據',
    'en':    'Mobile \u00B7 Health Data',
    'ja':    'モバイル \u00B7 健康データ',
    'ko':    '모바일 \u00B7 건강 데이터'
  },
  scene_label_aeropod_1: {
    'zh-CN': '农田部署 \u00B7 太阳能修复',
    'zh-TW': '農田部署 \u00B7 太陽能修復',
    'en':    'Farm Deployment \u00B7 Solar Restoration',
    'ja':    '農地展開 \u00B7 ソーラー修復',
    'ko':    '농지 배치 \u00B7 태양광 복원'
  },
  scene_label_aeropod_2: {
    'zh-CN': '干旱地区 \u00B7 边缘AI',
    'zh-TW': '乾旱地區 \u00B7 邊緣AI',
    'en':    'Arid Regions \u00B7 Edge AI',
    'ja':    '乾燥地域 \u00B7 エッジAI',
    'ko':    '건조 지역 \u00B7 엣지 AI'
  },
  scene_label_mantis_1: {
    'zh-CN': '清真寺内 \u00B7 尊严祷告',
    'zh-TW': '清真寺內 \u00B7 尊嚴禱告',
    'en':    'Inside Mosque \u00B7 Dignified Prayer',
    'ja':    'モスク内 \u00B7 尊厳ある祈り',
    'ko':    '모스크 내 \u00B7 존엄한 기도'
  },
  scene_label_mantis_2: {
    'zh-CN': '居家空间 \u00B7 折叠收纳',
    'zh-TW': '居家空間 \u00B7 折疊收納',
    'en':    'Home Space \u00B7 Foldable Storage',
    'ja':    '自宅空間 \u00B7 折り畳み収納',
    'ko':    '가정 공간 \u00B7 접이식 수납'
  },
  scene_label_watchglow_1: {
    'zh-CN': '都市社交 \u00B7 NFC吧唧',
    'zh-TW': '都市社交 \u00B7 NFC吧唧',
    'en':    'Urban Social \u00B7 NFC Badge',
    'ja':    'アーバンソーシャル \u00B7 NFCバッジ',
    'ko':    '도시 소셜 \u00B7 NFC 배지'
  },
  scene_label_watchglow_2: {
    'zh-CN': '户外运动 \u00B7 全程追踪',
    'zh-TW': '戶外運動 \u00B7 全程追蹤',
    'en':    'Outdoor Sports \u00B7 Full Tracking',
    'ja':    'アウトドアスポーツ \u00B7 フルトラッキング',
    'ko':    '야외 스포츠 \u00B7 풀 트래킹'
  },

  // ---- PART TAGS (exploded view component labels) ----
  part_loop_top: {
    'zh-CN': '桶盖 \u00B7 开合结构',
    'zh-TW': '桶蓋 \u00B7 開合結構',
    'en':    'Lid \u00B7 Opening Mechanism',
    'ja':    '蓋 \u00B7 開閉機構',
    'ko':    '뚜껑 \u00B7 개폐 구조'
  },
  part_loop_pcb: {
    'zh-CN': 'PCB \u00B7 主板',
    'zh-TW': 'PCB \u00B7 主板',
    'en':    'PCB \u00B7 Mainboard',
    'ja':    'PCB \u00B7 メインボード',
    'ko':    'PCB \u00B7 메인보드'
  },
  part_loop_sensor: {
    'zh-CN': '光学传感器阵列',
    'zh-TW': '光學傳感器陣列',
    'en':    'Optical Sensor Array',
    'ja':    '光学センサーアレイ',
    'ko':    '광학 센서 어레이'
  },
  part_loop_ble: {
    'zh-CN': 'BLE 无线模块',
    'zh-TW': 'BLE 無線模組',
    'en':    'BLE Wireless Module',
    'ja':    'BLE無線モジュール',
    'ko':    'BLE 무선 모듈'
  },
  part_loop_cloud: {
    'zh-CN': '云端健康平台',
    'zh-TW': '雲端健康平台',
    'en':    'Cloud Health Platform',
    'ja':    'クラウド健康プラットフォーム',
    'ko':    '클라우드 건강 플랫폼'
  },
  part_aeropod_surface: {
    'zh-CN': '地表单元',
    'zh-TW': '地表單元',
    'en':    'Surface Unit',
    'ja':    '地表ユニット',
    'ko':    '지표 유닛'
  },
  part_aeropod_pipe: {
    'zh-CN': '曝气管道系统',
    'zh-TW': '曝氣管道系統',
    'en':    'Aeration Pipe System',
    'ja':    '曝気パイプシステム',
    'ko':    '폭기 파이프 시스템'
  },
  part_aeropod_probe: {
    'zh-CN': '土壤传感器探头',
    'zh-TW': '土壤傳感器探頭',
    'en':    'Soil Sensor Probe',
    'ja':    '土壌センサープローブ',
    'ko':    '토양 센서 프로브'
  },
  part_aeropod_ai: {
    'zh-CN': '边缘AI控制核心',
    'zh-TW': '邊緣AI控制核心',
    'en':    'Edge AI Control Core',
    'ja':    'エッジAI制御コア',
    'ko':    '엣지 AI 제어 코어'
  },
  part_mantis_frame: {
    'zh-CN': '主体框架',
    'zh-TW': '主體框架',
    'en':    'Main Frame',
    'ja':    'メインフレーム',
    'ko':    '메인 프레임'
  },
  part_mantis_joint: {
    'zh-CN': '铰接关节系统',
    'zh-TW': '鉸接關節系統',
    'en':    'Articulated Joint System',
    'ja':    '関節機構システム',
    'ko':    '관절 시스템'
  },
  part_mantis_pad: {
    'zh-CN': '自适应压力分布垫',
    'zh-TW': '自適應壓力分佈墊',
    'en':    'Adaptive Pressure Pad',
    'ja':    '適応型圧力分散パッド',
    'ko':    '적응형 압력 분산 패드'
  },
  part_mantis_hci: {
    'zh-CN': '人机交互界面',
    'zh-TW': '人機交互界面',
    'en':    'HCI Interface',
    'ja':    'HCIインターフェース',
    'ko':    'HCI 인터페이스'
  },
  part_watchglow_case: {
    'zh-CN': '铝合金表壳 \u00B7 蓝宝石玻璃',
    'zh-TW': '鋁合金錶殼 \u00B7 藍寶石玻璃',
    'en':    'Aluminum Case \u00B7 Sapphire Glass',
    'ja':    'アルミケース \u00B7 サファイアガラス',
    'ko':    '알루미늄 케이스 \u00B7 사파이어 글래스'
  },
  part_watchglow_badge: {
    'zh-CN': '电子吧唧 \u00B7 NFC社交',
    'zh-TW': '電子吧唧 \u00B7 NFC社交',
    'en':    'Digital Badge \u00B7 NFC Social',
    'ja':    'デジタルバッジ \u00B7 NFCソーシャル',
    'ko':    '디지털 배지 \u00B7 NFC 소셜'
  },
  part_watchglow_crown: {
    'zh-CN': '内嵌式滚轮旋钮',
    'zh-TW': '內嵌式滾輪旋鈕',
    'en':    'Embedded Scroll Crown',
    'ja':    '埋込式スクロールリューズ',
    'ko':    '내장형 스크롤 크라운'
  },
  part_watchglow_pcb: {
    'zh-CN': '光学心率 \u00B7 PCB主板',
    'zh-TW': '光學心率 \u00B7 PCB主板',
    'en':    'Optical HR \u00B7 PCB Mainboard',
    'ja':    '光学心拍 \u00B7 PCBメインボード',
    'ko':    '광학 심박 \u00B7 PCB 메인보드'
  },
  part_watchglow_strap: {
    'zh-CN': '宝石装饰表带',
    'zh-TW': '寶石裝飾錶帶',
    'en':    'Gemstone Strap',
    'ja':    '宝石装飾ストラップ',
    'ko':    '보석 장식 스트랩'
  },

  // ---- SYSTEM SECTION ----
  system_label: {
    'zh-CN': '系统共振',
    'zh-TW': '系統共振',
    'en':    'System Resonance',
    'ja':    'システムレゾナンス',
    'ko':    '시스템 공명'
  },
  system_text: {
    'zh-CN': '四项作品，一种哲学。去中心化医疗、生物协作、算法化文化包容、时尚科技融合\u2014\u2014它们不是孤立的创新，而是IDE设计哲学在不同维度的投射。当设计师从\u201C解决问题\u201D转向\u201C定义生态\u201D，当技术从\u201C刷存在感\u201D转向\u201C温柔克制\u201D，设计不再是工程的包装，工程也不再是设计的工具\u2014\u2014它们是同一进化的两面。',
    'zh-TW': '四項作品，一種哲學。去中心化醫療、生物協作、算法化文化包容、時尚科技融合\u2014\u2014它們不是孤立的創新，而是IDE設計哲學在不同維度的投射。當設計師從\u201C解決問題\u201D轉向\u201C定義生態\u201D，當技術從\u201C刷存在感\u201D轉向\u201C溫柔克制\u201D，設計不再是工程的包裝，工程也不再是設計的工具\u2014\u2014它們是同一進化的兩面。',
    'en':    'Four projects, one philosophy. Decentralized healthcare, bio-collaboration, algorithmic cultural inclusion, fashion-tech convergence \u2014 they are not isolated innovations, but projections of IDE\'s design philosophy across different dimensions. When designers shift from "solving problems" to "defining ecosystems", when technology shifts from "seeking attention" to "gentle restraint", design is no longer the packaging of engineering, nor engineering a tool of design \u2014 they are two sides of the same evolution.',
    'ja':    '4つのプロジェクト、1つの哲学。分散型ヘルスケア、バイオコラボレーション、アルゴリズム的文化包摂、ファッションテック融合\u2014\u2014それらは孤立した革新ではなく、IDEのデザイン哲学の異なる次元への投影です。デザイナーが\u201C問題解決\u201Dから\u201Cエコシステム定義\u201Dへ、テクノロジーが\u201C存在主張\u201Dから\u201C優しい抑制\u201Dへと移行するとき、デザインは工学の包装ではなくなり、工学もデザインの道具ではなくなります\u2014\u2014それらは同じ進化の両面なのです。',
    'ko':    '네 개의 프로젝트, 하나의 철학. 탈중앙화된 헬스케어, 바이오 협업, 알고리즘적 문화 포용, 패션-테크 융합 \u2014 이들은 고립된 혁신이 아니라, IDE 디자인 철학이 다양한 차원으로 투영된 것입니다. 디자이너가 \'문제 해결\'에서 \'생태계 정의\'로, 기술이 \'존재감 과시\'에서 \'부드러운 절제\'로 전환될 때, 디자인은 더 이상 공학의 포장이 아니며, 공학도 디자인의 도구가 아닙니다 \u2014 이들은 같은 진화의 양면입니다.'
  },

  // ---- FOOTER (global) ----
  footer_email_label: {
    'zh-CN': '邮箱',
    'zh-TW': '郵箱',
    'en':    'Email',
    'ja':    'メール',
    'ko':    '이메일'
  },
  footer_instagram_label: {
    'zh-CN': 'Instagram',
    'zh-TW': 'Instagram',
    'en':    'Instagram',
    'ja':    'Instagram',
    'ko':    'Instagram'
  },
  footer_rednote_label: {
    'zh-CN': 'Rednote',
    'zh-TW': 'Rednote',
    'en':    'Rednote',
    'ja':    'Rednote',
    'ko':    'Rednote'
  },
  footer_rights_label: {
    'zh-CN': '版权',
    'zh-TW': '版權',
    'en':    'Rights',
    'ja':    '権利',
    'ko':    '권리'
  },
  footer_rights_value: {
    'zh-CN': '保留所有权利',
    'zh-TW': '保留所有權利',
    'en':    'All rights reserved',
    'ja':    '無断転載禁止',
    'ko':    '모든 권리 보유'
  },
  footer_credit: {
    'zh-CN': '泷的作品集 \u00B7 激进融合 \u00A9 2026',
    'zh-TW': '瀧的作品集 \u00B7 激進融合 \u00A9 2026',
    'en':    'Taki\'s Portfolio \u00B7 Radical Convergence \u00A9 2026',
    'ja':    'タキのポートフォリオ \u00B7 ラディカルコンバージェンス \u00A9 2026',
    'ko':    '타키의 포트폴리오 \u00B7 래디컬 컨버전스 \u00A9 2026'
  },

  // ---- LANGUAGE SWITCHER LABELS ----
  lang_zh_CN: {
    'zh-CN': '简',
    'zh-TW': '简',
    'en':    '简',
    'ja':    '简',
    'ko':    '简'
  },
  lang_zh_TW: {
    'zh-CN': '繁',
    'zh-TW': '繁',
    'en':    '繁',
    'ja':    '繁',
    'ko':    '繁'
  },
  lang_en: {
    'zh-CN': 'EN',
    'zh-TW': 'EN',
    'en':    'EN',
    'ja':    'EN',
    'ko':    'EN'
  },
  lang_ja: {
    'zh-CN': '日',
    'zh-TW': '日',
    'en':    '日',
    'ja':    '日',
    'ko':    '日'
  },
  lang_ko: {
    'zh-CN': '한',
    'zh-TW': '한',
    'en':    '한',
    'ja':    '한',
    'ko':    '한'
  }
};

// ── i18n ENGINE ──────────────────────────────────────────────────────────────

(function() {
  'use strict';

  // ---- Supported languages ----
  var SUPPORTED_LANGS = ['zh-CN', 'zh-TW', 'en', 'ja', 'ko'];
  var DEFAULT_LANG = 'zh-CN';
  var STORAGE_KEY = 'taki-portfolio-lang';

  // ---- Current language (initialized after DOM-ready scope) ----
  var currentLang = DEFAULT_LANG;

  /**
   * Resolve the initial language:
   * 1. localStorage (if valid)
   * 2. Fallback: DEFAULT_LANG
   */
  function resolveInitialLang() {
    var stored;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      stored = null;
    }
    if (stored && SUPPORTED_LANGS.indexOf(stored) !== -1) {
      return stored;
    }
    return DEFAULT_LANG;
  }

  /**
   * Persist language to localStorage (no-op if unsupported).
   */
  function persistLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // localStorage unavailable; silently ignore
    }
  }

  /**
   * Core translate: look up TRANS[key][currentLang].
   * Returns key itself if not found.
   */
  function t(key) {
    var entry = TRANS[key];
    if (!entry) { return key; }
    var value = entry[currentLang];
    if (typeof value === 'undefined') {
      // Fallback to en, then to key
      if (typeof entry['en'] !== 'undefined') { return entry['en']; }
      return key;
    }
    return value;
  }

  /**
   * Template: replace all {{varName}} placeholders in the translated
   * string with values from `vars` object.
   */
  function template(key, vars) {
    var str = t(key);
    if (!vars || typeof vars !== 'object') { return str; }
    return str.replace(/\{\{(\w+)\}\}/g, function(match, varName) {
      return vars.hasOwnProperty(varName) ? vars[varName] : match;
    });
  }

  /**
   * Get the current language code.
   */
  function getLang() {
    return currentLang;
  }

  /**
   * Re-scan the DOM: for every element with [data-i18n], set its
   * .textContent (or .innerHTML if data-i18n-html="true") to the
   * translation for its attribute value.
   * If the element has child ELEMENT nodes, only update the first
   * text node to preserve nested structure (e.g. scene-trigger).
   */
  function applyTranslations() {
    var elements = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute('data-i18n');
      if (!key) { continue; }
      var translated = t(key);
      var useHTML = el.getAttribute('data-i18n-html');
      if (useHTML === 'true' || useHTML === '') {
        el.innerHTML = translated;
      } else {
        // Check if element has child ELEMENT nodes — if so, only
        // update the first text node to preserve nested structure.
        if (el.children.length > 0) {
          for (var j = 0; j < el.childNodes.length; j++) {
            if (el.childNodes[j].nodeType === 3) { // TEXT_NODE
              el.childNodes[j].nodeValue = translated;
              break;
            }
          }
        } else {
          el.textContent = translated;
        }
      }
    }
  }

  /**
   * Switch language, persist, re-render, and fire i18n:updated event.
   * Falls back to DEFAULT_LANG if lang is unsupported.
   */
  function setLang(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) {
      lang = DEFAULT_LANG;
    }
    if (lang === currentLang) { return; }
    currentLang = lang;
    persistLang(lang);

    // Re-apply all [data-i18n] bindings
    applyTranslations();

    // Dispatch custom event so other modules (e.g. product.js) can react
    var event;
    try {
      event = new CustomEvent('i18n:updated', {
        detail: { lang: currentLang }
      });
    } catch (e) {
      // IE9 fallback
      event = document.createEvent('CustomEvent');
      event.initCustomEvent('i18n:updated', false, false, { lang: currentLang });
    }
    document.dispatchEvent(event);
  }

  // ---- PUBLIC API ─────────────────────────────────────────────────────────

  window.i18n = {
    t:        t,
    setLang:  setLang,
    getLang:  getLang,
    template: template
  };

  // ---- INIT ON DOM READY ──────────────────────────────────────────────────

  function init() {
    currentLang = resolveInitialLang();
    applyTranslations();

    // Attach click handlers to all lang-switcher buttons
    var langBtns = document.querySelectorAll('.lang-btn');
    for (var b = 0; b < langBtns.length; b++) {
      langBtns[b].addEventListener('click', function(e) {
        var newLang = this.getAttribute('data-lang');
        if (!newLang) { return; }
        setLang(newLang);
        // Update active button state
        var siblings = this.parentNode.querySelectorAll('.lang-btn');
        for (var s = 0; s < siblings.length; s++) {
          siblings[s].classList.remove('active');
        }
        this.classList.add('active');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already loaded
    init();
  }

})();