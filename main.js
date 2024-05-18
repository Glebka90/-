document.addEventListener('DOMContentLoaded', () => {
    // Получаем все кнопки и блоки статей
    const buttons = document.querySelectorAll('.vidy-uslug__button');
    const articles = document.querySelectorAll('.articles-slider');

    // Функция для скрытия всех блоков статей
    const hideAllArticles = () => {
        articles.forEach(article => {
            article.classList.add('articles--display');
        });
    };

    // Назначаем обработчик событий для каждой кнопки
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            hideAllArticles(); // Скрываем все блоки статей
            const correspondingArticle = document.querySelector(`.articles-${index + 1}`);
            if (correspondingArticle) {
                correspondingArticle.classList.remove('articles--display'); // Отображаем соответствующий блок
            }
        });
    });
});
