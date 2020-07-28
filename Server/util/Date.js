let jalali_moment = require("jalali-moment")
let moment=require("moment-timezone")
module.exports = {
    get_DateNow() {
        let _Date = new Date();
        let Date_Zon=moment(_Date.now)
        let DateNow_Fa = Date_Zon.tz('Asia/Tehran').format('YYYY/MM/DD HH:mm:ss');

        let MomentDate =  jalali_moment(DateNow_Fa, 'YYYY-M-D HH:mm:ss')
        .locale('fa')
        .format('YYYY/M/D HH:mm:ss');
        return MomentDate
    }
}