
$(document).ready(function(){
if ($('#url').val() == '') {
    var defaultValue3 = 'http://adf.ly/uCCdU' + '\n' + 'http://j.gs/4lQt' + '\n' + 'http://q.gs/7oUUo' + '\n' + 'http://ay.gy/uCCdU' + '\n' + 'http://adfoc.us/x50624552' + '\n' +'http://sh.st/uXXin' + '\n' + 'http://linkshrink.net/79nmLJ' + '\n' + 'http://www.oni.vn/2VTDb' + '\n' + 'http://adlock.org/58WqwS' + '\n' + 'http://cur.lv/fr436' + '\n'+ 'http://goo.gl/x8Ubfb' + '\n' + 'http://is.gd/uCA0yW' + '\n' + 'http://bit.ly/1yY5n2b' + '\n' +'http://tinyurl.com/puvz4lp' + '\n' + 'https://safelinking.net/d/c488eddf88' ;
    $('#url').val(defaultValue3);
}
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

			var jqxhr =  $.post('http://auto1-skiply.rhcloud.com/',{url: lines[i]}, function(data)
			{
			str = str.concat(data); 

			$('.message-result').html(str);

			}).done(function() {  count++;  if (count==tot) { $("#working").css("display","none"); $("#execute_button").css("display","block");} });

			}
    }
});