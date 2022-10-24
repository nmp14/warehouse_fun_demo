interface Companies {
  name: string;
  numWarehouses: number;
  warehouseInfo?: WarehouseInfo[];
  id: number;
}

interface WarehouseInfo {
  name: string;
  numItems: number;
  capacity: number;
  unitType: string;
  items: any[]
}

export { Companies, WarehouseInfo };
