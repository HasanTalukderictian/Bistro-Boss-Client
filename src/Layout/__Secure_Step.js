/**
 * 1. Do not show the link who should not see it
 * 2.only admin can see it 
 * 3 Do not allow to visit the link bu typing on the url
 * use AdminRoute will check that user will admin or not .
 * if not admin then redirect to any other page. you could sen logout user and send them to 
 * login page.
 * --------------------------------
 * 
 * -----------To Send Data--------------
 * 
 * 1 verify JWT Token (send authorization token in the header to the server)
 * if possible use axios to send jwt token by interception the request. 
 * if it is an admin activity. Make sure only admin user admin is posting 
 * Data  by using verify adminVerifyJWT
 * 
 * 
 */