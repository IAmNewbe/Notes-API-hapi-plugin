const InvariantError = require("../../exceptions/InvariantError");
const UserPayloadSchema = require("./schema")

const UserValidator = {
  validateUserPayload: (payload) => {
    const valdationResult = UserPayloadSchema.validate(payload);

    if (valdationResult.error) {
      throw new InvariantError(valdationResult.error.message);
    }
  },
};

module.exports = UserValidator;