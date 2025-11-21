import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import { ConfigProvider } from "ant-design-vue";
import { useAppStore } from "./store";
import zh_CH from "ant-design-vue/lib/locale/zh_CN";
export default defineComponent({
	setup() {
		return () => (
			<ConfigProvider locale={zh_CH}>
				<RouterView></RouterView>
			</ConfigProvider>
		);
	}
});
