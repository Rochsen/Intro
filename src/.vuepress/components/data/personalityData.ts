import { PersonalityType } from "../type/index.ts";

// 16类型人格图
const _personality_img = "https://pic1.imgdb.cn/i/0345mMFuVE5qWysT0qr39Z.svg";

/**
 * 16人格类型tag文字
 */
export const MyPersonality: Record<string, PersonalityType> = {
  "zh-CN": {
    label: "人格类型",
    value: "INFJ",
    desc: "鉴赏家",
    img: _personality_img,
  },
  "en-US": {
    label: "PERSIONALITY",
    value: "INFJ",
    desc: "Connoisseur",
    img: _personality_img,
  },
};
