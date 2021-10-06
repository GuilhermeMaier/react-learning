export class catechismReference {
  abbrv: string;
  chapterId: number;
  verseIdStart: number;
  verseIdEnd: number;
}

export class catechism {
  id: number;
  question: string;
  answer: string;
  references: catechismReference[];
}
