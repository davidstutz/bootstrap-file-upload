+function ($) {
    'use strict';

    var FileUpload = function (element) {
        this.element = $(element);
        
        var label = this.element.text();
        var input = $('input', this.element);
        
        this.element.text('');
        this.element.append('<span class="file-upload-text"></span>');
        $('.file-upload-text', this.element).text(label);
        
        this.element.append(input);
        
        this.element.on('change', ':file', function() {
            var input = $(this);
            //var count = input.get(0).files ? input.get(0).files.length : 1;
            var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
            
            $('.file-upload-text', $(this).parent('label')).text(label);
        });
    };

    function Plugin() {
        return this.each(function () {
            var $this = $(this);
            var data  = $this.data('bs.file-upload');

            if (!data) {
                $this.data('bs.file_upload', (data = new FileUpload(this)));
            }
        });
    }

    var old = $.fn.file_upload;
    $.fn.file_upload = Plugin;
    $.fn.file_upload.Constructor = FileUpload;

    $.fn.file_upload.noConflict = function () {
        $.fn.file_upload = old;
        return this;
    };
}(jQuery);
