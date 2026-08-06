const indexService = require('../services/indexService');

function showHome(req, res) {
  res.render('index', {
    employee: null,
    errors: {},
    message: null,
    formValues: { employeeId: '', fullName: '' },
  });
}

function searchEmployee(req, res) {
  const { employeeId, fullName } = req.body;
  const result = indexService.searchEmployee(employeeId, fullName);

  res.render('index', {
    employee: result.employee || null,
    errors: result.errors || {},
    message: null,
    formValues: { employeeId: employeeId || '', fullName: fullName || '' },
  });
}

function recordTimeLog(req, res) {
  const { employeeId, fullName } = req.body;
  const result = indexService.recordTimeLog(employeeId);

  res.render('index', {
    employee: result.employee || null,
    errors: result.errors || {},
    message: result.message || null,
    formValues: { employeeId: employeeId || '', fullName: fullName || '' },
  });
}

module.exports = {
  showHome,
  searchEmployee,
  recordTimeLog,
};
