import { getPageConfig as getPageConfig1 } from "./pages/page-1";
import { getPageConfig as getPageConfig2 } from "./pages/page-2";
import { getPageConfig as getPageConfig3 } from "./pages/page-3";
import { getPageConfig as getPageConfig4 } from "./pages/page-4";
import { getPageConfig as getPageConfig5 } from "./pages/page-5";
import { getPageConfig as getPageConfig6 } from "./pages/page-6";
import { getPageConfig as getPageConfig7 } from "./pages/page-7";
import { getPageConfig as getPageConfig8 } from "./pages/page-8";
import { getPageConfig as getPageConfig9 } from "./pages/page-9";
import { getPageConfig as getPageConfig10 } from "./pages/page-10";

export const pageConfig = [
	{
		value: "保证保险合同",
		bg: "item-bg-1",
		icon: "Frame@2x(0)",
		path: "/subset1",
		type: "0",
		title: "民事起诉状（保证保险合同纠纷）",
		getPageConfig: getPageConfig1
	},
	{
		value: "机动车交通事故责任",
		bg: "item-bg-2",
		icon: "Frame@2x(1)",
		path: "/subset2",
		type: "1",
		title: "民事起诉状（机动车交通事故责任纠纷）",
		getPageConfig: getPageConfig2
	},
	{
		value: "金融借款合同",
		bg: "item-bg-3",
		icon: "Frame@2x(2)",
		path: "/subset3",
		type: "2",
		title: "民事起诉状（金融借款合同纠纷）",
		getPageConfig: getPageConfig3
	},
	{
		value: "劳动争议",
		bg: "item-bg-4",
		icon: "Frame@2x(3)",
		path: "/subset4",
		type: "3",
		title: "民事起诉状（劳动争议纠纷）",
		getPageConfig: getPageConfig4
	},
	{
		value: "离婚",
		bg: "item-bg-5",
		icon: "Frame@2x(4)",
		path: "/subset5",
		type: "4",
		title: "民事起诉状（离婚纠纷）",
		getPageConfig: getPageConfig5
	},
	{
		value: "买卖合同",
		bg: "item-bg-1",
		icon: "Frame@2x(5)",
		path: "/subset6",
		type: "5",
		title: "民事起诉状（买卖合同纠纷）",
		getPageConfig: getPageConfig6
	},
	{
		value: "民间借贷",
		bg: "item-bg-2",
		icon: "Frame@2x(6)",
		path: "/subset7",
		title: "民事起诉状（民间借贷纠纷）",
		getPageConfig: getPageConfig7,
		type: "6"
	},
	{
		value: "租赁资产合同",
		bg: "item-bg-3",
		icon: "Frame@2x(7)",
		path: "/subset8",
		title: "民事起诉状（融资租赁合同纠纷）",
		getPageConfig: getPageConfig8,
		type: "7"
	},
	{
		value: "物业服务合同",
		bg: "item-bg-4",
		icon: "Frame@2x(8)",
		path: "/subset9",
		title: "民事起诉状（物业服务合同纠纷）",
		getPageConfig: getPageConfig9,
		type: "8"
	},
	{
		value: "银行信用卡",
		bg: "item-bg-5",
		icon: "Frame@2x(9)",
		title: "民事起诉状（银行信用卡纠纷）",
		path: "/subset10",
		getPageConfig: getPageConfig10,
		type: "9"
	}
];
