#!/bin/bash
echo "test index.."
curl 127.0.0.1:3000/
echo "test index FIN"
echo "test comment create.."
if [ -z $1 ]
then
	echo "NO INPUT"
else
	if [ -z $2 ];
	then
		curl 127.0.0.1:3000/api/comment/cr/$1/ --data title="test" --data content="test comment"
	else	
		curl 127.0.0.1:3000/api/comment/cr/$1/ --data title="test" --data content=$2
	fi;
fi
echo "test comment FIN"
