require.config({
  paths: {
    'domReady': '../components/requirejs-domready/domReady',
    'jquery': '../components/jquery/dist/jquery.min',
    'handlebars.runtime': '../components/handlebars/handlebars.runtime.amd',
    'bootstrap': '../components/bootstrap/dist/js/bootstrap.min',
    'bootstrap.wysihtml5': '../src/bootstrap3-wysihtml5',
    'rangy': '../components/wysihtml5x/lib/rangy/rangy-core',
    'rangy-selectionsaverestore': '../components/wysihtml5x/lib/rangy/rangy-selectionsaverestore',
    'wysihtml5': '../dist/amd/wysihtml5',
    'bootstrap.wysihtml5.commands': '../dist/amd/commands',
    'bootstrap.wysihtml5.templates': '../dist/amd/templates',
    'bootstrap.wysihtml5.en-US': '../dist/locales/bootstrap-wysihtml5.en-US'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery']
    },
    'rangy-selectionsaverestore': {
      deps: ['rangy']
    }
  },
  deps: [
    './start-dev'
  ]
});
