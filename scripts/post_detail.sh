#!/bin/bash
echo "test detail get.."
if [ -z $1 ]
then
	echo "INPUT ID"
else
	curl 127.0.0.1:3000/api/post/$1/
fi
