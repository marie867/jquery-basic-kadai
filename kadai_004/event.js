$(window).on('load scroll', (e) => {
  // クリックされた場合
  if(e.type === 'load'){
    console.log('loadイベントが発生しました');
  }
  // キーが押された場合
  if(e.type === 'scroll'){
    console.log('scrollイベントが発生しました');
  }
});