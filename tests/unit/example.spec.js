import { mount, shallowMount, config } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import sinon from "sinon";

config.showDeprecationWarnings = false; // NOTE

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
    //NOTE 已废弃，不推荐
    wrapper.setMethods({ handleClick: clickMethodStub }); // @https://v1.test-utils.vuejs.org/api/wrapper/#setmethods
    wrapper.get("#btn").trigger("click");

    expect(clickMethodStub.called).toBe(true);
    expect(wrapper.vm.handleClick.called).toBe(true);
  });
  it("click event should invoke when click2", async () => {
    const onClick = jest.fn();
    const options = {
      methods: {
        handleClick: onClick, //NOTE 已废弃，不推荐
      },
    };
    const wrapper = mount(HelloWorld, options);
    wrapper.get("#btn").trigger("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("emitted method should invoke when click", async () => {
    const msg = "click example";
    const onClick = jest.fn();
    const wrapper = mount(HelloWorld, {
      propsData: { msg },
      listeners: {
        click: onClick,
      },
    });
    wrapper.get("#btn").trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
    expect(onClick).toHaveBeenCalled();
  });
});
