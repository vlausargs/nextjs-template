export interface Item {
  id: string;
  name: string;
  desc: string;
  price: number;
  status: "OPEN" | "HOLD" | "EXPIRED";
  created_by: any;
  created: any;
  updated: any;
}
