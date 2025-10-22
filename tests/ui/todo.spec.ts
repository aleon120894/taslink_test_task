import { test, expect } from '@playwright/test';
import { TodoPage } from '../../src/pages/TodoPage';


test.describe('TodoMVC UI tests', () => {
    test('Create, complete and delete a todo', async ({ page }) => {
        const todoPage = new TodoPage(page);


        // 1. Відкрити сайт
        await todoPage.goto();

        // 2. Створити нову задачу "Buy milk"
       const text = 'Buy milk';
       await todoPage.addTodo(text);


       // 3. Перевірити, що задача відображається у списку
       expect(await todoPage.isTodoVisible(text)).toBeTruthy();


       // 4. Відмітити задачу як виконану
       await todoPage.toggleTodoByText(text);


       // 5. Переконатися, що задача має клас "completed"
       expect(await todoPage.todoHasClassCompleted(text)).toBeTruthy();


      // 6. Видалити задачу
      await todoPage.deleteTodoByText(text);


     // 7. Переконатися, що список задач порожній
     expect(await todoPage.isListEmpty()).toBeTruthy();
    });
});