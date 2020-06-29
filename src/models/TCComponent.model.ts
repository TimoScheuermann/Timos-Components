import { TCComponentApi } from "./TCComponentApi.model";
import { TCComponentSlots } from "./TCComponentSlots.model";

export class TCComponent {
  name = "";
  icon = "";
  api: TCComponentApi[] = [];
  slots: TCComponentSlots[] = [];
  customAPI?: boolean;
}
