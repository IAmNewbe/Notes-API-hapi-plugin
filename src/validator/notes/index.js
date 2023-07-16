const InvariantError = require('../../exceptions/InvariantError');
const { NotesPayloadSchema } = require('./schema');

const NotesValidator = {
	validateNotePayload: (payload) => {
		const validationResult = NotesPayloadSchema.validate(payload);
		if (validationResult.error) {
			throw new InvariantError(validationResult.error.message);
		}
	},
};

module.exports = NotesValidator;
