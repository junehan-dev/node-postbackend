#!/bin/bash
echo "test post delete.."
if [ $1 -z ]
then
	echo "id input NOT found"
else
	curl --request "DELETE" 127.0.0.1:3000/api/post/$1/
	echo "test post update FIN"
fi
echo "removed $1"

