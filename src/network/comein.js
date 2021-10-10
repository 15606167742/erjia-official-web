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

export function indexVideo() {
	return requestMain({
		url: '/api/video/getIndexVideo',
		method: 'get',
	})
}

export function projectVideoList() {
	return requestMain({
		url: '/api/video/getProjectVideoList',
		method: 'get',
	})
}

export function developmentList() {
	return requestMain({
		url: '/api/cms/fzlc/getList',
		method: 'get',
	})
}

export function leaderTopOne() {
	return requestMain({
		url: '/api/cms/leader/getTopOne',
		method: 'get',
	})
}

export function leaderList() {
	return requestMain({
		url: '/api/cms/leader/getList',
		method: 'get',
	})
}

export function activityVideoList() {
	return requestMain({
		url: '/api/video/getSqhdVideoList',
		method: 'get',
	})
}