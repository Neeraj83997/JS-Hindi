// => The fetch() method of the Window interface starts the process of fetching a resource from the network, returning a promise
//     that is fulfilled once the response is available.
 
//     simple:  fetch() is used to request data from the internet (or a server). It returns a promise that gives you the response when the data is ready.   
    
// =>  A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. 
//     A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). 
//     Instead, a then() handler must check the Response.ok and/or Response.status properties.
//     (agr hm promise se request krte h ur agar wha se error code 404 ata h , to wo hme as a response milega ,wo error nhi h.
//     error bs tb hoga jb brouser request kr he nhi paya h. mtlb network request ko ko nhi pta h error code .)
 
//     simple: fetch() fails only when the request itself cannot be completed, such as:
//             The URL is wrong.
//             There is no internet connection.
//             A network problem occurs.
//             If the server sends an error like 404 (Not Found) or 500 (Server Error), fetch() still considers the request successful and does not go to .catch().
//             Therefore, inside .then(), you should check response.ok or response.status to know whether the server returned an error.


response  = fetch('something')
Fetch works in two part - 1: Data like onFulfilled[] , onRejection[]  
                          2: web brouser/node
 At first data part comes , it reserve the space in memory like onFulfilled[] and onRejection[].
onFulfilled is a resolve of promise,and onRejection is a rejection of promise.
onFulfilled[] and onRejection[] are  Array, and not allowed to us to store any data here, becuse these are private fields.

And second , it access either web brouser bases api or node based api.
From the webbrouser/node, the network request fires or goes. we can fire network request without resource like  webbrouser/node

if any response comes through network, that will goes to onFulfilled[]/resolve,
if request have to able to come ,or somewhere stuck,in that case rejection will come and goes to onRejection[]/reject
=>Whatever error I have like 404, it also goes to onFulfilled[], because request fire successfully ,after that error code response comes.

The data i.e onFulfilled[]/ onRejection[] reserves in memory with initial value empty("").
when data initialized, varible is avialable in memory like response  = fetch('something')
response is avialable in memory


