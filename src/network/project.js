import {
	requestMain
} from '@/network/request.js';

export function projectList(params) {
	return requestMain({
		url: '/api/project/getListOfPage',
		method: 'get',
		params,
	})
}

export function projectTypeList(params) {
	return requestMain({
		url: '/api/project/getProjectTypeList',
		method: 'get',
		params,
	})
}
