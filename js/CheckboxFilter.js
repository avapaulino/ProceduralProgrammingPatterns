$(document).ready(function() {
    var $results=$('.result').text(function(){
    })
    var $checks=$(':checkbox[name^=fl]').change(function(){
        var $checked=$checks.filter(':checked');
        /* show all when nothing checked*/
        if(!$checked.length){
            $results.show();
            return;
        }
        /* create array of checked values */
        var checkedVals= $.map($checked, function(el){
            return el.value
        });
        /* hide all results, then filter for matches */
        $results.hide().filter(function(){
            var cats=$(this).data('category').split(' ');
            var checkMatches=$.grep(checkedVals, function(val){
                return $.inArray(val, cats) >-1;
            });
            return checkMatches.length === checkedVals.length;
         /* show resultas that match all checkboxes */
        }).show();
    });
});
