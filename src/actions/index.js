export const selectLibrary = (libararyId) => { //export many things in this file. So don't add 'export default'
	return {
		type: 'select_library',
		payload: libararyId
	};
};
