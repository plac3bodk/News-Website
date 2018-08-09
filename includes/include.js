function ajaxInclude(url,element) {
    $.ajax({
        url: url,
        dataType: 'text',
        type: 'GET',
        success: function (d) {
            element.replaceWith(d);
        },
        error: function (d) {
            console.log(d);
        }
    });
};
$(document).ready(function(){
    $.each($('div[include]', document),function(k,e){
        ajaxInclude($(e).attr('include'),$(e));
    });
});
