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
  sectionCareerId: string; // 生涯sectionID
  careerSummary?: CareerSummaryItemType[];
  sectionProjectId: string; // 项目sectionID
  sectionSkillId: string; // 技术栈sectionID
  sectionEvaluteId: string; // 个人评价sectionID
}

// 联系方式项类型
export interface ContactItemType {
  label: string;
  value: string;
  link: string;
  iconType: string;
}

// 生涯总结项类型
export interface CareerSummaryItemType {
  period: string;
  title: string;
  description: string;
  location?: string;
}