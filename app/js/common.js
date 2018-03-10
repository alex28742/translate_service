$(function() {

  var buffer = '';
  var flagUpper = true; // если надо первую сделать заглавной
  //15 254 154
  //12
  //789
  var value = '';
  var flag_show_dig = true;// показывать или нет цифры
  var thousand_split = "";// тысяча
  var million_split = "";// миллионов
  var rub = '', kop_split = '', kop = '';
  var one = '', ten = '', hundred = '', thousand = '', million = '';
  var left_split = '(', right_split = ')';


  function clear_fild(){
    $('.output').text('');
    one = '', ten = '', hundred = '', thousand = '', million = '';
    rub = '', kop_split = '', kop = '';
  }

  function isNan(){
    return !(value.replace(/\s/g, '').length === 0 || isNaN(value));
  }

  function alertError(){
    alert('Нужно писать число!');
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


  function max10Handler(){
    if(value.length > 1) return;
    switch (Number(value)) {
      case 1:one = 'один';rub = 'рубль';  break;
      case 2:one = 'два';rub = 'рубля'; break;
      case 3:one = 'три';rub = 'рубля'; break;
      case 4:one = 'четыре';rub = 'рубля';  break;
      case 5:one = 'пять';rub = 'рублей'; break;
      case 6:one = 'шесть';rub = 'рублей';  break;
      case 7:one = 'семь';rub = 'рублей'; break;
      case 8:one = 'восемь';rub = 'рублей'; break;
      case 9:one = 'девять';rub = 'рублей'; break;
      default: one = 'defaultOne'; rub = 'defaultOneRub';
    }
  }

  function max999Handler(){ // на вход трехзначное число
    var one = value[0], two = value[1], third = value[2];
    switch (one*1) {
      case 1: hundred = 'сто'; break;
      case 2: hundred = 'двести'; break;
      case 3: hundred = 'триста'; break;
      case 4: hundred = 'четыреста'; break;
      case 5: hundred = 'пятьсот'; break;
      case 6: hundred = 'шестьсот'; break;
      case 7: hundred = 'семьсот'; break;
      case 8: hundred = 'восемьсот'; break;
      case 9: hundred = 'девятьсот'; break;
      default: hundred = 'defaultHundred'; rub = 'defaultHundredRub';

    }
    rub = 'рублей';
    console.log('max999Handler -> hundred: '+hundred);
  }

  function max99Handler(){ // на вход двухзначное число
    if(Number(value) < 20){
      switch (Number(value)) {
        case 10: ten = 'десять'; rub = 'рублей'; break;
        case 11: ten = 'одинадцать'; rub = 'рублей'; break;
        case 12: ten = 'двенадцать'; rub = 'рублей'; break;
        case 13: ten = 'тринадцать'; rub = 'рублей'; break;
        case 14: ten = 'четырнадцать'; rub = 'рублей'; break;
        case 15: ten = 'пятнадцать'; rub = 'рублей'; break;
        case 16: ten = 'шестнадцать'; rub = 'рублей'; break;
        case 17: ten = 'семнадцать'; rub = 'рублей'; break;
        case 18: ten = 'восемнадцать'; rub = 'рублей'; break;
        case 19: ten = 'девятнадцать'; rub = 'рублей'; break;
        default: ten = 'defaultTen';

      }
    }
    else if(Number(value) < 100){ // from 20 to 99
      switch (Number(value)) {
        case 2: ten = 'двадцать'; break;
        case 3: ten = 'тридцать'; break;
        case 4: ten = 'сорок'; break;
        case 5: ten = 'пятьдесят'; break;
        case 6: ten = 'шестьдесят'; break;
        case 7: ten = 'семьдесят'; break;
        case 8: ten = 'восемьдесят'; break;
        case 9: ten = 'девяносто'; break;
        default: ten = 'ошибка в from 20 to 99';

      }
      console.log('ten = '+ten);
      console.log('rub = '+rub);
      // конкатенация с тем, что вернет функция от 1 до 9

    }
  }

  function splitter(){
    console.log('in splitter');
    if(value.length == 3) {
      max999Handler();
      max99Handler();
      max10Handler();
    }
    else if(value.length == 2){
      console.log('value > 99: value.lenght = '+value.length);
      max99Handler();
      max10Handler();
    }
    else{
      console.log('value < 10; value.length ->'+value.length);
      max10Handler();
    }

  }

  function insertRes(){
    var res = 'результат:'+million+' '+million_split+' '+thousand+' '+thousand_split+' '+hundred+' '+ten+' '+one+' '+rub+' '+kop+' '+kop_split+'';
    if(flagUpper) res = upperCase(res);
    $('.output').text(res);
  }


  $('.go').on('click',function(){
    clear_fild();
    value = $.trim($('.getting').val());
    if(!isNan()) { alertError(); return false; }
    splitter();
    insertRes();

  });


});
