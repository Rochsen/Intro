// 单语言文案类型
export interface I18nLocale {
  sectionProfileId: string; // 档案sectionID
  profileTitle?: string;
  education?: string;
  position?: string;
  contacts?: string;
  positionValue?: string;
  educationValue?: string;
  contactList?: ContactItemType[];
  sectionExpId: string; // 经历sectionID
  expTitle: string;
  experienceList?: experienceListItemType[];
  sectionTechStackId: string; // 技术栈sectionID
  techTitle: string;
  techsList?: techsListItemType[];
  sectionProjectId: string; // 项目sectionID
  projectTitle: string;
  projectList?: projectListItemType[];
  sectionInterestsId: string; // 兴趣sectionID
  interestsTitle: string;
  interestList?: InterestType[];
  sectionWelcomeId: string; // 结尾欢迎
  welcomeTitle: string;
  welcomeDescription?: string;
}

// 联系方式项类型
export interface ContactItemType {
  label: string;
  value: string;
  link: string;
  iconType: string;
}

// 经历总结项类型
export interface experienceListItemType {
  period: string;
  title: string;
  subtitle?: string;
  detail?: string;
  type: "work" | "education";
  location?: string;
  description?: string;
}

// 技术栈项类型
export interface techsListItemType {
  title: string;
  icon: string;
  gradient: string; // 渐变色
  glowColor: string; //
  items: techsListItemItemType[];
}
export interface techsListItemItemType {
  name: string;
  desc?: string;
}

// 项目项类型
export interface projectListItemType {
  title: string;
  description: string;
  link: string;
  tech?: string[];
}

// 兴趣/感兴趣的方向类型
export interface InterestType {
  name: string;
  desc: string;
}