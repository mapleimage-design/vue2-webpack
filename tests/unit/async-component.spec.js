import { shallowMount } from "@vue/test-utils";
import AsyncComponent from "@/components/asyncComponent.vue";
import * as axios from "axios";

jest.mock("axios");

describe("async test cases", () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: "value" }));

  it("fetches async when a button is clicked", async () => {
    const wrapper = shallowMount(AsyncComponent);
    wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toBe("value");
  });
});
