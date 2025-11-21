const Images = import.meta.glob("../../assets/img/*.png");

export const getModules = async (pageConfig) => {
	const list = [];
	for (let i = 0; i < pageConfig.length; i++) {
		const element = pageConfig[i];
		const bg = Object.keys(Images).find((key) => key.includes(element.bg));
		const icon = Object.keys(Images).find((key) =>
			key.includes(element.icon)
		);
		list.push({
			...element,
			index: i,
			bg: (await Images[bg]()).default,
			icon: (await Images[icon]()).default
		});
	}
	return list;
};
