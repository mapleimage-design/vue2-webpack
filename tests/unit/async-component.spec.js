import { shallowMount } from "@vue/test-utils";
import AsyncComponent from "@/components/asyncComponent.vue";

describe("async test cases", () => {
  jest.mock("axios", () => ({
    __esModule: true,
    get: Promise.resolve({ data: "value" }),
    // get: jest.fn(() => Promise.resolve({ data: "value" })),
    // default: jest.fn(() => Promise.resolve({ data: "data" })),
  }));
  jest.setTimeout(30 * 1000);
  it("fetches async when a button is clicked", (done) => {
    const wrapper = shallowMount(AsyncComponent);
    // wrapper.get("button#btn").trigger("click");
    wrapper.find("button").trigger("click");
    wrapper.vm.$nextTick(() => {
      expect(wrapper.text()).toBe("value");
      done();
    });
  });
});
