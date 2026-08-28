/**联系方式项类型 */
export interface contactItemType {
  label: string; // 联系方式tag文字, 如 私人邮箱
  value: string; // 联系方式tag值, 如 rochsen1011@gmail.com
  link?: string; // 联系方式tag值对应的链接, 如 mailto:rochsen1011@gmail.com
  iconType: string; // 联系方式图标类型, 如 qq | google
}
