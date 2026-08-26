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
  sectionProjectId: string; // 项目sectionID
  techsList?: techsListItemType[]; // 技术栈列表
  sectionTechStackId: string; // 技术栈sectionID
  sectionEvaluteId: string; // 个人评价sectionID
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
  gradient: string;
  glowColor: string;
  items: techsListItemItemType[];
}
export interface techsListItemItemType {
  name: string;
  desc?: string;
}