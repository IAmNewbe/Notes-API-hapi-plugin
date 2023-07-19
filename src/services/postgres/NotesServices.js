const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const { mapDBToModel } = require('../../utils');
const NotFoundError = require('../../exceptions/NotFoundError');

class NotesService {
	constructor() {
		this._pool = new Pool();
	}

	addNote({ title, body, tags }) {
		const id = nanoid(16);
		const createdAt = new Date().toISOString();
		const updatedAt = createdAt;

		const query = {
			text: 'INSERT INTO notes VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
			values: [id, title, body, tags, createdAt, updatedAt],
		};

		const result = this._pool.query(query);

		if (!result.rows[0].id) {
			throw new InvariantError('Catatan gagal ditambahkan');
		}
	}

	async getNotes() {
		const result = await this._pool.query('SELECT * FROM notes');
		return result.rows.map(mapDBToModel);
	}

	async getNotesById(id) {
		const query = {
			text: 'SELECT * FROM notes WHERE id = $1',
			values: [id],
		}

		const result = await this._pool.query(query);

		if (!result.rows.length) {
			throw new NotFoundError('Catatan tidak ditemukan');
		}

		return result.rows.map(mapDBToModel)[0];
		//vesi Tabnine
		// const result = await this._pool.query('SELECT * FROM notes WHERE id = $1', [id]);
    // return result.rows.map(mapDBToModel);
	}

	async editNoteById(id, { title, body, tags }) {
		const updated_at = new Date().toISOString();
		const query = {
      text: 'UPDATE notes SET title = $1, body = $2, tags = $3, updated_at = $4 WHERE id = $5 RETURNING id',
      values: [title, body, tags, updated_at, id],
    };

		const result = await this._pool.query(query);

		if (!result.rows.length) {
			throw new NotFoundError('Gagal memperbarui catatan. Id tidak ditemukan');
		}
	}

	async deleteNoteById(id) {
		const query = {
      text: 'DELETE FROM notes WHERE id = $1 RETURNING id',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Gagal menghapus catatan. Id tidak ditemukan');
    }
	}
}

module.exports = NotesService;
