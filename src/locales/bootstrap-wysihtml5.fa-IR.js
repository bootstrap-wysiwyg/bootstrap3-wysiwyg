
/**
 * Persian translation for bootstrap-wysihtml5
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('bootstrap.wysihtml5.fa-IR', ['jquery', 'bootstrap.wysihtml5'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
  $.fn.wysihtml5.locale.en = $.fn.wysihtml5.locale['fa-IR'] = {
    font_styles: {
      normal: 'متن عادی',
      h1: 'عنوان 1',
      h2: 'عنوان 2',
      h3: 'عنوان 3',
      h4: 'عنوان 4',
      h5: 'عنوان 5',
      h6: 'عنوان 6'
    },
    emphasis: {
      bold: 'ضخیم',
      italic: 'مورب',
      underline: 'زیرخط دار',
      small: 'کوچک'
    },
    lists: {
      unordered: 'Unordered list',
      ordered: 'Ordered list',
      outdent: 'Outdent',
      indent: 'تورفتگی'
    },
    link: {
      insert: 'درج پیوند',
      cancel: 'لغو',
      target: 'باز کردن پیوند در پنجره جدید'
    },
    image: {
      insert: 'درج تصویر',
      cancel: 'لغو'
    },
    html: {
      edit: 'ویرایش HTML'
    },
    colours: {
      black: 'سیاه',
      silver: 'نقره ای',
      gray: 'خاکستری',
      maroon: 'خرمایی مایل به قرمز',
      red: 'قرمز',
      purple: 'بنفش',
      green: 'سبز',
      olive: 'زیتونی',
      navy: 'سرمه ای',
      blue: 'آبی',
      orange: 'نارنجی'
    }
  };
}));
