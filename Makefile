SOURCES		= $(wildcard ./src/*.js)\
			 $(wildcard ./src/**/*.js)

.PHONY: all
all:
	@echo "NO DEFAULT GOAL"

.PHONY: view
view: $(SOURCES)
	@echo $^

.PHONY: lint
lint: $(SOURCES)
	npx eslint $(SOURCES)

.PHONY: test
test: lint
	@echo "TEST..."
	DEBUG=src:* npm run server

.PHONY: ctype
ctype: $(CTYPE_OBJECTS)
	ar rcs libft_ctype.a $(CTYPE_OBJECTS)	
	ranlib libft_ctype.a

