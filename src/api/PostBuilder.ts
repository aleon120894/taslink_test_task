export class PostBuilder {
    private title?: string;
    private body?: string;
    private userId?: number;


    setTitle(title: string) {
        this.title = title;
        return this;
    }


    setBody(body: string) {
        this.body = body;
        return this;
    }


    setUserId(userId: number) {
        this.userId = userId;
        return this;
    }


    build() {
        if (this.title === undefined || this.body === undefined || this.userId === undefined) {
            throw new Error('Missing fields for Post');
        }
        return {
            title: this.title,
            body: this.body,
            userId: this.userId
        };
    }
}
