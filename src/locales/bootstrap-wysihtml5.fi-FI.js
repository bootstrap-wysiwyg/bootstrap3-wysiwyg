/**
 * Finnish translation for bootstrap-wysihtml5
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('bootstrap.wysihtml5.fi-FI', ['jquery', 'bootstrap.wysihtml5'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.wysihtml5.locale.fi = $.fn.wysihtml5.locale['fi-FI'] = {
    font_styles: {
      normal: 'Normaali teksti',
      h1: 'Otsikko 1',
      h2: 'Otsikko 2',
      h3: 'Otsikko 3',
      h4: 'Otsikko 4',
      h5: 'Otsikko 5',
      h6: 'Otsikko 6'
    },
    emphasis: {
      bold: 'Lihavointi',
      italic: 'Kursivointi',
      underline: 'Alleviivaus',
      small: 'Pieni'
    },
    lists: {
      unordered: 'Luettelo',
      ordered: 'Numerointi',
      outdent: 'Suurenna Sisenn\u00E4',
      indent: 'Pienenn\u00E4 sisennyst\u00E4'
    },
    link: {
      insert: 'Hyperlinkki',
      cancel: 'Peruuta',
      target: 'Avaa uudessa ikkunassa'
    },
    image: {
      insert: 'Lis\u00E4\u00E4 kuva',
      cancel: 'Peruuta'
    },
    html: {
      edit: 'Muokkaa HTML'
    },
    colours: {
      black: 'Musta',
      silver: 'Hopea',
      gray: 'Harmaa',
      maroon: 'Kastanjanruskea',
      red: 'Punainen',
      purple: 'Violetti',
      green: 'Vihre\u00E4',
      olive: 'Oliivi',
      navy: 'Tummansininen',
      blue: 'Sininen',
      orange: 'Oranssi'
    }
  };
}));
