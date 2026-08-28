/** 项目项类型（多语言由上层按 locale 选择对应数据份数） */
export interface projectListItemType {
  id: string;
  tech: string[];
  title: string;
  role: string;
  description: string;
  achievements: string[];
  background: string;
  result: string;
}
