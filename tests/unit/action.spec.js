import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Actions from "@/components/actionComponent";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("action.vue", () => {
  let actions;
  let store;
  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn(),
    };
    // MOCK vuex
    store = new Vuex.Store({
      actions, // inject mock fn
    });
  });
  it('dispatches "actionInput" when input event value is "input"', () => {
    const wrapper = shallowMount(Actions, { store, localVue });
    const input = wrapper.find("input");
    input.element.value = "input";
    input.trigger("input");
    expect(actions.actionInput).toHaveBeenCalled();
  });
  it('does not dispatches "actionInput" when input event value is not "input"', () => {
    const wrapper = shallowMount(Actions, { store, localVue });
    const input = wrapper.find("input");
    input.element.value = "not input";
    input.trigger("input");
    expect(actions.actionInput).not.toHaveBeenCalled();
  });
  it('calls store action "actionClick" when button is clicked', () => {
    const wrapper = shallowMount(Actions, { store, localVue });
    const button = wrapper.find("button");
    button.trigger("click");
    expect(actions.actionClick).toHaveBeenCalled();
  });
});
