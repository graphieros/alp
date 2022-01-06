import { shallowMount } from "@vue/test-utils";
import Button from "../../src/components/atoms/Button.vue";

describe("Button.vue", () => {
  it("renders props.content when passed", () => {
    const content = "click";
    const wrapper = shallowMount(Button, {
      props: { content },
    });
    expect(wrapper.text()).toMatch(content);
  });
});
