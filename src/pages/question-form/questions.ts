export enum ELeveling {
  NONE = 'NONE',
  BEGINNER = '0.5',
  INTERMEDIATE = '2.5',
  HIGHT_INTERMEDIATE = '4.5',
  ADVANCED = '5.75',
  COMPETITION = '7',
}

export interface IOption {
  id: string;
  answer: string;
  next: string | null;
}

export interface IQuestion {
  id: string;
  question: string;
  options: IOption[] | null;
  isMatter: boolean;
  // isInput: boolean;
}

export interface IQuestions {
  isFederated?: IQuestion;
  federateCategory?: IQuestion;
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

export const simpleQuestionsList: { [key: string]: IQuestion } = {
  gender: {
    id: 'gender',
    question: 'Вы мужчина или женщина?',
    options: [
      { answer: 'Мужчина', id: 'MALE', next: 'age' },
      { answer: 'Женщина', id: 'FEMALE', next: 'age' },
    ],
    isMatter: false,
  },
  age: {
    id: 'age',
    question: 'Сколько Вам лет?',
    options: [
      { answer: '18-30', id: '0', next: 'experience' },
      { answer: '30-40', id: '1', next: 'experience' },
      { answer: '40-50', id: '2', next: 'experience' },
      { answer: 'Больше 50', id: '3', next: 'experience' },
    ],
    isMatter: false,
  },
  experience: {
    id: 'experience',
    question: 'Занимались ли Вы в прошлом другими видами ракеточного спорта?',
    options: [
      { answer: 'Нет, никогда', id: '0', next: 'countMatches' },
      { answer: 'Да, менее 2 лет', id: '1', next: 'countMatches' },
      { answer: 'Да, более 2 лет', id: '2', next: 'countMatches' },
      { answer: 'Да, более 5 лет', id: '3', next: 'countMatches' },
    ],
    isMatter: false,
  },
  countMatches: {
    id: 'countMatches',
    question:
      'Сколько матчей по паделу вы играли в среднем в неделю за последние 6 месяцев?',
    options: [
      { answer: '0', id: '0', next: 'lessons' },
      { answer: '1', id: '1', next: 'lessons' },
      { answer: '2', id: '2', next: 'lessons' },
      { answer: '3 или больше', id: '3', next: 'lessons' },
    ],
    isMatter: false,
  },
  lessons: {
    id: 'lessons',
    question:
      'Получали ли вы уроки падела в прошлом году? Сколько уроков в неделю?',
    options: [
      { answer: 'Нет, ни одного', id: '0', next: 'fitness' },
      { answer: 'Да, 1 занятие в неделю', id: '1', next: 'fitness' },
      { answer: 'Да, 2-3 занятия в неделю', id: '2', next: 'fitness' },
    ],
    isMatter: false,
  },
  fitness: {
    id: 'fitness',
    question: 'Какой у Вас уровень физической подготовки?',
    options: [
      { answer: 'Отличный', id: '0', next: null },
      { answer: 'Хороший', id: '1', next: null },
      { answer: 'Нормальный', id: '2', next: null },
      { answer: 'Низкий', id: '3', next: null },
      { answer: 'Очень низкий', id: '4', next: null },
    ],
    isMatter: false,
  },
};

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
      { answer: '1', next: 'otherSportExp' },
      { answer: '2', next: 'otherSportExp' },
      { answer: '3', next: 'otherSportExp' },
      { answer: '4', next: 'otherSportExp' },
      { answer: '5', next: 'otherSportExp' },
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

export const leveling = [
  {
    id: ELeveling.NONE,
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
    id: ELeveling.BEGINNER,
    key: 'Новичок',
    descriptionFor: {
      padel:
        'Игрок, который только начал играть в падел. Разыгрывает и возвращает мяч, учится передвигаться по площадке.',
      tennis:
        'Игроки, которые играют в теннис в течение короткого времени и испытывают трудности с удержанием мяча в игре. Они начинают подачу сверху, но часто допускают двойные ошибки. Они учатся вести себя на площадке',
      pickleball:
        'Только начинают играть с минимальным пониманием правил и ограниченным спортивным опытом. Развитие зрительно-моторной координации и базовых техник.',
    },
    availableFor: {
      padel: padelNoneAndBeginner,
      tennis: tennisNoneBegIntHightInt,
      pickleball: pickleballNoneAndBeginner,
    },
  },
  {
    id: ELeveling.INTERMEDIATE,
    key: 'Средний',
    descriptionFor: {
      padel:
        'Игрок, которому необходимо улучшить свою технику и тактику, в течение года играет пару игр в месяц и, возможно, получил несколько уроков, бьет и возвращает мяч на низких скоростях.',
      tennis:
        'Игроки, которые могут удерживать мяч без особого ритма и лучше бить справа, чем сзади. Они по-прежнему совершают двойные ошибки и пытаются приблизиться к сетке для удара с лета.',
      pickleball:
        'Есть некоторый опыт с лучшим пониманием правил, развивается последовательность, базовая постановка удара и способность выдерживать короткие розыгрыши.',
    },
    availableFor: {
      padel: padelInterAndHightInter,
      tennis: tennisNoneBegIntHightInt,
      pickleball: pickleballIntAndHightInt,
    },
  },
  {
    id: ELeveling.HIGHT_INTERMEDIATE,
    key: 'Выше среднего',
    descriptionFor: {
      padel:
        'Игрок с большим разнообразием ударов приобретает навыки выполнения различных типов ударов с подноса. Агрессивно бьет с лета, обычно возвращает воздушные шары и начинает переносить мяч на свое поле для удара над головой и зарабатывает очки, отправляя мяч за пределы площадки/через забор/на три или четыре аута.',
      tennis:
        'Игроки, которые покрывают площадку и играют розыгрыши из 8 и более ударов. Они улучшили стабильность и направление мяча, намеренно выполняют первую подачу с обеих сторон, совершают очень мало двойных ошибок и приближаются к воротам, чтобы завершить розыгрыш.',
      pickleball:
        'Умеренный опыт, улучшенная последовательность, правильность размещения ударов и осведомленность о площадке. Работа над стратегией и переходом от нападения к защите.',
    },
    availableFor: {
      padel: padelInterAndHightInter,
      tennis: tennisNoneBegIntHightInt,
      pickleball: pickleballIntAndHightInt,
    },
  },
  {
    id: ELeveling.ADVANCED,
    key: 'Продвинутый',
    descriptionFor: {
      padel:
        'Обычный игрок в падел. Бьет по мячу сильно и точно. Анализирует слабые места соперника и меняет стратегию матча и стиль игры в сложных ситуациях. Регулярно выигрывает очко с преимуществом в три-четыре. Имеет хороший удар от стены и может успешно запускать воздушные шары.',
      tennis:
        'Игроки, которые основывают свою игру на дифференциальном ударе и меняют стратегию игры в зависимости от различных ситуаций матча. Они играют стабильно, варьируют подачи и выполняют высокие или низкие удары с лета, не боясь потерпеть неудачу.',
      pickleball:
        'Значительный опыт, высокая последовательность, точность, сильная стратегия и участие в турнирах.',
    },
    availableFor: {
      padel: padelAdvanced,
      tennis: tennisAdvancedAndCompet,
      pickleball: pickleballAdvanced,
    },
  },
  {
    id: ELeveling.COMPETITION,
    key: 'Соревновательный',
    descriptionFor: {
      padel:
        'Федеративный игрок (в настоящее время), который участвует в турнирах федерации и имеет очки в рейтинге сообщества.',
      tennis: 'Игроки, выступающие на национальном и международном уровнях.',
      pickleball:
        'Высочайший уровень мастерства, исключительная техника, точное исполнение сложных ударов, адаптируется к разным противникам. Соревнуется профессионально',
    },
    availableFor: {
      padel: padelCompetition,
      tennis: tennisAdvancedAndCompet,
      pickleball: pickleballCompet,
    },
  },
];
