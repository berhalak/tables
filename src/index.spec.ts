import {createDb} from './inMemory';

test('sample test', () => {
  const db = createDb("database");
  const tableA = db.createTable("TableA");
  tableA.addColumn("Name", "string");
  tableA.addColumn("LastName", "string");
  tableA.addColumn("Age", "number");
  const row1 = {Name: "John", LastName: "Doe"};
  const row2 = {Name: "John2", LastName: "Doe", Age: 10};
  tableA.insert(row1);
  tableA.insert(row2);
  expect(tableA.rows()).toStrictEqual([
    row1, row2
  ])
});


test('sample2 test', () => {
  const db = createDb("database");
  const tab = db.createTable("TableA");
  tab.addColumn("Name", "string");
  tab.addColumn("LastName", "string");
  tab.addColumn("Age", "number");
  tab.rows();
  tab.get("fda");
  tab.update("fda", { Age : 10});
  tab.commit();
});