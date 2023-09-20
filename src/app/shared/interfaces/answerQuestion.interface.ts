
export interface Question {

  id: number,

  level: Level,

  category: Category,

  question: string,

  answer: string,

  favorite: boolean
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

  // Softskills = "Softskills",

  // WebMetrics = "Web Metrics",

  // Webpacks = "Webpacks"
}



