# DATE = $(date +'%Y%m%d')
DATE = 20190325-permutation

all:
	clear
	node $(DATE)/$(DATE).js < $(DATE)/input
init:
	clear
	mkdir -p $(DATE) | clear
	cp templates/template.js $(DATE)/$(DATE).js | clear
	touch $(DATE)/output $(DATE)/ans $(DATE)/input README.md | clear
	tree
diff:
	clear
	node $(DATE)/$(DATE).js < $(DATE)/input > $(DATE)/output  | clear
	colordiff $(DATE)/output $(DATE)/ans -s
clean:
	clear
	rm $(DATE)/output $(DATE)/ans $(DATE)/input | clear
	tree
