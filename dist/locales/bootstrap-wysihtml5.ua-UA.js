/**
 * Ukrainian translation for bootstrap-wysihtml5
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('bootstrap.wysihtml5.ua-UA', ['jquery', 'bootstrap.wysihtml5'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.wysihtml5.locale["ua-UA"] = {
        font_styles: {
            normal: "Звичайний текст",
            h1: "Заголовок 1",
            h2: "Заголовок 2",
            h3: "Заголовок 3",
            h4: "Заголовок 4",
            h5: "Заголовок 5",
            h6: "Заголовок 6"
        },
        emphasis: {
            bold: "Напівжирний",
            italic: "Курсив",
            underline: "Підкреслений",
            small: "Малий"
        },
        lists: {
            unordered: "Маркований список",
            ordered: "Нумерований список",
            outdent: "Зменшити відступ",
            indent: "Збільшити відступ"
        },
        link: {
            insert: "Вставити посилання",
            cancel: "Відміна"
        },
        image: {
            insert: "Вставити зображення",
            cancel: "Відміна",
            target: 'Відкрити у новому вікні'
        },
        html: {
            edit: "HTML код"
        },
        colours: {
            black: "Чорний",
            silver: "Срібний",
            gray: "Сірий",
            maroon: "Коричневий",
            red: "Червоний",
            purple: "Фіолетовий",
            green: "Зелений",
            olive: "Оливковий",
            navy: "Темно-синій",
            blue: "Синій",
            orange: "Помаранчевий"
        }
    };
}));
