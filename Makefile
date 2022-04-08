.PHONY: all
all:
	@echo "NO DEFAULT GOAL"

.PHONY: test
test:
	DEBUG=express:* node app.js
