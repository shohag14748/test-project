
//document.querySelector('.purchases-table .table-top .close').addEventListener('click', function (e) {
//    document.querySelector('.purchases-table .table-top .buttons .button-group').classList.add('active');
//});
document.querySelector('button.export-buttons-toggler').addEventListener('click', function (e) {
    console.log('ok');
    document.querySelector('.purchases-table .table-top .buttons .button-group').classList.remove('active');
});

$(document).ready(function () {

    $(".country-select").select2({
        templateResult: formatCountry,
        templateSelection: formatCountry,
        placeholder: "Country",
    }).on('select2:open', function (e) {
        $('.select2-search__field').attr('placeholder', 'Write country or number');
    });

    function formatCountry(opt) {
        if (!opt.id) {
            return opt.text;
        }

        var optimage = $(opt.element).attr('data-image');
        var datacc = $(opt.element).attr('data-cc');
        console.log(optimage)
        if (!optimage) {
            return opt.text;
        } else {
            var $opt = $(
                '<span><img src="' + optimage + '" width="60px" /> ' + opt.text + '<span class="data-cc">' + datacc + '</span></span>'
            );
            return $opt;
        }
    };
    $('.country .select2-selection__placeholder').prepend("<img src='assets/images/country.svg' alt=''>");

    $(".operator-select").select2({
        templateResult: formatOperator,
        templateSelection: formatOperator,
        placeholder: "Choose the operator",
        minimumResultsForSearch: Infinity
    });

    function formatOperator(opt) {
        if (!opt.id) {
            return opt.text;
        }

        var optimage = $(opt.element).attr('data-image');
        console.log(optimage)
        if (!optimage) {
            return opt.text;
        } else {
            var $opt = $(
                '<span><img src="' + optimage + '" width="60px" /> ' + opt.text + '</span>'
            );
            return $opt;
        }
    };
    $('.operator .select2-selection__placeholder').prepend("<img src='assets/images/headphone.svg' alt=''>");
    
    
    
    $(".topup-form .country-select").select2({
        templateResult: formatCountry,
        templateSelection: formatCountry,
        placeholder: "Select Country",
    }).on('select2:open', function (e) {
        $('.select2-search__field').attr('placeholder', 'Write country or number');
    });

    function formatCountry(opt) {
        if (!opt.id) {
            return opt.text;
        }

        var optimage = $(opt.element).attr('data-image');
        var datacc = $(opt.element).attr('data-cc');
        console.log(optimage)
        if (!optimage) {
            return opt.text;
        } else {
            var $opt = $(
                '<span><img src="' + optimage + '" width="60px" /> ' + opt.text + '<span class="data-cc">' + datacc + '</span></span>'
            );
            return $opt;
        }
    };
    $('.topup-form .country .select2-selection__placeholder').prepend("<img src='assets/images/globe.svg' alt=''>");

});
