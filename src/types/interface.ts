interface Companies {
  name: string;
  numWarehouses: number;
  warehouses: WarehouseInfo[];
  id: number;
}

interface WarehouseInfo {
  id: number;
  name: string;
  numItems: number;
  capacity: number;
  unitType?: string;
  items?: any[]
}

export { Companies, WarehouseInfo };
