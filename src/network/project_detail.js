import {
	requestMain
} from '@/network/request.js';

export function projectDetail(params) {
	return requestMain({
		url: '/api/project/getDetailById',
		method: 'get',
		params,
	})
}
