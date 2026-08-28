import { contactItemType } from "./contact.ts";
import { personalityType } from "./personality.ts";
import { experienceListItemType } from "./experence.ts";
import { techsListItemType } from "./tech.ts";
import { projectListItemType } from "./project.ts";
import { interestType } from "./interest.ts";

/**
 * 语言切换文案类型
 */
export interface I18nLocale {
  sectionProfileId: string; // 档案sectionID
  profileTitle?: string; // 档案section的头标题
  education?: string; // 毕业院校
  position?: string; // 职业tag文字
  contacts?: string; // 联系方式tag文字
  positionValue?: string; // 职业tag值
  educationValue?: string; // 毕业院校tag
  contactList?: contactItemType[]; // 联系方式数组
  personality?: personalityType;

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
  interestList?: interestType[]; // 兴趣项数组

  sectionWelcomeId: string; // 结尾欢迎sectionID
  welcomeTitle: string; // 结尾欢迎
  welcomeDescription?: string; // 结尾欢迎描述
}
