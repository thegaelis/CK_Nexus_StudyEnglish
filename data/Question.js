const questions_relation = [
    {
      id: 1,
      question: 'Which of the following is the meaning of the word "Love"',
      answers: [
        { id: 1, text: 'A. Tình yêu', correct: true },
        { id: 2, text: 'B. Chia tay', correct: false },
        { id: 3, text: 'C. Hẹn hò', correct: false },
        { id: 4, text: 'D. Động phòng', correct: false },
      ],
    },
    {
      id: 2,
      question: 'Which of the following is the meaning of the word "Lãng mạn"',
      answers: [
        { id: 1, text: 'A. Love', correct: false },
        { id: 2, text: 'B. Romance', correct: true },
        { id: 3, text: 'C. Divorce', correct: false },
        { id: 4, text: 'D. Connection', correct: false },
      ],
    },
    {
      id: 3,
      question: 'Choose the correct sentence:',
      answers: [
        { id: 1, text: 'A. The sun is in the center of The Solar System', correct: true },
        { id: 2, text: 'B. The sun in the center of The Solar System', correct: false },
        { id: 3, text: 'C. The sun are in the center of The Solar System', correct: false },
        { id: 4, text: 'D. No correct option', correct: false },
      ],
    },
    {
      id: 4,
      question: 'Choose the most correct statement',
      answers: [
        { id: 1, text: 'A. Present Tense is used for an action that currently happen', correct: false },
        { id: 2, text: 'B. Present Tense is used for an action that happen in the present', correct: false },
        { id: 3, text: 'C. Present Tense is used for an action that happen in the present, also for truth', correct: false },
        { id: 4, text: 'D. C. Present Tense is used for an action that happen in the present, state of being, also for truth', correct: true },
      ],
    },
    {
      id: 5,
      question: 'Which of the following is the meaning of the word "Connection"',
      answers: [
        { id: 1, text: 'A. Kết nối', correct: false },
        { id: 2, text: 'B. Gắn kết', correct: false },
        { id: 3, text: 'C. Mối quan hệ', correct: false },
        { id: 4, text: 'D. Mối liên kết', correct: true },
      ],
    },
    {
      id: 6,
      question: 'Which of the following is the meaning of the word "Love"',
      answers: [
        { id: 1, text: 'A. Tình yêu', correct: true },
        { id: 2, text: 'B. Chia tay', correct: false },
        { id: 3, text: 'C. Hẹn hò', correct: false },
        { id: 4, text: 'D. Động phòng', correct: false },
      ],
    },
    {
      id: 7,
      question: 'Which of the following is the meaning of the word "Love"',
      answers: [
        { id: 1, text: 'A. Tình yêu', correct: true },
        { id: 2, text: 'B. Chia tay', correct: false },
        { id: 3, text: 'C. Hẹn hò', correct: false },
        { id: 4, text: 'D. Động phòng', correct: false },
      ],
    },
    {
      id: 8,
      question: 'Which of the following is the meaning of the word "Love"',
      answers: [
        { id: 1, text: 'A. Tình yêu', correct: true },
        { id: 2, text: 'B. Chia tay', correct: false },
        { id: 3, text: 'C. Hẹn hò', correct: false },
        { id: 4, text: 'D. Động phòng', correct: false },
      ],
    },
    {
      id: 9,
      question: 'Which sentences describe "Tôi không yêu"',
      answers: [
        { id: 1, text: 'A. I"m not in love', correct: true },
        { id: 2, text: 'B. I don"t not love', correct: false },
        { id: 3, text: 'C. A and B are correct', correct: false },
        { id: 4, text: 'D. A and B are incorrect', correct: false },
      ],
    },
    {
      id: 10,
      question: 'How are you? I ... fine - Fill in the blank',
      answers: [
        { id: 1, text: 'A. " am fine"', correct: false },
        { id: 2, text: 'B. " don"t "', correct: false },
        { id: 3, text: 'C. "am', correct: true},
        { id: 4, text: 'D. "don"t fine "', correct: false },
      ],
    },
    
    // Ông thêm câu hỏi ở đây
];
const questions_time = [
  {
    id: 1,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Which of the following is the meaning of the word "Lãng mạn"',
    answers: [
      { id: 1, text: 'A. Love', correct: false },
      { id: 2, text: 'B. Romance', correct: true },
      { id: 3, text: 'C. Divorce', correct: false },
      { id: 4, text: 'D. Connection', correct: false },
    ],
  },
  {
    id: 3,
    question: 'Choose the correct sentence:',
    answers: [
      { id: 1, text: 'A. The sun is in the center of The Solar System', correct: true },
      { id: 2, text: 'B. The sun in the center of The Solar System', correct: false },
      { id: 3, text: 'C. The sun are in the center of The Solar System', correct: false },
      { id: 4, text: 'D. No correct option', correct: false },
    ],
  },
  {
    id: 4,
    question: 'Choose the most correct statement',
    answers: [
      { id: 1, text: 'A. Present Tense is used for an action that currently happen', correct: false },
      { id: 2, text: 'B. Present Tense is used for an action that happen in the present', correct: false },
      { id: 3, text: 'C. Present Tense is used for an action that happen in the present, also for truth', correct: false },
      { id: 4, text: 'D. C. Present Tense is used for an action that happen in the present, state of being, also for truth', correct: true },
    ],
  },
  {
    id: 5,
    question: 'Which of the following is the meaning of the word "Connection"',
    answers: [
      { id: 1, text: 'A. Kết nối', correct: false },
      { id: 2, text: 'B. Gắn kết', correct: false },
      { id: 3, text: 'C. Mối quan hệ', correct: false },
      { id: 4, text: 'D. Mối liên kết', correct: true },
    ],
  },
  {
    id: 6,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 7,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 8,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 9,
    question: 'Which sentences describe "Tôi không yêu"',
    answers: [
      { id: 1, text: 'A. I"m not in love', correct: true },
      { id: 2, text: 'B. I don"t not love', correct: false },
      { id: 3, text: 'C. A and B are correct', correct: false },
      { id: 4, text: 'D. A and B are incorrect', correct: false },
    ],
  },
  {
    id: 10,
    question: 'How are you? I ... fine - Fill in the blank',
    answers: [
      { id: 1, text: 'A. " am fine"', correct: false },
      { id: 2, text: 'B. " don"t "', correct: false },
      { id: 3, text: 'C. "am', correct: true},
      { id: 4, text: 'D. "don"t fine "', correct: false },
    ],
  },
];
const questions_weather = [
  {
    id: 1,
    question: 'Câu hỏi 5',
    answers: [
      { id: 1, text: 'A', correct: true },
      { id: 2, text: 'B', correct: false },
      { id: 3, text: 'C', correct: false },
      { id: 4, text: 'D', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Câu hỏi 6',
    answers: [
      { id: 1, text: 'A', correct: true },
      { id: 2, text: 'B', correct: false },
      { id: 3, text: 'C', correct: false },
      { id: 4, text: 'D', correct: false },
    ],
  },
  // Ông thêm câu hỏi ở đây
];
const questions_animal = [
  {
    id: 1,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Which of the following is the meaning of the word "Lãng mạn"',
    answers: [
      { id: 1, text: 'A. Love', correct: false },
      { id: 2, text: 'B. Romance', correct: true },
      { id: 3, text: 'C. Divorce', correct: false },
      { id: 4, text: 'D. Connection', correct: false },
    ],
  },
  {
    id: 3,
    question: 'Choose the correct sentence:',
    answers: [
      { id: 1, text: 'A. The sun is in the center of The Solar System', correct: true },
      { id: 2, text: 'B. The sun in the center of The Solar System', correct: false },
      { id: 3, text: 'C. The sun are in the center of The Solar System', correct: false },
      { id: 4, text: 'D. No correct option', correct: false },
    ],
  },
  {
    id: 4,
    question: 'Choose the most correct statement',
    answers: [
      { id: 1, text: 'A. Present Tense is used for an action that currently happen', correct: false },
      { id: 2, text: 'B. Present Tense is used for an action that happen in the present', correct: false },
      { id: 3, text: 'C. Present Tense is used for an action that happen in the present, also for truth', correct: false },
      { id: 4, text: 'D. C. Present Tense is used for an action that happen in the present, state of being, also for truth', correct: true },
    ],
  },
  {
    id: 5,
    question: 'Which of the following is the meaning of the word "Connection"',
    answers: [
      { id: 1, text: 'A. Kết nối', correct: false },
      { id: 2, text: 'B. Gắn kết', correct: false },
      { id: 3, text: 'C. Mối quan hệ', correct: false },
      { id: 4, text: 'D. Mối liên kết', correct: true },
    ],
  },
  {
    id: 6,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 7,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 8,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 9,
    question: 'Which sentences describe "Tôi không yêu"',
    answers: [
      { id: 1, text: 'A. I"m not in love', correct: true },
      { id: 2, text: 'B. I don"t not love', correct: false },
      { id: 3, text: 'C. A and B are correct', correct: false },
      { id: 4, text: 'D. A and B are incorrect', correct: false },
    ],
  },
  {
    id: 10,
    question: 'How are you? I ... fine - Fill in the blank',
    answers: [
      { id: 1, text: 'A. " am fine"', correct: false },
      { id: 2, text: 'B. " don"t "', correct: false },
      { id: 3, text: 'C. "am', correct: true},
      { id: 4, text: 'D. "don"t fine "', correct: false },
    ],
  },
];
const questions_food = [
  {
    id: 1,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Which of the following is the meaning of the word "Lãng mạn"',
    answers: [
      { id: 1, text: 'A. Love', correct: false },
      { id: 2, text: 'B. Romance', correct: true },
      { id: 3, text: 'C. Divorce', correct: false },
      { id: 4, text: 'D. Connection', correct: false },
    ],
  },
  {
    id: 3,
    question: 'Choose the correct sentence:',
    answers: [
      { id: 1, text: 'A. The sun is in the center of The Solar System', correct: true },
      { id: 2, text: 'B. The sun in the center of The Solar System', correct: false },
      { id: 3, text: 'C. The sun are in the center of The Solar System', correct: false },
      { id: 4, text: 'D. No correct option', correct: false },
    ],
  },
  {
    id: 4,
    question: 'Choose the most correct statement',
    answers: [
      { id: 1, text: 'A. Present Tense is used for an action that currently happen', correct: false },
      { id: 2, text: 'B. Present Tense is used for an action that happen in the present', correct: false },
      { id: 3, text: 'C. Present Tense is used for an action that happen in the present, also for truth', correct: false },
      { id: 4, text: 'D. C. Present Tense is used for an action that happen in the present, state of being, also for truth', correct: true },
    ],
  },
  {
    id: 5,
    question: 'Which of the following is the meaning of the word "Connection"',
    answers: [
      { id: 1, text: 'A. Kết nối', correct: false },
      { id: 2, text: 'B. Gắn kết', correct: false },
      { id: 3, text: 'C. Mối quan hệ', correct: false },
      { id: 4, text: 'D. Mối liên kết', correct: true },
    ],
  },
  {
    id: 6,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 7,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 8,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 9,
    question: 'Which sentences describe "Tôi không yêu"',
    answers: [
      { id: 1, text: 'A. I"m not in love', correct: true },
      { id: 2, text: 'B. I don"t not love', correct: false },
      { id: 3, text: 'C. A and B are correct', correct: false },
      { id: 4, text: 'D. A and B are incorrect', correct: false },
    ],
  },
  {
    id: 10,
    question: 'How are you? I ... fine - Fill in the blank',
    answers: [
      { id: 1, text: 'A. " am fine"', correct: false },
      { id: 2, text: 'B. " don"t "', correct: false },
      { id: 3, text: 'C. "am', correct: true},
      { id: 4, text: 'D. "don"t fine "', correct: false },
    ],
  },
];
const questions_sport = [
  {
    id: 1,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Which of the following is the meaning of the word "Lãng mạn"',
    answers: [
      { id: 1, text: 'A. Love', correct: false },
      { id: 2, text: 'B. Romance', correct: true },
      { id: 3, text: 'C. Divorce', correct: false },
      { id: 4, text: 'D. Connection', correct: false },
    ],
  },
  {
    id: 3,
    question: 'Choose the correct sentence:',
    answers: [
      { id: 1, text: 'A. The sun is in the center of The Solar System', correct: true },
      { id: 2, text: 'B. The sun in the center of The Solar System', correct: false },
      { id: 3, text: 'C. The sun are in the center of The Solar System', correct: false },
      { id: 4, text: 'D. No correct option', correct: false },
    ],
  },
  {
    id: 4,
    question: 'Choose the most correct statement',
    answers: [
      { id: 1, text: 'A. Present Tense is used for an action that currently happen', correct: false },
      { id: 2, text: 'B. Present Tense is used for an action that happen in the present', correct: false },
      { id: 3, text: 'C. Present Tense is used for an action that happen in the present, also for truth', correct: false },
      { id: 4, text: 'D. C. Present Tense is used for an action that happen in the present, state of being, also for truth', correct: true },
    ],
  },
  {
    id: 5,
    question: 'Which of the following is the meaning of the word "Connection"',
    answers: [
      { id: 1, text: 'A. Kết nối', correct: false },
      { id: 2, text: 'B. Gắn kết', correct: false },
      { id: 3, text: 'C. Mối quan hệ', correct: false },
      { id: 4, text: 'D. Mối liên kết', correct: true },
    ],
  },
  {
    id: 6,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 7,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 8,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 9,
    question: 'Which sentences describe "Tôi không yêu"',
    answers: [
      { id: 1, text: 'A. I"m not in love', correct: true },
      { id: 2, text: 'B. I don"t not love', correct: false },
      { id: 3, text: 'C. A and B are correct', correct: false },
      { id: 4, text: 'D. A and B are incorrect', correct: false },
    ],
  },
  {
    id: 10,
    question: 'How are you? I ... fine - Fill in the blank',
    answers: [
      { id: 1, text: 'A. " am fine"', correct: false },
      { id: 2, text: 'B. " don"t "', correct: false },
      { id: 3, text: 'C. "am', correct: true},
      { id: 4, text: 'D. "don"t fine "', correct: false },
    ],
  },
];
const questions_education = [
  {
    id: 1,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Which of the following is the meaning of the word "Lãng mạn"',
    answers: [
      { id: 1, text: 'A. Love', correct: false },
      { id: 2, text: 'B. Romance', correct: true },
      { id: 3, text: 'C. Divorce', correct: false },
      { id: 4, text: 'D. Connection', correct: false },
    ],
  },
  {
    id: 3,
    question: 'Choose the correct sentence:',
    answers: [
      { id: 1, text: 'A. The sun is in the center of The Solar System', correct: true },
      { id: 2, text: 'B. The sun in the center of The Solar System', correct: false },
      { id: 3, text: 'C. The sun are in the center of The Solar System', correct: false },
      { id: 4, text: 'D. No correct option', correct: false },
    ],
  },
  {
    id: 4,
    question: 'Choose the most correct statement',
    answers: [
      { id: 1, text: 'A. Present Tense is used for an action that currently happen', correct: false },
      { id: 2, text: 'B. Present Tense is used for an action that happen in the present', correct: false },
      { id: 3, text: 'C. Present Tense is used for an action that happen in the present, also for truth', correct: false },
      { id: 4, text: 'D. C. Present Tense is used for an action that happen in the present, state of being, also for truth', correct: true },
    ],
  },
  {
    id: 5,
    question: 'Which of the following is the meaning of the word "Connection"',
    answers: [
      { id: 1, text: 'A. Kết nối', correct: false },
      { id: 2, text: 'B. Gắn kết', correct: false },
      { id: 3, text: 'C. Mối quan hệ', correct: false },
      { id: 4, text: 'D. Mối liên kết', correct: true },
    ],
  },
  {
    id: 6,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 7,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 8,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 9,
    question: 'Which sentences describe "Tôi không yêu"',
    answers: [
      { id: 1, text: 'A. I"m not in love', correct: true },
      { id: 2, text: 'B. I don"t not love', correct: false },
      { id: 3, text: 'C. A and B are correct', correct: false },
      { id: 4, text: 'D. A and B are incorrect', correct: false },
    ],
  },
  {
    id: 10,
    question: 'How are you? I ... fine - Fill in the blank',
    answers: [
      { id: 1, text: 'A. " am fine"', correct: false },
      { id: 2, text: 'B. " don"t "', correct: false },
      { id: 3, text: 'C. "am', correct: true},
      { id: 4, text: 'D. "don"t fine "', correct: false },
    ],
  },
  // Ông thêm câu hỏi ở đây
];
const questions_travel = [
  {
    id: 1,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Which of the following is the meaning of the word "Lãng mạn"',
    answers: [
      { id: 1, text: 'A. Love', correct: false },
      { id: 2, text: 'B. Romance', correct: true },
      { id: 3, text: 'C. Divorce', correct: false },
      { id: 4, text: 'D. Connection', correct: false },
    ],
  },
  {
    id: 3,
    question: 'Choose the correct sentence:',
    answers: [
      { id: 1, text: 'A. The sun is in the center of The Solar System', correct: true },
      { id: 2, text: 'B. The sun in the center of The Solar System', correct: false },
      { id: 3, text: 'C. The sun are in the center of The Solar System', correct: false },
      { id: 4, text: 'D. No correct option', correct: false },
    ],
  },
  {
    id: 4,
    question: 'Choose the most correct statement',
    answers: [
      { id: 1, text: 'A. Present Tense is used for an action that currently happen', correct: false },
      { id: 2, text: 'B. Present Tense is used for an action that happen in the present', correct: false },
      { id: 3, text: 'C. Present Tense is used for an action that happen in the present, also for truth', correct: false },
      { id: 4, text: 'D. C. Present Tense is used for an action that happen in the present, state of being, also for truth', correct: true },
    ],
  },
  {
    id: 5,
    question: 'Which of the following is the meaning of the word "Connection"',
    answers: [
      { id: 1, text: 'A. Kết nối', correct: false },
      { id: 2, text: 'B. Gắn kết', correct: false },
      { id: 3, text: 'C. Mối quan hệ', correct: false },
      { id: 4, text: 'D. Mối liên kết', correct: true },
    ],
  },
  {
    id: 6,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 7,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 8,
    question: 'Which of the following is the meaning of the word "Love"',
    answers: [
      { id: 1, text: 'A. Tình yêu', correct: true },
      { id: 2, text: 'B. Chia tay', correct: false },
      { id: 3, text: 'C. Hẹn hò', correct: false },
      { id: 4, text: 'D. Động phòng', correct: false },
    ],
  },
  {
    id: 9,
    question: 'Which sentences describe "Tôi không yêu"',
    answers: [
      { id: 1, text: 'A. I"m not in love', correct: true },
      { id: 2, text: 'B. I don"t not love', correct: false },
      { id: 3, text: 'C. A and B are correct', correct: false },
      { id: 4, text: 'D. A and B are incorrect', correct: false },
    ],
  },
  {
    id: 10,
    question: 'How are you? I ... fine - Fill in the blank',
    answers: [
      { id: 1, text: 'A. " am fine"', correct: false },
      { id: 2, text: 'B. " don"t "', correct: false },
      { id: 3, text: 'C. "am', correct: true},
      { id: 4, text: 'D. "don"t fine "', correct: false },
    ],
  },
];

export {
  questions_relation,
  questions_time,
  questions_weather,
  questions_animal,
  questions_food,
  questions_sport,
  questions_education,
  questions_travel
};