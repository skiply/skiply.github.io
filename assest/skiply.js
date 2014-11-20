
$(document).ready(function(){

$('form').submit(function(e) {
        e.preventDefault();
        makeAjaxRequest();
    });

function makeAjaxRequest() {

        $(document).ajaxStart(function(){
        	$("#execute_button").css("display","none");
        	$("#working").css("display","block");
        });
        entered = $('#url').val();
        lines = entered.split(/\n/);
        var str="";
        var str="";

        var tot=0;
        for(var i in lines)
        {
        tot++;
        }
        
        var count=0;

        for(var i in lines){

			test='{url: "'+lines[i]+'"}';

			var jqxhr =  $.post('../ajax.php',{url: lines[i]}, function(data)
			{
			str = str.concat(data); 

			$('.message-result').html(str);

			}).done(function() {  count++;  if (count==tot) { $("#working").css("display","none"); $("#execute_button").css("display","block");} });

			}
    }
});