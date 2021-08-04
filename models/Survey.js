const { Types, model, Schema } = require('mongoose');
const RecipientSchema = require('./Recipient');


const surveySchema = new Schema({
    title: String,
    body: String,
    Subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
});

model('surveys', surveySchema);