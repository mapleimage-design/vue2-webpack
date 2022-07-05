import KeyboardExample from "@/components/keyboardExample";
import { mount } from "@vue/test-utils";

describe("keyboard cases", () => {
  it("Quantity is zero default", () => {
    const wrapper = mount(KeyboardExample, {});
    expect(wrapper.vm.quantity).toBe(0);
  });
  it("Up arrow key increments quantity by 1", async () => {
    const wrapper = mount(KeyboardExample, {});
    await wrapper.trigger("keydown.up");
    expect(wrapper.vm.quantity).toBe(1);
  });
  it("Down arrow key decrements quantity by 1", async () => {
    const wrapper = mount(KeyboardExample, {});
    wrapper.vm.quantity = 5;
    await wrapper.trigger("keydown.down");
    expect(wrapper.vm.quantity).toBe(4);
  });
  it("Espace key reset quantity to 0", async () => {
    const wrapper = mount(KeyboardExample, {});
    wrapper.vm.quantity = 5;
    await wrapper.trigger("keydown.esc");
    expect(wrapper.vm.quantity).toBe(0);
  });
  it("A key reset quantity to 13", async () => {
    const wrapper = mount(KeyboardExample, {});
    await wrapper.trigger("keydown", {
      key: "a",
    });
    expect(wrapper.vm.quantity).toBe(13);
  });
});
