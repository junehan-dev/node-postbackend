#!/bin/bash
echo "test post update.."
curl 127.0.0.1:3000/api/post/624ffc423467cc65801c7d90/ --data title="test_update" --data content="test content\nupdated content" --data author="june_test"
echo "test post update FIN"
