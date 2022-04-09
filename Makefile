SOURCES		= $(wildcard ./src/*.js)\
			 $(wildcard ./src/**/*.js)\
			 $(wildcard ./src/**/**/*.js)

.PHONY: all
all: 
	@echo "NO DEFAULT GOAL"
	@echo "make debug to RUN DEBUG MODE"

.PHONY: view
view: $(SOURCES)
	@echo $^

.PHONY: lint
lint: $(SOURCES)
	npx eslint ./src

.PHONY: debug
debug: lint
	/bin/sh ./.secret.sh &&	DEBUG=src:* npm run server

