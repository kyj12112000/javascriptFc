window.onload = init; //window가 load가 완료 되면 *
//6-5들어야함
function init() {
    const map = new ol.Map({
        //view 필요함 map을 나타냄
        view: new ol.View({
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
            center: [-66015000.31392895, 4518186.984380003], //x,y
            //ceter 오른페이어스는 경도 위도 순서 입력 -[lon,lat]
            zoom: 7, //zoom level //지정된 부분 확대 level
            maxZoom: 10, //확대시 맥시멈
            minZoom: 4, //축소시 미니멈
            // rotation: 0.5//회전 되어서 보여주는..?

        }),
        // 아래에 레이어 제공 없을 경우 아래처럼 기본
        // layers: [
        //     new ol.layer.Tile({
        //         source: new ol.source.OSM() //source는 이 레이어이 필수 소스 osm은 타일서버의 레이어 소스
        //     })
        // ],

        target: 'js-map' //HTML에서 보여줄 곳 
    })

    //Basemaps Layers


    //아래는 레이어 별 필요한 목록 
    const openStreetMapStandard = new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true,
        title: 'OSMStandard'
    })

    //http://maps.stamen.com/#toner/12/37.7706/-122.3782 stamen 에서 url 제공
    const openStreetMapHumanitarian = new ol.layer.Tile({
        //기본 제공 타일은 url 지정이 필요 없지만 특정한 레이어를 가져올때는 필요
        source: new ol.source.OSM({
            url: 'https://{a-c}.tile.openstreetmap.fr/hot{z}/{x}/{y}.png'
        }),
        visible: false,
        title: 'OSMHumanitarian'
    })

    const stamenTerrian = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
            //attributions 는 사용하는 tile에 맞게 가져옴 stamen 사이트에서
            attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        }),
        visible: false,
        title: 'StamenTerrian'
    })

    // layer Group
    const baseLayerGroup = new ol.layer.Group({
        layers: [openStreetMapStandard, openStreetMapHumanitarian, stamenTerrian]
    })
    map.addLayer(baseLayerGroup);

    //Layer Switcher Logic for Basemaps radio키로 지도 변환//sidebar에 있는 input중 type이 raio인 자식
    const baseLayerElements = document.querySelectorAll('.sidebar > input[type=radio]');
    // console.log(baseLayerElements);
    for (let baseLayerElement of baseLayerElements) {
        // console.log(baseLayerElement);
        baseLayerElement.addEventListener('change', function () {
            // console.log(this.value);
            let baseLayerElementValue = this.value;
            //ol.layer.Group에 있는 api 중 foreach를 이용하여 layer를 받아옴
            baseLayerGroup.getLayers().forEach(function (element, index, array) {
                // console.log(element); //title 확인 가능
                let baseLayerTitle = element.get('title');
                //title과 value 값을 비교한 값을 setVisible에 대입 click시 대조하여 visible ture인 것을 표시 
                element.setVisible(baseLayerTitle === baseLayerElementValue);
                // console.log('baseLayerTitle: '+baseLayerTitle, 'baseLayerTitle: '+ baseLayerTitle)
                // console.log(baseLayerTitle === baseLayerElementValue);
                console.log(element.get('title'), element.get('visible'));
            });
        })
    }

    //vector Layer
    const EUCountriesGeoJSON = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url:
        })
    })

}