require.config({
  paths: {
    'domReady': '../components/requirejs-domready/domReady',
    'jquery': '../components/jquery/dist/jquery.min',
    'rangy': '../components/wysihtml5x/lib/rangy/rangy-core',
    'rangy-selectionsaverestore': '../components/wysihtml5x/lib/rangy/rangy-selectionsaverestore',
    'bootstrap': '../components/bootstrap/dist/js/bootstrap.min',
    'bootstrap.wysihtml5': '../dist/amd/bootstrap3-wysihtml5.all',
    'bootstrap.wysihtml5.de-DE': '../dist/locales/bootstrap-wysihtml5.de-DE'
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
    './start'
  ]
});
