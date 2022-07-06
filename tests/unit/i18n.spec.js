import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueI18n from "vue-i18n";
import I18n from "@/components/i18nComponent";

const localVue = createLocalVue();

localVue.use(VueI18n);

describe("i18n.vue", () => {
  let i18n;
  beforeEach(() => {
    i18n = new VueI18n({
      messages: {
        en: {
          a: "aaa",
          b: "bbb",
          key1: "key1",
        },
        cn: {
          a: "一一一",
          b: "二二二",
          key1: "key1",
        },
      },
      fallbackLocale: "en",
      locale: "en",
    });
  });
  it("i18n case 1: renders successfully", () => {
    const wrapper = shallowMount(I18n, {
      localVue,
      i18n,
      mocks: {
        $t: (msg) => msg,
      },
    });
    expect(wrapper.text()).toContain("key1");
  });
  it("i18n case 2: renders successfully", () => {
    const wrapper = shallowMount(I18n, {
      localVue,
      i18n,
    });
    expect(wrapper.findAll("p").at(1).text()).toBe("aaa");
  });
  it("i18n case 3: renders successfully after change locale to cn", async () => {
    const wrapper = shallowMount(I18n, {
      localVue,
      i18n,
    });
    const btns = wrapper.findAll("button");
    btns.at(0).trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll("p").at(1).text()).toBe("一一一");
  });
  it("i18n case 4: show fallback locale after change locale to fr", async () => {
    const wrapper = shallowMount(I18n, {
      localVue,
      i18n,
    });
    const btns = wrapper.findAll("button");
    btns.at(0).trigger("click");
    btns.at(1).trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll("p").at(1).text()).toBe("aaa");
  });
  it("i18n case 5: show default locale after reset to en", async () => {
    const wrapper = shallowMount(I18n, {
      localVue,
      i18n,
    });
    const btns = wrapper.findAll("button");
    btns.at(0).trigger("click");
    btns.at(1).trigger("click");
    btns.at(2).trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll("p").at(2).text()).toBe("bbb");
  });
});
