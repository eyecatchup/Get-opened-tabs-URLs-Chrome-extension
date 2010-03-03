/*
<license>
Get opened tabs URLs - a Google Chrome extension
Copyright 2010 Christophe Benz.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
</license>

Icon from Silk icon set:
http://www.famfamfam.com/lab/icons/silk/
*/

function list(tabs) {
  var contents = '';
  for (var i = 0; i !== tabs.length; i++) {
    var url = tabs[i].url;
    contents += url + '\n';
  }
  $('textarea').html(contents);
}

$(document).ready(function() {
  chrome.tabs.getAllInWindow(null, list);
  $('#select_all').click(function(e) {
    $('textarea').select();
  })
});
