import {
	requestMain
} from '@/network/request.js';

export function jobList() {
	return requestMain({
		url: '/api/cms/getWorkPostList',
		method: 'get',
	})
}

export function submitContact(data) {
	return requestMain({
		url: '/api/cms/submitContact',
		method: 'post',
		data
	})
}
