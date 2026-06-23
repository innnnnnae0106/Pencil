/* PENCIL — Work case-study data + template populator
   Loads before site.js so injected data-ko/data-en are picked up by i18n. */
(function(){
  'use strict';
  var P = {
    'lg-rental':{
      en:'LG HelloVision<br>Rental', sub:['LG헬로비전 렌탈 · 웹 UX/UI 구축','LG HelloVision Rental · Web UX/UI'],
      cat:['웹 UX/UI','Web UX/UI'], platform:['PC · 모바일 웹','PC · Mobile Web'], year:'2024',
      client:['LG헬로비전','LG HelloVision'], role:['전략 · UX · UI · 퍼블리싱','Strategy · UX · UI · Publishing'],
      award:['webaward-2023.png','if-design.png'],
      summary:['복잡한 렌탈 상품을 누구나 쉽게 비교하고 신청하도록. 방대한 카테고리와 요금제를 명료한 흐름으로 재설계해 가입 전환을 끌어올린 렌탈 플랫폼입니다. iF 디자인 어워드를 수상했습니다.','Making complex rental products easy to compare and sign up for. We redesigned vast categories and plans into a clear flow that lifted conversion — an iF Design Award winner.'],
      otitle:['복잡함을 단순하게.','Turning complexity simple.'],
      obody:['수십 종의 렌탈 상품과 요금 옵션이 얽힌 서비스였습니다. 펜슬은 상품 탐색–비교–신청의 동선을 처음부터 다시 그리고, 직관적인 필터와 단계형 신청 흐름으로 누구나 막힘없이 가입하도록 설계했습니다.','Dozens of rental products and pricing options were tangled together. Pencil redrew the browse–compare–apply journey from scratch, with intuitive filters and a step-by-step flow anyone can complete.'],
      challenge:['방대한 상품·요금 구조를 한눈에 비교 가능하게, 신청 이탈을 최소화.','Make a vast product and pricing structure comparable at a glance and minimize sign-up drop-off.'],
      approach:['단계형 신청 플로우와 명료한 필터·비교 UI로 전환 동선을 단순화했습니다.','A staged application flow with clear filter and compare UI simplified the conversion path.'],
      color:'oklch(0.62 0.19 18)', next:'selling-booster',
      img:{key:window.__resources['key_lg_rental_jpg'],wide:window.__resources['wide_lg_rental_jpg'],g1:window.__resources['g1_lg_rental_jpg'],g2:window.__resources['g2_lg_rental_jpg']}
    },
    'selling-booster':{
      en:'Selling<br>Booster', sub:['셀링부스터 · 커머스 솔루션 UX/UI','Commerce Solution UX/UI'],
      cat:['앱 UX/UI','App UX/UI'], platform:['모바일 · 웹앱','Mobile · Web App'], year:'2024',
      client:['셀링부스터','Selling Booster'], role:['UX · UI · 디자인 시스템','UX · UI · Design System'],
      summary:['판매자의 일을 줄여주는 커머스 솔루션. 복잡한 운영 데이터를 한 화면에 모으고, 반복 업무를 자동화 흐름으로 정리해 판매자가 ‘성장’에만 집중하도록 만들었습니다.','A commerce solution that lightens the seller’s workload. We gathered complex operational data into one view and organized repetitive tasks into automated flows so sellers can focus on growth.'],
      otitle:['데이터를 행동으로.','From data to action.'],
      obody:['판매 데이터·재고·광고가 흩어져 있어 의사결정이 느렸습니다. 펜슬은 핵심 지표를 대시보드로 모으고, 다음 행동을 제안하는 UI로 운영의 속도를 끌어올렸습니다.','Sales data, inventory and ads were scattered, slowing decisions. Pencil consolidated key metrics into a dashboard and surfaced next-best actions to speed up operations.'],
      challenge:['흩어진 운영 데이터를 통합하고, 판매자의 의사결정을 가속.','Unify scattered operational data and accelerate seller decisions.'],
      approach:['지표 대시보드와 행동 제안형 UI로 복잡한 운영을 단순한 흐름으로 정리했습니다.','A metrics dashboard and action-oriented UI turned complex operations into a simple flow.'],
      color:'oklch(0.7 0.17 60)', next:'lg-internet',
      img:{key:window.__resources['key_selling_booster_jpg'],wide:window.__resources['wide_selling_booster_jpg'],g1:window.__resources['g1_selling_booster_jpg'],g2:window.__resources['g2_selling_booster_jpg']}
    },
    'lg-internet':{
      en:'LG HelloVision<br>Internet/TV', sub:['LG헬로비전 · 인터넷/방송 가입 개편','Internet / TV Sign-up Renewal'],
      cat:['웹 UX/UI','Web UX/UI'], platform:['PC · 모바일 웹','PC · Mobile Web'], year:'2024',
      client:['LG헬로비전','LG HelloVision'], role:['UX · UI · 퍼블리싱','UX · UI · Publishing'],
      award:['webaward-2024.png'],
      summary:['인터넷과 방송 가입을 가장 빠른 길로. 복잡한 요금·결합 상품을 명료하게 비교하고 한 번에 신청하도록 가입 여정을 재설계해 웹어워드를 수상했습니다.','Making internet & TV sign-up the fastest path. We redesigned the journey to compare complex plans and bundles clearly and apply in one go — a Web Award winner.'],
      otitle:['가입을 가장 빠른 길로.','Sign-up, the fastest path.'],
      obody:['인터넷·방송 요금제와 결합 상품이 얽혀 가입 단계에서 이탈이 잦았습니다. 펜슬은 비교–선택–신청을 한 흐름으로 묶고, 군더더기 없는 단계형 폼으로 전환을 끌어올렸습니다.','Tangled internet and TV plans and bundles caused drop-off at sign-up. Pencil merged compare–choose–apply into one flow with a lean staged form that lifted conversion.'],
      challenge:['복잡한 인터넷·방송 요금·결합 상품의 가입 이탈을 최소화.','Minimize sign-up drop-off across complex internet and TV plans and bundles.'],
      approach:['비교–선택–신청을 하나의 단계형 흐름으로 통합했습니다.','Unified compare–choose–apply into one staged flow.'],
      color:'oklch(0.6 0.17 255)', next:'mandom',
      img:{key:window.__resources['key_lg_internet_jpg'],wide:window.__resources['wide_lg_internet_jpg'],g1:window.__resources['g1_lg_internet_jpg'],g2:window.__resources['g2_lg_internet_jpg']}
    },
    'lg-main':{
      en:'LG HelloVision<br>Main', sub:['LG헬로비전 · 메인 사이트 개편','Main Website Renewal'],
      cat:['웹 리뉴얼','Web Renewal'], platform:['PC · 모바일 웹','PC · Mobile Web'], year:'2022',
      client:['LG헬로비전','LG HelloVision'], role:['UX · UI · 퍼블리싱','UX · UI · Publishing'],
      summary:['브랜드의 첫인상이 되는 메인. 방송·인터넷·고객지원으로 흩어진 입구를 하나의 명료한 허브로 모아, 어떤 사용자든 원하는 곳으로 빠르게 향하도록 설계했습니다.','The main page as the brand’s first impression. We gathered scattered entries — broadcast, internet, support — into one clear hub so any user heads where they want, fast.'],
      otitle:['모든 길의 출발점.','The start of every path.'],
      obody:['다양한 서비스의 진입점이 흩어져 메인이 혼잡했습니다. 펜슬은 핵심 동선을 우선순위로 재배치하고, 명료한 그리드로 첫 화면에서 길을 잃지 않도록 정리했습니다.','Entry points for many services cluttered the main page. Pencil reprioritized key paths and used a clear grid so no one gets lost on the first screen.'],
      challenge:['흩어진 서비스 진입점을 하나의 명료한 허브로 통합.','Unify scattered service entries into one clear hub.'],
      approach:['핵심 동선 우선순위 재배치 + 명료한 그리드로 첫 화면을 정리했습니다.','Reprioritized key paths and a clear grid organized the first screen.'],
      color:'oklch(0.6 0.17 255)', next:'lg-rental'
    },
    'lg-cable':{
      en:'LG HelloVision<br>Cable', sub:['LG헬로비전 · 방송/인터넷 개편','Broadcast / Internet Renewal'],
      cat:['웹 리뉴얼','Web Renewal'], platform:['PC · 모바일 웹','PC · Mobile Web'], year:'2023',
      client:['LG헬로비전','LG HelloVision'], role:['UX · UI · 퍼블리싱','UX · UI · Publishing'],
      summary:['방송과 인터넷, 두 갈래 서비스를 하나의 일관된 경험으로. 가입·요금·고객지원까지 흩어진 정보를 정돈해 사용자가 원하는 답을 빠르게 찾도록 개편했습니다.','Bringing two service tracks — broadcast and internet — into one consistent experience. We tidied scattered sign-up, pricing and support info so users find answers fast.'],
      otitle:['두 서비스, 하나의 흐름.','Two services, one flow.'],
      obody:['방송과 인터넷 상품의 정보 구조가 분리되어 혼란을 주었습니다. 펜슬은 공통 그리드와 통합 내비게이션으로 두 영역을 하나의 탐색 경험으로 묶었습니다.','Broadcast and internet had separate information structures that confused users. Pencil unified both into one navigation experience with a shared grid.'],
      challenge:['분리된 두 서비스의 정보 구조를 일관된 탐색 경험으로 통합.','Unify two separate service structures into one consistent journey.'],
      approach:['공통 그리드·통합 내비게이션으로 가입·요금·지원 동선을 단순화했습니다.','A shared grid and unified navigation simplified sign-up, pricing and support paths.'],
      color:'oklch(0.64 0.16 250)', next:'mandom'
    },
    'mandom':{
      en:'Mandom<br>Korea', sub:['맨담코리아 · 커머스 UX/UI 개편','Commerce UX/UI Renewal'],
      cat:['커머스 UX/UI','Commerce UX/UI'], platform:['PC · 모바일 웹','PC · Mobile Web'], year:'2023',
      client:['맨담코리아','Mandom Korea'], role:['UX · UI · 퍼블리싱','UX · UI · Publishing'],
      summary:['뷰티 브랜드의 결을 살린 커머스 경험. 제품의 매력을 전면에 내세우면서도 탐색과 구매까지 매끄럽게 이어지도록 쇼핑 동선을 다시 설계했습니다.','A commerce experience that honors the beauty brand’s tone. We foregrounded product appeal while reshaping the path from browse to purchase.'],
      otitle:['브랜드와 판매, 둘 다.','Brand and sales, together.'],
      obody:['브랜드 무드와 커머스 효율이 충돌하던 몰이었습니다. 펜슬은 비주얼 중심의 제품 진열과 군더더기 없는 구매 흐름을 양립시켜 브랜드 가치와 전환율을 함께 높였습니다.','Brand mood and commerce efficiency clashed. Pencil reconciled visual-led merchandising with a lean purchase flow, raising both brand value and conversion.'],
      challenge:['브랜드 무드를 지키면서 구매 전환을 끌어올리기.','Preserve brand mood while improving purchase conversion.'],
      approach:['비주얼 진열 + 간결한 구매 플로우로 브랜드와 효율을 양립시켰습니다.','Visual merchandising plus a lean purchase flow balanced brand and efficiency.'],
      color:'oklch(0.66 0.19 20)', next:'savethechildren',
      img:{key:window.__resources['key_mandom_jpg'],wide:window.__resources['wide_mandom_jpg'],g1:window.__resources['g1_mandom_jpg'],g2:window.__resources['g2_mandom_jpg']}
    },
    'savethechildren':{
      en:'Save the<br>Children', sub:['세이브더칠드런 · UX/UI 개편','UX/UI Renewal'],
      cat:['웹 UX/UI','Web UX/UI'], platform:['PC · 모바일 웹','PC · Mobile Web'], year:'2022',
      client:['세이브더칠드런','Save the Children'], role:['UX · UI · 퍼블리싱','UX · UI · Publishing'],
      summary:['후원이 더 쉽고 투명하게. 복잡한 후원 절차를 간결한 흐름으로 정리하고, 활동의 진정성이 전해지도록 콘텐츠와 화면을 다시 구성했습니다.','Making giving easier and more transparent. We simplified the donation flow and restructured content so the sincerity of the work comes through.'],
      otitle:['마음이 행동이 되도록.','Turning care into action.'],
      obody:['후원 절차가 길고 정보가 분산되어 이탈이 잦았습니다. 펜슬은 후원 여정을 단계별로 재설계하고, 활동 성과를 명료하게 보여주는 콘텐츠 구조로 신뢰를 높였습니다.','A long donation process and scattered information caused drop-off. Pencil redesigned the giving journey step by step and built a clear impact-reporting structure to grow trust.'],
      challenge:['긴 후원 절차의 이탈을 줄이고 활동의 신뢰를 전달.','Reduce drop-off in a long donation process and convey trust.'],
      approach:['단계형 후원 여정과 성과 중심 콘텐츠로 참여 장벽을 낮췄습니다.','A staged giving journey and impact-led content lowered the barrier to participate.'],
      color:'oklch(0.66 0.15 150)', next:'epson',
      img:{key:window.__resources['key_savethechildren_jpg'],wide:window.__resources['wide_savethechildren_jpg'],g1:window.__resources['g1_savethechildren_jpg'],g2:window.__resources['g2_savethechildren_jpg']}
    },
    'epson':{
      en:'Epson<br>Korea', sub:['엡손코리아 · 캠페인 사이트','Epson Korea · Campaign Site'],
      cat:['웹 · 캠페인','Web · Campaign'], platform:['PC · 모바일 웹','PC · Mobile Web'], year:'2023',
      client:['한국엡손','Epson Korea'], role:['UX · UI · 퍼블리싱','UX · UI · Publishing'],
      summary:['제품의 가치를 캠페인으로. 엡손의 비즈니스 솔루션을 명료한 메시지와 시각 흐름으로 풀어내 방문자가 핵심 가치를 빠르게 이해하도록 만든 캠페인 사이트입니다.','Turning product value into a campaign. We unfolded Epson’s business solutions through clear messaging and visual flow so visitors grasp the core value fast.'],
      otitle:['가치를 한눈에.','Value at a glance.'],
      obody:['전문 솔루션의 강점을 일반 방문자에게 전달하기 어려웠습니다. 펜슬은 핵심 메시지를 위계화하고, 시선을 이끄는 시각 흐름으로 캠페인의 설득력을 높였습니다.','It was hard to convey a professional solution’s strengths to general visitors. Pencil structured key messages and led the eye with a clear visual flow to make the campaign persuasive.'],
      challenge:['전문 솔루션의 가치를 일반 방문자에게 명료하게 전달.','Convey a professional solution’s value clearly to general visitors.'],
      approach:['메시지 위계화 + 시선을 이끄는 시각 흐름으로 설득력을 높였습니다.','Message hierarchy and a guided visual flow raised persuasiveness.'],
      color:'oklch(0.7 0.16 250)', next:'sotong', galleryHidden:true,
      img:{key:window.__resources['key_epson_jpg']}
    },
    'sotong':{
      en:'KCCI<br>Platform', sub:['대한상공회의소 · 소통플랫폼 구축','KCCI · Communication Platform'],
      cat:['웹 · 시스템','Web · System'], platform:['PC · 모바일 웹','PC · Mobile Web'], year:'2022',
      client:['대한상공회의소','KCCI'], role:['UX · UI · 퍼블리싱','UX · UI · Publishing'],
      summary:['기업과 기관을 잇는 소통의 장. 방대한 회원 서비스와 정보를 체계적인 구조로 정리해, 누구나 필요한 자료에 빠르게 닿는 공공 플랫폼으로 구축했습니다.','A platform connecting businesses and institutions. We organized vast member services and information into a systematic structure so anyone reaches what they need fast.'],
      otitle:['소통을 구조로.','Communication, structured.'],
      obody:['회원 서비스와 공지·자료가 방대해 탐색이 어려웠습니다. 펜슬은 사용자 유형별 동선을 설계하고, 명료한 정보구조로 공공 플랫폼의 접근성을 높였습니다.','Vast member services and notices made navigation hard. Pencil designed journeys by user type and a clear IA to raise the public platform’s accessibility.'],
      challenge:['방대한 회원 서비스·정보를 체계적으로 구조화.','Systematize vast member services and information.'],
      approach:['사용자 유형별 동선 설계 + 명료한 정보구조로 접근성을 높였습니다.','Journeys by user type and a clear IA raised accessibility.'],
      color:'oklch(0.62 0.17 300)', next:'lg-rental', galleryHidden:true,
      img:{key:window.__resources['key_sotong_jpg']}
    },
    'immunocap':{
      en:'Immuno<br>CAP', sub:['이뮤노캡 · 진단 솔루션 사이트','Diagnostics Solution Site'],
      cat:['웹 · 시스템','Web · System'], platform:['PC · 모바일 웹','PC · Mobile Web'], year:'2021',
      client:['써모피셔 사이언티픽','Thermo Fisher Scientific'], role:['UX · UI · 퍼블리싱','UX · UI · Publishing'],
      summary:['전문 진단 정보를 의료진이 빠르게 찾도록. 알레르기 진단 솔루션의 방대한 자료를 체계적인 정보구조로 정리해 신뢰도 높은 전문 플랫폼으로 만들었습니다.','Helping clinicians find specialized diagnostic information fast. We organized the allergy-diagnostics solution’s vast material into a systematic structure for a trustworthy professional platform.'],
      otitle:['전문성을 명료하게.','Expertise, made clear.'],
      obody:['의학 정보의 양과 전문성이 높아 탐색이 어려웠습니다. 펜슬은 검사·질환·자료를 잇는 정보구조를 설계하고, 절제된 화면으로 전문 신뢰감을 전했습니다.','The depth and volume of medical content made navigation hard. Pencil designed an IA linking tests, conditions and resources, conveying clinical trust through a restrained interface.'],
      challenge:['방대한 의학 정보를 전문가가 빠르게 탐색하도록 구조화.','Structure vast medical content for fast expert navigation.'],
      approach:['검사–질환–자료를 잇는 정보구조와 절제된 UI로 전문 신뢰를 구축했습니다.','An IA linking tests, conditions and resources with restrained UI built clinical trust.'],
      color:'oklch(0.68 0.14 195)', next:'oncomine',
      img:{key:window.__resources['key_immunocap_jpg'],wide:window.__resources['wide_immunocap_jpg'],g1:window.__resources['g1_immunocap_jpg'],g2:window.__resources['g2_immunocap_jpg']}
    },
    'oncomine':{
      en:'Onco<br>mine', sub:['온코마인 · 유전체 분석 플랫폼','Genomic Analysis Platform'],
      cat:['웹 · 시스템','Web · System'], platform:['PC · 모바일 웹','PC · Mobile Web'], year:'2021',
      client:['써모피셔 사이언티픽','Thermo Fisher Scientific'], role:['UX · UI · 퍼블리싱','UX · UI · Publishing'],
      summary:['정밀의료를 위한 유전체 분석 솔루션. 복잡한 분석 워크플로우와 데이터를 명료하게 정리해, 연구자가 핵심 정보에 빠르게 도달하도록 설계했습니다.','A genomic analysis solution for precision medicine. We clarified complex analysis workflows and data so researchers reach key information quickly.'],
      otitle:['데이터에서 통찰로.','From data to insight.'],
      obody:['정밀의료 데이터는 전문적이고 방대했습니다. 펜슬은 분석 흐름을 단계로 시각화하고, 데이터 위계를 정리해 연구 효율을 높이는 플랫폼 경험을 만들었습니다.','Precision-medicine data was specialized and vast. Pencil visualized the analysis flow in stages and ordered the data hierarchy to boost research efficiency.'],
      challenge:['전문적 유전체 데이터와 분석 흐름을 명료하게 구조화.','Structure specialized genomic data and analysis flows clearly.'],
      approach:['단계형 분석 시각화와 데이터 위계 정리로 연구 효율을 높였습니다.','Staged analysis visualization and ordered data hierarchy improved research efficiency.'],
      color:'oklch(0.64 0.13 230)', next:'thermofisher',
      img:{key:window.__resources['key_oncomine_jpg'],wide:window.__resources['wide_oncomine_jpg'],g1:window.__resources['g1_oncomine_jpg'],g2:window.__resources['g2_oncomine_jpg']}
    },
    'thermofisher':{
      en:'Thermo<br>Fisher', sub:['써모피셔 · 유전자분석 솔루션 구축','Genetic Analysis Solution Site'],
      cat:['웹 · 시스템','Web · System'], platform:['PC · 모바일 웹','PC · Mobile Web'], year:'2020',
      client:['써모피셔 사이언티픽','Thermo Fisher Scientific'], role:['UX · UI · 퍼블리싱','UX · UI · Publishing'],
      summary:['글로벌 과학기업의 유전자분석 솔루션을 국내 사용자에 맞게. 방대한 제품·기술 정보를 체계적으로 정리해 전문가가 신뢰하고 활용하는 디지털 허브로 구축했습니다.','Localizing a global science company’s genetic-analysis solution. We organized vast product and technology content into a digital hub experts trust and use.'],
      otitle:['과학을 신뢰의 구조로.','Science, structured for trust.'],
      obody:['글로벌 표준과 국내 사용성 사이의 균형이 과제였습니다. 펜슬은 제품·기술·지원 정보를 일관된 체계로 묶고, 절제된 디자인으로 전문 신뢰를 전했습니다.','Balancing global standards with local usability was the challenge. Pencil unified product, technology and support content into one system, conveying trust through restrained design.'],
      challenge:['글로벌 표준과 국내 사용성의 균형, 방대한 정보의 체계화.','Balance global standards with local usability and systematize vast content.'],
      approach:['일관된 정보체계와 절제된 디자인으로 전문 신뢰를 구축했습니다.','A consistent information system and restrained design built professional trust.'],
      color:'oklch(0.6 0.16 265)', next:'smarttour',
      img:{key:window.__resources['key_thermofisher_jpg'],wide:window.__resources['wide_thermofisher_jpg'],g1:window.__resources['g1_thermofisher_jpg'],g2:window.__resources['g2_thermofisher_jpg']}
    },
    'smarttour':{
      en:'Smart Tourism<br>Information', sub:['스마트관광안내시스템 · 키오스크 UX/UI','Smart Tourism Information · Kiosk UX/UI'],
      cat:['UX/UI · GUI','UX/UI · GUI'], platform:['키오스크 · 모바일','Kiosk · Mobile'], year:'2018–2022',
      client:['(재)한국방문의해위원회','Visit Korea Committee'], role:['UX · UI · GUI','UX · UI · GUI'],
      summary:['처음 온 사람도 길을 잃지 않도록. 다국어와 큰 화면을 고려한 키오스크 UX로 관광 정보를 직관적으로 안내하는 스마트 관광 시스템입니다.','So first-time visitors never get lost. A kiosk UX built for multiple languages and large screens guides tourist information intuitively.'],
      otitle:['길찾기를 쉽게.','Wayfinding, made simple.'],
      obody:['다양한 연령과 언어의 관광객이 사용하는 공공 키오스크였습니다. 펜슬은 큰 터치 타깃과 명료한 아이콘, 다국어 흐름으로 누구나 직관적으로 쓰는 안내 경험을 설계했습니다.','A public kiosk used by tourists of all ages and languages. Pencil designed large touch targets, clear icons and multilingual flows for an intuitive guidance experience.'],
      challenge:['다양한 연령·언어 사용자가 직관적으로 쓰는 공공 키오스크 UX.','A public kiosk UX intuitive for all ages and languages.'],
      approach:['큰 터치 타깃·명료한 아이콘·다국어 흐름으로 접근성을 높였습니다.','Large touch targets, clear icons and multilingual flows raised accessibility.'],
      color:'oklch(0.72 0.16 122)', next:'prospecs',
      img:{key:window.__resources['key_smarttour_jpg'],wide:window.__resources['wide_smarttour_jpg'],g1:window.__resources['g1_smarttour_jpg'],g2:window.__resources['g2_smarttour_jpg']}
    },
    'prospecs':{
      en:'PRO<br>SPECS', sub:['프로스펙스 · 브랜드 사이트 개편','Brand Site Renewal'],
      cat:['브랜드 사이트','Brand Site'], platform:['PC · 모바일 웹','PC · Mobile Web'], year:'2021',
      client:['프로스펙스','PRO-SPECS'], role:['UX · UI · 퍼블리싱','UX · UI · Publishing'],
      summary:['스포츠 브랜드의 에너지를 디지털로. 제품의 기능과 브랜드 무드를 동시에 살려, 보는 즐거움과 탐색의 편의를 함께 잡은 브랜드 사이트로 개편했습니다.','Bringing a sports brand’s energy to digital. We renewed the brand site to carry both product function and brand mood — pleasure to view and easy to browse.'],
      otitle:['브랜드를 움직이게.','Make the brand move.'],
      obody:['정적인 기존 사이트는 브랜드의 역동성을 담지 못했습니다. 펜슬은 강한 비주얼과 모션, 명료한 제품 탐색을 결합해 에너지 넘치는 브랜드 경험을 만들었습니다.','The static legacy site failed to capture the brand’s dynamism. Pencil combined bold visuals, motion and clear product browsing for an energetic brand experience.'],
      challenge:['스포츠 브랜드의 역동성과 제품 탐색 편의를 함께 살리기.','Carry both the sports brand’s dynamism and easy product browsing.'],
      approach:['강한 비주얼·모션 + 명료한 제품 내비게이션으로 에너지를 전했습니다.','Bold visuals and motion plus clear product navigation conveyed energy.'],
      color:'oklch(0.68 0.14 195)', next:'lg-rental',
      img:{key:window.__resources['key_prospecs_jpg'],wide:window.__resources['wide_prospecs_jpg'],g1:window.__resources['g1_prospecs_jpg'],g2:window.__resources['g2_prospecs_jpg']}
    }
  };

  function qp(){ try{ return new URLSearchParams(location.search).get('p') || window.__PID || null; }catch(e){ return window.__PID || null; } }
  var key = qp(); if(!key || !P[key]) key='lg-rental';
  var d = P[key];
  // alias: lg-cable kept as legacy pointer -> lg-internet
  var en = document.body.classList.contains('lang-en');

  function setBi(id, pair){ var el=document.getElementById(id); if(!el) return;
    if(Array.isArray(pair)){ el.setAttribute('data-ko',pair[0]); el.setAttribute('data-en',pair[1]); el.innerHTML=pair[0]; }
    else { el.textContent=pair; } }

  document.title = 'PENCIL — ' + d.en.replace(/<br>/g,' ');

  // hero title -> reveal spans (split on <br>)
  var titleEl=document.getElementById('t-title');
  if(titleEl){
    var parts=d.en.split('<br>');
    titleEl.innerHTML=parts.map(function(p,i){
      return '<span class="rl" data-delay="'+(i+1)+'"><span>'+p+'</span></span>';
    }).join('');
  }

  setBi('t-cat', d.cat); setBi('t-cat2', d.cat);
  setBi('t-platform', d.platform);
  setBi('t-sub', d.sub); setBi('t-summary', d.summary);
  setBi('t-client', d.client); setBi('t-role', d.role);
  setBi('t-otitle', d.otitle); setBi('t-obody', d.obody);
  setBi('t-challenge', d.challenge); setBi('t-approach', d.approach);
  var y1=document.getElementById('t-year'), y2=document.getElementById('t-year2');
  if(y1) y1.textContent=d.year; if(y2) y2.textContent=d.year;

  // award logos (right side of tagline)
  if(d.award && d.award.length){
    var aw=document.getElementById('t-awards');
    if(aw){
      aw.innerHTML=d.award.map(function(f){
        return '<img src="assets/awards/'+f+'" alt="Award" onerror="this.style.display=\'none\'">';
      }).join('');
    }
  }

  // visuals: real images where provided, else color + watermark
  var slotImgs = d.img ? [d.img.key, d.img.wide, d.img.g1, d.img.g2] : [];
  if(d.galleryHidden){ var g=document.querySelector('.dgal'); if(g) g.style.display='none'; }
  if(d.img && !d.img.g1){ var tw=document.querySelector('.dgal .two'); if(tw) tw.style.display='none'; }
  var wm = d.en.replace(/<br>/g,' ');
  document.querySelectorAll('.dvbg').forEach(function(v,i){
    var src = slotImgs[i];
    if(src){
      v.style.backgroundImage='url("'+src+'")';
      v.style.backgroundSize='cover';
      v.style.backgroundPosition='center';
      v.classList.remove('ph');
    } else {
      v.style.background = d.color;
      var par = v.closest('.dvisual');
      if(par && !par.querySelector('.ph-wm')){
        var s=document.createElement('span'); s.className='ph-wm'; s.textContent=wm; par.appendChild(s);
      }
    }
  });

  // next
  var nx=P[d.next]; var nlink=document.getElementById('t-next');
  if(nx && nlink){
    nlink.setAttribute('href','펜슬 — Work 상세 템플릿.html?p='+d.next);
    var nm=document.getElementById('t-next-nm'); if(nm) nm.textContent=nx.en.replace(/<br>/g,' ');
    setBi('t-next-sub', nx.sub);
  }
})();
