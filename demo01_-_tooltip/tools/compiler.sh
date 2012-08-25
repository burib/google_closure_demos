../closure-library/closure/bin/build/closurebuilder.py \ #Path to your closurebuilder python script
--root=../closure-library/ \ #Path to Closure Lib root
--root=../demo01_-_tooltip/ \ #Path to your application root folder
--namespace="app" \ #main application namespace
--output_mode=compiled \ #output mode
--compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \ #Could also be SIMPLE_OPTIMIZATIONS
--compiler_jar ../../compiler.jar \ #Path to compiler (which you already downloaded to this folder)
> ../js/app.compiled.js #output file