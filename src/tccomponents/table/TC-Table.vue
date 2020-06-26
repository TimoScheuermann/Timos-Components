<template>
  <div class="tc-table" :class="{ 'tc-table__dark': dark }">
    <div class="tc-table--wrapper">
      <table>
        <slot />
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";
@Component
export default class TCTable extends Mixins(TCComponent) {}
</script>
<style lang="scss" scoped>
.tc-table {
  &.tc-table__dark {
    .tc-table--wrapper {
      table {
        tr {
          border-bottom-color: rgba(#fff, 0.2);
          th,
          td {
            color: #fff;
          }
          th {
            border-bottom-color: #fff;
          }
          &:hover {
            &:not(:first-child) {
              background: lighten($color, 10%);
              td {
                background: lighten($color, 10%);
              }
            }
          }
        }
      }
    }
  }
  .tc-table--wrapper {
    max-width: 100%;
    overflow-x: auto;

    table {
      min-width: 100%;
      text-align: left;
      border-collapse: collapse;

      tr {
        transition: 0.2s ease;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        th,
        td {
          transition: inherit;
          padding: 10px;
          transition: 0.2s ease;
          font-size: 16px !important;
          color: $color;
        }
        th {
          border-bottom: 1px solid black;
        }
        td {
          white-space: nowrap;
        }

        &:hover {
          &:not(:first-child) {
            // box-shadow: $shadow;
            transform: translateY(-5px);

            background: $paragraph;
            td {
              background: $paragraph;
            }
          }
        }
      }
    }
  }
}
</style>
