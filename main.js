
angular.module("directive",[])
    .controller('main',function($scope){
        $scope.sa =[1,2,3,4,5,6,7];

        $scope.loadMore=function(){ $scope.sa.push(Math.random());console.log($scope.sa);
            //$scope.$apply();

        };
    })






.directive('scroll',function(){
    return {
        restrict:'E',
        scope:{model:'=ngModel',
            loadMore:'=ngLoadMore'
                },
        template: '<div id="wrapper" ><ul   >'+
                    '<li  data-edit="0"  ng-repeat="item in model">'+
                       ' <div   name="contents" style="border: 1px solid #D1D0D0;margin-top: 20px;height: auto;border-radius: 10px;">'+
                        '<h5 style="color:red" >西风笑{{item}}</h5>'+
                        '<p>加载内容</p>'+
                       ' <span>2014-04-01 13:33</span>'+
                        '<a class="respone" >回复</a>'+
                       '</div>'+
                    '</li>'+
                    '</ul></div>',
        link:function(scope,element,attrs,ctrl){


                var load = function() {
                        setTimeout(function () {// <-- Simulate network congestion, remove setTimeout from production!
                        $("#respones").css("display","none");
                        //$("#wrapper ul").append( "<li ><div  name='contents' style='border: 1px solid #D1D0D0;margin-top: 20px;height: auto;border-radius: 10px;'>"+
                        //    '<h5 style="color:red">西风笑</h5>'+
                        //    "<p>加载内容</p>"+
                        //    "<span>2014-04-01 13:33</span>"+
                        //    '<a class="respone" onclick="addDoc(this);">回复</a>'+
                        //    "</div></li>"
                        //);
                        wrapper.refresh();/****remember to refresh after action completed！！！   ---id.refresh(); --- ****/
                        scope.loadMore();
                        //console.log(scope.model);
                            scope.$apply();
                    //
                    }, 2000);

                }

            //window.onscroll=function(){
            //    if($(document).scrollTop()>=$(document).height()-$(window).height()){
            //        load();
            //    }
            //}





            refresher.init({
                    id:"wrapper",//<------------------------------------------------------------------------------------┐
                    pullDownAction:function(){return ;},
                    pullUpAction:load
                });


        },
        replace: true

    }
})



