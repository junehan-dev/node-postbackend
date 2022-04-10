#!/bin/bash
d = date
echo "test post update.."
if [ -z $1 ];
then
	echo "id input NOT found"
else
	curl 127.0.0.1:3000/api/post/$1/ --data title="test_update" --data content="test content\nupdated content" --data author="june_test"
	echo "test post update FIN"
fi
