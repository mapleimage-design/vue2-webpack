import App from "@/App.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import NestedRoute from "@/components/NestedRoute.vue";
import routes from "@/routes.js";

const localVue = createLocalVue();
localVue.use(VueRouter);

// jest.mock("@/components/NestedRoute.vue", () => ({
//   name: "NestedRoute",
//   render: (h) => {
//     return h("div", ["Nested Route"]);
//   },
// }));

describe("App", () => {
  it("renders a child component via routing", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(App, {
      localVue,
      router,
    });

    router.push({
      path: "/nested-route",
      query: {
        username: "234",
      },
    });
    await wrapper.vm.$nextTick();
    const component = wrapper.findComponent(NestedRoute);
    expect(component.exists()).toBe(true);
    expect(component.text()).toMatch(`Nested Route
    234`);
  });
});
