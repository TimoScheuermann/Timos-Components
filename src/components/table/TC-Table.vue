<template>
  <div class="tc-table">
    <div class="tableWrapper">
      <table>
        <slot />
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class TCTable extends Vue {}
</script>
<style lang="scss" scoped>
@import '../../variables';
.tc-table {
  .tableWrapper {
    max-width: 100%;
    overflow-x: auto;

    table {
      min-width: 100%;
      text-align: left;
      border-collapse: collapse;

      tr {
        transition: 0.2s ease;
        th,
        td {
          padding: 10px;
          transition: 0.2s ease;
          font-size: 16px !important;
        }
        th {
          border-bottom: 1px solid black;
        }
        td {
          white-space: nowrap;
        }
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        &:nth-child(ODD) {
          td {
            // background: $paragraph;
          }
        }
        &:hover {
          &:not(:first-child) {
            box-shadow: $shadow;
            transform: translateY(-5px);
            background: $background;
            td {
              background: rgba($paragraph, 0.5);
            }
          }
        }
      }
    }
  }
}
</style>
