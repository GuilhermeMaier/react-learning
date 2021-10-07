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

// pureReferences = "OS 8:12;ICO 2:6-7;SL 119:18;SL 119:129;SL 119:140;SL 12:6;LC 24:27;AT 10:43 E 26;22;RM 16:25-27;AT 28:28;HB 4:12; TG 1:18; SL 19:7-9; RM 15:4: AT 20:32; JO 16:13-14."
// pureReferencesTrimmed = pureReferences.split(';').map((element, index)=>{return element.trim()})
// references = []
// pureReferencesTrimmed.map((currentPureReferenceTrimmed, index)=>{
//     const abbrv = currentPureReferenceTrimmed.split(' ').shift();
//     const chapterId = Number(currentPureReferenceTrimmed.split(' ').pop().split(':').shift());
//     const verseIdStart = Number(currentPureReferenceTrimmed.split(' ').pop().split(':').pop().split('-').shift());
//     const verseIdEnd = Number(currentPureReferenceTrimmed.split(' ').pop().split(':').pop().split('-').pop());
//     const reference = {
//         abbrv,
//         chapterId,
//         verseIdStart,
//     }
//     verseIdEnd !== verseIdStart ? reference.verseIdEnd = verseIdEnd : '';
//     references.push(reference)
// })
// references

// \w+ \d+\:\d+(\-\d+)?;
