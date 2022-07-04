import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it("renders match snapshot", () => {
    const msg = "message snapshot";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("click event should invoke when click", async () => {
    const msg = "click example";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    await wrapper.get("#btn").trigger("click");
    console.log(wrapper);
  });
});
