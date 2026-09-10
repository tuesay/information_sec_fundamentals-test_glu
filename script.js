// =========================================================================
// 1. НАСТРОЙКИ И ВОПРОСЫ ТЕСТА (МЕНЯЙТЕ ТОЛЬКО ЭТОТ БЛОК ДЛЯ НОВЫХ ТЕСТОВ)
// =========================================================================

const QUIZ_CONFIG = {
  title: "Тест по основам информационной безопасности", // Название вашего теста
  storageKey: "infosec_quiz_mistakes_v1" // Уникальный ключ для сохранения ошибок (меняйте для каждого нового теста!)
};

const LETTERS = ["A", "B", "C", "D", "E", "F"];
    
const BaseQuestions = [
  {
    id: 1, type: "single",
    question: "Автоматизированная система (АС) — это:",
    options: [
      "система, состоящая из технических средств и баз данных и реализующая информационную технологию обработки данных без обязательного участия обслуживающего персонала в контуре управления",
      "система, состоящая из персонала и комплекса средств автоматизации его деятельности, реализующая информационную технологию выполнения установленных функций",
      "информационная система, открытая для использования всеми физическими и юридическими лицами и предоставляющая услуги по обработке информации на равных условиях",
      "комплекс программных и аппаратных средств защиты информации, предназначенный исключительно для предотвращения несанкционированного доступа к данным организации"
    ],
    correctIndex: 1
  },
  {
    id: 2, type: "single",
    question: "Автоматизированная система в защищенном исполнении (АСЗИ) — это:",
    options: [
      "АС, функционирующая исключительно в штатном режиме работы и не использующая встроенные средства защиты информации при обработке данных ограниченного доступа",
      "АС, в которой применяются только криптографические средства защиты информации и полностью исключены организационные и программно-аппаратные меры",
      "АС, реализующая информационную технологию выполнения установленных функций в соответствии с требованиями стандартов и (или) иных нормативных документов по защите информации",
      "АС, входящая в состав корпоративной информационной системы и использующая единые правила разграничения доступа участников этой корпоративной системы"
    ],
    correctIndex: 2
  },
  {
    id: 3, type: "single",
    question: "Администратор АС — это лицо, ответственное за:",
    options: [
      "защиту информационной системы от несанкционированного доступа к информации и организацию мероприятий по обеспечению безопасности информации",
      "установку и настройку программного обеспечения на рабочих местах пользователей, а также обучение персонала работе с прикладными программами",
      "проведение конфиденциальных переговоров в защищаемом помещении и контроль соблюдения режима конфиденциальности участниками совещаний",
      "функционирование автоматизированной системы в установленном штатном режиме работы"
    ],
    correctIndex: 3
  },
  {
    id: 4, type: "single",
    question: "Администратор защиты (безопасности) информации — это лицо, ответственное за:",
    options: [
      "защиту ИС от несанкционированного доступа к информации",
      "функционирование автоматизированной системы в установленном штатном режиме работы и контроль работоспособности её технических средств",
      "установку программного продукта на компьютер и приведение структуры устанавливаемого ПО в соответствие с конфигурацией вычислительной системы",
      "разработку модели угроз и модели нарушителя, а также согласование технического задания на создание системы защиты информации"
    ],
    correctIndex: 0
  },
  {
    id: 5, type: "single",
    question: "Атака — это:",
    options: [
      "случайное воздействие на информацию, не связанное с целенаправленными действиями нарушителя и возникающее вследствие сбоев технических средств",
      "целенаправленные действия нарушителя с использованием технических и (или) программных средств с целью нарушения заданных характеристик безопасности защищаемой криптосредством информации или с целью создания условий для этого",
      "плановая проверка эффективности системы защиты информации, проводимая с согласия руководства организации в рамках внутреннего аудита безопасности",
      "процесс передачи информации по линиям связи между абонентами сети с использованием штатных средств вычислительной техники и связи"
    ],
    correctIndex: 1
  },
  {
    id: 6, type: "single",
    question: "Безопасность — это:",
    options: [
      "отсутствие любых угроз на территории государства, обеспечиваемое полным контролем информационных потоков и силовых структур",
      "способность государства контролировать все финансовые, информационные и материальные потоки на своей территории без внешнего вмешательства",
      "состояние защищенности жизненно важных интересов личности, общества и государства от внутренних и внешних угроз",
      "состояние защищенности исключительно государственных интересов и интересов государственных органов от внутренних и внешних угроз"
    ],
    correctIndex: 2
  },
  {
    id: 7, type: "single",
    question: "Безопасность информации — это:",
    options: [
      "состояние защищенности информации, характеризуемое способностью персонала, технических средств и информационных технологий обеспечивать конфиденциальность, целостность и доступность информации при ее обработке техническими средствами",
      "состояние защищенности информации, характеризуемое способностью ИС сохранять информацию в тайне от любых субъектов, включая имеющих законные полномочия на ознакомление с ней",
      "способность информационной системы обеспечивать беспрепятственный доступ к информации всем субъектам независимо от наличия у них полномочий и прав доступа",
      "сохранение и неизменность информации при любых несанкционированных или случайных воздействиях на нее в процессе обработки, хранения и передачи"
    ],
    correctIndex: 0
  },
  {
    id: 8, type: "single",
    question: "Безопасность объекта — это:",
    options: [
      "состояние защищенности информации, обрабатываемой на объекте, от несанкционированного доступа со стороны внешних и внутренних нарушителей",
      "способность объекта функционировать без сбоев и отказов технических средств в течение всего срока эксплуатации без проведения регламентных работ",
      "отсутствие на объекте нарушителей, посетителей и посторонних лиц, а также транспортных и иных материальных средств, не принадлежащих организации",
      "состояние защищенности объекта от внешних и внутренних угроз"
    ],
    correctIndex: 3
  },
  {
    id: 9, type: "single",
    question: "Блокирование персональных данных — это:",
    options: [
      "временное прекращение сбора, систематизации, накопления, использования, распространения персональных данных, в том числе их передачи",
      "уничтожение материальных носителей персональных данных, при котором невозможно восстановить их содержание в информационной системе",
      "предоставление персональных данных неограниченному кругу лиц с согласия субъекта или в случаях, установленных федеральными законами",
      "действия, в результате которых невозможно определить принадлежность персональных данных конкретному субъекту персональных данных"
    ],
    correctIndex: 0
  },
  {
    id: 10, type: "single",
    question: "Вспомогательные технические средства и системы (ВТСС) — это:",
    options: [
      "технические средства и системы, предназначенные для обработки, хранения и передачи конфиденциальной информации, включая средства связи и передачи данных",
      "технические средства и системы, не предназначенные для передачи, обработки и хранения конфиденциальной информации, размещаемые совместно с основными техническими средствами и системами или в защищаемых помещениях",
      "средства связи и линии передачи данных, используемые исключительно для передачи конфиденциальной информации между абонентами сети связи",
      "программные средства, обеспечивающие защиту информации от несанкционированного доступа и контроля эффективности применяемых мер защиты"
    ],
    correctIndex: 1
  },
  {
    id: 11, type: "single",
    question: "Документированная информация — это:",
    options: [
      "информация, переданная по электронным каналам связи и хранящаяся в базах данных информационных систем организации в электронно-цифровой форме",
      "информация, размещенная в информационно-телекоммуникационных сетях и доступная неограниченному кругу лиц без каких-либо ограничений доступа",
      "зафиксированная на материальном носителе путем документирования информация с реквизитами, позволяющими определить такую информацию или в установленных законодательством РФ случаях ее материальный носитель",
      "информация, содержащаяся исключительно в базах данных и обрабатываемая с использованием средств вычислительной техники по заданным алгоритмам"
    ],
    correctIndex: 2
  },
  {
    id: 12, type: "single",
    question: "Доступ к информации — это:",
    options: [
      "возможность получения информации и ее использования; ознакомление с информацией, ее обработка, в частности копирование, модификация или уничтожение информации",
      "исключительно право на ознакомление с информацией без права ее копирования, модификации или уничтожения и без возможности дальнейшего использования",
      "передача информации неопределенному кругу лиц, в том числе обнародование сведений в средствах массовой информации и размещение в сети Интернет",
      "обязательное согласие обладателя информации на любые действия с информацией, включая ознакомление, копирование и распространение"
    ],
    correctIndex: 0
  },
  {
    id: 13, type: "single",
    question: "Доступность информации — это:",
    options: [
      "состояние информации, характеризуемое способностью ИС сохранять информацию в тайне от всех субъектов, включая имеющих законные полномочия на ознакомление",
      "состояние информации, характеризуемое способностью ИС обеспечивать беспрепятственный доступ к информации субъектов, имеющих на это полномочия",
      "состояние информации, характеризуемое способностью ИС обеспечивать сохранность и неизменность информации при любых несанкционированных воздействиях",
      "способность информационной системы передавать информацию исключительно по защищенным каналам связи с использованием криптографических средств"
    ],
    correctIndex: 1
  },
  {
    id: 14, type: "single",
    question: "Жизненно важные интересы — это:",
    options: [
      "интересы государства в военной и оборонной сфере, обеспечивающие независимость и территориальную целостность страны перед лицом внешних угроз",
      "совокупность интересов коммерческих организаций и предприятий, обеспечивающих их устойчивое положение на рынке товаров, работ и услуг",
      "потребности личности в информационной безопасности, обеспечивающие сохранение в тайне её персональных данных при обработке в информационных системах",
      "совокупность потребностей, удовлетворение которых надежно обеспечивает существование и возможности прогрессивного развития личности, общества и государства"
    ],
    correctIndex: 3
  },
  {
    id: 15, type: "single",
    question: "Закладочное устройство — это:",
    options: [
      "элемент средства съема информации, скрытно внедряемый (закладываемый или вносимый) в места возможного съема информации",
      "устройство, предназначенное для защиты информации от утечки по техническим каналам и подавления информативных сигналов в защищаемом помещении",
      "программное средство для шифрования данных, встраиваемое в состав программного обеспечения автоматизированной системы обработки информации",
      "техническое средство для обработки, хранения и передачи конфиденциальной информации в составе основных технических средств и систем"
    ],
    correctIndex: 0
  },
  {
    id: 16, type: "single",
    question: "Защита информации от несанкционированного доступа (защита от НСД) или воздействия — это:",
    options: [
      "установка межсетевого экрана на границе локальной вычислительной сети и настройка правил фильтрации входящего и исходящего трафика организации",
      "обязательное шифрование всех данных, обрабатываемых в информационной системе, с использованием сертифицированных криптографических средств защиты",
      "деятельность, направленная на предотвращение или существенное затруднение несанкционированного доступа к информации (или воздействия на информацию)",
      "проверка персонала на лояльность и проведение регулярных инструктажей по вопросам соблюдения режима информационной безопасности организации"
    ],
    correctIndex: 2
  },
  {
    id: 17, type: "single",
    question: "Защищаемая информация — это:",
    options: [
      "информация, содержащаяся в базах данных информационной системы и обрабатываемая с использованием средств вычислительной техники по заданным алгоритмам",
      "информация, передаваемая по открытым каналам связи и доступная неограниченному кругу лиц без каких-либо ограничений на распространение",
      "информация, для которой обладателем информации определены характеристики ее безопасности",
      "информация, доступная неограниченному кругу лиц с согласия субъекта персональных данных или в соответствии с федеральными законами"
    ],
    correctIndex: 2
  },
  {
    id: 18, type: "single",
    question: "Защищаемые помещения (ЗП) — это:",
    options: [
      "помещения, в которых установлены или хранятся ключевые документы и ключевые носители, используемые для криптографической защиты информации",
      "помещения, в которых размещены исключительно вспомогательные технические средства и системы, не предназначенные для обработки конфиденциальной информации",
      "помещения (служебные кабинеты, актовые, конференц-залы и т.д.), специально предназначенные для проведения конфиденциальных мероприятий (совещаний, обсуждений, конференций, переговоров и т.п.)",
      "помещения, расположенные в контролируемой зоне организации, но без введения ограничений на пребывание сотрудников и посетителей организации"
    ],
    correctIndex: 2
  },
  {
    id: 19, type: "single",
    question: "Защищенное средство вычислительной техники (защищенная АС) — это:",
    options: [
      "средство вычислительной техники (автоматизированная система), в котором реализован комплекс средств защиты",
      "средство вычислительной техники, физически изолированное от информационно-телекоммуникационных сетей и не подключенное к сети Интернет",
      "автоматизированная система, используемая исключительно для обработки общедоступной информации и не содержащая сведений ограниченного доступа",
      "средство вычислительной техники, размещенное в защищаемом помещении и использующее для электропитания только защищенные линии"
    ],
    correctIndex: 0
  },
  {
    id: 20, type: "single",
    question: "Инсталляция — это:",
    options: [
      "удаление программного продукта с компьютера с полной очисткой всех временных файлов, настроек и записей реестра операционной системы",
      "резервное копирование данных пользователя и настроек программного обеспечения перед проведением профилактических работ вычислительной системы",
      "проверка программного продукта на наличие недекларированных (недокументированных) возможностей и скрытых функциональных закладок",
      "установка программного продукта на компьютер"
    ],
    correctIndex: 3
  },
  {
    id: 21, type: "single",
    question: "Информативный сигнал — это:",
    options: [
      "электрические сигналы, акустические, электромагнитные и другие физические поля, по параметрам которых может быть раскрыта конфиденциальная информация, передаваемая, хранимая или обрабатываемая в основных технических средствах и системах или обсуждаемая в защищаемом помещении",
      "любой шум в защищаемом помещении, включая акустические колебания от работы инженерного и вспомогательного оборудования, не связанный с конфиденциальной информацией",
      "сигнал, передаваемый исключительно по оптоволоконным линиям связи между абонентами сети и характеризующий параметры передаваемого трафика",
      "служебная информация системы защиты информации от несанкционированного доступа, содержащая матрицу доступа, ключи и пароли пользователей"
    ],
    correctIndex: 0
  },
  {
    id: 22, type: "single",
    question: "Информационная система (ИС) — это:",
    options: [
      "совокупность содержащейся в базах данных информации и обеспечивающих ее обработку информационных технологий и технических средств",
      "база данных с персональными данными субъектов и совокупность программных средств для их обработки, систематизации и хранения информации",
      "совокупность программного обеспечения и обслуживающего персонала, обеспечивающая обработку информации без использования технических средств",
      "информационно-телекоммуникационная сеть общего пользования, открытая для использования всеми физическими и юридическими лицами"
    ],
    correctIndex: 0
  },
  {
    id: 23, type: "single",
    question: "Информационная система общего пользования — это:",
    options: [
      "информационная система, участниками которой может быть ограниченный круг лиц, определенный ее владельцем или соглашением участников этой системы",
      "информационная система, открытая для использования всеми физическими и юридическими лицами и в услугах которой этим лицам не может быть отказано",
      "информационная система, обрабатывающая исключительно персональные данные субъектов и обеспечивающая их конфиденциальность и защиту",
      "информационная система, предназначенная для использования исключительно государственными органами и государственными организациями"
    ],
    correctIndex: 1
  },
  {
    id: 24, type: "single",
    question: "Информационная система персональных данных (ИСПДн) — это:",
    options: [
      "информационная система, открытая для использования всеми физическими и юридическими лицами и предоставляющая доступ к сведениям без ограничений",
      "государственная информационная система, обрабатывающая сведения, отнесённые к служебной тайне и информации ограниченного распространения",
      "информационная система, представляющая собой совокупность персональных данных, содержащихся в базе данных, а также информационных технологий и технических средств, позволяющих осуществлять обработку таких персональных данных с использованием средств автоматизации или без использования таких средств",
      "локальная вычислительная сеть организации, объединяющая автоматизированные рабочие места сотрудников и обеспечивающая обмен информацией между ними"
    ],
    correctIndex: 2
  },
  {
    id: 25, type: "single",
    question: "Информационно-телекоммуникационная сеть — это:",
    options: [
      "технологическая система, предназначенная для передачи по линиям связи информации, доступ к которой осуществляется с использованием средств вычислительной техники",
      "совокупность баз данных и программного обеспечения, обеспечивающая хранение и обработку информации без использования линий передачи данных",
      "сеть почтовой связи, предназначенная для пересылки почтовых отправлений и сообщений между абонентами в пределах обслуживаемой территории",
      "локальная вычислительная сеть организации без выхода в сети общего пользования, обеспечивающая обмен информацией между рабочими станциями"
    ],
    correctIndex: 0
  },
  {
    id: 26, type: "single",
    question: "Информационно-телекоммуникационная сеть общего пользования — это:",
    options: [
      "информационно-телекоммуникационная сеть, участниками которой может быть ограниченный круг лиц, определенный ее владельцем или соглашением участников",
      "сеть связи, предназначенная исключительно для передачи конфиденциальной информации между абонентами защищённой сети связи организации",
      "технологическая система, включающая в себя средства и линии связи и предназначенная для электросвязи или почтовой связи между абонентами",
      "информационно-телекоммуникационная сеть, которая открыта для использования всеми физическими и юридическими лицами и в услугах которой этим лицам не может быть отказано"
    ],
    correctIndex: 3
  },
  {
    id: 27, type: "single",
    question: "Информационные технологии — это:",
    options: [
      "процессы, методы поиска, сбора, хранения, обработки, предоставления, распространения информации и способы осуществления таких процессов и методов",
      "технические средства обработки информации, включая средства вычислительной техники, средства связи и передачи данных, а также их коммуникации",
      "программное обеспечение для защиты информации, реализующее комп

// Функция перераспределения правильных ответов
function rebalanceCorrectIndex(questions) {
  return questions.map(q => {
    const targetIndex = q.id % 4; // позиции 0,1,2,3 по кругу

    const correctOption = q.options[q.correctIndex];
    const wrongOptions = q.options.filter((_, i) => i !== q.correctIndex);

    const newOptions = [];
    let wrongIndex = 0;

    for (let i = 0; i < q.options.length; i++) {
      if (i === targetIndex) {
        newOptions.push(correctOption);
      } else {
        newOptions.push(wrongOptions[wrongIndex++]);
      }
    }

    return { ...q, options: newOptions, correctIndex: targetIndex };
  });
}

// Применяем
const rebalancedQuestions = rebalanceCorrectIndex(baseQuestions);

// =========================================================================
// 2. ДВИЖОК ТЕСТА (ЛОГИКА И РЕНДЕРИНГ — ТУТ НИЧЕГО МЕНЯТЬ НЕ ТРЕБУЕТСЯ)
// =========================================================================

// Универсальная функция для склонения слов (например: 1 вопрос, 2 вопроса, 5 вопросов)
function pluralize(number, one, few, many) {
  const num = Math.abs(number) % 100;
  const lastDigit = num % 10;
  if (num > 10 && num < 20) return many;
  if (lastDigit > 1 && lastDigit < 5) return few;
  if (lastDigit === 1) return one;
  return many;
}

const storage = {
  getMistakes() {
    try { return JSON.parse(localStorage.getItem(QUIZ_CONFIG.storageKey) || "[]"); } catch { return []; }
  },
  setMistakes(value) { localStorage.setItem(QUIZ_CONFIG.storageKey, JSON.stringify(value)); },
};

// Фильтруем сохраненные ошибки, оставляя только существующие ID вопросов
const validMistakes = storage.getMistakes()
  .map(Number)
  .filter(id => baseQuestions.some(q => q.id === id));

storage.setMistakes(validMistakes);

const state = {
  screen: "home",
  questions: [],
  questionIndex: 0,
  answers: {},
  mistakes: validMistakes,
  mistakeMode: false,
  currentRoundIds: [],
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepareQuestion(question) {
  if (question.type === "single") {
    const order = shuffle(question.options.map((_, index) => index));
    const options = order.map(index => question.options[index]);
    const correctIndex = order.indexOf(question.correctIndex);
    return { ...question, options, correctIndex };
  }

  if (question.type === "match") {
    const order = shuffle(question.options.map((_, index) => index));
    const options = order.map(index => question.options[index]);
    const correctMatches = question.correctMatches.map(originalIndex => order.indexOf(originalIndex));
    return { ...question, options, correctMatches };
  }

  return { ...question };
}

function prepareQuestions(questions) {
  return shuffle(questions.map(prepareQuestion));
}

function startFullQuiz() {
  state.screen = "quiz";
  state.mistakeMode = false;
  state.questionIndex = 0;
  state.answers = {};
  state.questions = prepareQuestions(baseQuestions);
  state.currentRoundIds = state.questions.map(q => q.id);
  render();
}

function startMistakesQuiz() {
  if (!state.mistakes.length) return;
  state.screen = "quiz";
  state.mistakeMode = true;
  state.questionIndex = 0;
  state.answers = {};
  state.questions = prepareQuestions(baseQuestions.filter(q => state.mistakes.includes(q.id)));
  state.currentRoundIds = state.questions.map(q => q.id);
  render();
}

function goHome() {
  state.screen = "home";
  state.questionIndex = 0;
  state.answers = {};
  state.questions = [];
  state.mistakeMode = false;
  render();
}

function getQuestionById(id) {
  return baseQuestions.find(q => q.id === id);
}

function isCorrect(question, answer) {
  if (question.type === "single") return answer === question.correctIndex;
  if (question.type === "match") {
    return Array.isArray(answer) && question.correctMatches.every((v, i) => answer[i] === v);
  }
  return false;
}

function renderHome() {
  const totalQuestions = baseQuestions.length; // Автоматически считает вопросы в базе
  const questionWord = pluralize(totalQuestions, "вопрос", "вопроса", "вопросов");

  return `
    <div class="container">
      <div class="card">
        <div class="title-row">
          <div>
            <h1 style="margin:0;font-size:36px;">Тест по основам информационной безопасности</h1>
            <p class="muted" style="margin:6px 0 0;">${totalQuestions} ${questionWord}</p>
          </div>
        </div>

        <div class="grid grid-2" style="margin-top:18px;">
          <div class="small-card">
            <div class="stat-label">Всего вопросов</div>
            <div class="stat-value">${totalQuestions}</div>
          </div>
          <button class="small-card clickable-card" onclick="startMistakesQuiz()" ${state.mistakes.length ? "" : "disabled"}>
            <div class="stat-label">Ошибок накоплено</div>
            <div class="stat-value">${state.mistakes.length}</div>
            <div class="muted" style="margin-top:8px;font-size:13px;">Нажми, чтобы прорешать</div>
          </button>
        </div>

        <div class="grid grid-2" style="margin-top:16px;">
          <button class="btn" onclick="startFullQuiz()">Начать тест</button>
          <button class="btn secondary" onclick="openMistakesScreen()">Открыть ошибки</button>
        </div>
      </div>
    </div>
  `;
}

function openMistakesScreen() {
  state.screen = "mistakes";
  render();
}

function renderMistakes() {
  const items = state.mistakes.map(id => {
    const q = getQuestionById(id);
    return `<div class="error-item"><div class="muted" style="margin-bottom:6px;">Вопрос ${q.id}</div><div>${q.question}</div></div>`;
  }).join("");

  return `
    <div class="container">
      <div class="btn-row" style="margin-bottom:14px;">
        <button class="btn outline" onclick="goHome()">На главную</button>
        <button class="btn" onclick="startMistakesQuiz()" ${state.mistakes.length ? "" : "disabled"}>Прорешать ошибки</button>
      </div>
      <div class="card">
        <h2 style="margin-top:0;">Раздел «Ошибки»</h2>
        ${state.mistakes.length ? `<div class="list">${items}</div>` : `<div class="center"><div style="font-size:40px;">✅</div><div style="font-size:22px;font-weight:700;">Пока ошибок нет</div><p class="muted">Когда ответишь неправильно, вопрос появится здесь.</p></div>`}
      </div>
    </div>
  `;
}

function renderSingleQuestion(question, answer) {
  return question.options.map((option, idx) => {
    let cls = "option-btn";
    const answered = typeof answer === "number";
    if (answered) {
      if (idx === question.correctIndex) cls += " correct";
      else if (idx === answer && answer !== question.correctIndex) cls += " wrong";
    }
    return `
      <button class="${cls}" onclick="answerSingle(${idx})" ${answered ? "disabled" : ""}>
        <div class="option-inner">
          <div class="option-letter">${LETTERS[idx] || idx + 1}</div>
          <div>${option}</div>
        </div>
      </button>
    `;
  }).join("");
}

function renderMatchQuestion(question, answer) {
  const answered = Array.isArray(answer) && answer.length === question.prompts.length && answer.every(v => typeof v === "number");
  const rows = question.prompts.map((prompt, promptIdx) => {
    const selected = Array.isArray(answer) ? answer[promptIdx] : undefined;
    let result = "";
    if (answered) {
      const ok = selected === question.correctMatches[promptIdx];
      result = `<div class="match-result" style="color:${ok ? "#15803d" : "#b91c1c"};">${ok ? "Правильно" : "Неправильно"}</div>`;
    }
    return `
      <div class="match-card">
        <div style="font-weight:700;margin-bottom:10px;">${prompt}</div>
        <select class="select" onchange="answerMatch(${promptIdx}, this.value)" ${answered ? "disabled" : ""}>
          <option value="">Выберите вариант</option>
          ${question.options.map((opt, optIdx) => `<option value="${optIdx}" ${selected === optIdx ? "selected" : ""}>${opt}</option>`).join("")}
        </select>
        ${result}
      </div>
    `;
  }).join("");
  return rows;
}

function renderQuiz() {
  const question = state.questions[state.questionIndex];
  const answer = state.answers[question.id];
  const progress = Math.round(((state.questionIndex + 1) / state.questions.length) * 100);
  const answered = question.type === "single"
    ? typeof answer === "number"
    : Array.isArray(answer) && answer.length === question.prompts.length && answer.every(v => typeof v === "number");

  return `
    <div class="container">
      <div class="top-row" style="margin-bottom:14px;">
        <button class="btn outline" onclick="goHome()">На главную</button>
        <div class="badge">${state.mistakeMode ? "Режим: ошибки" : "Режим: полный тест"}</div>
      </div>
      <div class="card">
        <div class="top-row">
          <div>
            <h2 style="margin:0;font-size:34px;">Вопрос ${state.questionIndex + 1}</h2>
            <div class="muted" style="margin-top:4px;">из ${state.questions.length}</div>
          </div>
          <div style="text-align:right;">
            <div class="muted" style="font-size:14px;">Прогресс</div>
            <div style="font-weight:700;">${progress}%</div>
          </div>
        </div>
        <div class="progress-wrap">
          <div class="progress-bar"><div class="progress-fill" style="width:${progress}%;"></div></div>
        </div>

        <div class="question-box" style="margin-top:18px;">
          <div style="font-size:20px;line-height:1.5;font-weight:700;">${question.question}</div>
        </div>

        <div class="grid" style="margin-top:18px;">
          ${question.type === "single" ? renderSingleQuestion(question, answer) : renderMatchQuestion(question, answer)}
        </div>

        <div class="btn-row" style="justify-content:space-between;margin-top:18px;">
          <button class="btn outline" onclick="prevQuestion()" ${state.questionIndex === 0 ? "disabled" : ""}>Назад</button>
          <button class="btn" onclick="nextQuestion()" ${answered ? "" : "disabled"}>${state.questionIndex === state.questions.length - 1 ? "Завершить" : "Дальше"}</button>
        </div>
      </div>
    </div>
  `;
}

function answerSingle(optionIndex) {
  const question = state.questions[state.questionIndex];
  if (state.answers[question.id] !== undefined) return;
  state.answers[question.id] = optionIndex;
  if (optionIndex !== question.correctIndex && !state.mistakes.includes(question.id)) {
    state.mistakes.push(question.id);
    storage.setMistakes(state.mistakes);
  }
  render();
}

function answerMatch(promptIndex, value) {
  const question = state.questions[state.questionIndex];
  const idx = value === "" ? undefined : Number(value);
  const current = Array.isArray(state.answers[question.id]) ? [...state.answers[question.id]] : Array(question.prompts.length).fill(undefined);
  current[promptIndex] = idx;
  state.answers[question.id] = current;

  const completed = current.every(v => typeof v === "number");
  if (completed && !isCorrect(question, current) && !state.mistakes.includes(question.id)) {
    state.mistakes.push(question.id);
    storage.setMistakes(state.mistakes);
  }
  render();
}

function prevQuestion() {
  if (state.questionIndex > 0) {
    state.questionIndex -= 1;
    render();
  }
}

function nextQuestion() {
  if (state.questionIndex < state.questions.length - 1) {
    state.questionIndex += 1;
    render();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  if (state.mistakeMode) {
    const roundIds = new Set(state.currentRoundIds);
    const stillWrong = state.currentRoundIds.filter(id => {
      const q = state.questions.find(item => item.id === id) || getQuestionById(id);
      return !isCorrect(q, state.answers[id]);
    });
    state.mistakes = state.mistakes.filter(id => !roundIds.has(id));
    for (const id of stillWrong) {
      if (!state.mistakes.includes(id)) state.mistakes.push(id);
    }
    storage.setMistakes(state.mistakes);
  }
  state.screen = "result";
  render();
}

function renderResult() {
  const total = state.questions.length;
  const correct = state.questions.filter(q => isCorrect(q, state.answers[q.id])).length;
  const wrong = total - correct;
  const percent = total ? Math.round((correct / total) * 100) : 0;
  return `
    <div class="container">
      <div class="card">
        <div class="title-row">
          <div class="icon-box">🏆</div>
          <div>
            <h1 style="margin:0;font-size:34px;">Результат</h1>
            <p class="muted" style="margin:6px 0 0;">${state.mistakeMode ? "Повтор ошибок завершён" : "Основной тест завершён"}</p>
          </div>
        </div>

        <div class="grid grid-3" style="margin-top:18px;">
          <div class="small-card"><div class="stat-label">Правильно</div><div class="stat-value">${correct}</div></div>
          <div class="small-card"><div class="stat-label">Неправильно</div><div class="stat-value">${wrong}</div></div>
          <div class="small-card"><div class="stat-label">Процент</div><div class="stat-value">${percent}%</div></div>
        </div>

        <div style="margin-top:18px;">
          <div class="top-row" style="margin-bottom:8px;"><div class="muted">Успешность</div><div>${percent}%</div></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${percent}%;"></div></div>
        </div>

        <div class="grid grid-2" style="margin-top:18px;">
          <button class="btn" onclick="startFullQuiz()">Пройти весь тест заново</button>
          <button class="btn secondary" onclick="startMistakesQuiz()" ${state.mistakes.length ? "" : "disabled"}>Повторить ошибки</button>
        </div>
        <div style="margin-top:12px;"><button class="btn outline" style="width:100%;" onclick="goHome()">На главную</button></div>
      </div>
    </div>
  `;
}

function render() {
  const app = document.getElementById("app");
  if (state.screen === "home") app.innerHTML = renderHome();
  else if (state.screen === "mistakes") app.innerHTML = renderMistakes();
  else if (state.screen === "quiz") app.innerHTML = renderQuiz();
  else if (state.screen === "result") app.innerHTML = renderResult();
}

window.startFullQuiz = startFullQuiz;
window.startMistakesQuiz = startMistakesQuiz;
window.goHome = goHome;
window.openMistakesScreen = openMistakesScreen;
window.answerSingle = answerSingle;
window.answerMatch = answerMatch;
window.prevQuestion = prevQuestion;
window.nextQuestion = nextQuestion;

render();
