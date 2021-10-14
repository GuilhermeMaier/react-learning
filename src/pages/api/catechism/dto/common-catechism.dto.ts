export class catechismReference {
  abbrv: string;
  chapterId: number;
  verseIdStart: number;
  verseIdEnd: number;
}

export class catechismQuestion {
  id: number;
  question: string;
  answer: string;
  references: catechismReference[];
}

export class DBCatechismRequestBody {
  questionId: number;
}
