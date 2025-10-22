# 🧪 Playwright + TypeScript QA Framework

## 📋 Опис проєкту

Цей проєкт створено як тестове завдання **Automation QA (Playwright + TypeScript)**.  
Він демонструє структуру сучасного автоматизаційного фреймворку, що включає:

- **Playwright + TypeScript**
- **Page Object Model (POM)** — для UI-тестів  
- **Builder pattern** — для формування тіла POST-запиту  
- **API Controller** — для централізованої роботи з API  
- **UI та API тести**  
- **Базові assertions (expect)**  

---

## 🧱 Структура фреймворку

taslink_test_task/
├─ package.json # Залежності та скрипти
├─ tsconfig.json # Конфігурація TypeScript
├─ playwright.config.ts # Налаштування Playwright
├─ README.md # Документація проєкту
├─ src/
│ ├─ pages/
│ │ └─ TodoPage.ts # Page Object для UI тестів
│ ├─ api/
│ │ ├─ ApiClient.ts # API контролер
│ │ └─ PostBuilder.ts # Builder для тіла POST-запиту
└─ tests/
├─ ui/
│ └─ todo.spec.ts # UI тести (ToDoMVC)
└─ api/
└─ posts.spec.ts # API тести (JSONPlaceholder)

## ⚙️ Встановлення

### 1 Вимоги
- **Node.js >= 16**
- **npm** або **npx** (в Ubuntu вже є за замовчуванням)
- **Git** (для заливання в репозиторій)

---

### 2 Клонування або створення проєкту

```bash
git clone https://github.com/aleon120894/taslink_test_task.git
cd taslink_test_task
npm install
```


### 3 Запуск тестів

**Усі тести:**
'''bash
npx playwright test
```

**Лише UI тести:**
```bash
npx playwright test tests/ui
```

**Лише API тести:**
```bash
npx playwright test tests/api
```

## 🧩 Сценарії тестів

### 🧪 UI (ToDoMVC)

1. Відкрити сайт [https://demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)
2. Створити нову задачу **“Buy milk”**
3. Перевірити, що задача зʼявилася у списку
4. Відмітити задачу як виконану
5. Переконатися, що елемент має клас `completed`
6. Видалити задачу
7. Перевірити, що список задач порожній

---

### 🌐 API (JSONPlaceholder)

1. **GET /posts** → статус `200`, список не порожній  
2. Перевірити, що перший пост містить поля: `userId`, `id`, `title`, `body`
3. **POST /posts** із тілом:
   ```json
   {
     "title": "QA Automation Post",
     "body": "This post was created during Playwright API testing",
     "userId": 777
   }

## Перевірка API Endpoints

Перевірити:
1.  **Статус 201**
2.  **Збереження даних**
3.  **Наявність поля `id`**

4.  `DELETE /posts/1` $\rightarrow$ **статус 200**

***

## Додаткова інформація

### Запуск тестів

Для **візуального режиму** запустіть:
```bash
npx playwright test --headed
```

### Перегляд звіту

Для перегляду **звіту** виконайте команду:

```bash
npx playwright show-report
```

***

### 👤 Автор
Тестове завдання для позиції **Automation QA (Playwright + TypeScript)**

&copy; 2025 &mdash; Oleksiy Leontyev

