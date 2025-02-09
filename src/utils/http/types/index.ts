import type { AxiosResponse } from 'axios'
// 接口返回的数据格式
export interface ResponseData<T = any> {
    success?: boolean
    code: number | string
    message: string
    data?: T
}
// 接口请求的配置
export interface ApiRequestConfig {
    url: string
    method?: RequestMethods
    data?: any
    headers?: any
    timeout?: number
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'
    formData?: boolean
}
//接口请求类型枚举
export enum RequestMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
}
export interface HttpsRequest extends AxiosResponse {
    data: ResponseData
}
