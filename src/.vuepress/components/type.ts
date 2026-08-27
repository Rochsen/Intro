// 单语言文案类型
export interface I18nLocale {
  sectionProfileId: string; // 档案sectionID
  profileTitle?: string; // 档案section的头标题
  education?: string; // 毕业院校
  position?: string; // 职业tag文字
  contacts?: string; // 联系方式tag文字
  positionValue?: string; // 职业tag值
  educationValue?: string; // 毕业院校tag
  contactList?: ContactItemType[]; // 联系方式数组
  personality?: {
    // 个人性格
    label: string; // 16人格类型tag文字
    value: string; // 16人格类型tag值, 如INFJ
    desc: string;  // 16人格类型描述，比如 鉴赏家家
    img: string; // 16人格类型Q版图片链接
  };
  sectionExpId: string; // 经历sectionID
  expTitle: string; // 经历section的头标题
  experienceList?: experienceListItemType[]; // 经历项数组
  sectionTechStackId: string; // 技术栈sectionID
  techTitle: string; // 技术栈section的头标题
  techsList?: techsListItemType[]; // 技术栈项数组
  sectionProjectId: string; // 项目sectionID
  projectTitle: string; // 项目section的头标题
  projectList?: projectListItemType[]; // 项目项数组
  sectionInterestsId: string; // 兴趣sectionID
  interestsTitle: string; // 兴趣section的头标题
  interestList?: InterestType[]; // 兴趣项数组
  sectionWelcomeId: string; // 结尾欢迎
  welcomeTitle: string; // 结尾欢迎
  welcomeDescription?: string; // 结尾欢迎描述
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
