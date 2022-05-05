import {obsArray, obsJson, Owner} from 'ownit';
import {ObsMap, obsMap} from 'ownit/dist/lib';
import {Cell, Column, Database, Row, Table} from '.';

export function createDb(name: string): Database {
  return new MemDatabase(name);
}

class MemTable extends Owner implements Table {
  constructor(protected _name: string, protected db: MemDatabase) {
    super();
    db.owns(this);
  }
  name(): string {
    return this._name;
  }
  addColumn(name: string, type: string): void {
    throw new Error('Method not implemented.');
  }
  removeColumn(name: string): void {
    throw new Error('Method not implemented.');
  }
  columns(): Column[] {
    throw new Error('Method not implemented.');
  }
  rows(): Row<any>[] {
    throw new Error('Method not implemented.');
  }
  get(id: string): Row<any> {
    throw new Error('Method not implemented.');
  }
  insert(data: Partial<any>): string {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: Partial<any>): void {
    throw new Error('Method not implemented.');
  }
  replace(id: string, data: Partial<any>): void {
    throw new Error('Method not implemented.');
  }
  remove(id: string): void {
    throw new Error('Method not implemented.');
  }
  lookup(col: string, value: any): string {
    throw new Error('Method not implemented.');
  }
  commit(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  pull(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  revert(): void {
    throw new Error('Method not implemented.');
  }
  database(): Database {
    throw new Error('Method not implemented.');
  }
}

class MemDatabase extends Owner implements Database {
  private _tables: ObsMap<string, Table> = obsMap(this, {});

  constructor(private _name: string) {
    super();
  }

  createTable(name: string): Table<any> {
    if (!this._tables.has(name)) {
      this._tables.set(name, new MemTable(name, this));
    }
    return this._tables.get(name);
  }
  tables(): Table<any>[] {
    throw new Error('Method not implemented.');
  }
  name(): string {
    throw new Error('Method not implemented.');
  }
  table(name: string): Table<any> {
    throw new Error('Method not implemented.');
  }
  remove(name: string): void {
    throw new Error('Method not implemented.');
  }
  commit(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  pull(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  revert(): void {
    throw new Error('Method not implemented.');
  }
}

class MemCell extends Owner implements Cell {
  get() {
    throw new Error('Method not implemented.');
  }
  set(value: any) {
    throw new Error('Method not implemented.');
  }
  column(): Column {
    throw new Error('Method not implemented.');
  }
  row(): Row<any> {
    throw new Error('Method not implemented.');
  }
  commit(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  pull(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  revert(): void {
    throw new Error('Method not implemented.');
  }
}