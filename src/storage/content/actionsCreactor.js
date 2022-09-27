import { 
	TODO_COMPLETE,
	TODO_IMPORTANT,
	TODO_SELECTED,
	CHANGE_HEADER,
	CHANGE_DATE,
	DELETE_TODO,
	DELETE_LIST,
	CHANGE_TODO_TITLE,
	CHANGE_TODO_NOTE,
	ADD_TODO,
	ADD_IMPORTANT_TODO,
	ADD_LIST,
} from './actions.js';
import { createDate } from '../../helpers/index.js';


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
function deleteList(listId) {
	return {
		type: DELETE_LIST,
		payload: {
			listId,
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
function addTodo(title,selectedListId) {
	return {
		type: ADD_TODO,
		payload: {
			selectedListId,
			todo: 
			{
				id: Date.now(),
				title,
				note:'',
				date: createDate(),
				createDate: createDate(),
				completed: false,
				important: false,
				selected: false,
			  }
		} 
	}
}
function addImportantTodo(title,selectedListId) {
	return {
		type: ADD_IMPORTANT_TODO,
		payload: {
			selectedListId,
			todo: 
			{
				id: Date.now(),
				title,
				note:'',
				date: createDate(),
				createDate: createDate(),
				completed: false,
				important: true,
				selected: false,
			  }
		} 
	}
}
function addList(title,id) {
	return {
		type: ADD_LIST,
		payload: {
				id,
				header: title,
				todos: [],
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
	deleteList,
	changeTodoTitle,
	changeTodoNote,
	addTodo,
	addList,
	addImportantTodo,
};

