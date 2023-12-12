type TNext = string | null;

export interface IOption {
  answer: string;
  next: TNext;
}

export interface IQuestion {
  id: string;
  question: string;
  options: IOption[] | null;
  isMatter: boolean;
  isInput: boolean;
}

export interface IQuestions {
  isFederated?: IQuestion;
  federateCategory?: IQuestion;
  licenseNumber?: IQuestion;
  competeLevel?: IQuestion;
  gender?: IQuestion;
  age?: IQuestion;
  otherSportExp?: IQuestion;
  matchesPerWeek?: IQuestion;
  matchesPerMonth?: IQuestion;
  lessons?: IQuestion;
  fitness?: IQuestion;
  howLongPlaying?: IQuestion;
}

// padel
const padelNoneAndBeginner = {
  gender: {
    id: 'gender',
    question: 'Вы мужчина или женщина?',
    options: [
      { answer: 'Мужчина', next: 'age' },
      { answer: 'Женщина', next: 'age' },
    ],
    isInput: false,
    isMatter: false,
  },
  age: {
    id: 'age',
    question: 'Сколько Вам лет?',
    options: [
      { answer: '18-30', next: 'otherSportExp' },
      { answer: '30-40', next: 'otherSportExp' },
      { answer: '40-50', next: 'otherSportExp' },
      { answer: 'Больше 50', next: 'otherSportExp' },
    ],
    isInput: false,
    isMatter: false,
  },
  otherSportExp: {
    id: 'otherSportExp',
    question: 'Занимались ли Вы в прошлом другими видами ракеточного спорта?',
    options: [
      { answer: 'Нет, никогда', next: 'matchesPerWeek' },
      { answer: 'Да, менее 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 5 лет', next: 'matchesPerWeek' },
    ],
    isInput: false,
    isMatter: false,
  },
  matchesPerWeek: {
    id: 'matchesPerWeek',
    question:
      'Сколько матчей по паделу вы играли в среднем в неделю за последние 6 месяцев?',
    options: [
      { answer: '0', next: 'lessons' },
      { answer: '1', next: 'lessons' },
      { answer: '2', next: 'lessons' },
      { answer: '3 или больше', next: 'lessons' },
    ],
    isInput: false,
    isMatter: false,
  },
  lessons: {
    id: 'lessons',
    question:
      'Получали ли вы уроки падела в прошлом году? Сколько уроков в неделю?',
    options: [
      { answer: 'Нет, ни одного', next: 'fitness' },
      { answer: 'Да, 1 занятие в неделю', next: 'fitness' },
      { answer: 'Да, 2-3 занятия в неделю', next: 'fitness' },
    ],
    isInput: false,
    isMatter: false,
  },
  fitness: {
    id: 'fitness',
    question: 'Какой у Вас уровень физической подготовки?',
    options: [
      { answer: 'Отличный', next: null },
      { answer: 'Хороший', next: null },
      { answer: 'Нормальный', next: null },
      { answer: 'Низкий', next: null },
      { answer: 'Очень низкий', next: null },
    ],
    isInput: false,
    isMatter: false,
  },
};
const padelInterAndHightInter = {
  gender: {
    id: 'gender',
    question: 'Вы мужчина или женщина?',
    options: [
      { answer: 'Мужчина', next: 'age' },
      { answer: 'Женщина', next: 'age' },
    ],
    isInput: false,
    isMatter: false,
  },
  age: {
    id: 'age',
    question: 'Сколько Вам лет?',
    options: [
      { answer: '18-30', next: 'howLongPlaying' },
      { answer: '30-40', next: 'howLongPlaying' },
      { answer: '40-50', next: 'howLongPlaying' },
      { answer: 'Больше 50', next: 'howLongPlaying' },
    ],
    isInput: false,
    isMatter: false,
  },
  howLongPlaying: {
    id: 'howLongPlaying',
    question: 'Как давно вы регулярно играете в падел?',
    options: [
      { answer: 'Меньше года', next: 'otherSportExp' },
      { answer: 'Меньше двух лет', next: 'otherSportExp' },
      { answer: 'Больше двух лет', next: 'otherSportExp' },
    ],
    isInput: false,
    isMatter: false,
  },
  otherSportExp: {
    id: 'otherSportExp',
    question: 'Занимались ли Вы в прошлом другими видами ракеточного спорта?',
    options: [
      { answer: 'Нет, никогда', next: 'matchesPerWeek' },
      { answer: 'Да, менее 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 5 лет', next: 'matchesPerWeek' },
    ],
    isInput: false,
    isMatter: false,
  },
  matchesPerWeek: {
    id: 'matchesPerWeek',
    question:
      'Сколько матчей по паделу вы играли в среднем в неделю за последние 6 месяцев?',
    options: [
      { answer: '0', next: 'lessons' },
      { answer: '1', next: 'lessons' },
      { answer: '2', next: 'lessons' },
      { answer: '3 или больше', next: 'lessons' },
    ],
    isInput: false,
    isMatter: false,
  },
  lessons: {
    id: 'lessons',
    question:
      'Получали ли вы уроки падела в прошлом году? Сколько уроков в неделю?',
    options: [
      { answer: 'Нет, никогда', next: 'fitness' },
      { answer: 'Да, 1 занятие в неделю', next: 'fitness' },
      { answer: 'Да, 2-3 занятие в неделю', next: 'fitness' },
    ],
    isInput: false,
    isMatter: false,
  },
  fitness: {
    id: 'fitness',
    question: 'Какой у Вас уровень физической подготовки?',
    options: [
      { answer: 'Отличный', next: null },
      { answer: 'Хороший', next: null },
      { answer: 'Нормальный', next: null },
      { answer: 'Низкий', next: null },
      { answer: 'Очень низкий', next: null },
    ],
    isInput: false,
    isMatter: false,
  },
};
const padelAdvanced = {
  gender: {
    id: 'gender',
    question: 'Вы мужчина или женщина?',
    options: [
      { answer: 'Мужчина', next: 'age' },
      { answer: 'Женщина', next: 'age' },
    ],
    isInput: false,
    isMatter: false,
  },
  age: {
    id: 'age',
    question: 'Сколько Вам лет?',
    options: [
      { answer: '18-30', next: 'otherSportExp' },
      { answer: '30-40', next: 'otherSportExp' },
      { answer: '40-50', next: 'otherSportExp' },
      { answer: 'Больше 50', next: 'otherSportExp' },
    ],
    isInput: false,
    isMatter: false,
  },
  otherSportExp: {
    id: 'otherSportExp',
    question: 'Занимались ли Вы в прошлом другими видами ракеточного спорта?',
    options: [
      { answer: 'Нет, никогда', next: 'matchesPerWeek' },
      { answer: 'Да, менее 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 5 лет', next: 'matchesPerWeek' },
    ],
    isInput: false,
    isMatter: false,
  },
  matchesPerWeek: {
    id: 'matchesPerWeek',
    question:
      'Сколько матчей по паделу вы играли в среднем в неделю за последние 6 месяцев?',
    options: [
      { answer: '0', next: 'fitness' },
      { answer: '1', next: 'fitness' },
      { answer: '2', next: 'fitness' },
      { answer: '3 или больше', next: 'fitness' },
    ],
    isInput: false,
    isMatter: false,
  },
  fitness: {
    id: 'fitness',
    question: 'Какой у Вас уровень физической подготовки?',
    options: [
      { answer: 'Отличный', next: null },
      { answer: 'Хороший', next: null },
      { answer: 'Нормальный', next: null },
      { answer: 'Низкий', next: null },
      { answer: 'Очень низкий', next: null },
    ],
    isInput: false,
    isMatter: false,
  },
};
const padelCompetition = {
  gender: {
    id: 'gender',
    question: 'Вы мужчина или женщина?',
    options: [
      { answer: 'Мужчина', next: 'age' },
      { answer: 'Женщина', next: 'age' },
    ],
    isInput: false,
    isMatter: false,
  },
  age: {
    id: 'age',
    question: 'Сколько Вам лет?',
    options: [
      { answer: '18-30', next: 'isFederated' },
      { answer: '30-40', next: 'isFederated' },
      { answer: '40-50', next: 'isFederated' },
      { answer: 'Больше 50', next: 'isFederated' },
    ],
    isInput: false,
    isMatter: false,
  },
  isFederated: {
    id: 'isFederated',
    question: 'В настоящее время Вы состоите в федерации?',
    options: [
      { answer: 'Да', next: 'federateCategory' },
      { answer: 'Нет', next: 'otherSportExp' },
    ],
    isInput: false,
    isMatter: true,
  },
  federateCategory: {
    id: 'federateCategory',
    question: 'В какой категории?',
    options: [
      { answer: '1', next: 'licenseNumber' },
      { answer: '2', next: 'licenseNumber' },
      { answer: '3', next: 'licenseNumber' },
      { answer: '4', next: 'licenseNumber' },
      { answer: '5', next: 'licenseNumber' },
    ],
    isInput: false,
    isMatter: false,
  },
  licenseNumber: {
    id: 'licenseNumber',
    question: 'Введите Ваш лицензионный номер:',
    options: null,
    isInput: true,
    isMatter: false,
  },

  otherSportExp: {
    id: 'otherSportExp',
    question: 'Занимались ли Вы в прошлом другими видами ракеточного спорта?',
    options: [
      { answer: 'Нет, никогда', next: 'matchesPerWeek' },
      { answer: 'Да, менее 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 5 лет', next: 'matchesPerWeek' },
    ],
    isInput: false,
    isMatter: false,
  },
  matchesPerWeek: {
    id: 'matchesPerWeek',
    question:
      'Сколько матчей по паделу вы играли в среднем в неделю за последние 6 месяцев?',
    options: [
      { answer: '0', next: 'fitness' },
      { answer: '1', next: 'fitness' },
      { answer: '2', next: 'fitness' },
      { answer: '3 или больше', next: 'fitness' },
    ],
    isInput: false,
    isMatter: false,
  },
  fitness: {
    id: 'fitness',
    question: 'Какой у Вас уровень физической подготовки?',
    options: [
      { answer: 'Отличный', next: null },
      { answer: 'Хороший', next: null },
      { answer: 'Нормальный', next: null },
      { answer: 'Низкий', next: null },
      { answer: 'Очень низкий', next: null },
    ],
    isInput: false,
    isMatter: false,
  },
};

// tennis
const tennisNoneBegIntHightInt = {
  gender: {
    id: 'gender',
    question: 'Вы мужчина или женщина?',
    options: [
      { answer: 'Мужчина', next: 'competeLevel' },
      { answer: 'Женщина', next: 'competeLevel' },
    ],
    isInput: false,
    isMatter: false,
  },
  competeLevel: {
    id: 'competeLevel',
    question: 'На каком самом высоком уровне вы выступали?',
    options: [
      { answer: 'Национальный', next: 'howLongPlaying' },
      { answer: 'Региональный', next: 'howLongPlaying' },
      { answer: 'Между клубными командами', next: 'howLongPlaying' },
      {
        answer: 'Я не участвую в соревнованиях, играю лишь изредка',
        next: 'howLongPlaying',
      },
    ],
    isInput: false,
    isMatter: false,
  },
  howLongPlaying: {
    id: 'howLongPlaying',
    question: 'Как давно Вы регулярно играете в теннис?',
    options: [
      { answer: 'Меньше года', next: 'otherSportExp' },
      { answer: 'Меньше двух лет', next: 'otherSportExp' },
      { answer: 'Больше двух лет', next: 'otherSportExp' },
    ],
    isInput: false,
    isMatter: false,
  },
  otherSportExp: {
    id: 'otherSportExp',
    question: 'Занимались ли Вы в прошлом другими видами ракеточного спорта?',
    options: [
      { answer: 'Нет, никогда', next: 'matchesPerMonth' },
      { answer: 'Да', next: 'matchesPerMonth' },
    ],
    isInput: false,
    isMatter: false,
  },
  matchesPerMonth: {
    id: 'matchesPerMonth',
    question: 'Сколько матчей в месяц за последний год Вы сыграли?',
    options: [
      { answer: 'Менее 4 матчей в месяц', next: 'lessons' },
      { answer: 'Более 4 матчей в месяц', next: 'lessons' },
    ],
    isInput: false,
    isMatter: false,
  },
  lessons: {
    id: 'lessons',
    question: 'Получали ли Вы уроки тенниса в прошлом году?',
    options: [
      { answer: 'Нет, никогда', next: 'age' },
      { answer: 'Да, 1 месяц', next: 'age' },
      { answer: 'Да, 2 месяца', next: 'age' },
      { answer: 'Да, 1 год', next: 'age' },
      { answer: 'Да, более 2 лет', next: 'age' },
    ],
    isInput: false,
    isMatter: false,
  },
  age: {
    id: 'age',
    question: 'Сколько Вам лет?',
    options: [
      { answer: '18-30', next: 'fitness' },
      { answer: '30-40', next: 'fitness' },
      { answer: '40-50', next: 'fitness' },
      { answer: 'Больше 50', next: 'fitness' },
    ],
    isInput: false,
    isMatter: false,
  },
  fitness: {
    id: 'fitness',
    question: 'Какой у Вас уровень физической подготовки?',
    options: [
      { answer: 'Отличный', next: null },
      { answer: 'Хороший', next: null },
      { answer: 'Нормальный', next: null },
      { answer: 'Низкий', next: null },
      { answer: 'Очень низкий', next: null },
    ],
    isInput: false,
    isMatter: false,
  },
};
const tennisAdvancedAndCompet = {
  gender: {
    id: 'gender',
    question: 'Вы мужчина или женщина?',
    options: [
      { answer: 'Мужчина', next: 'competeLevel' },
      { answer: 'Женщина', next: 'competeLevel' },
    ],
    isInput: false,
    isMatter: false,
  },
  age: {
    id: 'age',
    question: 'Сколько Вам лет?',
    options: [
      { answer: '18-30', next: 'fitness' },
      { answer: '30-40', next: 'fitness' },
      { answer: '40-50', next: 'fitness' },
      { answer: 'Больше 50', next: 'fitness' },
    ],
    isInput: false,
    isMatter: false,
  },
  fitness: {
    id: 'fitness',
    question: 'Какой у Вас уровень физической подготовки?',
    options: [
      { answer: 'Отличный', next: null },
      { answer: 'Хороший', next: null },
      { answer: 'Нормальный', next: null },
      { answer: 'Низкий', next: null },
      { answer: 'Очень низкий', next: null },
    ],
    isInput: false,
    isMatter: false,
  },
};

// pickleball
const pickleballNoneAndBeginner = {
  gender: {
    id: 'gender',
    question: 'Вы мужчина или женщина?',
    options: [
      { answer: 'Мужчина', next: 'age' },
      { answer: 'Женщина', next: 'age' },
    ],
    isInput: false,
    isMatter: false,
  },
  age: {
    id: 'age',
    question: 'Сколько Вам лет?',
    options: [
      { answer: '18-30', next: 'otherSportExp' },
      { answer: '30-40', next: 'otherSportExp' },
      { answer: '40-50', next: 'otherSportExp' },
      { answer: 'Больше 50', next: 'otherSportExp' },
    ],
    isInput: false,
    isMatter: false,
  },
  otherSportExp: {
    id: 'otherSportExp',
    question: 'Занимались ли Вы в прошлом другими видами ракеточного спорта?',
    options: [
      { answer: 'Нет, никогда', next: 'matchesPerWeek' },
      { answer: 'Да, менее 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 5 лет', next: 'matchesPerWeek' },
    ],
    isInput: false,
    isMatter: false,
  },
  matchesPerWeek: {
    id: 'matchesPerWeek',
    question:
      'Сколько матчей по пиклболу Вы играли в среднем в неделю за последние 6 месяцев?',
    options: [
      { answer: '0', next: 'lessons' },
      { answer: '1', next: 'lessons' },
      { answer: '2', next: 'lessons' },
      { answer: '3 или больше', next: 'lessons' },
    ],
    isInput: false,
    isMatter: false,
  },
  lessons: {
    id: 'lessons',
    question:
      'Были ли у вас уроки по пиклболу в прошлом году? Сколько уроков в неделю?',
    options: [
      { answer: 'Нет, никогда', next: 'fitness' },
      { answer: 'Да, 1 занятие в неделю', next: 'fitness' },
      { answer: 'Да, 2-3 занятия в неделю', next: 'fitness' },
    ],
    isInput: false,
    isMatter: false,
  },
  fitness: {
    id: 'fitness',
    question: 'Какой у Вас уровень физической подготовки?',
    options: [
      { answer: 'Отличный', next: null },
      { answer: 'Хороший', next: null },
      { answer: 'Нормальный', next: null },
      { answer: 'Низкий', next: null },
      { answer: 'Очень низкий', next: null },
    ],
    isInput: false,
    isMatter: false,
  },
};
const pickleballIntAndHightInt = {
  gender: {
    id: 'gender',
    question: 'Вы мужчина или женщина?',
    options: [
      { answer: 'Мужчина', next: 'age' },
      { answer: 'Женщина', next: 'age' },
    ],
    isInput: false,
    isMatter: false,
  },
  age: {
    id: 'age',
    question: 'Сколько Вам лет?',
    options: [
      { answer: '18-30', next: 'howLongPlaying' },
      { answer: '30-40', next: 'howLongPlaying' },
      { answer: '40-50', next: 'howLongPlaying' },
      { answer: 'Больше 50', next: 'howLongPlaying' },
    ],
    isInput: false,
    isMatter: false,
  },
  howLongPlaying: {
    id: 'howLongPlaying',
    question: 'Как давно Вы регулярно играете в пиклбол?',
    options: [
      { answer: 'Меньше года', next: 'otherSportExp' },
      { answer: 'Меньше двух лет', next: 'otherSportExp' },
      { answer: 'Больше двух лет', next: 'otherSportExp' },
    ],
    isInput: false,
    isMatter: false,
  },
  otherSportExp: {
    id: 'otherSportExp',
    question: 'Занимались ли Вы в прошлом другими видами ракеточного спорта?',
    options: [
      { answer: 'Нет, никогда', next: 'matchesPerWeek' },
      { answer: 'Да, менее 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 5 лет', next: 'matchesPerWeek' },
    ],
    isInput: false,
    isMatter: false,
  },
  matchesPerWeek: {
    id: 'matchesPerWeek',
    question:
      'Сколько матчей по пиклболу Вы играли в среднем в неделю за последние 6 месяцев?',
    options: [
      { answer: '0', next: 'lessons' },
      { answer: '1', next: 'lessons' },
      { answer: '2', next: 'lessons' },
      { answer: '3 или больше', next: 'lessons' },
    ],
    isInput: false,
    isMatter: false,
  },
  lessons: {
    id: 'lessons',
    question:
      'Были ли у вас уроки по пиклболу в прошлом году? Сколько уроков в неделю?',
    options: [
      { answer: 'Нет, никогда', next: 'fitness' },
      { answer: 'Да, 1 занятие в неделю', next: 'fitness' },
      { answer: 'Да, 2-3 занятия в неделю', next: 'fitness' },
    ],
    isInput: false,
    isMatter: false,
  },
  fitness: {
    id: 'fitness',
    question: 'Какой у Вас уровень физической подготовки?',
    options: [
      { answer: 'Отличный', next: null },
      { answer: 'Хороший', next: null },
      { answer: 'Нормальный', next: null },
      { answer: 'Низкий', next: null },
      { answer: 'Очень низкий', next: null },
    ],
    isInput: false,
    isMatter: false,
  },
};
const pickleballAdvanced = {
  gender: {
    id: 'gender',
    question: 'Вы мужчина или женщина?',
    options: [
      { answer: 'Мужчина', next: 'age' },
      { answer: 'Женщина', next: 'age' },
    ],
    isInput: false,
    isMatter: false,
  },
  age: {
    id: 'age',
    question: 'Сколько Вам лет?',
    options: [
      { answer: '18-30', next: 'otherSportExp' },
      { answer: '30-40', next: 'otherSportExp' },
      { answer: '40-50', next: 'otherSportExp' },
      { answer: 'Больше 50', next: 'otherSportExp' },
    ],
    isInput: false,
    isMatter: false,
  },
  otherSportExp: {
    id: 'otherSportExp',
    question: 'Занимались ли Вы в прошлом другими видами ракеточного спорта?',
    options: [
      { answer: 'Нет, никогда', next: 'matchesPerWeek' },
      { answer: 'Да, менее 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 5 лет', next: 'matchesPerWeek' },
    ],
    isInput: false,
    isMatter: false,
  },
  matchesPerWeek: {
    id: 'matchesPerWeek',
    question:
      'Сколько матчей по пиклболу Вы играли в среднем в неделю за последние 6 месяцев?',
    options: [
      { answer: '0', next: 'fitness' },
      { answer: '1', next: 'fitness' },
      { answer: '2', next: 'fitness' },
      { answer: '3 или больше', next: 'fitness' },
    ],
    isInput: false,
    isMatter: false,
  },
  fitness: {
    id: 'fitness',
    question: 'Какой у Вас уровень физической подготовки?',
    options: [
      { answer: 'Отличный', next: null },
      { answer: 'Хороший', next: null },
      { answer: 'Нормальный', next: null },
      { answer: 'Низкий', next: null },
      { answer: 'Очень низкий', next: null },
    ],
    isInput: false,
    isMatter: false,
  },
};
const pickleballCompet = {
  gender: {
    id: 'gender',
    question: 'Вы мужчина или женщина?',
    options: [
      { answer: 'Мужчина', next: 'age' },
      { answer: 'Женщина', next: 'age' },
    ],
    isInput: false,
    isMatter: false,
  },
  age: {
    id: 'age',
    question: 'Сколько Вам лет?',
    options: [
      { answer: '18-30', next: 'isFederated' },
      { answer: '30-40', next: 'isFederated' },
      { answer: '40-50', next: 'isFederated' },
      { answer: 'Больше 50', next: 'isFederated' },
    ],
    isInput: false,
    isMatter: false,
  },
  isFederated: {
    id: 'isFederated',
    question: 'Вы в настоящее время состоите в федерации?',
    options: [
      { answer: 'Да', next: 'otherSportExp' },
      { answer: 'Нет', next: 'otherSportExp' },
    ],
    isInput: false,
    isMatter: false,
  },
  otherSportExp: {
    id: 'otherSportExp',
    question: 'Занимались ли Вы в прошлом другими видами ракеточного спорта?',
    options: [
      { answer: 'Нет, никогда', next: 'matchesPerWeek' },
      { answer: 'Да, менее 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 2 лет', next: 'matchesPerWeek' },
      { answer: 'Да, более 5 лет', next: 'matchesPerWeek' },
    ],
    isInput: false,
    isMatter: false,
  },
  matchesPerWeek: {
    id: 'matchesPerWeek',
    question:
      'Сколько матчей по пиклболу Вы играли в среднем в неделю за последние 6 месяцев?',
    options: [
      { answer: '0', next: 'lessons' },
      { answer: '1', next: 'lessons' },
      { answer: '2', next: 'lessons' },
      { answer: '3 или больше', next: 'lessons' },
    ],
    isInput: false,
    isMatter: false,
  },
  fitness: {
    id: 'fitness',
    question: 'Какой у Вас уровень физической подготовки?',
    options: [
      { answer: 'Отличный', next: null },
      { answer: 'Хороший', next: null },
      { answer: 'Нормальный', next: null },
      { answer: 'Низкий', next: null },
      { answer: 'Очень низкий', next: null },
    ],
    isInput: false,
    isMatter: false,
  },
};

export const getQuestionsByLvlAndSport = () => {
  const sport = localStorage.getItem('sport');
  const level = localStorage.getItem('userSelectedLevel');
  const currentSport = sport ? sport.toLocaleLowerCase() : '';
  const currentLevel = level ? level.toLocaleLowerCase() : '';

  const selectedLevel = leveling.find((item) => item.id === currentLevel);

  const questions = (selectedLevel?.availableFor as any)[currentSport];

  return questions;
};

export const leveling = [
  {
    id: 'none',
    key: 'Затрудняюсь ответить',
    descriptionFor: {
      padel: '',
      tennis: '',
      pickleball: '',
    },
    availableFor: {
      padel: padelNoneAndBeginner,
      tennis: tennisNoneBegIntHightInt,
      pickleball: pickleballNoneAndBeginner,
    },
  },
  {
    id: 'beginner',
    key: 'Новичок',
    descriptionFor: {
      padel:
        'Игрок, который только начал играть в падел. Разыгрывает и возвращает мяч, учится передвигаться по площадке.',
      tennis:
        'Игроки, которые играют в теннис в течение короткого времени и испытывают трудности с удержанием мяча в игре. Они начинают подачу сверху, но часто допускают двойные ошибки. Они учатся вести себя на площадке',
      pickleball:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure, est laudantium perferendis quas provident itaque assumenda, suscipit deleniti atque dolorum dolor excepturi',
    },
    availableFor: {
      padel: padelNoneAndBeginner,
      tennis: tennisNoneBegIntHightInt,
      pickleball: pickleballNoneAndBeginner,
    },
  },
  {
    id: 'intermediate',
    key: 'Средний',
    descriptionFor: {
      padel:
        'Игрок, которому необходимо улучшить свою технику и тактику, в течение года играет пару игр в месяц и, возможно, получил несколько уроков, бьет и возвращает мяч на низких скоростях.',
      tennis:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure, est laudantium perferendis quas provident itaque assumenda, suscipit deleniti atque dolorum dolor excepturi',
      pickleball:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure, est laudantium perferendis quas provident itaque assumenda, suscipit deleniti atque dolorum dolor excepturi',
    },
    availableFor: {
      padel: padelInterAndHightInter,
      tennis: tennisNoneBegIntHightInt,
      pickleball: pickleballIntAndHightInt,
    },
  },
  {
    id: 'intermediate hight',
    key: 'Выше среднего',
    descriptionFor: {
      padel:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure, est laudantium perferendis quas provident itaque assumenda, suscipit deleniti atque dolorum dolor excepturi',
      tennis:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure, est laudantium perferendis quas provident itaque assumenda, suscipit deleniti atque dolorum dolor excepturi',
      pickleball:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure, est laudantium perferendis quas provident itaque assumenda, suscipit deleniti atque dolorum dolor excepturi',
    },
    availableFor: {
      padel: padelInterAndHightInter,
      tennis: tennisNoneBegIntHightInt,
      pickleball: pickleballIntAndHightInt,
    },
  },
  {
    id: 'advanced',
    key: 'Продвинутый',
    descriptionFor: {
      padel:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure, est laudantium perferendis quas provident itaque assumenda, suscipit deleniti atque dolorum dolor excepturi',
      tennis:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure, est laudantium perferendis quas provident itaque assumenda, suscipit deleniti atque dolorum dolor excepturi',
      pickleball:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure, est laudantium perferendis quas provident itaque assumenda, suscipit deleniti atque dolorum dolor excepturi',
    },
    availableFor: {
      padel: padelAdvanced,
      tennis: tennisAdvancedAndCompet,
      pickleball: pickleballAdvanced,
    },
  },
  {
    id: 'competition',
    key: 'Соревновательный',
    descriptionFor: {
      padel:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure, est laudantium perferendis quas provident itaque assumenda, suscipit deleniti atque dolorum dolor excepturi',
      tennis:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure, est laudantium perferendis quas provident itaque assumenda, suscipit deleniti atque dolorum dolor excepturi',
      pickleball:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure, est laudantium perferendis quas provident itaque assumenda, suscipit deleniti atque dolorum dolor excepturi',
    },
    availableFor: {
      padel: padelCompetition,
      tennis: tennisAdvancedAndCompet,
      pickleball: pickleballCompet,
    },
  },
];
