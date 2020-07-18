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
import { Component, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';

@Component
export default class TCTable extends Mixins(TCComponent) {}
</script>

<style lang="scss" scoped>
.tc-table {
  &.tc-table__dark {
    .tc-table--wrapper {
      table {
        tr {
          border-bottom-color: rgba($color_dark, 0.2);
          th,
          td {
            color: $color_dark;
          }
          th {
            border-bottom-color: $color_dark;
          }
          &:hover {
            &:not(:first-child) {
              background: $background_dark;
              td {
                background: $background_dark;
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

    @include custom-scrollbar__light();

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
            transform: translateY(-5px);
            background: $background;
            td {
              background: $background;
            }
          }
        }
      }
    }
  }
}
</style>
