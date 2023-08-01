import getListStudents from './0-get_list_students.js';

const { location: 'San Francisco' } = city
const filtered = getListStudents().filter((students) => {
	return students.city
})

console.log(filtered);