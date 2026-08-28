/** 经历数组类型 */
export interface experienceListItemType {
  period: string;
  title: string;
  subtitle?: string;
  detail?: string;
  type: "work" | "education";
  location?: string;
  description?: string;
}