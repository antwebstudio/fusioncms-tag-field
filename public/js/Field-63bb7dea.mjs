import { openBlock, createElementBlock, createElementVNode, toDisplayString, withDirectives, withKeys, vModelText, Fragment, renderList, createTextVNode } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const Field_vue_vue_type_style_index_0_scoped_14aa721b_lang = "";
const _sfc_main = {
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      tag: ""
    };
  },
  computed: {
    placeholder() {
      if (_.isUndefined(this.field.settings) || _.isUndefined(this.field.settings.placeholder)) {
        return "Type in your tags and hit enter";
      }
      return this.field.settings.placeholder;
    },
    tags: {
      get() {
        if (!this.value)
          return [];
        return this.value.map((tag) => {
          if (typeof tag == "object" || typeof tag == "OBJECT" || typeof tag == "Object") {
            return tag.name;
          }
          return tag;
        }) || [];
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  mounted() {
    this.tags = _.map(this.value, "name") || [];
    this.$forceUpdate();
  },
  methods: {
    addTag() {
      this.tags.push(this.tag);
      this.tag = "";
      this.$emit("input", this.tags);
      this.$emit("add-tag", this.tag);
    },
    removeTag(deletedTag) {
      _.remove(this.tags, function(tag) {
        return tag == deletedTag;
      });
      this.$forceUpdate();
      this.$emit("input", this.tags);
      this.$emit("remove-tag", deletedTag);
    }
  }
};
const _hoisted_1 = ["for"];
const _hoisted_2 = ["placeholder"];
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createElementVNode("label", {
      for: $props.field.handle,
      class: "form__label"
    }, toDisplayString($props.field.name), 9, _hoisted_1),
    createElementVNode("div", null, [
      withDirectives(createElementVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.tag = $event),
        onKeyup: _cache[1] || (_cache[1] = withKeys((...args) => $options.addTag && $options.addTag(...args), ["enter"])),
        type: "text",
        class: "w-100 form-control",
        placeholder: $options.placeholder
      }, null, 40, _hoisted_2), [
        [vModelText, $data.tag]
      ])
    ]),
    createElementVNode("div", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.tags, (tag, index) => {
        return openBlock(), createElementBlock("span", {
          onClick: ($event) => $options.removeTag(tag),
          key: index,
          class: "badge badge-primary"
        }, [
          createTextVNode(toDisplayString(tag), 1),
          createElementVNode("i", {
            onClick: ($event) => $options.removeTag(index),
            class: "fa fa-times"
          }, null, 8, _hoisted_4)
        ], 8, _hoisted_3);
      }), 128))
    ])
  ]);
}
const Field = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-14aa721b"]]);
export {
  Field as default
};
