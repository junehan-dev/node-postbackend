#!/bin/bash
echo "test comment update.."
if [ -z $1 ];
then
	echo "NO INPUT";
else
	curl -X "DELETE" 127.0.0.1:3000/api/comment/ud/$1/
fi
echo "test comment update FIN";
