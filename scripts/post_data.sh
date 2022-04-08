#!/bin/bash
echo "test index.."
curl 127.0.0.1:3000/
echo "test index FIN"
echo "test post create.."
curl 127.0.0.1:3000/api/post/ --data title="test" --data content="test content\nthisismy content" --data author="june_test"
echo "test post FIN"
