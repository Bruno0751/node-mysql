const moment = require('moment')
function formatarTimestamp(data) {
    return moment(data).format('YYYY-MM-DD HH:mm:ss')
}
function formatarDate(data) {
    return moment(data).format('YYYY-MM-DD')
}
module.exports = {
    formatarTimestamp: formatarTimestamp,
    formatarDate: formatarDate
}