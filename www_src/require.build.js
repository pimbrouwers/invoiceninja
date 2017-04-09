({
	include: [
		'requireLib', 
		'text',

        'js/components/invoice-editor/invoice-editor',
        'text!js/components/invoice-editor/invoice-editor.html',

		'js/components/ubuntu/ubuntu',
        'text!js/components/ubuntu/ubuntu.html'
	],
    mainConfigFile: "require.build.js",
    name: "startup",
    out: "../www_dist/scripts.js",
    paths: {
    	requireLib: 'require'
    },
    preserveLicenseComments: false,
    optimize: "none"
})