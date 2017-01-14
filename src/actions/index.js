//will export many things in this file. So don't add 'export default'
export const selectLibrary = (libararyId) => { 
	return {
		type: 'select_library',
		payload: libararyId
	};
};
