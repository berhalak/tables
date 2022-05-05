export interface Sync {
  commit(): Promise<void>;
  pull(): Promise<void>;
  revert(): void;
}
export interface Database extends Sync {
  createTable(name: string): Table;
  tables(): Table[];
  name(): string;
  table(name: string): Table|null;
  remove(name: string): void;
}
export interface Table<T = any> extends Sync {
  name(): string;
  addColumn(name: string, type: string): void;
  removeColumn(name: string): void;
  columns(): Column[];
  rows(): Row<T>[];
  get(id: string): Row<T>|null;
  insert(data: Partial<T>): string;
  update(id: string, data: Partial<T>): void;
  replace(id: string, data: Partial<T>): void;
  remove(id: string): void;
  lookup(col: string, value: any): string|null;
  commit(): Promise<void>;
  pull(): Promise<void>;
  revert(): void;
  database(): Database;
}

export interface Row<T = any> extends Sync {
  get(col: string): any;
  set(col: string, value: any): void;
  valueOf(): T;
  update(value: Partial<T>): void;
  replace(value: Partial<T>): void;
  id(): string;
  table(): Table;
  cell(col: string): Cell;
}

export interface Cell extends Sync {
  get(): any;
  set(value: any): any;
  column(): Column;
  row(): Row;
}
export interface Column {
  name(): string;
  type(): string;
  table(): Table;
  values(): Cell[];
}