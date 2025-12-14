// Get subjects from URL/Cache
var url = new URL(window.location);
subs = url.searchParams.get("sub");
if (subs == undefined) {
  subs = store.get("{{site.domain}}-subs");
} else {
  // Split by comma and match case with all_subs
  var url_subs = subs.split(",");
  subs = [];
  for (var i = 0; i < url_subs.length; i++) {
    var url_sub = url_subs[i].trim();
    // Find matching sub in all_subs (case-insensitive)
    for (var j = 0; j < all_subs.length; j++) {
      if (all_subs[j].toUpperCase() === url_sub.toUpperCase()) {
        subs.push(all_subs[j]);
        break;
      }
    }
  }
}

// Apply selections
if (subs == undefined || subs.length === 0) {
  subs = all_subs;
}
$("#subject-select").multiselect("select", subs);
update_filtering({ subs: subs, all_subs: all_subs });
