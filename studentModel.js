var mongoose = require('mongoose');
// Setup schema
var studentSchema = mongoose.Schema({
    rno: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
    
});
// Export Contact model
var Student = module.exports = mongoose.model('student', studentSchema);
module.exports.get = function (callback, limit) {
    Student.find(callback).limit(limit);
}