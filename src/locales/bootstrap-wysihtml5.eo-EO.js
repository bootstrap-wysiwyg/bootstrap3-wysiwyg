/**
 * Esperanto translation for bootstrap-wysihtml5
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('bootstrap.wysihtml5.eo-EO', ['jquery', 'bootstrap.wysihtml5'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($){
  $.fn.wysihtml5.locale["eo-EO"] = {
    font_styles: {
      normal: "Normala teksto",
      h1: "Titolo 1",
      h2: "Titolo 2",
      h3: "Titolo 3",
      h4: "Titolo 4",
      h5: "Titolo 5",
      h6: "Titolo 6"
    },
    emphasis: {
      bold: "Grasa",
      italic: "Kursiva",
      underline: "Substreko",
      small: "Malgranda"
    },
    lists: {
      unordered: "Neordigita listo",
      ordered: "Ordigita listo",
      outdent: "Malpligrandigi krommarĝenon",
      indent: "Pligrandigi krommarĝenon"
    },
    link: {
      target: "Malfermi la ligilon en nova fenestro",
      insert: "Enmeti ligilon",
      cancel: "Rezigni"
    },
    image: {
      insert: "Enmeti bildon",
      cancel: "Rezigni"
    },
    html: {
      edit: "Redakti per HTML"
    },
    colours: {
      black: "Nigra",
      silver: "Arĝenta",
      gray: "Griza",
      maroon: "Bruna",
      red: "Ruĝa",
      purple: "Purpura",
      green: "Verda",
      olive: "Oliva",
      navy: "Malhele blua",
      blue: "Blua",
      orange: "Oranĝa"
    }
  };
}));
