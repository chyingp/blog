module.exports = function(grunt){

    // 项目配置
    grunt.initConfig({
        compass: {            
            dev: {
                options:{
                    basePath: './src',
                    sassDir: './',
                    cssDir: './',
                    // imagesDir: './src/images'
                }
            }
        }
    });

    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-compass');

    // 默认任务
    grunt.registerTask('default', ['compass']);
};