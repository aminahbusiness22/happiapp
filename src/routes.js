const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
  } = require("./handler");
  
  const routes = [
    // /
    {
      method: "GET",
      path: "/",
      handler: (request, h) => {
        return "Hello World!, oh yeaahhh woho... berhasil. lelah ya... mangat...haha";
      },
      
    },
    // create date (POST)
    {
      method: "POST",
      path: "/books",
      config: {
        cors: {
          origin: [
              '*'
          ],
          headers: ["Access-Control-Allow-Headers", "Access-Control-Allow-Origin","Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"],
          additionalHeaders: ["Access-Control-Allow-Headers: Origin, Content-Type, x-ms-request-id , Authorization"],
          credentials: true
      }
    },
      handler: addBookHandler,
    },
    //get all
    {
      method: "GET",
      path: "/books",
      handler: getAllBooksHandler,
    },
    //detail data
    {
      method: "GET",
      path: "/books/{id}",
      handler: getBookByIdHandler,
    },
    //update
    {
      method: "PUT",
      path: "/books/{id}",
      handler: editBookByIdHandler,
    },
    //delete
    {
      method: "DELETE",
      path: "/books/{id}",
      handler: deleteBookByIdHandler,
    },
  ];
  
  module.exports = { routes };