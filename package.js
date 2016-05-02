Package.describe ( {
  name    : 'sweetalert',
  summary : "a beautiful replacement for javascript's alert() ",
  version : '1.0.0',
  git     : 'https://github.com/smoral/meteor-sweetalert.git',
} );

Package.onUse ( function ( api ) {
  api.versionsFrom ( '1.3.2.4' );

  api.addFiles ( [
    'swal/dist/sweetalert.css',
    'swal/dist/sweetalert.min.js',
  ], 'client' );
  api.export ( 'sweetAlert' );
} );
