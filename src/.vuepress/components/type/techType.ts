/** 技术栈项类型 */
export interface techsListItemType {
  title: string;
  icon: string;
  gradient: string; // 渐变色
  glowColor: string; //
  items: techsListItemItemType[];
}

/** 技术栈分支项子类型 */
export interface techsListItemItemType {
  name: string;
  desc?: string;
}
