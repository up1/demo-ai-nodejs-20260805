// Business logic for employee time-log lookup and recording
const db = require('../models/database');

const MESSAGES = {
  EMPLOYEE_ID_REQUIRED: 'กรุณากรอก Employee ID ที่ถูกต้อง',
  FULL_NAME_REQUIRED: 'กรุณากรอกชื่อ-นามสกุล',
  LOG_SUCCESS: 'ลงเวลาเรียบร้อยแล้ว',
};

// Validates input and looks up an employee by Employee ID.
function searchEmployee(employeeId, fullName) {
  const errors = {};

  if (!employeeId || !employeeId.trim()) {
    errors.employeeId = MESSAGES.EMPLOYEE_ID_REQUIRED;
  }
  if (!fullName || !fullName.trim()) {
    errors.fullName = MESSAGES.FULL_NAME_REQUIRED;
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const employee = db.findEmployeeById(employeeId.trim());
  if (!employee) {
    return { errors: { employeeId: MESSAGES.EMPLOYEE_ID_REQUIRED } };
  }

  return { employee };
}

// Records a work log entry for the given employee and updates last_log_time.
function recordTimeLog(employeeId) {
  const employee = db.findEmployeeById(employeeId);
  if (!employee) {
    return { errors: { employeeId: MESSAGES.EMPLOYEE_ID_REQUIRED } };
  }

  const logTime = new Date().toISOString();
  db.insertWorkLog(employeeId, logTime);
  db.updateLastLogTime(employeeId, logTime);

  return {
    employee: { ...employee, last_log_time: logTime },
    message: MESSAGES.LOG_SUCCESS,
  };
}

module.exports = {
  searchEmployee,
  recordTimeLog,
  MESSAGES,
};
