#!/bin/bash
echo "test comment update.."
if [ -z $1 ] || [ -z $2 ];
then
	echo "NO INPUT";
else
	curl 127.0.0.1:3000/api/comment/ud/$1/  --data content=$2
fi
echo "test comment update FIN";
