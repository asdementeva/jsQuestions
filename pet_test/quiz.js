  const themes = [
    {
      topic: "Основы ООП",
      questions: [
          {
              question: "Что представляет собой принцип инкапсуляции в объектно-ориентированном программировании?",
              options: ["Создание нового класса на основе существующего.", "Сокрытие деталей реализации и предоставление интерфейса для взаимодействия с объектом.", " Возможность объектов использовать методы базового класса в специфичной для своего класса форме.", "Предоставление упрощенного представления объекта, скрывая ненужные детали."],
              correctAnswer: "Сокрытие деталей реализации и предоставление интерфейса для взаимодействия с объектом."
          },
          {
            question: "Что обеспечивает принцип наследования в ООП?",
            options: ["Возможность объектов использовать методы базового класса в специфичной для своего класса форме.",
            " Создание нового класса на основе существующего, заимствуя его свойства и методы.",
            "Сокрытие деталей реализации и предоставление интерфейса для взаимодействия с объектом.",
            "Предоставление упрощенного представления объекта, скрывая ненужные детали."],
            correctAnswer: "Создание нового класса на основе существующего, заимствуя его свойства и методы."
        },
        {
          question: "Что предоставляет принцип полиморфизма в объектно-ориентированном программировании?",
          options: ["Создание нового класса на основе существующего, заимствуя его свойства и методы.",
          "Возможность объектов использовать методы базового класса в специфичной для своего класса форме.",
          "Сокрытие деталей реализации и предоставление интерфейса для взаимодействия с объектом.",
          "Предоставление упрощенного представления объекта, скрывая ненужные детали."],
          correctAnswer: "Возможность объектов использовать методы базового класса в специфичной для своего класса форме."
      },
      {
        question: "Что предоставляет принцип абстракции в объектно-ориентированном программировании?",
        options: ["Создание нового класса на основе существующего, заимствуя его свойства и методы.",
        "Возможность объектов использовать методы базового класса в специфичной для своего класса форме.",
        "Сокрытие деталей реализации и предоставление интерфейса для взаимодействия с объектом.",
        "Предоставление упрощенного представления объекта, скрывая ненужные детали."],
        correctAnswer: "Предоставление упрощенного представления объекта, скрывая ненужные детали."
    },
    {
      question: "Что обеспечивает принцип композиции в объектно-ориентированном программировании?",
      options: ["Создание нового класса на основе существующего, заимствуя его свойства и методы.",
      "Возможность объектов использовать методы базового класса в специфичной для своего класса форме.",
      "Объединение более простых объектов в один сложный объект.",
      "Предоставление упрощенного представления объекта, скрывая ненужные детали."],
      correctAnswer: "Объединение более простых объектов в один сложный объект."
  },
  {
    question: "Каково определение принципа инкапсуляции?",
    options: ["Принцип создания нового класса на основе существующего.",
    "Принцип скрытия деталей реализации и предоставления интерфейса для взаимодействия с объектом.",
    "Принцип использования методов базового класса в специфичной для своего класса форме.",
    "Принцип создания сложных объектов из более простых."],
    correctAnswer: " Принцип скрытия деталей реализации и предоставления интерфейса для взаимодействия с объектом."
},
{
  question: "Что представляет собой принцип наследования в ООП?",
  options: ["Возможность использования методов базового класса в специфичной для своего класса форме.",
  "Создание нового класса на основе существующего, заимствуя его свойства и методы",
  "Создание сложных объектов из более простых.",
  "Сокрытие деталей реализации и предоставление интерфейса для взаимодействия с объектом."],
  correctAnswer: "Создание нового класса на основе существующего, заимствуя его свойства и методы."
},
{
  question: "Какой принцип позволяет объектам использовать методы базового класса в специфичной для своего класса форме?",
  options: ["Инкапсуляция.",
  "Наследование.",
  "Полиморфизм",
  "Абстракция"],
  correctAnswer: "Полиморфизм"
},
{
  question: "Какое определение соответствует принципу абстракции?",
  options: ["Создание нового класса на основе существующего.",
  "Сокрытие деталей реализации и предоставление интерфейса для взаимодействия с объектом.",
  "Предоставление упрощенного представления объекта, скрывая ненужные детали.",
  "Создание сложных объектов из более простых."],
  correctAnswer: "Предоставление упрощенного представления объекта, скрывая ненужные детали."
},
{
  question: "Какой принцип позволяет создавать сложные объекты из более простых, объединяя их в один объект?",
  options: ["Инкапсуляция.",
  "Наследование.",
  "Полиморфизм",
  "Композиция"],
  correctAnswer: "Композиция"
},
          // Добавьте больше вопросов, как это нужно
      ]
  },
            {
                topic: 'Week1, Module "Chrome Dev Tools, VS Code, Terminal"',
                questions: [
                    {
                        question: "Каковы основные принципы технической инфраструктуры Интернета, и в чем заключается разница между Интернетом и Вебом?",
                        options: ["Основные принципы - использование кабельных подключений, разница в том, что Интернет - это аппаратная часть, а Веб - программная.",
                        "Основные принципы - связь между компьютерами, разница в том, что Интернет - это аппаратная и программная части, а Веб - это сервис поверх Интернета.",
                        "Основные принципы - беспроводные технологии, разница в том, что Интернет - это программная часть, а Веб - аппаратная."],
                        correctAnswer: "Основные принципы - связь между компьютерами, разница в том, что Интернет - это аппаратная и программная части, а Веб - это сервис поверх Интернета."
                    },
                    {
                      question: "Как началось развитие Интернета, и какие ключевые этапы его истории выделяются?",
                      options: ["Развитие началось в 1980-х годах, ключевые этапы - создание первого компьютера.",
                      "Развитие началось в 1960-х годах, ключевые этапы - военно-исследовательский проект, публичная инфраструктура в 1980-х.",
                      "Развитие началось в 2000-х годах, ключевые этапы - широкое использование интернет-браузеров."],
                      correctAnswer: "Развитие началось в 1960-х годах, ключевые этапы - военно-исследовательский проект, публичная инфраструктура в 1980-х."
                  },
                  {
                    question: "Как работает сеть между двумя компьютерами, и почему использование роутера становится важным при подключении большего количества компьютеров?",
                    options: ["Связь между компьютерами осуществляется автоматически, роутер не требуется.",
                    "Роутер используется для обеспечения правильной доставки сообщений между компьютерами, особенно при подключении множества устройств.",
                    "Роутер не влияет на работу сети."],
                    correctAnswer: "Роутер используется для обеспечения правильной доставки сообщений между компьютерами, особенно при подключении множества устройств."
                },
                {
                  question: "Почему использование модема важно для подключения нашей сети к телефонной инфраструктуре?",
                  options: ["Модем не влияет на подключение к телефонной инфраструктуре.",
                  "Модем переводит информацию из формата нашей сети в формат, понятный телефонной инфраструктуре, и наоборот.",
                  "Модем необходим только для беспроводного подключения."],
                  correctAnswer: "Модем переводит информацию из формата нашей сети в формат, понятный телефонной инфраструктуре, и наоборот."
              },
              {
                question: "Как сообщения передаются через Интернет от исходной сети к целевой, и как в этот процесс вовлечены поставщики услуг Интернета (ISP)?",
                options: ["Сообщения передаются напрямую между компьютерами, ISP не участвуют.",
                "ISP маршрутизируют сообщения от исходной сети к целевой через свою инфраструктуру, обеспечивая доставку.",
                "ISP не имеют отношения к передаче сообщений в Интернете."],
                correctAnswer: "ISP маршрутизируют сообщения от исходной сети к целевой через свою инфраструктуру, обеспечивая доставку."
            },
            {
              question: "Какова роль IP-адреса в сети, и как он используется для отправки сообщений компьютеру?",
              options: ["IP-адрес не играет роли в сети.",
              "IP-адрес - уникальная метка для идентификации компьютера в сети, используется для правильной маршрутизации сообщений.",
              "IP-адрес используется только для подключения к интернет-браузеру."],
              correctAnswer: "IP-адрес - уникальная метка для идентификации компьютера в сети, используется для правильной маршрутизации сообщений."
          },
          {
            question: "Какие преимущества и особенности у веб-браузера при взаимодействии с Интернетом?",
            options: ["Веб-браузеры не имеют преимуществ и особенностей.",
            " Преимущества в том, что веб-браузеры обеспечивают доступ к Интернету и отображают веб-страницы, особенность - возможность запуска приложений.",
            "Особенности в том, что веб-браузеры используются только для чтения электронной почты."],
            correctAnswer: "Преимущества в том, что веб-браузеры обеспечивают доступ к Интернету и отображают веб-страницы, особенность - возможность запуска приложений."
        },
        {
          question: "В чем отличие между Интернетом и Вебом, и какой сервис предоставляется на основе Интернета?",
          options: ["Отличий нет, Интернет и Веб - синонимы, сервис - просмотр новостей.",
          "Интернет - это аппаратная часть, Веб - программная, сервис - веб-браузер.",
          "Интернет - техническая инфраструктура, Веб - сервисы и приложения поверх Интернета, сервис - множество, включая Веб."],
          correctAnswer: "Интернет - техническая инфраструктура, Веб - сервисы и приложения поверх Интернета, сервис - множество, включая Веб."
      },
      {
        question: "Что такое интранеты и экстранеты, и как они используют общую инфраструктуру Интернета для организации внутренней и внешней коммуникации в компаниях?",
        options: ["Интранеты и экстранеты не имеют отношения к Интернету.",
        "Интранеты - внутренние сети компаний, экстранеты - внешние сети компаний, обе используют Интернет для коммуникации.",
        "Интранеты и экстранеты - синонимы, используются для общения внутри компании."],
        correctAnswer: "Интранеты - внутренние сети компаний, экстранеты - внешние сети компаний, обе используют Интернет для коммуникации."
    },
    {
      question: "Как изменить текущую директорию в командной строке?",
      options: ["RD",
      "MD",
      "CD",
      "DIR"],
      correctAnswer: "CD"
    },
    {
      question: "Как перейти к корневой директории диска в командной строке?",
      options: ["CD\\",
      "RD\\",
      "MD\\",
      "DIR\\"],
      correctAnswer: "CD\\"
    },
    {
      question: "Как навигироваться к конкретной папке в командной строке?",
      options: ["CD path",
      "RD path",
      "MD path",
      "DIR path"],
      correctAnswer: "CD path"
    },
    {
      question: "Как изменить родительскую директорию в командной строке?",
      options: ["RD..",
      "MD..",
      "CD..",
      "DIR.."],
      correctAnswer: "CD.."
    },
    {
      question: "Как изменить директорию в командной строке на рабочий стол или другую пользовательскую папку?",
      options: ["CD Desktop",
      "CD Documents",
      "CD %userprofile%\\Desktop",
      "CD %userprofile%\\Documents"],
      correctAnswer: "CD %userprofile%\\Desktop"
    },
    {
      question: "Как изменить диск в командной строке с использованием команды для смены диска?",
      options: ["CD D:",
      "RD D:",
      "MD D:",
      "DIR D:"],
      correctAnswer: "CD D:"
    },
    {
      question: "Как просмотреть содержимое директории в командной строке?",
      options: ["RD",
      "MD",
      "DIR",
      "CD"],
      correctAnswer: "DIR"
    },
    {
      question: "Как создать новую директорию с помощью командной строки?",
      options: ["RD Folder",
      "CD Folder",
      "MD Folder",
      "DIR Folder"],
      correctAnswer: "MD Folder"
    },
    {
      question: "Как переименовать файлы и папки в командной строке?",
      options: ["RENAME",
      "REN",
      "RD",
      "MD"],
      correctAnswer: "REN"
    },
    {
      question: "Как скопировать файлы в командной строке?",
      options: ["COPY",
      "MOVE",
      "XCOPY",
      "DEL"],
      correctAnswer: "COPY"
    },
    {
      question: "Как скопировать папки в командной строке вместе с их содержимым?",
      options: ["COPY",
      "MOVE",
      "XCOPY",
      "DEL"],
      correctAnswer: "XCOPY"
    },
    {
      question: "Как удалить файлы из директории в командной строке?",
      options: ["DELETE",
      "REMOVE",
      "DEL",
      "ERASE"],
      correctAnswer: "DEL"
    },
    {
      question: "Как удалить пустую папку в командной строке?",
      options: ["DELETE",
      "REMOVE",
      "RD",
      "ERASE"],
      correctAnswer: "RD"
    },
    {
      question: "Как запустить приложение из командной строки в Windows?",
      options: ["RUN",
      "START",
      "OPEN",
      "LAUNCH"],
      correctAnswer: "START"
    },
    {
      question: "Как получить справку в командной строке?",
      options: ["INFO",
      "HELP",
      "ABOUT",
      "MANUAL"],
      correctAnswer: "HELP"
    },
                    // Добавьте больше вопросов, как это нужно
                ]
            },
            {
                topic: "Наука",
                questions: [
                    {
                        question: "What is the chemical symbol for water?",
                        options: ["H2O", "CO2", "O2", "NaCl"],
                        correctAnswer: "H2O"
                    },
                    {
                        question: "Which gas do plants absorb from the atmosphere?",
                        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                        correctAnswer: "Carbon Dioxide"
                    },
                    // Добавьте больше вопросов, как это нужно
                ]
            },
            // Добавьте больше тем, как это нужно
        ];

        let currentThemeIndex = 0;
        let currentQuestionIndex = 0;

        function selectTheme() {
            currentThemeIndex = document.getElementById('theme').value;
            currentQuestionIndex = 0;
            loadQuestion();
        }

        function loadQuestion() {
            const questionElement = document.getElementById('question');
            const optionsContainer = document.getElementById('options');

            // Accessing the current question based on the currentQuestionIndex
            const currentQuestion = themes[currentThemeIndex].questions[currentQuestionIndex];

            questionElement.textContent = currentQuestion.question;

            optionsContainer.innerHTML = "";
            currentQuestion.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.onclick = () => checkAnswer(option);
                optionsContainer.appendChild(button);
            });
        }

        function checkAnswer(selectedOption) {
            const correctAnswer = themes[currentThemeIndex].questions[currentQuestionIndex].correctAnswer;

            alert(`Your answer: ${selectedOption}\nCorrect answer: ${correctAnswer}`);
        }

        function nextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex >= themes[currentThemeIndex].questions.length) {
                currentQuestionIndex = 0;
            }
            loadQuestion();
        }

        // Начальная загрузка
        loadQuestion();
