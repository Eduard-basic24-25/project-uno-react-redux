import { 
	TODO_COMPLETE,
	TODO_IMPORTANT,
	TODO_SELECTED,
	CHANGE_HEADER,
	CHANGE_DATE,
	DELETE_TODO,
	CHANGE_TODO_TITLE,
	CHANGE_TODO_NOTE,
	ADD_TODO,

} from './actions.js';


function todoComplete(listId, todoId) {
	return {
		type: TODO_COMPLETE,
		payload: {
			listId,
			todoId,
		}
	}
}

function todoImportant(listId, todoId) {
	return {
		type: TODO_IMPORTANT,
		payload: {
			listId,
			todoId,
		}
	}
}

function todoSelected(listId, todoId) {
	return {
		type: TODO_SELECTED,
		payload: {
			listId,
			todoId,
		}
	}
}
function changeHeader(listId,header) {
	return {
		type: CHANGE_HEADER,
		payload: {
			listId,
			header,
		}
	}
}
function changeDate(listId,todoId,date) {
	return {
		type: CHANGE_DATE,
		payload: {
			listId,
			todoId,
			date,
		}
	}
}
function deleteTodo(listId,todoId) {
	return {
		type: DELETE_TODO,
		payload: {
			listId,
			todoId,
		}
	}
}
function changeTodoTitle(listId,todoId,title) {
	return {
		type: CHANGE_TODO_TITLE,
		payload: {
			listId,
			todoId,
			title,
		}
	}
}
function changeTodoNote(listId,todoId,note) {
	return {
		type: CHANGE_TODO_NOTE,
		payload: {
			listId,
			todoId,
			note,
		}
	}
}
function addTodo(id,title,note,date,createDate,completed,important,selected) {
	return {
		type: ADD_TODO,
		payload:  {
			id: Date.now(),
			title,
			note,
			date: createDate(),
			createDate: createDate(),
			completed: false,
			important: false,
			selected: false,
		  }
	}
}



export { 
	todoComplete,
	todoImportant,
	todoSelected,
	changeHeader,
	changeDate,
	deleteTodo,
	changeTodoTitle,
	changeTodoNote,
	addTodo,
};

