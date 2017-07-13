console.log("Loading dashboard JS.")

import 'jquery-tags-input/dist/jquery.tagsinput.min.css'
import 'jquery-tags-input/dist/jquery.tagsinput.min.js'
import './tags.js'

// Core - these two are required :-)
import tinymce from 'tinymce/tinymce.min.js'
import 'tinymce/themes/modern/theme.min.js'
import 'tinymce/skins/lightgray/skin.min.css'
import 'tinymce/plugins/code'

tinymce.init({
  selector: ".tinymce-editor",
  skin: false,
  plugins: [
    'code'
  ],
  removeformat: [
   {selector: 'div', remove : 'all', split : true, expand : false, block_expand: true, deep : true},
 ],
  image_advtab: true,
  templates: [
    { title: 'Test template 1', content: 'Test 1' },
    { title: 'Test template 2', content: 'Test 2' }
  ],
  setup: function (editor) {
    editor.on('change', function () {
        editor.save();
    });
}
});

import 'sortablejs'

// The CSS
import './dashboard.css'
