import { ContactItemType } from "../type/index.ts";

/**
 * 联系方式数组
 */
export const MyContacts: Record<string, ContactItemType[]> = {
  "zh-CN": [
    {
      label: "谷歌邮箱",
      value: "rochsen1011@gmail.com",
      link: "mailto:rochsen1011@gmail.com",
      iconType: "google",
    },
    {
      label: "私人邮箱",
      value: "rochsen1011@qq.com",
      link: "mailto:1029143329@qq.com",
      iconType: "qq",
    },
  ],
  "en-US": [
    {
      label: "GOOGLE EMAIL",
      value: "rochsen1011@gmail.com",
      link: "mailto:rochsen1011@gmail.com",
      iconType: "google",
    },
    {
      label: "PERSONAL EMAIL",
      value: "rochsen1011@qq.com",
      link: "mailto:1029143329@qq.com",
      iconType: "qq",
    },
  ],
};
