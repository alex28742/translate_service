$(function() {

  var buffer = '';
  var flagUpper = true; // если надо первую сделать заглавной

  function result(val){

  }

  function clear_fild(){
    $('.output').text('');
  }

  function isNan(value){
    return !(value.replace(/\s/g, '').length === 0 || isNaN(value));
  }

  function alertError(){
    alert('Нужно писать число!');
  }

  function insertRes(value){
    $('.output').text(value);
  }

  function upperCase(string){
    string = string+'';
    console.log(string);
    var i = string.slice(0,1);
    var str = string.slice(1);
    i = i.toUpperCase();
    console.log(i.concat(str));
    return i.concat(str);
  }



  function less10(value){
    var buf = '';
    //return 'here will be result';
    switch (value) {
      case '1':buf = buf+'один';break;
      case '2':buf = buf+'два';break;
      case '3':buf = buf+'три';break;
      case '4':buf = buf+'четыре';break;
      case '5':buf = buf+'пять';break;
      case '6':buf = buf+'шесть';break;
      case '7':buf = buf+'семь';break;
      case '8':buf = buf+'восемь';break;
      case '9':buf = buf+'девять';break;
      case '0':buf = buf+'ноль';break;

      default: { alert('ошибка в запросе'); clear_fild();}
    }
    return buf;

  }

  function less100(value){
    var buf = '';
    if(value[0] == 1){
      switch (value[1]) {
        case '0':buf = buf+'десять';break;

        default:

      }
    }


  }
  //15 254 154
  //12
  //789
  var thousand_split = "тысяч ";// тысяча
  var million_split = "миллион";// миллионов
  var rub = 'рубл', kop_split = 'копе', kop;
  var one, ten, hundred, thousand, million;
  var string_constructor = million+' '+million_split+' '+thousand+' '+thousand_split+' '+hundred+' '+rub+' '+kop+' '+kop_split+'';

  function splitter(value){
    if(value.length < 2) return less10(value);
    else if(value.length < 3) return less100(value);
    else if(value.length < 4){
      var split = value.split(0,2);
      var temp = less100(split);
      temp = temp.concat('тысяч ');
      temp = temp.concat(less1000());
    }
    return less1000(value);
  }


  $('.go').on('click',function(){
    var value = $.trim($('.getting').val());
    if(!isNan(value)) { alertError(); return false; }
    value = splitter(value);
    // тут проблема console.log(value);
    if(flagUpper) value = upperCase(value);
    insertRes(value);
    //upperCase(buf);
  });


});
