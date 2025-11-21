import { createRouter, createWebHistory } from "vue-router";
export const routes = [
	{
		path: "/",
		name: "main",
		redirect: "/home",
		component: () => import("@/layout/layout"),
		children: [
			{
				path: "home",
				component: () => import("@/views/home")
			},
			{
				path: "subset1",
				component: () => import("@/views/subset1"),
				meta: {
					title: "民事起诉状（保证保险合同纠纷）"
				}
			},
			{
				path: "subset2",
				component: () => import("@/views/subset2"),
				meta: {
					title: "民事起诉状（机动车交通事故责任纠纷）"
				}
			},
			{
				path: "subset3",
				component: () => import("@/views/subset3"),
				meta: {
					title: "民事起诉状（金融借款合同纠纷）"
				}
			},
			{
				path: "subset4",
				component: () => import("@/views/subset4"),
				meta: {
					title: "民事起诉状（劳动争议纠纷）"
				}
			},
			{
				path: "subset5",
				component: () => import("@/views/subset5"),
				meta: {
					title: "民事起诉状（离婚纠纷）"
				}
			},
			{
				path: "subset6",
				component: () => import("@/views/subset6"),
				meta: {
					title: "民事起诉状（买卖合同纠纷）"
				}
			},
			{
				path: "subset7",
				component: () => import("@/views/subset7"),
				meta: {
					title: "民事起诉状（民间借贷纠纷）"
				}
			},
			{
				path: "subset8",
				component: () => import("@/views/subset8"),
				meta: {
					title: "民事起诉状（融资租赁合同纠纷）"
				}
			},
			{
				path: "subset9",
				component: () => import("@/views/subset9"),
				meta: {
					title: "民事起诉状（物业服务合同纠纷）"
				}
			},
			{
				path: "subset10",
				component: () => import("@/views/subset10"),
				meta: {
					title: "民事起诉状（银行信用卡纠纷）"
				}
			},
			{
				path: "admin-manage",
				component: () => import("@/views/system/admin-manage.vue")
			}
		]
	}
];

export const modules = import.meta.glob("../views/**/*.jsx");

export default createRouter({
	history: createWebHistory(),
	routes
});
