#!/bin/bash
echo "test index.."
curl 127.0.0.1:3000/
echo "test index FIN"
echo "test comment create.."
if [ -z $1 ]
then
	echo "NO INPUT"
else
	curl 127.0.0.1:3000/api/comment/
fi
echo "test comment FIN"
