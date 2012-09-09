PYTHON = python
CALCDEPS = $(PYTHON) ../lib/closure/bin/calcdeps_mod.py
OUTDIR = js
NOW = $(shell date +"%F %T")
all: compile

deps:
	$(CALCDEPS) -o deps -p js > js/deps.js


compile:
	mkdir -p $(OUTDIR)
	$(CALCDEPS) -c ../lib/compiler.jar -o compiled\
		-p ../lib/closure/goog/ \
		--compiler-args\
			--charset UTF-8 \
			--compilation_level ADVANCED_OPTIMIZATIONS\
			--output_wrapper "/*@author:info@burib.net $(NOW) */;(function () {%output%})();"\
			--use_types_for_optimization\
			--create_source_map $(OUTDIR)/app.min.js.map\
			--source_map_format=V3\
			-D VERBOSE=false\
		--\
		-i js/app.js > $(OUTDIR)/app.min.js
