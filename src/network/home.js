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

export function sheQunHuoDong(params) {
	return requestMain({
		url: '/api/cms/sheQunHuoDong/getListOfPage',
		method: 'get',
		params,
	})
}
