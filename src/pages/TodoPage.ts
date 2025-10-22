import { Page, Locator } from '@playwright/test';


export class TodoPage {
    readonly page: Page;
    readonly newTodoInput: Locator;
    readonly todoList: Locator;


    constructor(page: Page) {
        this.page = page;
        this.newTodoInput = page.locator('.new-todo');
        this.todoList = page.locator('.todo-list');
    }


    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc');
        await this.page.waitForLoadState('networkidle');
    }


    async addTodo(text: string) {
        await this.newTodoInput.fill(text);
        await this.newTodoInput.press('Enter');
    }


    todoLocatorByText(text: string) {
        return this.todoList.locator('li', { hasText: text });
    }


    async isTodoVisible(text: string) {
        return await this.todoLocatorByText(text).isVisible();
    }


    async toggleTodoByText(text: string) {
        const todo = this.todoLocatorByText(text);
        const toggle = todo.locator('.toggle');
        await toggle.click();
    }


    async todoHasClassCompleted(text: string) {
        const todo = this.todoLocatorByText(text);
        const classes = await todo.getAttribute('class');
        return classes?.split(' ').includes('completed') ?? false;
    }


    async deleteTodoByText(text: string) {
        const todo = this.todoLocatorByText(text);
        
        // hover to reveal destroy button
        await todo.hover();
        const destroy = todo.locator('.destroy');

        // use JS click in case overlay

        await destroy.evaluate((el: HTMLElement) => el.click());
    }


    async isListEmpty() {
        return await this.todoList.locator('li').count() === 0;
    }
}
