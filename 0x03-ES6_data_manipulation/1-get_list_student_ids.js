// import getListStudents from './0-get_list_students.js';

export default function getListStudentIds(arr) {
	if (!Array.isArray(arr))
		return [];
	const arr2 = arr.map(i => i.id);
	return arr2;
}
