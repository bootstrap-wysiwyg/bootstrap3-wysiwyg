this["wysihtml5"] = this["wysihtml5"] || {};
this["wysihtml5"]["tpl"] = this["wysihtml5"]["tpl"] || {};

this["wysihtml5"]["tpl"]["blockquote"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "btn-"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"fa fa-quote-left\"></span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"glyphicon glyphicon-quote\"></span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<li>\n  <a class=\"btn "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " btn-default\" data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"blockquote\" data-wysihtml5-display-format-name=\"false\" tabindex=\"-1\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.fa : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "  </a>\n</li>\n";
},"useData":true});

this["wysihtml5"]["tpl"]["color"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "btn-"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li class=\"dropdown\">\n  <a class=\"btn btn-default dropdown-toggle "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-toggle=\"dropdown\" tabindex=\"-1\">\n    <span class=\"current-color\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.colours : stack1)) != null ? stack1.black : stack1), depth0))
    + "</span>\n    <b class=\"caret\"></b>\n  </a>\n  <ul class=\"dropdown-menu\">\n    <li><div class=\"wysihtml5-colors\" data-wysihtml5-command-value=\"black\"></div><a class=\"wysihtml5-colors-title\" data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"black\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.colours : stack1)) != null ? stack1.black : stack1), depth0))
    + "</a></li>\n    <li><div class=\"wysihtml5-colors\" data-wysihtml5-command-value=\"silver\"></div><a class=\"wysihtml5-colors-title\" data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"silver\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.colours : stack1)) != null ? stack1.silver : stack1), depth0))
    + "</a></li>\n    <li><div class=\"wysihtml5-colors\" data-wysihtml5-command-value=\"gray\"></div><a class=\"wysihtml5-colors-title\" data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"gray\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.colours : stack1)) != null ? stack1.gray : stack1), depth0))
    + "</a></li>\n    <li><div class=\"wysihtml5-colors\" data-wysihtml5-command-value=\"maroon\"></div><a class=\"wysihtml5-colors-title\" data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"maroon\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.colours : stack1)) != null ? stack1.maroon : stack1), depth0))
    + "</a></li>\n    <li><div class=\"wysihtml5-colors\" data-wysihtml5-command-value=\"red\"></div><a class=\"wysihtml5-colors-title\" data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"red\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.colours : stack1)) != null ? stack1.red : stack1), depth0))
    + "</a></li>\n    <li><div class=\"wysihtml5-colors\" data-wysihtml5-command-value=\"purple\"></div><a class=\"wysihtml5-colors-title\" data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"purple\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.colours : stack1)) != null ? stack1.purple : stack1), depth0))
    + "</a></li>\n    <li><div class=\"wysihtml5-colors\" data-wysihtml5-command-value=\"green\"></div><a class=\"wysihtml5-colors-title\" data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"green\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.colours : stack1)) != null ? stack1.green : stack1), depth0))
    + "</a></li>\n    <li><div class=\"wysihtml5-colors\" data-wysihtml5-command-value=\"olive\"></div><a class=\"wysihtml5-colors-title\" data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"olive\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.colours : stack1)) != null ? stack1.olive : stack1), depth0))
    + "</a></li>\n    <li><div class=\"wysihtml5-colors\" data-wysihtml5-command-value=\"navy\"></div><a class=\"wysihtml5-colors-title\" data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"navy\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.colours : stack1)) != null ? stack1.navy : stack1), depth0))
    + "</a></li>\n    <li><div class=\"wysihtml5-colors\" data-wysihtml5-command-value=\"blue\"></div><a class=\"wysihtml5-colors-title\" data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"blue\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.colours : stack1)) != null ? stack1.blue : stack1), depth0))
    + "</a></li>\n    <li><div class=\"wysihtml5-colors\" data-wysihtml5-command-value=\"orange\"></div><a class=\"wysihtml5-colors-title\" data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"orange\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.colours : stack1)) != null ? stack1.orange : stack1), depth0))
    + "</a></li>\n  </ul>\n</li>\n";
},"useData":true});

this["wysihtml5"]["tpl"]["emphasis"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "btn-"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <a class=\"btn "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " btn-default\" data-wysihtml5-command=\"small\" title=\"CTRL+S\" tabindex=\"-1\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.emphasis : stack1)) != null ? stack1.small : stack1), depth0))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<li>\n  <div class=\"btn-group\">\n    <a class=\"btn "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " btn-default\" data-wysihtml5-command=\"bold\" title=\"CTRL+B\" tabindex=\"-1\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.emphasis : stack1)) != null ? stack1.bold : stack1), depth0))
    + "</a>\n    <a class=\"btn "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " btn-default\" data-wysihtml5-command=\"italic\" title=\"CTRL+I\" tabindex=\"-1\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.emphasis : stack1)) != null ? stack1.italic : stack1), depth0))
    + "</a>\n    <a class=\"btn "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " btn-default\" data-wysihtml5-command=\"underline\" title=\"CTRL+U\" tabindex=\"-1\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.emphasis : stack1)) != null ? stack1.underline : stack1), depth0))
    + "</a>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.emphasis : stack1)) != null ? stack1.small : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</li>\n";
},"useData":true});

this["wysihtml5"]["tpl"]["font-styles"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "btn-"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"fa fa-font\"></span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"glyphicon glyphicon-font\"></span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<li class=\"dropdown\">\n  <a class=\"btn btn-default dropdown-toggle "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-toggle=\"dropdown\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.fa : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "    <span class=\"current-font\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.font_styles : stack1)) != null ? stack1.normal : stack1), depth0))
    + "</span>\n    <b class=\"caret\"></b>\n  </a>\n  <ul class=\"dropdown-menu\">\n    <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"p\" tabindex=\"-1\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.font_styles : stack1)) != null ? stack1.normal : stack1), depth0))
    + "</a></li>\n    <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h1\" tabindex=\"-1\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.font_styles : stack1)) != null ? stack1.h1 : stack1), depth0))
    + "</a></li>\n    <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h2\" tabindex=\"-1\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.font_styles : stack1)) != null ? stack1.h2 : stack1), depth0))
    + "</a></li>\n    <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h3\" tabindex=\"-1\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.font_styles : stack1)) != null ? stack1.h3 : stack1), depth0))
    + "</a></li>\n    <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h4\" tabindex=\"-1\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.font_styles : stack1)) != null ? stack1.h4 : stack1), depth0))
    + "</a></li>\n    <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h5\" tabindex=\"-1\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.font_styles : stack1)) != null ? stack1.h5 : stack1), depth0))
    + "</a></li>\n    <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h6\" tabindex=\"-1\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.font_styles : stack1)) != null ? stack1.h6 : stack1), depth0))
    + "</a></li>\n  </ul>\n</li>\n";
},"useData":true});

this["wysihtml5"]["tpl"]["html"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "btn-"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "        <span class=\"fa fa-pencil\"></span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <span class=\"glyphicon glyphicon-pencil\"></span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<li>\n  <div class=\"btn-group\">\n    <a class=\"btn "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " btn-default\" data-wysihtml5-action=\"change_view\" title=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.html : stack1)) != null ? stack1.edit : stack1), depth0))
    + "\" tabindex=\"-1\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.fa : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "    </a>\n  </div>\n</li>\n";
},"useData":true});

this["wysihtml5"]["tpl"]["image"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "modal-sm";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "btn-"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"fa fa-file-image-o\"></span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"glyphicon glyphicon-picture\"></span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<li>\n  <div class=\"bootstrap-wysihtml5-insert-image-modal modal fade\" data-wysihtml5-dialog=\"insertImage\">\n    <div class=\"modal-dialog "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.smallmodals : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <a class=\"close\" data-dismiss=\"modal\">&times;</a>\n          <h3>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.image : stack1)) != null ? stack1.insert : stack1), depth0))
    + "</h3>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <input value=\"http://\" class=\"bootstrap-wysihtml5-insert-image-url form-control\" data-wysihtml5-dialog-field=\"src\">\n          </div> \n        </div>\n        <div class=\"modal-footer\">\n          <a class=\"btn btn-default\" data-dismiss=\"modal\" data-wysihtml5-dialog-action=\"cancel\" href=\"#\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.image : stack1)) != null ? stack1.cancel : stack1), depth0))
    + "</a>\n          <a class=\"btn btn-primary\" data-dismiss=\"modal\"  data-wysihtml5-dialog-action=\"save\" href=\"#\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.image : stack1)) != null ? stack1.insert : stack1), depth0))
    + "</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"btn "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " btn-default\" data-wysihtml5-command=\"insertImage\" title=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.image : stack1)) != null ? stack1.insert : stack1), depth0))
    + "\" tabindex=\"-1\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.fa : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "  </a>\n</li>\n";
},"useData":true});

this["wysihtml5"]["tpl"]["link"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "modal-sm";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "btn-"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"fa fa-share-square-o\"></span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"glyphicon glyphicon-share\"></span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<li>\n  <div class=\"bootstrap-wysihtml5-insert-link-modal modal fade\" data-wysihtml5-dialog=\"createLink\">\n    <div class=\"modal-dialog "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.smallmodals : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <a class=\"close\" data-dismiss=\"modal\">&times;</a>\n          <h3>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.link : stack1)) != null ? stack1.insert : stack1), depth0))
    + "</h3>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <input value=\"http://\" class=\"bootstrap-wysihtml5-insert-link-url form-control\" data-wysihtml5-dialog-field=\"href\">\n          </div> \n          <div class=\"checkbox\">\n            <label> \n              <input type=\"checkbox\" class=\"bootstrap-wysihtml5-insert-link-target\" checked>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.link : stack1)) != null ? stack1.target : stack1), depth0))
    + "\n            </label>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <a class=\"btn btn-default\" data-dismiss=\"modal\" data-wysihtml5-dialog-action=\"cancel\" href=\"#\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.link : stack1)) != null ? stack1.cancel : stack1), depth0))
    + "</a>\n          <a href=\"#\" class=\"btn btn-primary\" data-dismiss=\"modal\" data-wysihtml5-dialog-action=\"save\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.link : stack1)) != null ? stack1.insert : stack1), depth0))
    + "</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"btn "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " btn-default\" data-wysihtml5-command=\"createLink\" title=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.link : stack1)) != null ? stack1.insert : stack1), depth0))
    + "\" tabindex=\"-1\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.fa : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "  </a>\n</li>\n";
},"useData":true});

this["wysihtml5"]["tpl"]["lists"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "btn-"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"fa fa-list-ul\"></span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"glyphicon glyphicon-list\"></span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"fa fa-list-ol\"></span>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"glyphicon glyphicon-th-list\"></span>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"fa fa-outdent\"></span>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"glyphicon glyphicon-indent-right\"></span>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"fa fa-indent\"></span>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"glyphicon glyphicon-indent-left\"></span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<li>\n  <div class=\"btn-group\">\n    <a class=\"btn "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " btn-default\" data-wysihtml5-command=\"insertUnorderedList\" title=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.lists : stack1)) != null ? stack1.unordered : stack1), depth0))
    + "\" tabindex=\"-1\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.fa : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "    </a>\n    <a class=\"btn "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " btn-default\" data-wysihtml5-command=\"insertOrderedList\" title=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.lists : stack1)) != null ? stack1.ordered : stack1), depth0))
    + "\" tabindex=\"-1\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.fa : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "    </a>\n    <a class=\"btn "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " btn-default\" data-wysihtml5-command=\"Outdent\" title=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.lists : stack1)) != null ? stack1.outdent : stack1), depth0))
    + "\" tabindex=\"-1\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.fa : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "    </a>\n    <a class=\"btn "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " btn-default\" data-wysihtml5-command=\"Indent\" title=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.lists : stack1)) != null ? stack1.indent : stack1), depth0))
    + "\" tabindex=\"-1\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.toolbar : stack1)) != null ? stack1.fa : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + "    </a>\n  </div>\n</li>\n";
},"useData":true});