import {
  DomHandler
} from "./chunk-32WPC2CU.js";
import {
  Teleport,
  createBlock,
  createCommentVNode,
  openBlock,
  renderSlot
} from "./chunk-6XEHAICS.js";

// node_modules/primevue/portal/portal.esm.js
var script = {
  name: "Portal",
  props: {
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      mounted: false
    };
  },
  mounted: function mounted() {
    this.mounted = DomHandler.isClient();
  },
  computed: {
    inline: function inline() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.inline ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : $data.mounted ? (openBlock(), createBlock(Teleport, {
    key: 1,
    to: $props.appendTo
  }, [renderSlot(_ctx.$slots, "default")], 8, ["to"])) : createCommentVNode("", true);
}
script.render = render;

export {
  script
};
//# sourceMappingURL=chunk-Y35YAZII.js.map
