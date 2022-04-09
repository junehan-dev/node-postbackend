POSTING DATA BACKEND SERVICE
============================

HOWTO
-----

:``npm run server``: run the express server application on port 3000.
:``make lint``: linting on every src dir's js files.
:``make test``: run test script in scripts dir(curl commands)

API
---

:``/api/post/``: GET POST_LIST

   DESC
      Provide proper amount of posting data.
      api fails mostly on network IO tasks.

   RETURNS
      - Success(200)
         [POST[<author:str>, <title:str>, <created:date>].order(created date: DESC).limit(10)]
      - Failure(404)
         No respose data. respond for status of 404 only.

:``/api/post/``: POST MAKE_POST

   DESC
      Create a post for author's content.
      api fails mostly on network IO INSERT failed.
      create with POST data "title, author, content"

   RETURNS
      - Success(200)
         < POST [<author:str>, <title:str>, <content:str>, <created:date>]>
      - Failure(404)
         No respose data. respond for status of 404 only.

:``/api/post/<id\:post_id>/``: GET DETAIL_POST

   DESC
      Retrive Single post data by post_id.
      api fails mostly on network IO FIND failed.

   RETURNS
      - Success(200)
         < POST [<author:str>, <title:str>, <content:str>, <created:date>]>
      - Failure(404)
         No respose data. respond for status of 404 only.

:``/api/post/<id\:post_id>/``: POST UPDATE_POST

   DESC
      Update Single post data by post_id.
      api fails mostly on network IO UPDATE failed.
      update with POST data "title, author, content"

   RETURNS
      - Success(200)
         <Yet updated POST [<author:str>, <title:str>, <content:str>, <created:date>]>
      - Failure(404)
         No respose data. respond for status of 404 only.

:``/api/post/<id\:post_id>/``: DELETE DELETE_POST

   DESC
      DELETE Single post data by post_id.
      api fails mostly on network IO DELETE failed.

   RETURNS
      - Success(200)
         No respose data. respond for status of 200 only.
      - No Content(204)
         No respose data. respond for status of 204 only.
      - Failure(404)
         No respose data. respond for status of 404 only.

:``/api/comment/<id\:post_id>/``: GET COMMENT_LIST

   DESC
      GET every comment order by created DESC.

   RETURNS
      - Success(200)
         COMMENTS ON POST.POST_ID
      - Failure(404)
         POST INVALID
      - Failure(500)
         NETWORK ERROR

:``/api/comment/<id\:post_id>/``: POST COMMENT_CREATE

   DESC
      CREATE a comment on specified post with content.

   RETURNS
      - Success(200)
         COMMENT ON POST.POST_ID
         <Comment[_id, content, post_id]>
      - Failure(500)
         POST INVALID
      - Failure(404)
         NETWORK ERROR

:``/api/comment/ignore/<id\:comment_id>``: POST COMMENT_UPDATE

   DESC
      UPDATE a comment content.

   RETURNS
      - Success(200)
         COMMENT ON POST.POST_ID
         <Comment[_id, content, post_id]>
      - Failure(204)
         No COMMENT FOUND.
      - Failure(404)
         NETWORK ERROR
