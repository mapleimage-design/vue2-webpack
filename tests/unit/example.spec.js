import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import sinon from "sinon";

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
    const clickMethodStub = sinon.stub();
    wrapper.setMethods({ handleClick: clickMethodStub }); // @https://v1.test-utils.vuejs.org/api/wrapper/#setmethods
    await wrapper.get("#btn").trigger("click");
    expect(clickMethodStub.called).toBe(true);
    expect(wrapper.vm.handleClick.called).toBe(true);
  });
});
