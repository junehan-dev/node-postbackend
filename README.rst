POSTING DATA BACKEND SERVICE
============================

HOWTO
-----

:``npm run server``: run the express server application on port 3000.
:``make lint``: linting on every src dir's js files.
:``make test``: run test script in scripts dir(curl commands)

API
---

:``/api/post/``: GET 

   DESC
      Provide proper amount of posting data.
      api fails mostly on network IO tasks.

   RETURNS
      - Success(200)
         [POST[<author:str>, <title:str>, <created:date>].order(created date: DESC).limit(10)]
      - Failure(404)
         No respose data. respond for status of 404 only.

:``/api/post/``: POST

   DESC
      Create a post for author's content.
      api fails mostly on network IO INSERT failed.
      create with POST data "title, author, content"

   RETURNS
      - Success(200)
         < POST [<author:str>, <title:str>, <content:str>, <created:date>]>
      - Failure(404)
         No respose data. respond for status of 404 only.

:``/api/post/<id\:post_id>/``: GET

   DESC
      Retrive Single post data by post_id.
      api fails mostly on network IO INSERT failed.

   RETURNS
      - Success(200)
         < POST [<author:str>, <title:str>, <content:str>, <created:date>]>
      - Failure(404)
         No respose data. respond for status of 404 only.

:``/api/post/<id\:post_id>/``: POST

   DESC
      Update Single post data by post_id.
      api fails mostly on network IO INSERT failed.
      update with POST data "title, author, content"

   RETURNS
      - Success(200)
         <Yet updated POST [<author:str>, <title:str>, <content:str>, <created:date>]>
      - Failure(404)
         No respose data. respond for status of 404 only.

