export type WordDetail = {
  word: string;
  indexFrom: number;
  indexTo: number;
};

export type ActiveWordWithIndex = {
  wordIndex: number;
  wordDetail: WordDetail;
};

export type CharState = {
  char: string;
  charColor: string;
};

export type WordsStatus = WordDetail[];

export type Data = [WordsStatus, CharState[], { CursorPosition: number }];

export type StatisticEntry = {
  round: number;
  wpm: number;
  accuracy: number;
};

export type Statistics = StatisticEntry[];
