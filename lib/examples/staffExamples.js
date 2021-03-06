var MBO = require('../mindbody-sdk');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});

// https://api.mindbodyonline.com/public/v6/staff/staff
mbo.staff.staff()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.staff.staff({
    'StaffIds': 'list of numbers',
    'Filters': 'list of strings',
    'SessionTypeId': Number,
    'StartDateTime': DateTime,
    'LocationId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/staff/staffpermissions
mbo.staff.staffPermissions()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.staff.staffPermissions({
    'StaffId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });