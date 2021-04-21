var c1 = 0; //첫번째 클릭 x값
var c2 = 0; //두번째 클릭 x값
var count = 0; //첫번째 x값 클릭과 2번째 카운팅
var data = [1, 2, 3, 1, 2, 5, -1, 7, 8, 4, 2, 1, 5, 6, 1, 3, 2, 9];
var aa,bb;

// document.addEventListener('DOMContentLoaded',()=>{
var chart = Highcharts.chart('container', {
    chart: { //chart type 설정
        // type: 'column' // 없을이 기본 선으로 됨
        // type: 'bar' 
        // type: 'scatter' 
        type: 'area',
        // zoomType: 'x', //zoomType 은 x, xy, y 축 가능
    },
    credits: { //오른쪽 하단에 highchart 링크 부분
        // enabled : false //false시 사라짐
        text: 'Kim', //text 설정해서 아래처럼 링크로 가게 할수 있음
        href: 'https://www.naver.com',
        position: { //포지션 지정 가능
            align: 'center',
            x: 500, //x좌표로 지정하여 할 수 있음
        },
        style: { //style로 fontsize 및 color 설정 가능
            fontSize: "18px",
            color: 'red'
        }
    },
    
    tooltip: {
        animation: false, // 마우스 hover 시 부드럽게 넘어가는게 아니라 딱딱 넘어감
        backgroundColor: '#333333', //hovber 시 나오는 tip 배경화면 변경 
        borderColor: 'red', //border 외부 컬러 변경
        borderRadius: '20', //border둥글기

        // followPointer: true, //포인터 위치에 값 확인

        // formatter(){ //x,y 좌표값을 tootip 에 return 에서 값 보여줌 1개 씩 //글씨 strong써서 변경가능
        //     return `<strong>X Value</strong> - ${this.x}. Y value -${this.y}`
        // },
        //shared 방법 1
        // formatter: function () { //series가 2개가있다면 2개를 같은 tooltip으로 보여줌
        //     return this.points.reduce(function (s, point) {
        //         // console.log(s+'x축 좌표'+'aa'+point);
        //         return s + '<br/>' + point.series.name + ': ' +
        //             point.y + '개';
        //     }, '<b>' + this.x + '</b>');
        // },
        //shared 방법 2
        // formatter(){
        //     let s = `<strong>X is : </strong>${this.x}`;
        //     // console.log(this);
        //     this.points.forEach(function(point){
        //         s += `<br>Y is ${point.y} - ${point.series.name}`;
        //     })
        //     return s;
        // },
        // shared: true,//tootip 두개 사용

        //split 분할하여 나타냄
        formatter: function () {
            // The first returned item is the header, subsequent items are the
            // points
            return ['<b>' + this.x + '</b>'].concat(
                this.points ?
                    this.points.map(function (point) {
                        return point.series.name + ': ' + point.y + 'm';
                    }) : []
            );
        },
        split: true,

        style: { //font style 수정
            color: '#ffffff'
        }
    },
    title: { //chart 상단에 제목 없어도 그만
        text: '제목'
    },
    // color: ['#1C110A', '#E4D6A7'],
    yAxis: { // y축 없어도 그만
        alternateGridColor : '#b7cff7', //줄 넣기
        title: { //y축 제목
            text: 'y축'
        }
    },
    xAxis: { //x축 설정
        categories: ['Apple', 'Banana', 'Orange'] //categories는 x축 이름
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            events: {
                click: function (event) { //click이벤트 옵션
                    
                    // hs.htmlExpand(null, { //tooltip 팝업창 하는 방법
                    //     pageOrigin: {
                    //         x: event.pageX || event.clientX,
                    //         y: event.pageY || event.clientY
                    //     },
                    //     headingText: 'aaaa',
                    //     maincontentText: event.point.x + ':<br/> ' +
                    //         event.point.y + ' sessions',
                    //     width: 200
                    // });
                    if (count === 0) { //첫번째 클릭
                        c1 = event.point.x; //x좌표값 c1 대입
                        console.log(c1);
                        count++;
                        // console.log(count);
                        //  aa = event.point;
                        //  aa.color = 'red';
                    } else if (count === 1) { //2번째 클릭
                        c2 = event.point.x; //2번쨰 x좌표값 
                        console.log(c2);
                        chart.xAxis[0].setExtremes(c1, c2); //c1과 c2 사이 좌표값 확대
                        // console.log(event.point);
                        // bb = event.point.color = 'red';
                        Highcharts.setOptions({ //reset 버튼으로 다시 zoomout해줌
                            lang: { //줌 버튼 이름
                                resetZoom: '리셋'
                            }
                        });
                        chart.showResetZoom(); //리셋 버튼 보여짐
                        count = 0;
                        c1 = 0;
                        c2 = 0;

                    }

                },

            }
        }
    },
    series: [{
            name: 'John', //선 이름
            data: data, //data 
            negativeColor : 'red',//만약 - 값이면 relcolor가 됨

        },
        {
            name: 'Jane',
            data: [2, 4, 8]
        }
    ]
})


document.getElementById('button').addEventListener('click', () => {
    chart.xAxis[0].setExtremes(c1, data.length - 1); //이건 외부버튼
});

