import { resolveComponent, resolveDirective, openBlock, createElementBlock, createVNode, withCtx, createTextVNode, createElementVNode, toDisplayString, withDirectives, createBlock } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  head: {
    title() {
      return {
        inner: "Tag"
      };
    }
  },
  data() {
    return {
      endpoint: "/datatable/tags"
    };
  },
  methods: {
    destroy(id) {
      axios.delete("/api/matrices/" + id).then((response) => {
      });
    }
  }
};
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "content-container" };
const _hoisted_3 = { class: "flex items-center" };
const _hoisted_4 = /* @__PURE__ */ createElementVNode("p", null, "Are you sure you want to permenantly delete this matrix?", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_title = resolveComponent("app-title");
  const _component_portal = resolveComponent("portal");
  const _component_router_link = resolveComponent("router-link");
  const _component_ui_table = resolveComponent("ui-table");
  const _component_ui_button = resolveComponent("ui-button");
  const _component_ui_modal = resolveComponent("ui-modal");
  const _directive_modal = resolveDirective("modal");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_portal, { to: "title" }, {
      default: withCtx(() => [
        createVNode(_component_app_title, {
          icon: _ctx.layer - _ctx.group
        }, {
          default: withCtx(() => [
            createTextVNode("Tag")
          ], void 0, true),
          _: 1
        }, 8, ["icon"])
      ], void 0, true),
      _: 1
    }),
    createElementVNode("div", _hoisted_1, [
      createElementVNode("div", _hoisted_2, [
        createVNode(_component_ui_table, {
          endpoint: $data.endpoint,
          id: "orders",
          "sort-by": "id",
          "primary-key": "id",
          key: "orders_table"
        }, {
          name: withCtx((table) => [
            createElementVNode("div", _hoisted_3, [
              createVNode(_component_router_link, {
                to: { name: "tag.edit", params: { id: table.record.id } }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(table.record.name), 1)
                ], void 0, true),
                _: 2
              }, 1032, ["to"])
            ])
          ]),
          slug: withCtx((table) => [
            createElementVNode("code", null, toDisplayString(table.record.slug), 1)
          ]),
          _: 1
        }, 8, ["endpoint"])
      ])
    ]),
    createVNode(_component_portal, { to: "modals" }, {
      default: withCtx(() => [
        createVNode(_component_ui_modal, {
          name: "delete-matrix",
          title: "Delete Matrix",
          key: "delete_matrix"
        }, {
          footer: withCtx((matrix) => [
            withDirectives((openBlock(), createBlock(_component_ui_button, {
              onClick: ($event) => $options.destroy(matrix.data.id),
              theme: "danger",
              class: "ml-3"
            }, {
              default: withCtx(() => [
                createTextVNode("Delete")
              ], void 0, true),
              _: 2
            }, 1032, ["onClick"])), [
              [_directive_modal, void 0, "delete-matrix"]
            ]),
            withDirectives((openBlock(), createBlock(_component_ui_button, null, {
              default: withCtx(() => [
                createTextVNode("Cancel")
              ], void 0, true),
              _: 1
            })), [
              [_directive_modal, void 0, "delete-matrix"]
            ])
          ]),
          default: withCtx(() => [
            _hoisted_4
          ], void 0, true),
          _: 1
        })
      ], void 0, true),
      _: 1
    })
  ]);
}
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Index as default
};
