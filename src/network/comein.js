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