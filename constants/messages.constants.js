export const MESSAGES = {
	TASK_DESCRIPTION_INVALID: '❌ Description must be at least 3 letters!',
	TASK_STATUS_INVALID: `❌ Task status must be one of the following: todo, in-progress or done.`,
	TASK_ID_INVALID: '❌ Task id must be an integer!',
	TASK_NOT_EXIST: '❌ Task with this id does not exist!',
	TASK_ADDED: id => `✅ Task (ID: ${id}) added successfully!`,
	TASK_UPDATED: id => `✅ Task (ID: ${id}) updated successfully!`,
	TASK_DELETED: id => `✅ Task (ID: ${id}) deleted successfully!`,
	TASK_MARKED: (id, status) => `✅ Task (ID: ${id}) marked ${status} successfully!`,
};