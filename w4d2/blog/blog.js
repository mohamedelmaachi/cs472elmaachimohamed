(function iife(){
    "use strict";

    $(function() {

        //load data
        $.ajax({
            'url': 'https://jsonplaceholder.typicode.com/users',
            'type': 'GET',
            'success': function(arr){
                var content = "";
                content += "<option value='0'>Select user";
                for(var i=0;i<arr.length;i++){
                    content += "<option value='" + arr[i].id + "'>" + arr[i].id;
                }

                $("li:nth-child(1) > select").append(content);
            },
            'error': function(xhr, status, exception) {
                var content = "Error: " + status.statusText;
                $("li:nth-child(1)").append(content);
                console.log(xhr, status, exception);
            }
        });

        $('li > select').change(function() {          
            displayInfo();
        });
       
        function displayInfo(){
            var userId = $('#userId').val();
            //Display user information
            $.ajax({
                'url': 'https://jsonplaceholder.typicode.com/users/'+ userId,
                'type': 'GET',
                'success': function(obj){
                    var content = "<div class='alert alert-info'>";
                    content += "User Name: " + obj.username + "<br/>";
                    content += "Full Name: " + obj.name + "<br/>";
                    content += "Email: " + obj.email + "<br/>";
                    content += "Address: " + obj.address.street + ", " + obj.address.suite + ", " + obj.address.city + ", " + obj.address.zipcode + "<br/>";                    
                    content += "</div>";

                    $("li:nth-child(2)").append(content);
                },
                'error': function(xhr, status, exception) {
                    var content = "Error: " + status.statusText;
                    $("li:nth-child(2)").append(content);
                    console.log(xhr, status, exception);
                }
            }); 

            //Display all posts from selected user
            $.ajax({
                'url': 'https://jsonplaceholder.typicode.com/posts?userId=' + userId,
                'type': 'GET',
                'success': function(arr){
                    var content = "<div>";
                    for(var i=0;i<arr.length;i++){
                        var post = arr[i];
                        if(post.userId == userId){
                            content += "<blockquote>";
                            content += "<strong>" + post.title +"</strong><br>";
                            content += post.body + "<br>";
                            content += "<button class='btn btn-outline-info' id='btn" + post.id + "'>Show Comments</button>";
                            content += "</blockquote>";
                        }
                    }
                    
                    content += "</div>";

                    $("li:nth-child(3)").append(content);

                    $('blockquote > button').click(function() {          
                        var postId = this.id.replace("btn","");
                        //Display all comments from selected post 
                        $.ajax({
                            'url': 'https://jsonplaceholder.typicode.com/comments?postId=' + postId,
                            'type': 'GET',
                            'success': function(arr){
                                var content = "<div>";
                                for(var i=0;i<arr.length;i++){
                                    var comment = arr[i];
                                    content += "<blockquote>";
                                    content += "<strong>" + comment.name +"</strong> - <em>" + comment.email + "</em><br>";
                                    content += comment.body;
                                    content += "</blockquote>";                    
                                }                                
                                content += "</div>";   
                                $("li:nth-child(4)").append(content);
                            },
                            'error': function(xhr, status, exception) {
                                var content = "Error: " + status.statusText;
                                $(container).append(content);
                                console.log(xhr, status, exception);
                            }
                        });  
                    });
                },
                'error': function(xhr, status, exception) {
                    var content = "Error: " + status.statusText;
                    $("li:nth-child(3)").append(content);
                    console.log(xhr, status, exception);
                }
            }); 
            }
        
        
          
    });
})();
