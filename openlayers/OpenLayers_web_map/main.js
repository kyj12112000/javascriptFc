window.onload = init;//window가 load가 완료 되면 *
//6-5들어야함
function init(){
    const map = new ol.Map({
        view : new ol.View({
            center : [-66015000.31392895,4518186.984380003], //x,y
            zoom : 7, //zoom level //지정된 부분 확대 level
            maxZoom : 10,
            minZoom : 4,
            // rotation: 0.5//회전 되어서 보여주는..?

        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM() 
            })
        ],
        target: 'js-map'//HTML에서 보여줄 곳 
    })

    //원하는 위치 xy 찾기click event
    // map.on('click', function(e){
        // console.log(e.coordinate);//클릭된 좌표 값 가져온후 map center value에 삽입
    // })
}
