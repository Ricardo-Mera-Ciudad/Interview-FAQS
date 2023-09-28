export interface Question {
  id: number,
  level: Level,
  category: Category,
  question: string,
  answer: string,
  correctAnswer: string,
  allAnswers: []
}
export interface QuestionWithAnswer extends Question {
  selectedAnswer: string | null;
}

export enum Level {
  Junior = "Junior",
  Middle = "Middle",
  Senior = "Senior"
}

export enum Category {
  Js = "Javascript",
  Angular = "Angular",
  HTML = "Html",
  CSS = "Css",
  Softskills = "Softskills",
  Git = "Git",
  Weblinks = "Weblinks"
}



