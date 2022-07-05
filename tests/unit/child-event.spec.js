import { mount } from "@vue/test-utils";
import ParentComponent from "@/components/parentComponent.vue";
import ChildComponent from "@/components/childComponent.vue";

describe("ParentComponent", () => {
  it("displays 'Emitted!' when custom event is emitted", async () => {
    const wrapper = mount(ParentComponent);
    await wrapper.findComponent(ChildComponent).vm.$emit("custom");
    expect(wrapper.html()).toContain("Emitted!");
  });
  it("change child component's data", async () => {
    const wrapper = mount(ParentComponent);
    await wrapper.findComponent(ChildComponent).setData({
      count: 2,
    });
    expect(wrapper.text()).toMatch("2");
    await wrapper.findComponent(ChildComponent).setData({
      count: 20,
    });
    expect(wrapper.text()).toMatch("20");
  });
  it("change component's props", async () => {
    const wrapper = mount(ParentComponent);
    await wrapper.setProps({
      msg: "hello world",
    });
    expect(wrapper.text()).toMatch("hello world");
  });
});
