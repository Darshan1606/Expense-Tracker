const validate = require("./validation");
const Joi = require("joi");

module.exports = {
  authSchema: Joi.object().keys({
    email: validate.reqEmail,
    password: validate.reqString,
  }),
  queryIdSchema: Joi.object().keys({
    id: validate.id,
  }),
  incomeSchema: Joi.object().keys({
    month: validate.reqNumber,
    year: validate.reqNumber,
    amount: validate.reqNumber,
    income_from: validate.reqString,
  }),
  paginationSchema: Joi.object().keys({
    page_no: validate.reqNumber,
    per_page: validate.reqNumber,
  }),
};
