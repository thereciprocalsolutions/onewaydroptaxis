//read in a form's data and convert it to a key:value object

function getFormData() {
  var dom_query = document.getElementById("#booking-form");
  var out = {};
  var s_data = $(dom_query).serializeArray();
  //transform into simple data/value object
  for (var i = 0; i < s_data.length; i++) {
    var record = s_data[i];
    out[record.name] = record.value;
  }
  return out;
}
