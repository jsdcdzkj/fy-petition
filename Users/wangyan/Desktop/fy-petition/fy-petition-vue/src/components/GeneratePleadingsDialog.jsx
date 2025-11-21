import LayoutFooter from "@/layout/layout-footer.vue";
import PageContainer from "@/layout/page-container.vue";
import { Button } from "ant-design-vue";
import { defineComponent, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { array, string } from "vue-types";

const __vite__css =
	'.bg-card {\n\tbackground: rgba(255, 255, 255, 0.51);\n\tborder-radius: 16px 16px 16px 16px;\n\tborder: 1px solid rgba(255, 255, 255, 0.51);\n\tpadding: 32px;\n\tpadding-top: 56px;\n\tposition: relative;\n\tmargin-top: 32px;\n\tmargin-right: 32px;\n\tmargin-bottom: 32px;\n}\n\n.bg-card > .title {\n\tbackground-image: url(/src/assets/img/Frame_114291@2x.png);\n\tbackground-size: 100% 100%;\n\tpadding-inline: 48px;\n\tpadding-top: 14px;\n\tpadding-bottom: 14px;\n\tfont-family:\n\t\tDouyin Sans,\n\t\tDouyin Sans;\n\tfont-weight: bold;\n\tfont-size: 20px;\n\tline-height: 20px;\n\tletter-spacing: 2px;\n\tcolor: #fff;\n\ttext-align: left;\n\tdisplay: inline-block;\n\tposition: absolute;\n\ttop: -9px;\n\tleft: 0;\n\tright: 0;\n\twidth: 320px;\n\theight: 48px;\n\tmargin: auto;\n\ttext-align: center;\n}\n.small-item-box {\n\tmargin-bottom: 24px;\n}\n.small-item-box .ant-card-head-title::before {\n\tcontent: "";\n\tdisplay: inline-block;\n\twidth: 20px;\n\theight: 20px;\n\tbackground: url("/src/assets/img/file-list-3-fill@2x.png") no-repeat center;\n\tbackground-size: contain;\n\tvertical-align: middle;\n\tmargin-right: 6px;\n\tmargin-top: -3px;\n}\n.bg-card .small-item-box:last-child {\n\tmargin-bottom: 0;\n}\n\n.ant-modal-content {\n\tbackground-image: url(/src/assets/dialog/dialog-bg.png);\n\tbackground-size: 100% 400px;\n\tbackground-repeat: no-repeat;\n\tbackground-color: #fff;\n}\n\n.dialog-container-close {\n\tposition: absolute;\n\ttop: 32px;\n\tright: 32px;\n\tcursor: pointer;\n\tfont-weight: bold;\n\tfont-size: 20px;\n}\n.ant-modal-body {\n\tpadding: 32px;\n}\n\n.dialog-container-main {\n\toverflow-y: auto;\n}\n\n.dialog-container-footer {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 10px;\n}\n\n.dialog-container-footer .ant-btn-primary {\n\twidth: 150px;\n\theight: 48px;\n\tbackground: linear-gradient(90deg, #0950bc 0%, #0989bc 100%);\n\tbox-shadow:\n\t\t0px 3px 6px 0px rgba(0, 0, 0, 0.1),\n\t\tinset 0px 2px 0px 0px rgba(255, 255, 255, 0.25);\n\tborder-radius: 8px 8px 8px 8px;\n}\n\n.dialog-container-footer .ant-btn-default {\n\twidth: 150px;\n\theight: 48px;\n\tbackground: linear-gradient(180deg, #fdfeff 0%, #e8f6ff 100%);\n\tbox-shadow:\n\t\t0px 3px 6px 0px rgba(0, 0, 0, 0.1),\n\t\tinset 0px 2px 0px 0px rgba(255, 255, 255, 0.85);\n\tborder-radius: 8px 8px 8px 8px;\n\tborder: 1px solid rgba(0, 0, 0, 0.06);\n}\n\n.ant-card-head {\n\tbackground: linear-gradient(0deg, #ffffff 0%, #f1f6ff 100%) !important;\n\tborder-bottom: 1px solid rgba(29, 127, 193, 0.2) !important;\n}\n\n.ant-card {\n\tbox-shadow:\n\t\tinset 0px 2px 0px 0px #ffffff,\n\t\t0px 0px 7px 0px rgba(39, 116, 199, 0.15);\n}\n\n.ant-table-wrapper .ant-table-thead > tr > th,\n.ant-table-wrapper .ant-table-thead > tr > td {\n\tbackground-color: #f2f6ff;\n}\n\n.back {\n\twidth: 190px;\n\theight: 48px;\n\tbackground: linear-gradient(180deg, #fdfeff 0%, #e8f6ff 100%);\n\tbox-shadow:\n\t\t0px 3px 6px 0px rgba(0, 0, 0, 0.1),\n\t\tinset 0px 2px 0px 0px rgba(255, 255, 255, 0.85);\n\tborder-radius: 8px 8px 8px 8px;\n\tborder: 1px solid rgba(0, 0, 0, 0.06);\n}\n\n.copyright {\n\tfont-family:\n\t\tAlibaba PuHuiTi 3,\n\t\tAlibaba PuHuiTi 30;\n\tfont-weight: normal;\n\tfont-size: 14px;\n\tcolor: rgba(0, 0, 0, 0.45);\n}\n\n.confirm {\n\twidth: 192px;\n\theight: 48px;\n\tbackground: linear-gradient(90deg, #0950bc 0%, #0989bc 100%);\n\tbox-shadow:\n\t\t0px 3px 6px 0px rgba(0, 0, 0, 0.1),\n\t\tinset 0px 2px 0px 0px rgba(255, 255, 255, 0.25);\n\tborder-radius: 8px 8px 8px 8px;\n}\n\n.pleading {\n\theight: 800px;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n}\n\n.pleading-module {\n\tborder-left: 1px solid #000;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.pleading-module:first-child {\n\tborder-top: 1px solid #000;\n}\n\n.pleading .pleading-module-name {\n\tborder-bottom: 1px solid #000;\n\tborder-right: 1px solid #000;\n\ttext-align: center;\n\tpadding: 30px 0;\n\tfont-weight: bold;\n\tfont-size: 24px;\n}\n\n.module-item {\n\tdisplay: flex;\n\twidth: 100%;\n}\n\n.module-item-name {\n\twidth: 200px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 20px;\n\tborder-bottom: 1px solid #000;\n\tborder-right: 1px solid #000;\n}\n\n.module-item-values {\n\tflex: 1;\n\tborder-bottom: 1px solid #000;\n\tborder-right: 1px solid #000;\n\tline-height: 24px;\n\tpadding: 10px;\n}\n\n.pleading-module-desc {\n\tpadding: 20px;\n\tborder: 1px solid #000;\n}\n\n.tip-title {\n\tfont-weight: bold;\n\tfont-size: 16px;\n}\n\n.tip-content {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.tip-content span {\n\ttext-indent: 30px;\n}\n\n.pleading h3 {\n\ttext-align: center;\n\tfont-size: 40px;\n}\n\n.container-manage {\n\tz-index: 998;\n\tposition: fixed;\n\theight: calc(100vh - 72px);\n\twidth: 100vw;\n\toverflow: hidden;\n\ttop: 72px;\n\tleft: 0px;\n\tbackground-image: url(/src/assets/img/page-bg.png);\n\tbackground-size: cover;\n\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.container-manage .bg-card {\n\tbackground-color: #fff;\n\toverflow-y: auto;\n\theight: 100%;\n\tborder-radius: 0;\n\tmargin: 0;\n}\n.textRight {\n\ttext-align: right;\n\tdisplay: inline-block;\n\twidth: 100%;\n}\n.textLeft {\n\ttext-align: left;\n}\n';

/**
 *
 *
 * @param {*} formItem 表单结构
 * @param {*} form 表单对象
 */
export const computedBzType = (formCob) => {
	const { formItem, form } = formCob;
	const bz = formItem.find((bz) => bz.label == "币种");
	let bzType = "";
	if (bz) {
		bzType = form[bz.prop];
		bzType = bzType ? `(${bzType})` : bzType;
	}
	return bzType;
};

export const isBz = (label) => {
	return label === "币种";
};

// 展示selectLabel
export const processTypeValue = (formItem, value) => {
	if (formItem.select) {
		if (formItem.type === "checkbox") {
			value = value || [];
			return formItem.select.options
				.filter((it) => value.includes(it.value))
				.map((item) => item.label)
				.join(",");
		} else {
			const optionsItem = formItem.select.options.find(
				(it) => it.value == value
			);
			if (optionsItem) {
				return optionsItem.label;
			}
		}
	} else if (formItem.type === "range-picker") {
		if (value && value.length > 0) {
			return value.join("至");
		}
	}
	return value;
};

// 处理空
export const processEmpty = (value) => {
	if (value == undefined || value == null || value == "") {
		value = "___";
	}
	return value;
};

// 处理后缀名
export const processSuffix = (formItem, bzType) => {
	// 获取后缀名
	if (formItem.attrs && formItem.attrs.suffix) {
		return formItem.attrs.suffix == "元"
			? `${formItem.attrs.suffix}${bzType || ""}`
			: formItem.attrs.suffix;
	}
	return "";
};

function removeIframe() {
	const iframeEL = document.querySelector(".target-el-iframe");
	if (iframeEL) {
		iframeEL.remove();
	}
}
function print() {
	removeIframe();
	const info = document.querySelector("#print-container");

	const iframeEl = document.createElement("iframe");
	iframeEl.className = "target-el-iframe";
	iframeEl.style.position = "fixed";
	iframeEl.style.zIndex = -99;
	document.body.append(iframeEl);

	const documentEl = iframeEl.contentDocument;
	documentEl.body.append(info.cloneNode(true));

	// 复制所有样式（包括 link 和 style 标签）
	const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
	styles.forEach((element) => {
		const clone = element.cloneNode(true);
		documentEl.head.append(clone);
	});

	const stylelink = document.createElement("style");
	stylelink.innerHTML = `
        @media print {
            .no-print { display: none; }
            @page { 
                margin: 10mm 0; /* 留出安全间距 */
            }
            body { 
                padding: 20mm 6mm 20mm 6mm;
            }
        }
    `;
	documentEl.head.append(stylelink);
	if (iframeEl.contentWindow.matchMedia) {
		var mediaQueryList = iframeEl.contentWindow.matchMedia("print");
		mediaQueryList.addListener((mql) => {
			if (mql.matches) {
				// beforePrint();
			} else {
				location.href = "/home";
			}
		});
	}
	iframeEl.contentWindow.onafterprint = () => {
		location.href = "/home";
	};

	iframeEl.contentWindow.print();
}

export default defineComponent({
	props: {
		modules: array().def([])
	},
	emits: ["cancel", "confirm"],
	setup(props, { emit }) {
		const handlePrint = () => {
			print();
		};
		const currentRouteName = ref(localStorage.getItem("currentRouteName"));
		// 提取括号内的内容
		const routeNameInBrackets = ref("");
		if (currentRouteName.value) {
			const startIndex = currentRouteName.value.indexOf("（");
			const endIndex = currentRouteName.value.indexOf("）");
			if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
				routeNameInBrackets.value = currentRouteName.value.slice(
					startIndex + 1,
					endIndex
				);
			}
		}

		const processTemplate = (item, bzType) => {
			const list = item.form.formItem
				.map((formItem) => {
					if (formItem.showTemplate === false) return null;
					if (isBz(formItem.label)) return null;
					let value = processTypeValue(
						formItem,
						item.form.form[formItem.prop]
					);
					value = processEmpty(value);
					value += processSuffix(formItem, bzType);

					return {
						label: formItem.label,
						value
					};
				})
				.filter((item) => item);

			return list;
		};

		const processTemp = (item, bzType) => {
			if (item.temp)
				processTemplate(item, bzType).forEach((it) => {
					item.temp = item.temp.replace("$", it.value);
				});

			return item.temp;
		};

		return () => {
			return (
				<div class="pleading container-manage">
					<div
						class="bg-card"
						style="background:#fff;border-radius:0"
						id="print-container"
					>
						<h3 class="pleading-h3">民事起诉状</h3>
						<h3 class="pleading-h3">
							（{routeNameInBrackets.value}）
						</h3>
						<div class="pleading-module-desc">
							<div class="tip-title">说明:</div>
							<div class="tip-content">
								<span>
									为了方便您更好地参加诉讼，保护您的合法权利，请填写本表。
								</span>
								<span>
									1.起诉时需向人民法院提交证明您身份的材料，如身份证复印件、营业执照复印件等
								</span>
								<span>
									2.本表所列内容是您提起诉讼以及人民法院查明案件事实所需，请务必如实填写。
								</span>
								<span>
									3.本表所涉内容系针对一般保证保险合同纠纷案件，有些内容可能与您的案件无关，您认为与案件无关的项目可以填“无”或不填;对于本表中勾选项可以在对应项打“√”;您认为另有重要内容需要列明的，可以在本表尾部或者另附页填写。
								</span>
								<span>★特别提示★</span>
								<span>
									《中华人民共和国民事诉讼法》第十三条第一款规定:“民事诉讼应当遵循诚信原则。”如果诉讼参加人违反上述规定，进行虚假诉讼、恶意诉讼，人民法院将视违法情形依法追究责任。
								</span>
							</div>
						</div>
						{props.modules.map((module) => {
							const items = module.items.map((item) => {
								let bzType = computedBzType(item.form);
								let tempalte = "";
								let formItems = [];

								if (item.temp) {
									tempalte = processTemp(item, bzType);
								} else if (item.template) {
									tempalte = item.template(
										item.form,
										processTemplate(item, bzType)
									);
								} else {
									formItems = item.form.formItem.map(
										(formItem) => {
											if (formItem.showTemplate === false)
												return null;
											if (isBz(formItem.label))
												return null;
											let value = processTypeValue(
												formItem,
												item.form.form[formItem.prop]
											);
											value = processEmpty(value);
											value += processSuffix(
												formItem,
												bzType
											);

											return (
												<div>
													{formItem.label.replace(
														":",
														""
													) ? (
														<span>
															{formItem.label}:
														</span>
													) : null}

													<span>{value}</span>
												</div>
											);
										}
									);
								}

								return (
									<div class="module-item" key={item.name}>
										<div class="module-item-name">
											{item.name}
										</div>
										{tempalte ? (
											<div
												class="module-item-values"
												v-html={tempalte}
											></div>
										) : (
											<div class="module-item-values">
												{formItems}
											</div>
										)}
									</div>
								);
							});

							return (
								<div class="pleading-module" key={module.name}>
									<div class="pleading-module-name">
										{module.name}
									</div>
									<div>{items}</div>
								</div>
							);
						})}
					</div>
					<LayoutFooter>
						<Button class="back" onClick={() => emit("cancel")}>
							返回
						</Button>
						<span class="copyright">
							技术支持：@鼎驰电子科技有限公司2025
						</span>

						<Button
							class="confirm"
							type="primary"
							onClick={handlePrint}
						>
							确认并打印诉状
						</Button>
					</LayoutFooter>
				</div>
			);
		};
	}
});
