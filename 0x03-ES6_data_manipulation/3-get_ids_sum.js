import getListStudents from './0-get_list_students.js';

export default function getStudentIdsSum(students) {
	const reduced = students
		.map((value) => value.id)
		.reduce((acc, value) => {
			return acc + value;
		}, 0);
	return reduced;
}

// const students = getListStudents();
// const value = getStudentIdsSum(students);
// console.log(value);