const THEMES = [
    { id: "abyss-2", label: "Abyss 2" }
];

const BASE_PROFILES = [
    {
        id: "amina-sarsen",
        keywords: ["amina", "sarsen", "amina sarsen"],
        queryLabel: "Человек Человекович",
        subtitle: "Основной контур выдачи: персональный профиль, связанные компании и ключевые темы вокруг инвестиционной активности.",
        stats: [
            { value: "142", label: "релевантных публикации" },
            { value: "7", label: "связанных организаций" },
            { value: "89%", label: "уверенность AI-сводки" }
        ],
        summary: [
            "Публикации формируют образ частного инвестора, связанного с несколькими структурами в энергетике, логистике и private equity.",
            "За последние недели усилился сюжет о консолидации активов через Orda Holding и переговорах с Northbridge Energy.",
            "Резких негативных триггеров не найдено, но Tarmak отмечает рост внимания к бенефициарной структуре и роли посредников."
        ],
        signals: [
            { title: "Narrative pressure", text: "Упоминания о реструктуризации капитала растут третью неделю подряд.", strength: 78 },
            { title: "Entity overlap", text: "Повторяются одни и те же контрагенты в логистике, энергетике и advisory.", strength: 84 },
            { title: "Reputation watch", text: "Тон публикаций нейтральный, но число обзоров с вопросами к ownership chain увеличилось.", strength: 61 }
        ],
        entities: [
            { name: "Orda Holding", type: "Организация", relation: "основной холдинг" },
            { name: "Northbridge Energy", type: "Организация", relation: "переговорный контур" },
            { name: "Aster Capital", type: "Организация", relation: "совместный инвестконтур" },
            { name: "Miras Advisory", type: "Организация", relation: "структурирование сделок" }
        ],
        questions: [
            "Какие активы фигурируют в одной и той же цепочке владения вместе с Orda Holding?",
            "Насколько устойчив сюжет о переговорах с Northbridge Energy по сравнению с предыдущим месяцем?",
            "Есть ли медиапаттерн, где одно и то же событие переформулируется через разные источники?"
        ],
        nodes: ["Человек Человекович", "Orda Holding", "Northbridge Energy", "Aster Capital", "Logistics SPV", "Board advisors", "Regional lenders"],
        articles: [
            {
                type: "person",
                typeLabel: "Персона",
                source: "Capital Monitor",
                date: "Сегодня, 08:20",
                title: "Человек Человекович усиливает переговоры по энергетическому активу через Orda Holding",
                excerpt: "Материал связывает имя запроса с расширением инвестиционного контура и подготовкой структуры для дальнейшей сделки.",
                tags: ["Orda Holding", "энергетика", "ownership"]
            },
            {
                type: "org",
                typeLabel: "Организация",
                source: "Market Ledger",
                date: "Вчера, 19:40",
                title: "Northbridge Energy фигурирует в новом витке публикаций о стратегическом партнерстве",
                excerpt: "Несколько источников пересказывают одну и ту же историю разными формулировками, но сохраняют одинаковый список связанных структур.",
                tags: ["Northbridge Energy", "стратегия", "партнерство"]
            },
            {
                type: "theme",
                typeLabel: "Сюжет",
                source: "Dealbook East",
                date: "18 марта",
                title: "Нарратив о консолидации private assets смещается от спекуляций к структуре сделки",
                excerpt: "Появляется больше конкретики по SPV и advisory-командам, чем в ранних заметках.",
                tags: ["private assets", "SPV", "advisory"]
            }
        ]
    },
    {
        id: "orda-holding",
        keywords: ["orda", "holding", "orda holding"],
        queryLabel: "Orda Holding",
        subtitle: "Организационный профиль: новостная хронология, деловые связи и повторяющиеся фигуры вокруг холдинга.",
        stats: [
            { value: "264", label: "совпадения по индексу" },
            { value: "11", label: "связанных персонам" },
            { value: "5", label: "сквозных сюжетов" }
        ],
        summary: [
            "Orda Holding выступает как точка сборки нескольких сюжетов: энергетика, логистика и перераспределение капитала через дочерние структуры.",
            "Почти все заметные публикации последних дней содержат повторяющиеся отсылки к одному кругу советников и партнеров.",
            "AI считает главным вопросом не сам факт активности холдинга, а последовательность появляющихся рядом организаций."
        ],
        signals: [
            { title: "Cluster density", text: "Связи с advisory и logistics-структурами образуют плотный кластер.", strength: 88 },
            { title: "Narrative repetition", text: "Одинаковые тезисы повторяются через разные издания и синдикаторы.", strength: 75 },
            { title: "New counterparties", text: "За последние 10 дней добавились два новых контрагента в теме сделок.", strength: 66 }
        ],
        entities: [
            { name: "Человек Человекович", type: "Персона", relation: "основной бенефициарный контур" },
            { name: "Miras Advisory", type: "Организация", relation: "структурирование" },
            { name: "Northbridge Energy", type: "Организация", relation: "потенциальная сделка" },
            { name: "Silk Route Ports", type: "Организация", relation: "логистическая связка" }
        ],
        questions: [
            "Какие дочерние компании чаще всего появляются рядом с Orda Holding в одном новостном кластере?",
            "В каких сюжетах холдинг упоминается как инициатор, а в каких только как связанная сторона?",
            "Есть ли структурный разрыв между публичным нарративом и картой связанных организаций?"
        ],
        nodes: ["Orda Holding", "Человек Человекович", "Northbridge Energy", "Silk Route Ports", "Miras Advisory", "SPV Delta", "Board network"],
        articles: [
            {
                type: "org",
                typeLabel: "Организация",
                source: "Corporate Brief",
                date: "Сегодня, 09:45",
                title: "Orda Holding объединяет вокруг себя новый слой публикаций о транспортной инфраструктуре",
                excerpt: "Материалы ссылаются на холдинг как на центр переговоров между логистическими и энергетическими активами.",
                tags: ["инфраструктура", "логистика", "ownership"]
            },
            {
                type: "person",
                typeLabel: "Персона",
                source: "Private Capital Review",
                date: "Вчера, 17:05",
                title: "Советники вокруг Orda Holding повторяются во всех заметных обзорах",
                excerpt: "AI выделяет одни и те же имена и advisory-структуры как важный повторяющийся сигнал.",
                tags: ["советники", "контур влияния", "deal team"]
            },
            {
                type: "theme",
                typeLabel: "Сюжет",
                source: "Frontier Markets",
                date: "17 марта",
                title: "Сюжет о перераспределении активов вокруг холдинга меняет тон на более фактический",
                excerpt: "Становится меньше слухов и больше структурных деталей по роли дочерних компаний.",
                tags: ["реструктуризация", "дочерние компании", "briefing"]
            }
        ]
    },
    {
        id: "northbridge-energy",
        keywords: ["northbridge", "energy", "northbridge energy"],
        queryLabel: "Northbridge Energy",
        subtitle: "Профиль организации с акцентом на сделки, медийный тон и повторяющийся круг связанных сущностей.",
        stats: [
            { value: "186", label: "новостей в активном кластере" },
            { value: "4", label: "ключевые темы" },
            { value: "72%", label: "вероятность сделки по оценке AI" }
        ],
        summary: [
            "Northbridge Energy чаще всего упоминается как переговорная сторона в крупной энергетической комбинации, а не как источник публичных заявлений.",
            "Рынок связывает компанию с возможным входом частного капитала через региональных партнеров и advisory-команды.",
            "Сильнее всего растёт именно тематический кластер вокруг сделки, а не органические корпоративные новости."
        ],
        signals: [
            { title: "Deal probability", text: "Тон и частота материалов напоминают раннюю фазу подготовленной транзакции.", strength: 72 },
            { title: "Source concentration", text: "Основной поток формируется вокруг ограниченного набора отраслевых изданий.", strength: 69 },
            { title: "Counterparty focus", text: "Практически во всех заметках фигурируют одни и те же партнёры и советники.", strength: 83 }
        ],
        entities: [
            { name: "Orda Holding", type: "Организация", relation: "потенциальный инвестконтур" },
            { name: "Aster Capital", type: "Организация", relation: "финансовый интерес" },
            { name: "Человек Человекович", type: "Персона", relation: "повторяющийся контекст" },
            { name: "Helios Terminal", type: "Организация", relation: "связанный актив" }
        ],
        questions: [
            "Какие публикации дают фактологию по сделке, а какие лишь усиливают рыночный шум?",
            "Как меняется набор контрагентов рядом с компанией от недели к неделе?",
            "Где появляются первые признаки перехода от обсуждения к подтверждению структуры сделки?"
        ],
        nodes: ["Northbridge Energy", "Orda Holding", "Aster Capital", "Helios Terminal", "Project lenders", "Deal advisers", "Regional grid"],
        articles: [
            {
                type: "theme",
                typeLabel: "Сюжет",
                source: "Energy Desk",
                date: "Сегодня, 07:10",
                title: "Northbridge Energy снова появляется в контексте возможной инвестиционной комбинации",
                excerpt: "В одном кластере совмещаются тема энергетического актива, private capital и логистическая инфраструктура.",
                tags: ["энергетика", "сделка", "private capital"]
            },
            {
                type: "org",
                typeLabel: "Организация",
                source: "Strategic Journal",
                date: "Вчера, 14:55",
                title: "Отраслевые медиа фокусируются на круге партнеров вокруг Northbridge Energy",
                excerpt: "Часть источников повторяет тезисы о региональных посредниках и финансовых советниках.",
                tags: ["партнеры", "advisory", "регион"]
            },
            {
                type: "person",
                typeLabel: "Персона",
                source: "Executive Watch",
                date: "18 марта",
                title: "Упоминания ключевых персон усиливают тему готовящейся структуры",
                excerpt: "AI связывает материалы по именам и ролям, а не только по прямому названию компании.",
                tags: ["люди", "роли", "структура"]
            }
        ]
    },
    {
        id: "aster-capital",
        keywords: ["aster", "capital", "aster capital"],
        queryLabel: "Aster Capital",
        subtitle: "Инвестконтур с акцентом на private equity, ко-инвесторов и новостную картину вокруг финансирования.",
        stats: [
            { value: "97", label: "связанных материалов" },
            { value: "6", label: "ключевых контрагентов" },
            { value: "3", label: "главных сюжетных линии" }
        ],
        summary: [
            "Aster Capital фигурирует как финансовый слой в историях, где на первом плане стоят другие бренды и активы.",
            "Наибольшая ценность в выдаче не в количестве упоминаний, а в том, что AI показывает общую архитектуру отношений.",
            "Сейчас самые сильные связи ведут к Orda Holding, энергетическому сюжету и advisory-контакту через Miras Advisory."
        ],
        signals: [
            { title: "Financing role", text: "Компания чаще выступает как финансовый инструмент сделки, чем как операционный игрок.", strength: 74 },
            { title: "Mention depth", text: "Упоминаний меньше, но они насыщены структурной информацией.", strength: 68 },
            { title: "Cross-linking", text: "Почти все медийные связи проходят через 2-3 опорных сюжета.", strength: 81 }
        ],
        entities: [
            { name: "Orda Holding", type: "Организация", relation: "совместный контур" },
            { name: "Miras Advisory", type: "Организация", relation: "структурирование" },
            { name: "Человек Человекович", type: "Персона", relation: "связанный профиль" },
            { name: "Northbridge Energy", type: "Организация", relation: "потенциальный актив" }
        ],
        questions: [
            "Где Aster Capital упоминается как прямой участник, а где лишь как контекстная часть структуры?",
            "Какие публикации лучше всего объясняют роль Aster Capital для неаналитической аудитории?",
            "Есть ли материалы, где контур компании описан глубже обычного рыночного пересказа?"
        ],
        nodes: ["Aster Capital", "Orda Holding", "Человек Человекович", "Northbridge Energy", "Miras Advisory", "Co-investors", "Private lenders"],
        articles: [
            {
                type: "org",
                typeLabel: "Организация",
                source: "Capital Structuring",
                date: "Сегодня, 11:30",
                title: "Aster Capital связывают с новым слоем финансирования вокруг крупного актива",
                excerpt: "Издания описывают компанию как тихого, но важного участника инвестиционной конфигурации.",
                tags: ["финансирование", "private equity", "контур"]
            },
            {
                type: "theme",
                typeLabel: "Сюжет",
                source: "Deal Themes",
                date: "Вчера, 16:20",
                title: "AI фиксирует повторяющийся сюжет: финансирование идёт раньше публичных заявлений",
                excerpt: "Структурные сигналы появляются раньше, чем прямые комментарии от участников.",
                tags: ["сделка", "подготовка", "анализ"]
            },
            {
                type: "person",
                typeLabel: "Персона",
                source: "Network Review",
                date: "17 марта",
                title: "Связанные персоны чаще появляются рядом с Aster Capital, чем сама компания",
                excerpt: "Именно поэтому полезен сквозной поиск по людям и организациям одновременно.",
                tags: ["персоны", "ownership", "связи"]
            }
        ]
    }
];

const REFERENCE_RESULT_STREAM = [
    {
        date: "19 марта 2026",
        source: "Источник",
        role: "Заместитель председателя Кабинета министров",
        summary: "Участвовал в церемонии передачи новой техники Государственному предприятию «Кыргыз Комур».",
        location: ""
    },
    {
        date: "19 марта 2026",
        source: "Источник",
        role: "Председатель Кабинета министров Кыргызской Республики",
        summary: "Одобрил постановление № 120, устанавливающее специальные требования к использованию территории вокруг строящегося футбольного стадиона.",
        location: "Кыргызская Республика, Бишкек"
    },
    {
        date: "19 марта 2026",
        source: "Источник",
        role: "Председатель Кабинета министров",
        summary: "Представил коллективу центрального аппарата Министерства финансов нового главу ведомства — Руслана Суйналиева. Подчеркнул особую роль Минфина в обеспечении экономической стабильности и реализации государственных программ.",
        location: "Кыргызстан, Бишкек, центральный аппарат Министерства финансов"
    },
    {
        date: "18 марта 2026",
        source: "Источник",
        role: "Председатель Кабинета министров Кыргызской Республики — руководитель Администрации президента",
        summary: "Представил нового председателя Национального банка Алмаза Бакетаева. Обозначил приоритетные направления работы Национального банка и пожелал успехов главе Нацбанка.",
        location: "Кыргызская Республика"
    },
    {
        date: "18 марта 2026",
        source: "Источник",
        role: "Председатель Кабинета министров — руководитель Администрации президента Кыргызской Республики",
        summary: "Провел встречу с представителями Boston Consulting Group, обсудил перспективные направления взаимодействия и новые возможности для совместной работы.",
        location: "Кыргызская Республика"
    },
    {
        date: "18 марта 2026",
        source: "Источник",
        role: "Председатель Кабинета министров Кыргызстана",
        summary: "Подписал распоряжение № 109-т об утверждении Национального плана действий на 2026–2028 годы по реализации Концепции государственной политики в сфере профилактики правонарушений.",
        location: "Кыргызстан"
    },
    {
        date: "18 марта 2026",
        source: "Источник",
        role: "Председатель Кабинета министров Кыргызской Республики",
        summary: "Одобрил проект Соглашения между Кабинетом министров Кыргызской Республики и правительством Республики Беларусь о взаимном признании и обмене национальных водительских удостоверений.",
        location: "Кыргызская Республика"
    },
    {
        date: "18 марта 2026",
        source: "Источник",
        role: "Глава Кабинета министров Кыргызской Республики",
        summary: "Подписал распоряжение о назначении Ташполотова Кыялбека Жаныбековича директором Республиканского центра медико-социальной экспертизы.",
        location: "Кыргызстан"
    },
    {
        date: "18 марта 2026",
        source: "Источник",
        role: "Глава Кабмина",
        summary: "Подписал распоряжение о назначении Чодоева Нургазы Урбаевича директором Лесной службы при МЧС.",
        location: "Кыргызстан"
    }
];

function safeLocalStorage(action, key, value) {
    try {
        if (action === "get") {
            return window.localStorage.getItem(key);
        }
        if (action === "set") {
            window.localStorage.setItem(key, value);
        }
    } catch (error) {
        return null;
    }
    return null;
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function normalize(value) {
    return String(value || "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}

function cloneProfile(profile) {
    return JSON.parse(JSON.stringify(profile));
}

function buildDynamicProfile(query) {
    const label = query && query.trim() ? query.trim() : "Ваш запрос";
    const profile = cloneProfile(BASE_PROFILES[0]);

    profile.queryLabel = label;
    profile.subtitle = `Демо-выдача для запроса «${label}»: front-end показывает, как Tarmak собирает новости, связанные сущности и AI-краткий пересказ в один экран.`;
    profile.stats = [
        { value: String(80 + label.length * 3), label: "материалов в кластере" },
        { value: String(4 + (label.length % 5)), label: "связанных сущностей" },
        { value: `${70 + (label.length % 20)}%`, label: "уверенность summary" }
    ];
    profile.summary = [
        `Tarmak собрал единый контур упоминаний по запросу «${label}» и отделил повторение сюжетов от новых сигналов.`,
        `AI-summary концентрируется на людях, организациях и связях, которые чаще всего встречаются рядом с запросом в одном новостном кластере.`,
        "Такой формат позволяет быстро оценить контекст запроса без ручного чтения длинной ленты публикаций."
    ];
    profile.signals = [
        { title: "Signal density", text: `По запросу «${label}» заметны повторяющиеся медиасвязи и концентрированные группы упоминаний.`, strength: 74 },
        { title: "Entity graph", text: "Главная ценность выдачи в том, что рядом показываются люди, организации и сюжетные связи.", strength: 82 },
        { title: "Executive clarity", text: "Summary специально сверстан так, чтобы быть понятным и руководителю, и аналитику.", strength: 88 }
    ];
    profile.entities = [
        { name: label, type: "Основной объект", relation: "центр выдачи" },
        { name: "Related Holdings", type: "Организация", relation: "повторяющийся контекст" },
        { name: "Board Network", type: "Сюжет", relation: "кластер упоминаний" },
        { name: "Advisory Layer", type: "Организация", relation: "структурный сигнал" }
    ];
    profile.questions = [
        `Какие организации чаще всего встречаются рядом с «${label}» в одном временном окне?`,
        `Где публикации дают новый факт по запросу «${label}», а где лишь повторяют уже известный сюжет?`,
        "Какие связи стоит вынести на отдельную проверку или watchlist?"
    ];
    profile.nodes = [label, "Related Holdings", "Board Network", "Advisory Layer", "Regional Media", "Capital Flow", "Narrative Shift"];
    profile.articles = [
        {
            type: "theme",
            typeLabel: "Сюжет",
            source: "Tarmak Demo Feed",
            date: "Сегодня, 10:15",
            title: `AI выделил ключевой новостной кластер вокруг запроса «${label}»`,
            excerpt: "Система группирует публикации по общему контексту и убирает лишний шум, чтобы показать суть.",
            tags: ["AI summary", "кластер", "новости"]
        },
        {
            type: "org",
            typeLabel: "Организация",
            source: "Entity Monitor",
            date: "Вчера, 18:00",
            title: `Связанные организации помогают быстрее понять роль запроса «${label}»`,
            excerpt: "Параллельный вывод сущностей помогает моментально увидеть деловые и сюжетные связи.",
            tags: ["организации", "сущности", "граф"]
        },
        {
            type: "person",
            typeLabel: "Персона",
            source: "Analyst View",
            date: "18 марта",
            title: `Люди и роли рядом с «${label}» собраны в единую внутреннюю страницу`,
            excerpt: "Так фронтенд демонстрирует формат результата без необходимости подключать backend.",
            tags: ["персоны", "роли", "demo"]
        }
    ];

    return profile;
}

function pickProfile(query) {
    const normalized = normalize(query);
    const matched = BASE_PROFILES.find((profile) =>
        profile.keywords.some((keyword) => normalized.includes(keyword))
    );

    return matched ? cloneProfile(matched) : buildDynamicProfile(query);
}

function createThemeControls() {
    const containers = document.querySelectorAll("[data-theme-controls]");
    const savedTheme = safeLocalStorage("get", "tarmak-theme") || document.body.dataset.theme || THEMES[0].id;

    applyTheme(savedTheme);

    containers.forEach((container) => {
        container.innerHTML = THEMES.map((theme) => `
            <button
                class="theme-button${theme.id === document.body.dataset.theme ? " is-active" : ""}"
                type="button"
                data-theme-button="${theme.id}"
            >
                ${theme.label}
            </button>
        `).join("");
    });

    document.querySelectorAll("[data-theme-button]").forEach((button) => {
        button.addEventListener("click", () => {
            applyTheme(button.dataset.themeButton);
        });
    });
}

function applyTheme(themeId) {
    const activeTheme = THEMES.some((theme) => theme.id === themeId) ? themeId : THEMES[0].id;
    document.body.dataset.theme = activeTheme;
    safeLocalStorage("set", "tarmak-theme", activeTheme);

    document.querySelectorAll("[data-theme-button]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.themeButton === activeTheme);
    });
}

function initRevealObserver() {
    const reveals = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        reveals.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.14 });

    reveals.forEach((element) => observer.observe(element));
}

function renderPreview(profile) {
    const queryElement = document.querySelector("[data-preview-query]");
    const summaryElement = document.querySelector("[data-preview-summary]");
    const previewArticles = document.querySelector("[data-preview-articles]");
    const previewSummaryList = document.querySelector("[data-preview-summary-list]");
    const previewEntities = document.querySelector("[data-preview-entities]");
    const previewMiniFeed = document.querySelector("[data-preview-mini-feed]");

    if (queryElement) {
        queryElement.textContent = profile.queryLabel;
    }

    if (summaryElement) {
        summaryElement.textContent = profile.summary[0];
    }

    if (previewArticles) {
        previewArticles.innerHTML = profile.articles.map((article) => `
            <article class="preview-article glass-card">
                <span class="card-kicker">${escapeHtml(article.source)}</span>
                <strong>${escapeHtml(article.title)}</strong>
                <p>${escapeHtml(article.excerpt)}</p>
            </article>
        `).join("");
    }

    if (previewSummaryList) {
        previewSummaryList.innerHTML = profile.summary.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    }

    if (previewEntities) {
        previewEntities.innerHTML = profile.entities.map((entity) => `
            <span class="tag">${escapeHtml(entity.name)}</span>
        `).join("");
    }

    if (previewMiniFeed) {
        previewMiniFeed.innerHTML = profile.articles.map((article) => `
            <div class="news-mini-item">
                <strong>${escapeHtml(article.title)}</strong>
                <span>${escapeHtml(article.date)} · ${escapeHtml(article.source)}</span>
            </div>
        `).join("");
    }
}

function syncChipState(activeValue) {
    document.querySelectorAll("[data-query-chip]").forEach((chip) => {
        chip.classList.toggle("is-active", normalize(chip.dataset.queryChip) === normalize(activeValue));
    });
}

function initHomePage() {
    const form = document.querySelector("[data-search-form]");
    const input = form?.querySelector("input[name='q']");
    if (!form || !input) {
        return;
    }

    const updateHomePreview = (value) => {
        const profile = pickProfile(value || BASE_PROFILES[0].queryLabel);
        renderPreview(profile);
        syncChipState(value);
    };

    updateHomePreview(input.value);

    input.addEventListener("input", () => {
        updateHomePreview(input.value);
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = input.value.trim() || BASE_PROFILES[0].queryLabel;
        window.location.href = `company_database.html?q=${encodeURIComponent(query)}`;
    });

    document.querySelectorAll("[data-query-chip]").forEach((chip) => {
        chip.addEventListener("click", () => {
            input.value = chip.dataset.queryChip;
            updateHomePreview(input.value);
        });
    });
}

function renderStats(stats) {
    return stats.map((item) => `
        <div class="status-pill">
            <strong>${escapeHtml(item.value)}</strong>
            <span> ${escapeHtml(item.label)}</span>
        </div>
    `).join("");
}

function renderSummary(summary) {
    return summary.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderSignals(signals) {
    return signals.map((signal) => `
        <article class="signal-tile">
            <strong>${escapeHtml(signal.title)}</strong>
            <p>${escapeHtml(signal.text)}</p>
            <div class="signal-meter" style="--value: ${Math.max(8, Math.min(100, signal.strength))}%;">
                <span></span>
            </div>
        </article>
    `).join("");
}

function renderEntities(entities) {
    return entities.map((entity) => `
        <article class="entity-item">
            <strong>${escapeHtml(entity.name)}</strong>
            <div class="entity-meta">
                <span>${escapeHtml(entity.type)}</span>
                <span>${escapeHtml(entity.relation)}</span>
            </div>
        </article>
    `).join("");
}

function renderQuestions(questions) {
    return questions.map((question, index) => `
        <article class="question-item">
            <strong>0${index + 1}</strong>
            <p>${escapeHtml(question)}</p>
        </article>
    `).join("");
}

function renderNodes(nodes, primaryLabel) {
    return nodes.map((node) => `
        <span class="node${normalize(node) === normalize(primaryLabel) ? " is-primary" : ""}">
            ${escapeHtml(node)}
        </span>
    `).join("");
}

function renderNews(articles, filter) {
    const filtered = filter === "all"
        ? articles
        : articles.filter((article) => article.type === filter);

    if (!filtered.length) {
        return `
            <article class="news-card">
                <span class="card-kicker">No matching items</span>
                <p>Для выбранного фильтра сейчас нет карточек. Переключите тип выдачи, чтобы увидеть весь кластер.</p>
            </article>
        `;
    }

    return filtered.map((article) => `
        <article class="news-card">
            <div class="news-meta">
                <span class="news-type">${escapeHtml(article.typeLabel)}</span>
                <span>${escapeHtml(article.source)}</span>
                <span>${escapeHtml(article.date)}</span>
            </div>
            <h3>${escapeHtml(article.title)}</h3>
            <p>${escapeHtml(article.excerpt)}</p>
            <div class="news-footer">
                ${article.tags.map((tag) => `<span class="news-tag">${escapeHtml(tag)}</span>`).join("")}
            </div>
        </article>
    `).join("");
}

function renderInlineResults(primaryLabel) {
    const visibleItems = REFERENCE_RESULT_STREAM.slice(0, 5);
    const hiddenItems = REFERENCE_RESULT_STREAM.slice(5);
    const renderItem = (item, extraClass = "") => `
        <article class="inline-result-card${extraClass ? ` ${extraClass}` : ""}">
            <div class="inline-result-rail">
                <span class="inline-result-date">${escapeHtml(item.date)}</span>
                <span class="inline-result-source">${escapeHtml(item.source)}</span>
            </div>
            <div class="inline-result-content">
                <div class="inline-result-titleline">
                    <h3>${escapeHtml(primaryLabel)}</h3>
                    <span class="inline-result-role">(${escapeHtml(item.role)})</span>
                </div>
                <p class="inline-result-summary">${escapeHtml(item.summary)}</p>
                ${item.location ? `<p class="inline-result-location">${escapeHtml(item.location)}</p>` : ""}
            </div>
        </article>
    `;

    const slider = hiddenItems.length ? `
        <section class="inline-result-slider" data-inline-slider>
            <div class="inline-result-slider-head">
                <span class="inline-result-slider-label">Ещё результаты</span>
            </div>
            <div class="inline-result-slider-viewport">
                <div class="inline-result-slider-track" data-inline-slider-track>
                    ${hiddenItems.map((item) => renderItem(item, "inline-result-card--slide")).join("")}
                </div>
            </div>
        </section>
    ` : "";

    return `
        <div class="inline-result-stack">
            ${visibleItems.map((item) => renderItem(item)).join("")}
        </div>
        ${slider}
    `;
}

function initInlineResultsSlider() {
    document.querySelectorAll("[data-inline-slider-track]").forEach((track) => {
        track.scrollLeft = 0;
    });
}

function updateResultsPage(query, filter = "all") {
    const profile = pickProfile(query);

    const titleElement = document.querySelector("[data-result-title]");
    const subtitleElement = document.querySelector("[data-result-subtitle]");
    const statsElement = document.querySelector("[data-result-stats]");
    const summaryElement = document.querySelector("[data-summary-list]");
    const signalElement = document.querySelector("[data-signal-grid]");
    const entityElement = document.querySelector("[data-entity-list]");
    const newsElement = document.querySelector("[data-news-feed]");
    const questionElement = document.querySelector("[data-question-list]");
    const nodeElement = document.querySelector("[data-node-cloud]");
    const feedLabel = document.querySelector("[data-feed-label]");
    const searchInput = document.querySelector("#results-query");
    const inlineResults = document.querySelector("[data-inline-results]");

    if (titleElement) {
        titleElement.textContent = profile.queryLabel;
    }
    if (subtitleElement) {
        subtitleElement.textContent = profile.subtitle;
    }
    if (statsElement) {
        statsElement.innerHTML = renderStats(profile.stats);
    }
    if (summaryElement) {
        summaryElement.innerHTML = renderSummary(profile.summary);
    }
    if (signalElement) {
        signalElement.innerHTML = renderSignals(profile.signals);
    }
    if (entityElement) {
        entityElement.innerHTML = renderEntities(profile.entities);
    }
    if (questionElement) {
        questionElement.innerHTML = renderQuestions(profile.questions);
    }
    if (nodeElement) {
        nodeElement.innerHTML = renderNodes(profile.nodes, profile.queryLabel);
    }
    if (newsElement) {
        newsElement.innerHTML = renderNews(profile.articles, filter);
    }
    if (feedLabel) {
        const labels = {
            all: "all results",
            person: "people mentions",
            org: "organization mentions",
            theme: "theme mentions"
        };
        feedLabel.textContent = labels[filter] || labels.all;
    }
    if (searchInput) {
        searchInput.value = query;
    }
    if (inlineResults) {
        inlineResults.innerHTML = renderInlineResults(profile.queryLabel);
        initInlineResultsSlider();
    }

    syncChipState(query);
}

function setActiveFilter(filter) {
    document.querySelectorAll("[data-filter]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.filter === filter);
    });
}

function initResultsPage() {
    const form = document.querySelector("[data-results-form]");
    const input = form?.querySelector("input[name='q']");
    const copyButton = document.querySelector("[data-copy-result-title]");
    if (!form || !input) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    let currentQuery = params.get("q") || BASE_PROFILES[0].queryLabel;
    let currentFilter = "all";

    updateResultsPage(currentQuery, currentFilter);
    renderPreview(pickProfile(currentQuery));

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        currentQuery = input.value.trim() || BASE_PROFILES[0].queryLabel;
        const nextUrl = `${window.location.pathname}?q=${encodeURIComponent(currentQuery)}`;
        window.history.replaceState({}, "", nextUrl);
        updateResultsPage(currentQuery, currentFilter);
    });

    document.querySelectorAll("[data-query-chip]").forEach((chip) => {
        chip.addEventListener("click", () => {
            currentQuery = chip.dataset.queryChip;
            input.value = currentQuery;
            const nextUrl = `${window.location.pathname}?q=${encodeURIComponent(currentQuery)}`;
            window.history.replaceState({}, "", nextUrl);
            updateResultsPage(currentQuery, currentFilter);
        });
    });

    document.querySelectorAll("[data-filter]").forEach((button) => {
        button.addEventListener("click", () => {
            currentFilter = button.dataset.filter;
            setActiveFilter(currentFilter);
            updateResultsPage(currentQuery, currentFilter);
        });
    });

    if (copyButton) {
        copyButton.addEventListener("click", async () => {
            const value = document.querySelector("[data-result-title]")?.textContent?.trim() || "";
            if (!value) {
                return;
            }

            try {
                await navigator.clipboard.writeText(value);
                copyButton.setAttribute("aria-label", "Скопировано");
            } catch (error) {
                copyButton.setAttribute("aria-label", "Не удалось скопировать");
            }

            window.setTimeout(() => {
                copyButton.setAttribute("aria-label", "Скопировать имя");
            }, 1400);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createThemeControls();
    initRevealObserver();

    if (document.body.dataset.page === "home") {
        initHomePage();
    }

    if (document.body.dataset.page === "results") {
        initResultsPage();
    }
});
