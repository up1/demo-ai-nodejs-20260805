// SQLite access layer using Node.js built-in node:sqlite (Node 22+)
const fs = require('node:fs');
const path = require('node:path');
const { DatabaseSync } = require('node:sqlite');

const dataDir = path.join(__dirname, '..', 'data');
fs.mkdirSync(dataDir, { recursive: true });

const db = new DatabaseSync(path.join(dataDir, 'app.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS employees (
    employee_id VARCHAR(10) PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    department VARCHAR(50),
    last_log_time DATETIME
  );
  CREATE TABLE IF NOT EXISTS work_logs (
    log_id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id VARCHAR(10) NOT NULL,
    log_time DATETIME NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
  );
`);

// Seed sample employees on first run so the app is usable out of the box.
const { count } = db.prepare('SELECT COUNT(*) AS count FROM employees').get();
if (count === 0) {
  const seed = db.prepare('INSERT INTO employees (employee_id, full_name, department, last_log_time) VALUES (?, ?, ?, NULL)');
  seed.run('E12345', 'somkiat pui', 'IT');
  seed.run('E67890', 'jane doe', 'HR');
}

function findEmployeeById(employeeId) {
  const stmt = db.prepare('SELECT employee_id, full_name, department, last_log_time FROM employees WHERE employee_id = ?');
  return stmt.get(employeeId);
}

function insertWorkLog(employeeId, logTime) {
  const stmt = db.prepare('INSERT INTO work_logs (employee_id, log_time) VALUES (?, ?)');
  return stmt.run(employeeId, logTime);
}

function updateLastLogTime(employeeId, logTime) {
  const stmt = db.prepare('UPDATE employees SET last_log_time = ? WHERE employee_id = ?');
  return stmt.run(logTime, employeeId);
}

module.exports = {
  findEmployeeById,
  insertWorkLog,
  updateLastLogTime,
};
