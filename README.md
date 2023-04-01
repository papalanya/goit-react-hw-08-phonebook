Книга контактов Добавь в приложение «Книга контактов» возможность регистрации,
логина и обновления пользователя, а также работу с приватной коллекцией
контактов.

Бэкенд Для этого задания есть готовый бэкенд. Ознакомься с документацией. Он
поддерживает все необходимые операции с коллекцией контактов, а так же
регистрацию, логин и обновление пользователя при помощи JWT. Используй его
вместо твоего бэкенда созданного через сервис mockapi.io.

npm install @redux-devtools/extension npm install @reduxjs/toolkit npm install
@reduxjs/toolkit react-redux npm install redux-persist

Маршрутизация Добавь маршрутизацию с библиотекой React Router. В приложении
должно быть несколько страниц:

/register - публичный маршрут регистрации нового пользователя с формой /login -
публичный маршрут логина существующего пользователя с формой /contacts -
приватный маршрут для работы со списком контактов пользователя Добавь компонент
навигации Navigation со ссылками для перехода по маршрутам.

npm install react-router-dom

Меню пользователя Создай компонент UserMenu, отображающий почту пользователя и
кнопку выхода из учетной записи. Вот как может выглядеть его разметка.

<div>
  <p>mango@mail.com</p>
  <button>Logout</button>
</div>

Стилизация Это финальная версия приложения, поэтому поработай над оформлением
интерфейса. Можно использовать библиотеку стилизации или компонентов, например
Chakra UI или Material UI.