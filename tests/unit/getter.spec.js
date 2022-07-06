import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Getters from "@/components/getterComponent";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Getter.vue", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      clicks: () => 2,
      inputValue: () => "input",
    };
    store = new Vuex.Store({
      getters,
    });
  });
  it('Renders "store.getters.inputValue" in first p tag', () => {
    const wrapper = shallowMount(Getters, {
      store,
      localVue,
    });
    expect(wrapper.find("p").text()).toBe(getters.inputValue());
  });
  it('Renders "store.getters.inputValue" in second p tag', () => {
    const wrapper = shallowMount(Getters, {
      store,
      localVue,
    });
    expect(wrapper.findAll("p").at(1).text()).toBe(getters.clicks().toString());
  });
});
