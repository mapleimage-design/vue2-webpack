import MouceClick from "@/components/mouseClick";
import { mount } from "@vue/test-utils";
import sinon from "sinon";

describe("mouse click", () => {
  it("response to click event", async () => {
    const spy = sinon.spy();
    const wrapper = mount(MouceClick, {
      propsData: {
        callMe: spy,
      },
    });

    await wrapper.find("button.yes").trigger("click");
    expect(spy.called).toBe(true);
    expect(spy.args[0][0]).toBe("yes");
  });
});
