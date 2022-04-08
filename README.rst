POSTING DATA BACKEND SERVICE
============================

API
---

:``/api/post/``: GET 

   DESC
      Provide proper amount of posting data.
      api fails mostly on network IO tasks.

   RETURNS
      - Success(200)
         [POST[<author:str>, <title:str>, <content:str>, <created:date>].order(created date: DESC).limit(10)]
      - Failure(404)
         No respose data. respond for status of 404 only.

:``/api/post/``: POST

   DESC
      Create a post for author's content.
      api fails mostly on network IO INSERT failed.

   RETURNS
      - Success(200)
         < POST [<author:str>, <title:str>, <content:str>, <created:date>]>
      - Failure(404)
         No respose data. respond for status of 404 only.

