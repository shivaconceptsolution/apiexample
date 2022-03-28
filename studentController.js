Student = require('./studentModel');
exports.stuview = function (req, res) {
    Student.get(function (err, stu) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Students retrieved successfully",
            data: stu
        });
    });
};

exports.stunew = function (req, res) {
    var stu = new Student();
    stu.rno = req.body.rno ? req.body.rno :stu.rno;
    stu.name = req.body.name;
    
// save the contact and check for errors
    stu.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New Student created!',
            data: stu
        });
    });
};
