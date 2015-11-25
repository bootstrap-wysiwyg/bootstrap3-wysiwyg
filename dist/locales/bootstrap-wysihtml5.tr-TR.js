/**
 * Turkish translation for bootstrap-wysihtml5
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('bootstrap.wysihtml5.tr-TR', ['jquery', 'bootstrap.wysihtml5'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($){
    $.fn.wysihtml5.locale["tr-TR"] = {
        font_styles: {
            normal: "Normal",
            h1: "Başlık 1",
            h2: "Başlık 2",
            h3: "Başlık 3",
            h4: "Başlık 4",
            h5: "Başlık 5",
            h6: "Başlık 6"
        },
        emphasis: {
            bold: "Kalın",
            italic: "İtalik",
            underline: "Altı Çizili",
            small: "Küçük"
        },
        lists: {
            unordered: "Sırasız Liste",
            ordered: "Sıralı Liste",
            outdent: "Girintiyi Azalt",
            indent: "Girintiyi Arttır"
        },
        link: {
            insert: "Ekle",
            cancel: "Vazgeç",
            target: "Bağlantıyı yeni pencerede aç"
        },
        image: {
            insert: "Ekle",
            cancel: "Vazgeç"
        },
        html: {
            edit: "HTML Göster"
        },
        colours: {
            black: "Siyah",
            silver: "Gümüş",
            gray: "Gri",
            maroon: "Vişne Çürüğü",
            red: "Kırmızı",
            purple: "Mor",
            green: "Yeşil",
            olive: "Zeytin Yeşili",
            navy: "Lacivert",
            blue: "Mavi",
            orange: "Turuncu"
        }
    };
}));
