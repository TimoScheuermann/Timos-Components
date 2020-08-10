export class TCComponentApi {
  name = '';
  type = '';
  parameters?: (string | number | boolean)[];
  description = '';
  default?: string | boolean | number;
  selectValues?: any[];
}
