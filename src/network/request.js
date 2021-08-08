import Vue from 'vue'
import axios from 'axios'
import {
	Loading,
	MessageBox
} from 'element-ui';

const SUCCESS = 200;
let loading;

const REQUEST_MAIN = axios.create({
	baseURL: WEBCONFIG.request_url_main,
	timeout: 10000,
});

export function requestMain(config) {
	// 添加请求拦截器
	REQUEST_MAIN.interceptors.request.use(config => {
		// 在发送请求之前做些什么
		loading = Loading.service({
			text: '加载中...'
		})

		return config;
	}, error => {
		// 对请求错误做些什么
		return Promise.reject(error);
	});

	// 添加响应拦截器
	REQUEST_MAIN.interceptors.response.use(response => {
		Vue.nextTick(() => {
			loading.close();
		});
		return response
	}, error => {
		// 对响应错误做点什么
		Vue.nextTick(() => {
			loading.close();
		});
		return Promise.reject(error);
	});

	return new Promise(resolve => {
		REQUEST_MAIN.request(config).then(response => {
			// console.log(response);
			if (response.data.code === SUCCESS) {
				resolve(response.data);
			} else if (response.data.msg) {
				MessageBox.alert(response.data.msg);
			} else {
				MessageBox.alert('网络开小差了，请重试。。。');
			}
		})
	});
}
