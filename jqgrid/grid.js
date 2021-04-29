//그리드에 들어갈 데이터
const mydata = [
    {
        col1: "내용1",
        col2: "내용1"
    },
    {
        col1: "내용2",
        col2: "내용2"
    },
    {
        col1: '연습',
        col2: '연습2',
    },

    {
        col1: '연습',
        col2: '연습2',
    },

    {
        col1: '연습',
        col2: '연습2',
    }
];

$(function () {
    $("#list").jqGrid({
        datatype: "local", //data를 생성해서 넣어주기 때문에 local    ex) xml json jsonp array xmlstring jsonstring script function (…)

        height: 'auto', //높이

        width: 500, //넓이

        colNames: ['컬럼1', '컬럼2'],

        colModel: [
            {
                name: 'col1',
                index: 'col1',
                align: 'center',
            },

            {
                name: 'col2',
                index: 'col2',
                align: 'center',
            },
        ],

        data: mydata, //배열 설정

        caption: "jqGrid 연습", //표 제목

        pager: '#pager', // Uncaught TypeError: Cannot read property 'integer' of undefined 로케일 설정 해줘야함. grid.locale-kr.js 파일 가져와야함.

        loadtext: "로딩중!", // 표 로딩중에 표시되는 텍스트

        rowNum: 3, //자료 몇개 단위로 볼건지
        
        rowList: [1, 2, 3, 4, 5], //페이지 몇개씩 보기
    }
    );
})