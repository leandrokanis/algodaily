f = 20190325

all:
	clear
	node $(f).js < input
init:
	clear
	touch output ans input | clear
	cp templates/template.js $(f).js | clear
	ls
diff:
	clear
	node $(f).js < input > output
	clear
	colordiff output ans -s
clean:
	clear
	rm output ans input | clear
	ls
