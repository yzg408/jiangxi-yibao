/**
 * 江西·南昌医保政策数据
 * 数据来源：
 *   1. 江西省医疗保障局官网 (ybj.jiangxi.gov.cn)
 *   2. 南昌市医疗保障局官网 (ybj.nc.gov.cn)
 *   3. 《南昌市城乡居民基本医疗保险实施办法》(洪府发[2022]38号)
 *   4. 《关于调整南昌市职工基本医疗保险住院报销比例政策的通知》(洪医保发[2025]27号)
 *   5. 《关于健全完善城乡居民大病保险的通知》(赣医保发[2024]7号)
 *   6. 《江西省国家医保谈判药品"双通道"管理办法》(赣医保字[2025]15号)
 *   7. 《关于健全基本医疗保险参保长效机制的实施意见》
 *   8. 国家医疗保障局官网 (nhsa.gov.cn)
 *   9. 江西日报《起付线、封顶线、报销比例咋算》(2025年9月2日)
 *
 * ⚠️ 政策时效性提醒：医保政策每年可能调整，最终以官方最新文件为准。
 */

export const categories = [
  { id: 'home', name: '首页', icon: '🏠' },
  { id: 'payment', name: '参保缴费', icon: '💰' },
  { id: 'inpatient-worker', name: '职工住院报销', icon: '🏥' },
  { id: 'inpatient-resident', name: '居民住院报销', icon: '🏨' },
  { id: 'outpatient', name: '门诊待遇', icon: '🩺' },
  { id: 'chronic', name: '门诊慢特病', icon: '📋' },
  { id: 'cross-region', name: '异地就医', icon: '🚄' },
  { id: 'dual-channel', name: '双通道药品', icon: '💊' },
  { id: 'guide', name: '办事指南', icon: '📖' },
  { id: 'worker-serious-illness', name: '职工大病保险', icon: '🔰' },
  { id: 'civil-servant', name: '公务员补助', icon: '🏛️' },
]

/** 参保缴费 */
export const payment = {
  resident: {
    title: '城乡居民医保缴费',
    source: '赣医保发[2024]7号 + 国家医保局政策',
    url: 'https://ybj.jiangxi.gov.cn/jxsylbzj/col/col65263/content/content_2034179704030224384.html',
    items: [
      {
        label: '缴费标准（2025年度）',
        content: '个人缴费每人每年400元，财政补助每人每年670元，合计1070元/人。'
      },
      {
        label: '全额资助对象',
        content: '特困供养人员、孤儿、70周岁以上（含70周岁）老人、高校大学生——个人不缴费，财政全额资助。'
      },
      {
        label: '定额资助对象',
        content: '城乡低保对象、返贫致贫人口、脱贫不稳定人口、边缘易致贫人口、重度残疾学生和儿童、丧失劳动能力的重度残疾成年人——个人缴纳30元（或80元），财政资助320元。'
      },
      {
        label: '集中征缴期',
        content: '每年9月15日至次年2月28日。在集中征缴期内缴费的，待遇享受期为当年1月1日至12月31日。'
      },
      {
        label: '错过集中征缴期',
        content: '自缴费之日起设置3个月固定待遇等待期。等待期内发生的医疗费用由个人承担。'
      },
      {
        label: '新生儿参保',
        content: '出生90天内参保缴费的，自出生之日起享受医保待遇。出生90天后至1周岁参保的，不设等待期，缴费次日起享受待遇。'
      },
      {
        label: '缴费方式',
        content: '可通过江西智慧医保APP、赣服通（支付宝）、"江西医疗保障"微信公众号、"江西省税务局"微信公众号、税务窗口、银行窗口等多种渠道缴费。'
      },
      {
        label: '职工个账代缴',
        content: '职工医保个人账户可为本省参保的近亲属（配偶、父母、子女、兄弟姐妹、祖父母、外祖父母、孙子女、外孙子女）代缴居民医保费。在江西智慧医保APP"家庭共济"模块操作。'
      }
    ]
  },
  worker: {
    title: '职工医保缴费',
    source: '南昌市医保局官网 + 江西省医保局',
    items: [
      {
        label: '缴费比例',
        content: '个人缴费比例为8.8%（含生育保险费0.8%），缴费基数为统筹地区上年度全口径城镇单位就业人员月平均工资。'
      },
      {
        label: '个人账户',
        content: '个人缴纳的基本医疗保险费全部计入个人账户。单位缴纳的基本医疗保险费全部计入统筹基金。个人账户可用于支付本人及近亲属在定点医药机构的个人自付费用。'
      },
      {
        label: '门诊共济',
        content: '职工医保普通门诊费用纳入统筹基金报销，起付线300元/年。在职职工：一级65%、二级60%、三级55%；退休人员各加5%。年度限额：在职2000元，退休3000元。'
      }
    ]
  }
}

/** 职工医保住院报销 */
export const inpatientWorker = {
  title: '南昌市职工医保住院报销标准',
  source: '《关于调整南昌市职工基本医疗保险住院报销比例政策的通知》(洪医保发[2025]27号)',
  url: 'https://m12333.cn/policy/pfkri.html',
  table: {
    headers: ['医疗机构级别', '起付线', '报销比例'],
    rows: [
      ['一级及以下', '200元', '95%'],
      ['二级', '500元', '90%'],
      ['三级', '800元', '85%']
    ]
  },
  notes: [
    '精神病住院不设起付线，直接报销。',
    '恶性肿瘤放化疗第二次起不设起付线。',
    '年度最高支付限额：基本医保统筹基金10万元 + 大病保险40万元 = 合计50万元。',
    '住院分娩：2024年1月1日起取消起付线，二级及以下医疗机构报销100%，三级报销90%。',
    '报销比例指政策范围内费用的报销比例，非医疗总费用。'
  ]
}

/** 城乡居民医保住院报销 */
export const inpatientResident = {
  title: '南昌市城乡居民医保住院报销标准',
  source: '《南昌市城乡居民基本医疗保险实施办法》(洪府发[2022]38号)',
  url: 'https://ybj.nc.gov.cn/ncylbzj/lzyj/202301/fa5bcef146524eb197208f5d0685012a.shtml',
  table: {
    headers: ['医疗机构级别', '起付线', '报销比例'],
    rows: [
      ['一级及以下', '100元', '90%'],
      ['二级', '400元', '80%'],
      ['三级', '600元', '60%']
    ]
  },
  notes: [
    '70周岁以上老人和6周岁以内儿童，第四次起住院免起付线。',
    '年度最高支付限额：基本医保10万元 + 大病保险30万元（连续参保满4年可提高封顶线）。',
    '全省居民政策范围内住院费用报销比例稳定在70%左右（2024年实际达到71.29%）。',
    '住院分娩：取消起付线，政策范围内二级及以下报销100%，三级报销90%。无痛分娩、辅助生殖已纳入医保报销。'
  ],
  seriousIllness: {
    title: '城乡居民大病保险',
    source: '《关于健全完善城乡居民大病保险的实施意见》(赣医保发〔2024〕10号) — 2025-01-01起执行',
    url: 'https://ybj.jiangxi.gov.cn/jxsylbzj/col/col65263/content/content_1871920914456489984.html',
    deduct: {
      normal: '按上年度全省居民人均可支配收入的50%确定，2025年约1.7万元',
      hardship: '特困/孤儿/低保/返贫致贫人员减半，约0.85万元'
    },
    ratio: {
      normal: '60%',
      hardship: '65%'
    },
    cap: {
      normal: '不低于25万元（南昌市30万元）',
      hardship: '不设封顶线'
    },
    scope: '住院 + Ⅰ类门诊慢特病（基本医保报销后的合规自付部分）。不含：乙类先行自付、超限价费用、转外先行自付、目录外自费、非定点医疗机构费用',
    incentives: [
      '连续参保激励：连续参保满4年后，每多1年，封顶线+3000元',
      '零报销激励：当年未报销者，次年封顶线+3000元（可累计）',
      '封顶线提升上限：不超过原封顶线的20%'
    ],
    items: [
      '起付线（普通居民）：按上年度全省居民人均可支配收入的50%确定，2025年约1.7万元',
      '起付线（困难群体）：特困/孤儿/低保/返贫致贫人员减半，约0.85万元',
      '报销比例（普通居民）：60%',
      '报销比例（困难群体）：65%',
      '封顶线（普通居民）：不低于25万元（南昌市30万元）',
      '封顶线（困难群体）：不设封顶线',
      '连续参保激励：连续参保满4年，每多1年封顶线+3000元',
      '零报销激励：当年未报销，次年封顶线+3000元（可累计）',
      '封顶线提升上限：不超过原封顶线的20%'
    ]
  }
}

/** 职工大病保险 */
export const workerSeriousIllness = {
  title: '南昌市职工大病保险',
  source: '南昌市职工大病保险政策（职工医保自动附带）',
  note: '职工大病保险是职工基本医保自带的，不用额外交钱。和城乡居民大病保险是两套规则，起付线、报销比例、封顶线都不一样。',
  trigger: {
    label: '触发条件',
    value: '年度内基本医保报销后，个人自付合规费用累计超过10万元，自动进入大病保险报销。不到10万不触发。'
  },
  ratio: '90%',
  cap: '50万元/年',
  scope: '基本医保报销后的政策范围内自付费用（合规费用）。不含目录外自费项目、超限价费用。',
  items: [
    '职工大病保险随职工基本医保自动参加，无需单独缴费。',
    '触发门槛：年度内基本医保报完后，自己掏的合规费用累计超10万元。',
    '报销比例：90%。',
    '年度封顶线：50万元。',
    '与公务员补助的区别：大病保险是职工医保自带的第二层，公务员补助是第三层（财政出钱，仅机关事业单位有）。'
  ]
}

/** 公务员医疗补助 */
export const civilServant = {
  title: '南昌市公务员医疗补助',
  source: '南昌市《机关事业单位人员医疗补助实施办法》',
  overview: '在南昌当公务员/机关事业编，医保是三层叠加：① 职工基本医保（所有人都有）→ ② 大病保险（职工自动带，不用额外交钱）→ ③ 公务员医疗补助（机关事业单位才有，财政出钱）。个人不用交钱，全部单位/财政出。',
  eligibility: {
    label: '谁能享受？',
    value: '市直/区直机关公务员、参公人员、全额拨款事业编（含退休）。简单说：体制内财政发工资的，单位给你交了"公务员医疗补助"这一项。'
  },
  personalAccount: {
    label: '每月往医保卡打钱（个人账户）',
    items: [
      '在职：33～34元/月（一年约400块）',
      '退休：75元/月（一年900块）',
      '用途：门诊、买药、体检都能刷，随便用。'
    ]
  },
  hospitalization: {
    label: '住院二次报销（最值钱的部分）',
    desc: '流程：总费用 → 基本医保报 → 大病保险报 → 剩下自付的，公务员补助再报',
    rules: [
      '没有起付线，符合条件的直接报',
      '只报"医保范围内"的自付部分（目录外自费项目不报）',
      '没有封顶线：花多少、符合范围就按比例报多少'
    ],
    ratios: [
      { rank: '科级及以下', active: '96%', retired: '98%' },
      { rank: '县级', active: '98%', retired: '100%' },
      { rank: '厅级及以上', active: '100%', retired: '100%' }
    ]
  },
  outpatient: {
    label: '门诊补助',
    items: [
      '普通门诊：基本医保统筹报完后，自付部分公务员补助再补20%（限额跟着门诊统筹走）',
      '慢特病门诊：按住院规则，公务员补助同样按96%～100%二次报销'
    ]
  },
  example: {
    label: '举个例子：南昌科级在职公务员住院花20万',
    items: [
      '第1步·基本医保（三级医院）：报约85% → 报17万，自付3万',
      '第2步·大病保险：自付3万没到10万门槛 → 暂不触发',
      '第3步·公务员补助：对3万自付报96% → 补2.88万',
      '✅ 自己实际掏：1200元',
      '💡 如果花到50万以上：基本+大病先报，剩下自付的公务员补助继续按96%～100%报，上不封顶'
    ]
  },
  // 以下 items 用于搜索索引和 PolicyItem 渲染
  items: [
    { label: '适用对象', content: '市直/区直机关公务员、参公人员、全额拨款事业编（含退休）。个人不用交钱，全部财政出。' },
    { label: '个人账户（每月打入）', content: '在职33～34元/月（年约400元），退休75元/月（年约900元）。门诊、买药、体检随便用。' },
    { label: '住院报销（无起付线、无封顶线）', content: '基本医保+大病保险报完后，公务员补助对剩余自付部分：科级及以下在职96%/退休98%，县级在职98%/退休100%，厅级及以上100%。' },
    { label: '门诊补助', content: '普通门诊：基本医保统筹报完后，自付部分再补20%。慢特病门诊：按住院规则同样96%～100%二次报。' }
  ]
}

/** 门诊待遇 */
export const outpatient = {
  worker: {
    title: '职工医保门诊共济',
    source: '江西日报2025年9月2日09版 + 江西省医保局政策解读',
    url: 'http://ybj.jiangxi.gov.cn/jxsylbzj/col/col27597/content/content_1965643907931512832.html',
    items: [
      '起付线：300元/年（在职、灵活就业、退休人员相同）。一年内累计自付满300元后，超出部分开始报销。',
      '报销比例（在职）：一级及以下65%、二级60%、三级55%。',
      '报销比例（退休）：一级及以下70%、二级65%、三级60%。',
      '年度限额：在职2000元，退休3000元。',
      '定点零售药店购药：凭定点医疗机构处方，甲类药报销65%（退休70%），乙类药先自付10%再按比例报销。',
      '互联网医院：必须先诊疗再开处方，药店药师审核处方后方可购药报销。',
      '家庭共济说明：个人账户"钱可共济、卡不能共用"，报销比例取决于参保类型，与共济无关。'
    ]
  },
  resident: {
    title: '城乡居民医保门诊统筹',
    source: '《南昌市城乡居民基本医疗保险实施办法》(洪府发[2022]38号)',
    items: [
      '普通门诊：在一级及以下定点医疗机构，不设起付线，报销60%，不设年度封顶线。',
      '签约家庭医生：报销比例提高5%（即65%）。',
      '县中医院中医药门诊：报销40%。',
      '全省平均：政策范围内门诊医疗待遇报销比例稳定在50%左右，其中一级及以下65%左右。'
    ]
  },
  twoDiseases: {
    title: '高血压、糖尿病（两病）门诊用药保障',
    source: '江西省医保局 + 国家医保局',
    items: [
      '适用对象：尚未确定为门诊慢特病、需要药物控制的高血压/糖尿病参保居民。',
      '起付线：不设起付线。',
      '报销比例：一级及以下65%左右，二级50%。',
      '年度限额：高血压400元，糖尿病500元。同时患两种的，限额累计计算（900元）。',
      '南昌市标准：一级及以下60%、二级50%，限额高血压400元/糖尿病500元。'
    ]
  }
}

/** 门诊慢特病 */
export const chronic = {
  title: '江西省门诊慢特病政策',
  source: '江西省医保局 + 南昌市医保局《实施办法》',
  url: 'https://www.nhsa.gov.cn/art/2024/12/24/art_14_15221.html',
  overview: '自2024年1月1日起，江西实施全省统一的门诊慢特病管理办法、病种目录和认定标准，取消起付线，报销比例按就诊医疗机构住院待遇执行。',
  categories: {
    class1: {
      name: 'Ⅰ类（9种基本病种）',
      desc: '恶性肿瘤门诊治疗（含白血病）、慢性肾功能衰竭（尿毒症期）、器官移植抗排异治疗、血友病、再生障碍性贫血、系统性红斑狼疮、重症肌无力、地中海贫血、阿尔茨海默病',
      policy: '报销比例和年度最高支付限额按就诊医疗机构住院待遇执行（即：一级90%、二级80%、三级60%）。年度限额与住院合并计算最高50万元（职工）/10万元（居民）。'
    },
    class2: {
      name: 'Ⅱ类（26种基本病种 + 32种拓展病种）',
      desc: '包括高血压并发症、糖尿病并发症、痛风、银屑病、冠心病、病毒性肝炎等，具体病种由各统筹地区确定。',
      policy: '报销比例按就诊医疗机构住院报销比例执行。年度最高支付限额由各统筹地区确定。南昌市标准：单病种4000-10000元，多病种限额累加不超过7000元/年。'
    }
  },
  notes: [
    '全省统一病种目录共67种（35种基本病种 + 32种拓展病种）。',
    '认定资格下放至符合条件的一级及以上定点医疗机构。',
    '省内门诊慢特病资格互认，医保关系转移接续时无需重新认定。',
    '大部分病种取得资格后不用复审，少部分需隔2-5年复审。',
    '南昌市：I类8种+II类22种（原标准）+儿童颅咽管瘤等5种纳入I类管理。',
    '高血压、糖尿病、恶性肿瘤门诊放化疗、尿毒症透析、器官移植术后抗排异治疗等10种慢特病可跨省直接结算。'
  ]
}

/** 异地就医 */
export const crossRegion = {
  title: '江西省异地就医政策',
  source: '江西省医保局 + 江西省省本级职工跨省异地就医直接结算报销政策明白卡(2025年11月)',
  url: 'https://m12333.cn/qa/meafp.html',
  innerProvince: {
    title: '省内异地就医',
    content: '自2023年4月1日起，全省参保人员在省内异地就医购药无需备案，直接结算。执行参保地同等待遇政策：不提高起付线，不另设先行自付比例，不降低报销比例。'
  },
  crossProvince: {
    title: '跨省异地就医',
    items: [
      {
        type: '长期居住人员',
        desc: '异地安置退休人员、异地长期居住人员、常驻异地工作人员。办理备案后，报销比例与参保地相同（不降）。'
      },
      {
        type: '转诊/急诊人员',
        desc: '需通过"国家医保服务平台"APP或线下窗口办理备案。职工个人先行自付10%，再按参保地比例报销。居民同。'
      },
      {
        type: '其他临时外出/未备案',
        desc: '非急诊且未转诊。职工个人先行自付20%，再按参保地比例报销。居民先自付20%。'
      }
    ],
    table: {
      title: '江西省省本级职工跨省住院报销标准',
      headers: ['就医类型', '一级', '二级', '三级', '先行自付'],
      rows: [
        ['长期居住人员', '起付200/报95%', '起付500/报90%', '起付800/报85%', '0%'],
        ['转诊就医人员', '起付200/报95%', '起付500/报90%', '起付800/报85%', '10%'],
        ['其他临时外出', '起付200/报95%', '起付500/报90%', '起付800/报85%', '20%']
      ]
    },
    note: '备案有效期内在江西省内就医的，按参保地同等待遇外加10%先行自付。长期居住备案有效期内回江西就医按10%先行自付。'
  },
  settlement: {
    title: '直接结算病种',
    content: '高血压、糖尿病、恶性肿瘤门诊放化疗、尿毒症透析、器官移植术后抗排异治疗、慢性阻塞性肺疾病、类风湿关节炎、冠心病、病毒性肝炎、强直性脊柱炎——共10种门诊慢特病可跨省直接结算。'
  }
}

/** 双通道药品 */
export const dualChannel = {
  title: '国家医保谈判药品"双通道"政策',
  source: '《江西省国家医保谈判药品"双通道"管理办法》(赣医保字[2025]15号)',
  url: 'https://www.nhsa.gov.cn/art/2024/12/24/art_14_15221.html',
  overview: '"双通道"是指通过定点医疗机构和定点零售药店两个渠道，满足国家医保谈判药品供应保障和临床使用需求，并同步纳入医保支付的机制。',
  items: [
    {
      label: '目录规模',
      content: '2024年江西省"双通道"药品目录达330个。2025年版394种（A类209种+ B类185种）。'
    },
    {
      label: 'A类药品',
      content: '使用周期较长、疗程费用较高的谈判药品。职工报销70%，居民报销60%（定额支付）。'
    },
    {
      label: 'B类药品',
      content: '临床价值高、患者急需、替代性不高、重特大疾病或传染病应急需要的谈判药品。参保人员先自付10%，再按职工70%/居民60%报销。'
    },
    {
      label: '资格认定',
      content: '由"双通道"定点医疗机构相关专业科室提出建议，填写申请及评估表，提供临床诊断依据，医疗机构医保办审核。'
    },
    {
      label: '报销实况',
      content: '2024年1-10月，江西省参保群众使用国谈药品总费用36.82亿元，医保报销28.15亿元，惠及503.14万人次，平均报销比76.45%。'
    }
  ]
}

/**
 * 构建全站搜索索引
 * 返回一个扁平数组，每个条目包含标签、内容的文本摘要、所在分类
 */
export function buildSearchIndex() {
  const index = []

  function push(catId, catName, icon, title, texts) {
    const text = Array.isArray(texts) ? texts.join(' ') : String(texts)
    const snippet = text.length > 80 ? text.slice(0, 80) + '…' : text
    // 去掉 "起付线"、"报销比例" 等纯关键词标签，保留完整句子
    index.push({ catId, catName, icon, title, snippet, text: text.toLowerCase() })
  }

  // 参保缴费
  const pCat = categories.find(c => c.id === 'payment')
  payment.resident.items.forEach(item => push('payment', pCat.name, pCat.icon, item.label, item.content))
  payment.worker.items.forEach(item => push('payment', pCat.name, pCat.icon, item.label, item.content))

  // 职工住院
  const iwCat = categories.find(c => c.id === 'inpatient-worker')
  push('inpatient-worker', iwCat.name, iwCat.icon, inpatientWorker.title, inpatientWorker.table.rows.map(r => r.join(' ')))
  inpatientWorker.notes.forEach(n => push('inpatient-worker', iwCat.name, iwCat.icon, inpatientWorker.title, n))

  // 居民住院
  const irCat = categories.find(c => c.id === 'inpatient-resident')
  push('inpatient-resident', irCat.name, irCat.icon, inpatientResident.title, inpatientResident.table.rows.map(r => r.join(' ')))
  inpatientResident.notes.forEach(n => push('inpatient-resident', irCat.name, irCat.icon, inpatientResident.title, n))
  inpatientResident.seriousIllness.items.forEach(item => push('inpatient-resident', irCat.name, irCat.icon, inpatientResident.seriousIllness.title, item))

  // 门诊
  const oCat = categories.find(c => c.id === 'outpatient')
  outpatient.worker.items.forEach(item => push('outpatient', oCat.name, oCat.icon, outpatient.worker.title, item))
  outpatient.resident.items.forEach(item => push('outpatient', oCat.name, oCat.icon, outpatient.resident.title, item))
  outpatient.twoDiseases.items.forEach(item => push('outpatient', oCat.name, oCat.icon, outpatient.twoDiseases.title, item))

  // 慢特病
  const cCat = categories.find(c => c.id === 'chronic')
  push('chronic', cCat.name, cCat.icon, chronic.title, chronic.overview)
  push('chronic', cCat.name, cCat.icon, chronic.categories.class1.name, chronic.categories.class1.desc + ' ' + chronic.categories.class1.policy)
  push('chronic', cCat.name, cCat.icon, chronic.categories.class2.name, chronic.categories.class2.desc + ' ' + chronic.categories.class2.policy)
  chronic.notes.forEach(n => push('chronic', cCat.name, cCat.icon, chronic.title, n))

  // 异地就医
  const crCat = categories.find(c => c.id === 'cross-region')
  push('cross-region', crCat.name, crCat.icon, crossRegion.innerProvince.title, crossRegion.innerProvince.content)
  crossRegion.crossProvince.items.forEach(item => push('cross-region', crCat.name, crCat.icon, item.type, item.desc))
  push('cross-region', crCat.name, crCat.icon, crossRegion.settlement.title, crossRegion.settlement.content)
  crossRegion.crossProvince.table.rows.forEach(r => push('cross-region', crCat.name, crCat.icon, crossRegion.crossProvince.title, r.join(' ')))

  // 双通道
  const dCat = categories.find(c => c.id === 'dual-channel')
  push('dual-channel', dCat.name, dCat.icon, dualChannel.title, dualChannel.overview)
  dualChannel.items.forEach(item => push('dual-channel', dCat.name, dCat.icon, item.label, item.content))

  // 办事指南
  const gCat = categories.find(c => c.id === 'guide')
  guide.contacts.forEach(c => push('guide', gCat.name, gCat.icon, c.area, c.phone))
  guide.onlinePlatforms.forEach(p => push('guide', gCat.name, gCat.icon, p.name, p.desc || ''))
  guide.processItems.forEach(p => push('guide', gCat.name, gCat.icon, p.title, p.steps.join(' ')))

  // 职工大病保险
  const wsiCat = categories.find(c => c.id === 'worker-serious-illness')
  workerSeriousIllness.items.forEach(item => push('worker-serious-illness', wsiCat.name, wsiCat.icon, workerSeriousIllness.title, item))

  // 公务员医疗补助
  const csCat = categories.find(c => c.id === 'civil-servant')
  civilServant.items.forEach(item => push('civil-servant', csCat.name, csCat.icon, item.label, item.content))

  return index
}

/**
 * 搜索函数：返回匹配的索引条目
 */
export function searchPolicies(query, index) {
  if (!query || query.trim().length < 1) return []
  const q = query.trim().toLowerCase()
  // 按相关性排序：标题匹配 > 内容匹配
  const scored = index.map(entry => {
    let score = 0
    const entryTitle = entry.title || ''
    const entryText = entry.text || ''
    if (entryTitle.toLowerCase().includes(q)) score += 10
    // 关键词拆字匹配
    const words = q.split(/[\s,，、]+/).filter(w => w.length > 0)
    words.forEach(w => {
      if (entryText.includes(w)) score += 1
    })
    // 精确短语匹配加分
    if (entryText.includes(q)) score += 5
    return { ...entry, score }
  })
  return scored.filter(e => e.score > 0).sort((a, b) => b.score - a.score).slice(0, 30)
}

/** 办事指南 */
export const guide = {
  title: '医保办事指南',
  source: '南昌市医疗保障局官网 (ybj.nc.gov.cn)',
  contacts: [
    { area: '南昌市医保局（政策咨询）', phone: '0791-83807690' },
    { area: '南昌县', phone: '85717363' },
    { area: '进贤县', phone: '85667928' },
    { area: '安义县', phone: '83416836' },
    { area: '东湖区', phone: '87838930' },
    { area: '西湖区', phone: '86565028' },
    { area: '青云谱区', phone: '88462519' },
    { area: '青山湖区', phone: '88307727' },
    { area: '新建区', phone: '83735700' },
    { area: '红谷滩区', phone: '83859212' },
    { area: '高新区', phone: '88312797' },
    { area: '经开区', phone: '83802220' },
    { area: '湾里管理局', phone: '83761021' }
  ],
  onlinePlatforms: [
    { name: '江西医保网上服务大厅', url: 'https://ggfw.ybj.jiangxi.gov.cn' },
    { name: '江西智慧医保APP', desc: '手机应用商店搜索"江西智慧医保"下载' },
    { name: '赣服通（支付宝）', desc: '支付宝搜索"赣服通"进入医保专区' },
    { name: '"江西医疗保障"微信公众号', desc: '微信搜索关注，进入"微服务-医保查询办理"' },
    { name: '"国家医保服务平台"APP', desc: '跨省异地就医备案专用' },
    { name: '国务院客户端小程序', desc: '微信搜索，可在线办理异地就医备案' }
  ],
  processItems: [
    { title: '异地就医备案', steps: ['通过"国家医保服务平台"APP或国务院客户端小程序在线备案', '或前往参保地医保经办窗口办理', '备案后持社保卡/医保电子凭证在异地定点医疗机构直接结算'] },
    { title: '门诊慢特病认定', steps: ['前往符合条件的二级及以上定点医疗机构', '由相关科室医生提出建议，填写申请', '提供临床诊断依据等材料', '医疗机构医保办审核认定'] },
    { title: '手工报销', steps: ['出院后持身份证、社保卡、住院发票、费用清单、出院小结', '到参保地医保经办机构办理', '非本人原因造成未刷卡的可以手工报销'] }
  ]
}
