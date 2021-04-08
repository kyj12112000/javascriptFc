window.onload = init;//window가 load가 완료 되면 *
//6-5들어야함
function init(){
    const map = new ol.Map({
        //view 필요함 map을 나타냄
        view : new ol.View({
            /* projection : 'EPSG:4326'; //경도 위도러 변경해줌
            [전지구좌표계]
            WGS84 경위도 : GPS가 사용하는 좌표계 
            - EPSG:4326,EPSG:4166(KOREAN1995)
            Bessel 1841 경위도: 한국과 일본에 잘 맞는 지역타원체를 사용한 좌계 
            - EPSG:4004, EPSG:4162 (Korean 1985)
            GRS80 경위도: WGS84와 거의 유사
            - EPSG:4019, EPSG:4737 (Korean 2000)
            Google Mercator: 구글지도/빙지도/야후지도/OSM 등 에서 사용중인 좌표계
            - EPSG:3857(공식), EPSG:900913(통칭)          
            */
            center : [-66015000.31392895,4518186.984380003], //x,y
            //ceter 오른페이어스는 경도 위도 순서 입력 -[lon,lat]
            zoom : 7, //zoom level //지정된 부분 확대 level
            maxZoom : 10, //확대시 맥시멈
            minZoom : 4, //축소시 미니멈
            // rotation: 0.5//회전 되어서 보여주는..?

        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()  //source는 이 레이어이 필수 소스 osm은 타일서버의 레이어 소스
            })
        ],
        target: 'js-map'//HTML에서 보여줄 곳 
    })

    //원하는 위치 xy 찾기click event
    // map.on('click', function(e){
        // console.log(e.coordinate);//클릭된 좌표 값 가져온후 map center value에 삽입
    // })
}
