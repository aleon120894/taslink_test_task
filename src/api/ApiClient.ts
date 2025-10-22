import { APIRequestContext } from '@playwright/test';


export class ApiClient {
    readonly request: APIRequestContext;
    readonly baseURL: string;


    constructor(request: APIRequestContext, baseURL = 'https://jsonplaceholder.typicode.com') {
        this.request = request;
        this.baseURL = baseURL;
    }


    async getPosts() {
        return await this.request.get(`${this.baseURL}/posts`);
    }


    async createPost(payload: any) {
        return await this.request.post(`${this.baseURL}/posts`, { data: payload });
    }


    async deletePost(id: number) {
        return await this.request.delete(`${this.baseURL}/posts/${id}`);
    }
}
