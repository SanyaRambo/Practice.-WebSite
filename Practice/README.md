Области хранения данных:
- база данных на json-server
- BFF
- redux Store

Сущности приложения:
- пользователь: БД (список пользователей), BFF (Сессия текущего пользователя), стор (отображения в браузере)
- роль пользователя: БД (список данных), BFF (сессия пользователя с ролью), стор(использование на клиенте)
- статья: БД (список статй), стор (отображение в браузере)
- комментарий: БД (Список коммент.), стор(отображения в браузере)


Таблицы БД:
- пользователи - users: id / login / password / registed_at / role_id
- роль пользователя - roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- комментарии - comments: id / author_id / post_id / content / post_at

Схема состояния на BFF:
- сессия текущего пользователя: login / password / role

Схема redux store'а на клиенте:
- user: id / login / role
- posts: array post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: array comment: id / author / conent / publishedAt
- users: array user: id / login / registerAt / role
