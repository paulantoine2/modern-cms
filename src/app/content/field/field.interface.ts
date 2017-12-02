export interface Field {
  id: string;
  label: string;
  required: boolean;
  disabled: boolean;
  description: string;
  defaultValue?: any;
  prefix?: string;
  suffix?: string;
  multiple?: boolean;
  options?: Array<any>;
}
