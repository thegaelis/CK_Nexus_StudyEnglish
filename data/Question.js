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
      question: 'Which of the following is the meaning of the word "Sự tha thứ"',
      answers: [
        { id: 1, text: 'A. Forgiveness', correct: true },
        { id: 2, text: 'B. Forgot', correct: false },
        { id: 3, text: 'C. Forget', correct: false },
        { id: 4, text: 'D. Forgiven', correct: false },
      ],
    },
    {
      id: 7,
      question: 'This guy is in love - Choose the correct meaning of the sentence',
      answers: [
        { id: 1, text: 'A. Anh này thì yêu', correct: false },
        { id: 2, text: 'B. Anh này không yêu', correct: false },
        { id: 3, text: 'C. Anh này thì đang trong tình yêu', correct: true },
        { id: 4, text: 'D. Anh này đang không yêu', correct: false },
      ],
    },
    {
      id: 8,
      question: 'Which of the following is the meaning of the word "Support"',
      answers: [
        { id: 1, text: 'A. Yêu đương', correct: false },
        { id: 2, text: 'B. Chia tay', correct: false },
        { id: 3, text: 'C. Ủng hộ', correct: true },
        { id: 4, text: 'D. Cản trở', correct: false },
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
    question: 'Which of the following is the meaning of the word "Time"',
    answers: [
      { id: 1, text: 'A. Thời giờ', correct: false },
      { id: 2, text: 'B. Thời gian', correct: false },
      { id: 3, text: 'C. Both A and B are correct', correct: true },
      { id: 4, text: 'D. Both A and B are incorrect', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Which of the following is the meaning of the word "Đúng giờ"',
    answers: [
      { id: 1, text: 'A. On time', correct: true },
      { id: 2, text: 'B. Due', correct: false },
      { id: 3, text: 'C. Time', correct: false },
      { id: 4, text: 'D. Late', correct: false },
    ],
  },
  {
    id: 3,
    question: 'Choose the correct sentence:',
    answers: [
      { id: 1, text: 'A. I will go to the cinema', correct: true },
      { id: 2, text: 'B. I will goes to the cinema', correct: false },
      { id: 3, text: 'C. I will gone to the cinema', correct: false },
      { id: 4, text: 'D. No correct option', correct: false },
    ],
  },
  {
    id: 4,
    question: 'Choose the most correct statement',
    answers: [
      { id: 1, text: 'A. Future tense is used for an action that happens in the future', correct: true },
      { id: 2, text: 'B. Future Tense is used for an action that happen in the present', correct: false },
      { id: 3, text: 'C. Future Tense is used for an action that happen in the present, also for truth', correct: false },
      { id: 4, text: 'D. Future Tense is used for an action that happen in the present, state of being, also for truth', correct: false },
    ],
  },
  {
    id: 5,
    question: 'Which of the following is the meaning of the word "Second"',
    answers: [
      { id: 1, text: 'A. Giờ', correct: false },
      { id: 2, text: 'B. Phút', correct: false },
      { id: 3, text: 'C. Giây', correct: true },
      { id: 4, text: 'D. Thời gian', correct: false },
    ],
  },
  {
    id: 6,
    question: 'Which of the following is the meaning of the word "Schedule"',
    answers: [
      { id: 1, text: 'A. Lịch', correct: false },
      { id: 2, text: 'B. Nhật lịch', correct: false },
      { id: 3, text: 'C. Nhật ký', correct: false },
      { id: 4, text: 'D. Lịch trình', correct: true },
    ],
  },
  {
    id: 7,
    question: 'Which of the following is the meaning of the sentence" Will we go to the market?"',
    answers: [
      { id: 1, text: 'A. Chúng ta sẽ đi chợ chứ?', correct: true },
      { id: 2, text: 'B. Chúng ta sẽ đi chợ chứ', correct: false },
      { id: 3, text: 'C. Chúng ta sẽ không đi chợ chứ?', correct: false },
      { id: 4, text: 'D. Chúng ta đi chợ chứ?', correct: false },
    ],
  },
  {
    id: 8,
    question: 'Which of the following is the meaning of the word "Deadline"',
    answers: [
      { id: 1, text: 'A. Bắt đầu', correct: false },
      { id: 2, text: 'B. Thời gian', correct: false },
      { id: 3, text: 'C. Hoàn thành', correct: false },
      { id: 4, text: 'D. Hạn chót', correct: true },
    ],
  },
  {
    id: 9,
    question: 'Which sentences describe "Tôi sẽ đi tắm"',
    answers: [
      { id: 1, text: 'A. I"m taking a shower', correct: false },
      { id: 2, text: 'B. I won"t taking a shower', correct: false },
      { id: 3, text: 'C. I will take a shower', correct: true },
      { id: 4, text: 'D. I will taking a shower', correct: false },
    ],
  },
  {
    id: 10,
    question: 'Will you marry me? Yes, ... - Fill in the blank',
    answers: [
      { id: 1, text: 'A. " I am"', correct: false },
      { id: 2, text: 'B. " I will "', correct: true},
      { id: 3, text: 'C. "I won"t', correct: false},
      { id: 4, text: 'D. "I do "', correct: false },
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