fis.config.merge({
	roadmap: {		
		path: [
            {
                reg : /^\/(modules\/.+)\.(js)$/i,
                isMod : true,
                id : '$1',
                release : '$&'
            }			
		]
	},
	modules: {
		postprocessor: {
			js: ['jswrapper']
		}
	},
	settings: {
		postprocessor : {
            jswrapper : {
            	type: 'amd',
            	wrapAll: false
            }
        }
	}
});