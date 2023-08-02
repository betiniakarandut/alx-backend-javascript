import getListStudents from './0-get_list_students.js';

export default function getStudentsByLocation(student, city) {
	const filtered = student.filter((students) => {
		return students.location === city;
	});
	return filtered;
}
